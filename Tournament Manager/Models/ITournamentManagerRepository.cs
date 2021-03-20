using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public interface ITournamentManagerRepository
    {
        IEnumerable<User> GetTournamentContestants(int tournamentId);
    }
}
