using Hospital_Menagment_System.Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        public PersonsServices _personsService;

        public PersonsController(PersonsServices personsService)
        {
            _personsService = personsService;

        }

        [HttpGet("get-all-perosns")]
        public IActionResult GetAllPersons()
        {
            var allPerons= _personsService.GetAllPersons();
            return Ok(allPerons);
        }

        [HttpGet("get-persons-by-id/{id}")]
        public IActionResult GetPersonById(int id)
        {
            var person = _personsService.GetPersonById(id);
            return Ok(person);
        }
        [HttpPost("add-Person")]
        public IActionResult AddPerosn([FromBody]PersonVM person)
        {
            _personsService.AddPerosn(person);
            return Ok();
        }

        [HttpPut("update-person-by-id/{id}")]
        public IActionResult UpdatePersonById(int id, [FromBody]PersonVM person)
        {
            var updatePerson=_personsService.UpdatePersonById(id, person);
            return Ok(updatePerson);    
        }

        [HttpDelete("delete-person-by-id/{id}")]
        public IActionResult DeletePersonById(int id) { 
            _personsService.DeletePersonById(id); 
            return Ok();    
            
            
        }
    }
}
