using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public class SQLTournamentManagerRepository : ITournamentManagerRepository
    {
        private TournamentContext _context;
        private UserContext _userContext;

        public SQLTournamentManagerRepository(TournamentContext context, UserContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        public IEnumerable<User> GetTournamentContestants(int id)
        {
            var contestants = new List<User>();

            foreach (var user in _userContext.Users)
            {
                if (user.TournamentId == id)
                {
                    contestants.Add(user);
                }
            }

            return contestants;
        }
    }
}
