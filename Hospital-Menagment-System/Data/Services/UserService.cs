using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Hospital_Menagment_System.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Hospital_Menagment_System.Data.Services;


    public class UserService : IUserService
    {
        private readonly AppDbContext _dbContext;
        private readonly IConfiguration _configuration;

        public UserService(AppDbContext dbcontext, IConfiguration configuration)
        {
            _dbContext = dbcontext;
            _configuration = configuration;
        }

        public async Task<string> Authenticate(string username, string password)
        {
            var user = await _dbContext.Users.SingleOrDefaultAsync(u => u.Username == username);
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.PasswordHash))
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, user.Username), new Claim(ClaimTypes.Role, user.Role) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public async Task Register(User user)
        {
            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);
            _dbContext.Users.Add(user);
            await _dbContext.SaveChangesAsync();
        }
    }

 
