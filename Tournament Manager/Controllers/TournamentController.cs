﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tournament_Manager.Models;

namespace Tournament_Manager.Controllers
{
    [Route("/tournamentApi")]
    [ApiController]
    public class TournamentController : ControllerBase
    {
        private ITournamentManagerRepository _tournamentManagerRepository;
        private ITournamentRepository _tournamentRepository;

        public TournamentController(ITournamentManagerRepository tournamentManagerRepository, ITournamentRepository tournamentRepository)
        {
            _tournamentManagerRepository = tournamentManagerRepository;
            _tournamentRepository = tournamentRepository;
        }

        [HttpGet]
        public IEnumerable<Tournament> GetTournaments()
        {
            return _tournamentRepository.GetAllTournaments();
        }
    }
}