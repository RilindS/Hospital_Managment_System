using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private CityServices _cityService;

        public CityController (CityServices cityServices)
        {
            _cityService = cityServices;
        }
        [HttpGet("get-City")]
        public IEnumerable<string> GetCities()
        {
            return _cityService.GetCities();
        }
        [HttpPost("add-City")]
        public IActionResult AddCity([FromBody] CityVM city)
        {
            _cityService.AddCity(city);
            return Ok();
        }
    }
}
