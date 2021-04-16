using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tournament_Manager.Models;

namespace Tournament_Manager_Tests
{
    class TournamentTests
    {
        private List<Tournament> _tournamentInMemory = new List<Tournament>();

        [Test]
        public void TestIfWeGetTournamentById()
        {
            _tournamentInMemory.Clear();
            var initTournament = new Tournament(20,"testT",16,2,"none",new DateTime(2020,03,03), "Tennis");
            _tournamentInMemory.Add(initTournament);

            var repository = new Mock<ITournamentRepository>();

            repository.Setup(x => x.GetTournament(It.IsAny<int>()))
            .Returns((int i) => _tournamentInMemory.Single(n => n.Id == i));

            var tournamentToFind = repository.Object.GetTournament(20);

            Assert.AreEqual(initTournament, tournamentToFind);
            Assert.AreEqual(initTournament.Name, tournamentToFind.Name);
            try
            {
                repository.Object.GetTournament(2);
                Assert.Fail();
            }
            catch (Exception)
            {
                Assert.Pass();
            }
        }

        [Test]
        public void TestIfWeGetAllTournaments()
        {
            _tournamentInMemory.Clear();
            var initTournament = new Tournament(20, "testT", 16, 2, "none", new DateTime(2020, 03, 03), "Tennis");
            var initTournament2 = new Tournament(21, "testTt", 16, 2, "none", new DateTime(2020, 03, 03), "Tennis");
            var initTournament3 = new Tournament(22, "testTtt", 16, 2, "none", new DateTime(2020, 03, 03), "Tennis");
            _tournamentInMemory.Add(initTournament);
            _tournamentInMemory.Add(initTournament2);
            _tournamentInMemory.Add(initTournament3);

            var repository = new Mock<ITournamentRepository>();

            repository.Setup(x => x.GetAllTournaments())
            .Returns(_tournamentInMemory);

            var tournaments = repository.Object.GetAllTournaments();

            Assert.AreEqual(_tournamentInMemory, tournaments);
        }

        [Test]
        public void TestIfWeGetSearchedTournaments()
        {
            _tournamentInMemory.Clear();
            var initTournament = new Tournament(20, "testT", 16, 2, "none", new DateTime(2020, 03, 03), "Tennis");
            var initTournament2 = new Tournament(21, "testT", 16, 2, "none", new DateTime(2020, 03, 03), "Tennis");
            _tournamentInMemory.Add(initTournament);
            _tournamentInMemory.Add(initTournament2);

            var repository = new Mock<ITournamentRepository>();

            repository.Setup(x => x.GetSearchedTournament(It.IsAny<string>()))
            .Returns((string keyword) => _tournamentInMemory.Where(x => x.Name == keyword).ToList());

            var tournamentSearched = repository.Object.GetSearchedTournament("testT");

            Assert.AreEqual(_tournamentInMemory, tournamentSearched);
        }
    }
}
