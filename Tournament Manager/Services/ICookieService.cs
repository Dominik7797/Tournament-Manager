using Microsoft.AspNetCore.Http;

namespace Tournament_Manager.Services
{
    public interface ICookieService
    {
        void CreateCookie(string username, HttpContext context);
        void Logout(HttpContext context);
        string GetCookieData(HttpContext context);
    }
}
