using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using Tournament_Manager.Models;
using Tournament_Manager.Services;

namespace Tournament_Manager.Controllers
{
    [Route("/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUsersRepository _usersRepository;
        private readonly IHashService _hashService;
        private readonly ILoginService _loginService;

        public AuthController(IUsersRepository usersRepository, IHashService hashService, ILoginService loginService)
        {
            _usersRepository = usersRepository;
            _hashService = hashService;
            _loginService = loginService;
        }

        [HttpGet("/verify/username={username}&email={email}&password={password}")]
        public ActionResult RegisterUser(string username, string email, string password)
        {
            if (_usersRepository.VerifyUser(username, email))
            {
                var hashPassword = _hashService.Hash(password);
                CreateCookie(username);
                _usersRepository.Add(new User(username, email, hashPassword));
                return Redirect("/");
            }
            else
            {
                return StatusCode(700);
            }
        }

        [HttpGet("/getCookieData")]
        public string GetCookieData()
        {
            var user = HttpContext.User;
            return user.Identity.Name;
        }

        [HttpGet("/login/username={username}&password={password}")]
        public bool Login(string username, string password)
        {

            if (_loginService.Login(username, password))
            {
                CreateCookie(username);
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpGet("/logout")]
        public RedirectResult Logout()
        {
            HttpContext.SignOutAsync();
            return Redirect("/");
        }

        private async void CreateCookie(string username)
        {
            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name,username)
                };
            var identity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme
                );
            var principal = new ClaimsPrincipal(identity);
            var props = new AuthenticationProperties();
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, props);
        }
    }
}
