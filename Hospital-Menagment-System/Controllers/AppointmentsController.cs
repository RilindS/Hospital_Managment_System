using System.Globalization;
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
        private readonly DoctorServices _doctorServices;
        private readonly AppoitmentServices _appointmentServices;

        public AppointmentsController(DoctorServices doctorService, AppDbContext context, AppoitmentServices appointmentServices)
        {
            _context = context;
            _doctorServices = doctorService;
            _appointmentServices = appointmentServices;
        }
        [HttpGet("get-appointments-by-doctor/{doctorName}")]
        public IActionResult GetAppointmentsByDoctorName(string doctorName)
        {
            try
            {
                var appointments = _appointmentServices.GetAppointmentsByDoctorName(doctorName);
                return Ok(appointments);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("get-appointments-by-patient/{patinetName}")]
        public IActionResult GetAppointmentsByPatientName(string doctorName)
        {
            try
            {
                var appointments = _appointmentServices.GetAppointmentsByPatientName(doctorName);
                return Ok(appointments);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpGet("get-appointments-by-date/{date}")]
        public IActionResult GetAppointmentsByDate(string date)
        {
            DateTime parsedDate;
            if (!DateTime.TryParseExact(date, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out parsedDate))
            {
                return BadRequest("Invalid date format. Please provide a valid date.");
            }

            var appointments = _appointmentServices.GetAppointmentsByDate(parsedDate);
            return Ok(appointments);
        }

        [HttpPost("check-appointment-availability")]
        public IActionResult CheckAppointmentAvailability([FromBody] AppointmentVM appointment)
        {
            var isAvailable = _appointmentServices.CheckAppointmentAvailability(appointment);
            return Ok(new { isAvailable });
        }

        [HttpPost("add-appointments")]
        public IActionResult AddAppoitments([FromBody] AppointmentVM appointment)
        {
            try
            {
                _appointmentServices.AddAppoitment(appointment);
                return Ok("Appointment added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-all-appointments")]
        public IActionResult GetAllAppointments()
        {
            var allAppointments = _appointmentServices.GetAllAppoitment();
            return Ok(allAppointments);
        }

        [HttpGet("get-appointment-by-id/{id}")]
        public IActionResult GetAppoitmentById(int id)
        {
            var appointment = _appointmentServices.GetAppoitmentById(id);
            return Ok(appointment);
        }

        [HttpPut("update-appointment-by-id/{id}")]
        public IActionResult UpdateAppointmentById(int id, [FromBody] AppointmentVM appointment)
        {
            var updatedAppointment = _appointmentServices.UpdateAppoitmentById(id, appointment);
            return Ok(updatedAppointment);
        }

        [HttpDelete("delete-appointment-by-id/{id}")]
        public IActionResult DeleteAppointmentById(int id)
        {
            _appointmentServices.DeleteAppoitmentById(id);
            return Ok();
        }
    }
}
