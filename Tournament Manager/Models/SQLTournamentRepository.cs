using System;
using System.Collections.Generic;
using System.Linq;

namespace Tournament_Manager.Models
{
    public class SQLTournamentRepository : ITournamentRepository
    {
        private TournamentContext _context;

        public SQLTournamentRepository(TournamentContext context)
        {
            _context = context;
        }

        public void Add(Tournament tournament)
        {
            if (!_context.Tournaments.Contains(tournament))
            {
                _context.Tournaments.Add(tournament);
                _context.SaveChanges();
            }
        }

        public void DeleteTournament(int id)
        {
            var tournamentToDelete = _context.Tournaments.Find(id);

            if (tournamentToDelete != null)
            {
                _context.Tournaments.Remove(tournamentToDelete);
                _context.SaveChanges();
            }
        }

        public IEnumerable<Tournament> GetAllTournaments()
        {
            return _context.Tournaments;
        }

        public List<Tournament> GetSearchedTournament(string keyword)
        {
            var result = new List<Tournament>();

            foreach (var tournament in _context.Tournaments)
            {
                if (tournament.Name.ToLower() == keyword.ToLower())
                {
                    result.Add(tournament);
                }
            }

            return result;
        }

        public Tournament GetTournament(int id)
        {
            return _context.Tournaments.Find(id);
        }
    }
}
