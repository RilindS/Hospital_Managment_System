using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.DTOs;
using Microsoft.AspNetCore.Authorization;

namespace Hospital_Menagment_System.Controllers
{
    
    
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateRequest model)
        {
            var token = await _userService.Authenticate(model.Username, model.Password);
            if (token == null)
                return Unauthorized();

            return Ok(new { Token = token });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            await _userService.Register(user);
            return Ok();
        }
    }
}
