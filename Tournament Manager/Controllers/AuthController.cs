using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tournament_Manager.Models;

namespace Tournament_Manager.Controllers
{
    [Route("/auth")]
    [ApiController]
    public class AuthController
    {
        private readonly IUsersRepository _usersRepository;

        public AuthController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        [HttpGet("/verify/username={username}&email={email}&password={password}")]
        public void RegisterUser(string username,string email, string password)
        {
            if (_usersRepository.VerifyUser(username, email))
            {
                _usersRepository.Add(new User(username, email, password));
            }
        }
    }
}
