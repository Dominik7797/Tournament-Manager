using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public void RegisterUser(string username,string email, string password)
        {
            if (_usersRepository.VerifyUser(username, email))
            {
                var hashPassword = _hashService.Hash(password);
                _usersRepository.Add(new User(username, email, hashPassword));
            }
        }

        [HttpGet("/login/username={username}&password={password}")]
        public bool LoginUser(string username, string password)
        {
            if (_loginService.Login(username,password))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
