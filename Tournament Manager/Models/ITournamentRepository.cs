using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public interface ITournamentRepository
    {
        Tournament GetTournament(int id);
        IEnumerable<Tournament> GetAllTournaments();
        List<Tournament> GetSearchedTournament(string keyword);
        void Add(Tournament tournament);
        void DeleteTournament(int id);
    }
}
