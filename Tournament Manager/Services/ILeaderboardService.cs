using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tournament_Manager.Models;

namespace Tournament_Manager.Services
{
    public interface ILeaderboardService
    {
        List<User> GetLeaderboardByWins(IEnumerable<User> users);
    }
}
