using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Security.Claims;

namespace Tournament_Manager.Services
{
    public class CookieService : ICookieService
    {
        public async void CreateCookie(string username, HttpContext context)
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
            await context.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, props);
        }

        public void Logout(HttpContext context)
        {
            context.SignOutAsync();
        }

        public string GetCookieData(HttpContext context)
        {
            return context.User.Identity.Name;
        }
    }
}
