using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public interface IUsersRepository
    {
        User GetUser(int id);
        IEnumerable<User> GetAllUsers();
        User Add(User user);
        User UpdateUserCredentials(User updatedUser);
        bool DeleteUser(int id);
        int GetWonTournaments(int id);
        int GetPlayedTournaments(int id);
        bool VerifyUser(string username, string email);

    }
}
