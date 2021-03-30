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

        public AuthController(IUsersRepository usersRepository, IHashService hashService)
        {
            _usersRepository = usersRepository;
            _hashService = hashService;
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
    }
}
