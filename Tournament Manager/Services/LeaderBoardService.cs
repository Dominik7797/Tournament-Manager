using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tournament_Manager.Models;

namespace Tournament_Manager.Services
{
    public class LeaderboardService : ILeaderboardService
    {
        public List<User> GetLeaderboardByWins(IEnumerable<User> users)
        {
            return users.OrderBy(user => user.Wins).ToList();
        }
    }
}
