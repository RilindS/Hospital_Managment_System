using System.Security.Claims;
using Hospital_Menagment_System.Data;
using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private DoctorServices _doctorServices;
        private AppoitmentServices _appointmentServices;

        public AppointmentsController(DoctorServices  doctorService,AppDbContext context,AppoitmentServices appointmentServices )
        {
            _context = context;
            _doctorServices = doctorService;
            _appointmentServices = appointmentServices;
        }
        [HttpPost("check-appointment-availability")]
        public IActionResult CheckAppointmentAvailability([FromBody] AppointmentVM appointment)
        {
            var isAvailable = _appointmentServices.CheckAppointmentAvailability(appointment);
            return Ok(new { isAvailable });
        }
        
        [HttpPost("add-Appointments")]
        public IActionResult AddAppoitments([FromBody] AppointmentVM appointment)
        {
            try
            {
                _appointmentServices.AddAppoitment(appointment);
                return Ok("Appoitment added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
        
        
        
        [HttpGet("get-all-appointment")]
        public IActionResult GetAllAppoitment()
        {
            var allDoctor = _appointmentServices.GetAllAppoitment();
            return Ok(allDoctor);
        }

        [HttpGet("get-appointment-by-id/{id}")]
        public IActionResult GetAppoitmentById(int id)
        {
            var doctor = _appointmentServices.GetAppoitmentById(id);
            return Ok(doctor);
        }

        [HttpPut("update-appointment-by-id/{id}")]
        public IActionResult UpdateDoctorById(int id, [FromBody] AppointmentVM doctor)
        {
            var updateDoctor = _appointmentServices.UpdateAppoitmentById(id, doctor);
            return Ok(updateDoctor);
        }

        [HttpDelete("delete-appointment-by-id/{id}")]
        public IActionResult DeleteDoctorById(int id)
        {
            _appointmentServices.DeleteAppoitmentById(id);
            return Ok();
        }
    }
}
