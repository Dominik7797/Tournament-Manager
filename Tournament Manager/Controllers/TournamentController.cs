using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tournament_Manager.Models;
using Tournament_Manager.Services;

namespace Tournament_Manager.Controllers
{
    [Route("/tournamentApi")]
    [ApiController]
    public class TournamentController : ControllerBase
    {
        private ITournamentManagerRepository _tournamentManagerRepository;
        private ITournamentRepository _tournamentRepository;
        private IUsersRepository _usersRepository;
        private ILeaderboardService _leaderboardService;

        public TournamentController(ITournamentManagerRepository tournamentManagerRepository, ITournamentRepository tournamentRepository, IUsersRepository usersRepository,
            ILeaderboardService leaderboardService)
        {
            _tournamentManagerRepository = tournamentManagerRepository;
            _tournamentRepository = tournamentRepository;
            _usersRepository = usersRepository;
            _leaderboardService = leaderboardService;
        }

        [HttpGet]
        public IEnumerable<Tournament> GetTournaments()
        {
            return _tournamentRepository.GetAllTournaments();
        }

        [HttpPost("/Tournament-create/tournamentName={tName}&tsize={tSize}&ttsize={tTSize}&password={password}&applytime={applyTime}&type={type}")]
        public StatusCodeResult CreateTournament(string tname, string tSize, string tTSize, string password, string applyTime, string type)
        {
            Console.WriteLine(tname);

            try
            {
                Tournament tournament = new Tournament(tname, int.Parse(tSize), int.Parse(tTSize), password, DateTime.Parse(applyTime), type);
                _tournamentRepository.Add(tournament);
                return StatusCode(204);
            }
            catch (Exception)
            {
                return StatusCode(400);
            }
            
            
        }

        [HttpGet("/contestants/{id}")]
        public IEnumerable<User> GetContestants(string id)
        {
            return _tournamentManagerRepository.GetTournamentContestants(int.Parse(id));
        }

        [HttpGet("/tournament/{id}")]
        public Tournament GetTournamentById(string id)
        {
            return _tournamentRepository.GetTournament(int.Parse(id));
        }

        [HttpGet("/leaderboardContext")]
        public IEnumerable<User> GetLeaderboards()
        {
            return _leaderboardService.GetLeaderboardByWins(_usersRepository.GetAllUsers());
        }

    }
}
