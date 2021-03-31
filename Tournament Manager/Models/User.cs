using System.ComponentModel.DataAnnotations;

namespace Tournament_Manager.Models
{
    public class User
    {
        public User(string name, string email, string password)
        {
            Name = name;
            Email = email;
            Password = password;
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int TournamentId { get; set; }
        public int Wins { get; set; }
        public int PlayedTournaments { get; set; }
    }
}
