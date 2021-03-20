﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    interface IUsersRepository
    {
        User GetUser(int id);
        IEnumerable<User> GetAllUsers();
        User Add(User user);
        User UpdateUserCredentials(User updatedUser);
        User DeleteUser(int id);
        int GetWonTournaments(int id);
        int GetPlayedTournaments(int id);
    }
}