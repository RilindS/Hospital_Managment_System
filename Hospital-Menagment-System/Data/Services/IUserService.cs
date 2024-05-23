using System.Threading.Tasks;
using Hospital_Menagment_System.Data.Models;


namespace Hospital_Menagment_System.Data.Services;


public interface IUserService
{
    Task<string> Authenticate(string username, string password);
    Task Register(User user);
}