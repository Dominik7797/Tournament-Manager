using Microsoft.AspNetCore.Mvc;
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

        [HttpPost("/Tournament-create/tournamentName={tName}&tsize={tSize}&ttsize={tTSize}&password={password}&applytime={applyTime}&type={type}")]
        public StatusCodeResult CreateTournament(string tname, string tSize, string tTSize, string password, string applyTime, string type)
        {
            try
            {
                var time = applyTime.Split('-');
                var dateTime = new DateTime(int.Parse(time[0]), int.Parse(time[1]), int.Parse(time[2]));
                Tournament tournament = new Tournament(tname, int.Parse(tSize), int.Parse(tTSize), password, dateTime, type);
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

    }
}
