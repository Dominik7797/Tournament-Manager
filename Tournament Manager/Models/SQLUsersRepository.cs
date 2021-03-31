using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public class SQLUsersRepository : IUsersRepository
    {
        private readonly UserContext _context;

        public SQLUsersRepository(UserContext userContext)
        {
            _context = userContext;
        }

        public User Add(User user)
        {
            if (!_context.Users.Contains(user))
            {
                _context.Users.Add(user);
                _context.SaveChanges();
            }
            return user;
        }

        public User DeleteUser(int id)
        {
            var userToDelete = _context.Users.Find(id);

            if (userToDelete != null)
            {
                _context.Users.Remove(userToDelete);
                _context.SaveChanges();
            }
            return userToDelete;
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users;
        }

        public int GetPlayedTournaments(int id)
        {
            return _context.Users.Find(id).PlayedTournaments;
        }

        public User GetUser(int id)
        {
            return _context.Users.Find(id);
        }

        public int GetWonTournaments(int id)
        {
            return _context.Users.Find(id).Wins;
        }

        public User UpdateUserCredentials(User updatedUser)
        {
            var userToUpdate = _context.Users.Attach(updatedUser);
            userToUpdate.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return updatedUser;

        }

        public bool VerifyUser(string username, string email)
        {
            foreach (var user in _context.Users)
            {
                if (user.Email == email || user.Name == username)
                {
                    return false;
                }
            }

            return true;
        }
    }
}
