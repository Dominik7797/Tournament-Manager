using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tournament_Manager.Models;

namespace Tournament_Manager_Tests
{
    class AuthTests
    {

        private List<User> _usersInMemoryDatabase = new List<User>();

        [Test]
        public void TestIfWeGetUserById()
        {
            var initUser = new User(10, "Username", "Email@example.com", "password");
            _usersInMemoryDatabase.Add(initUser);

            var repository = new Mock<IUsersRepository>();

            repository.Setup(x => x.GetUser(It.IsAny<int>()))
            .Returns((int i) => _usersInMemoryDatabase.Single(n => n.Id == i));

            var userToFind = repository.Object.GetUser(10);

            Assert.AreEqual(initUser, userToFind);
            Assert.AreEqual(initUser.Name, userToFind.Name);
            try
            {
                repository.Object.GetUser(2);
                Assert.Fail();
            }
            catch (Exception)
            {
                Assert.Pass();
            }
        }

        [Test]
        public void TestIfWeGetUserGetsDeleted()
        {
            var initUser = new User(11, "Username1", "Email@example.com1", "password1");
            _usersInMemoryDatabase.Add(initUser);

            var repository = new Mock<IUsersRepository>();

            repository.Setup(x => x.DeleteUser(It.IsAny<int>()))
            .Returns((int i) => _usersInMemoryDatabase.Remove(_usersInMemoryDatabase.Single(n => n.Id == i)));

            Assert.IsTrue(repository.Object.DeleteUser(11));

        }

    }
}
