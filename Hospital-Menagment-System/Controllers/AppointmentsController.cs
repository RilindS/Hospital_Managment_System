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
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
/*
        [HttpPost]
        public async Task<ActionResult<Appointment>> PostAppointment(Appointment appointment)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var patient = await _context.Patients.FirstOrDefaultAsync(p => p.UserId == userId);

            if (patient == null)
            {
                return NotFound("Patient not found");
            }

            var doctor = await _context.Doctors.FirstOrDefaultAsync(d => d.DoctorId == appointment.DoctorId);

            if (doctor == null)
            {
                return NotFound("Doctor not found");
            }

            appointment.PatientId = patient.PatientId;
            appointment.PatientName = patient.Name;
            appointment.PatientEmail = patient.Email;
            appointment.DoctorName = doctor.DoctorName;

            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAppointment), new { id = appointment.AppointmentId }, appointment);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            return appointment;
        }*/
    }
}
