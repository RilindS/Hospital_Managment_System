using Hospital_Menagment_System.Data;
using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacationController : ControllerBase
    {


        private readonly VacationServices _vacationServices;
        private readonly AppDbContext _context;
        
        public VacationController(AppDbContext context, VacationServices vacationServices)                          
        {
            _context = context;
            _vacationServices=vacationServices;

        }
        [HttpGet("get-vacation-by-doctorname-vertetimi-true/{doctorName}")]
        public IActionResult GetVacationByDoctorNameAndVertetimi(string doctorName)
        {
            var vacations = _vacationServices.GetVacationByDoctorNameAndVertetimi(doctorName, true);
            return Ok(vacations);
        }

        
        [HttpGet("get-vacation-aprovimi-true")]
        public IActionResult GetVacationByaprovimiStatusTrue()
        {
            var paidInventories = _vacationServices.GetVacationByaprovimiStatus(true);
            return Ok(paidInventories);
        }
        [HttpGet("get-vacation-aprovimi-false")]
        public IActionResult GetVacationByaprovimiStatusFalse()
        {
            var paidInventories = _vacationServices.GetVacationByaprovimiStatus(false);
            return Ok(paidInventories);
        }

        

        [HttpPost("add-vacation")]
        public IActionResult AddVacation([FromBody] VacationVM vacation)        
        {
            try
            {
                _vacationServices.AddVacation(vacation);
                return Ok("Inventory added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-all-vacations")]
        public IActionResult GetAllVacation()
        { 
            var allAppointments = _vacationServices.GetAllVacation();
            return Ok(allAppointments);
        }

        [HttpGet("get-vacation-by-id/{id}")]
        public IActionResult GetVacationById(int id)
        {
            var appointment = _vacationServices.GetVacationById(id);
            return Ok(appointment);
        }

        [HttpPut("update-vacation-by-id/{id}")]
        public IActionResult UpdateVacationById(int id, [FromBody] VacationVM vacation)     
        {
            var updatedAppointment = _vacationServices.UpdateVacationById(id,vacation);
            return Ok(updatedAppointment);
        }

        [HttpDelete("delete-vacation-by-id/{id}")]
        public IActionResult DeleteVacationById(int id)
        {
            _vacationServices.DeleteVacationById(id);
            return Ok();
        }
    }
}

