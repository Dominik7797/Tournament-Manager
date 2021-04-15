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
        public void TestIfWeGetUserById()
        {
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
    }
}
