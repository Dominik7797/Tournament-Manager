using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public class Tournament
    {
        public Tournament(string name, int size, int braketSize, string password, DateTime startDate, string tournamentType)
        {
            Name = name;
            Size = size;
            BraketSize = braketSize;
            Password = password;
            StartDate = startDate;
            TournamentType = tournamentType;
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Size { get; set; }
        public int BraketSize { get; set; }
        public string Password { get; set; }
        public string TournamentType { get; set; }
        public DateTime StartDate { get; set; }
    }
}
