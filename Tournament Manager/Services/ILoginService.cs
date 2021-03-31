using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Services
{
    public interface ILoginService
    {
        bool Login(string username, string password);
    }
}
