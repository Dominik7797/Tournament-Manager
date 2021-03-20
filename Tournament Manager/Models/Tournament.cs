using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public class Tournament
    {
        public string Name { get; set; }
        public int Size { get; set; }
        public int BraketSize { get; set; }
        public string Password { get; set; }
        public DateTime StartDate { get; set; }
        public List<string> Contestants { get; set; }
    }
}
