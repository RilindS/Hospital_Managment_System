using System.Security.Claims;
using Hospital_Management_System.Data.Models;
using Hospital_Menagment_System.Data;
using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private PatientService _patientService;
        private CityServices _cityService;
        private readonly AppDbContext _context;

        public PatientsController(AppDbContext context,PatientService patientService, CityServices cityService)
        {
            _patientService = patientService;
            _cityService = cityService;
            _context = context;
        }
        [HttpGet("get-patients-by-city/{cityName}")]
        public IActionResult GetPatientsByCity(string cityName)
        {
            try
            {
                var patients = _patientService.GetPatientsByCity(cityName);
                return Ok(patients);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("current")]
        public async Task<ActionResult<Patient>> GetCurrentPatient()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var patient = await _context.Patients.FirstOrDefaultAsync(p => p.UserId == userId);

            if (patient == null)
            {
                return NotFound("Patient not found");
            }

            return Ok(patient);
        }



        [HttpPost("add-Patient")]
        public IActionResult AddPatient([FromBody] PatientVM patient)
        {
            try
            {
                _patientService.AddPatient(patient);
                return Ok("Patient added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            /*catch (Exception)
            {
                return StatusCode(500, "An error occurred while processing your request.");
            }*/
        }

        
        [HttpGet("get-all-patient")]
        public IActionResult GetAllPatient()
        {
            var allPatient = _patientService.GetAllPatient();
            return Ok(allPatient);
        }

        [HttpGet("get-patient-by-id/{id}")]
        public IActionResult GetPatientById(int id)
        {
            var patient = _patientService.GetPatientById(id);
            return Ok(patient);
        }

        [HttpPut("update-patient-by-id/{id}")]
        public IActionResult UpdatePatientById(int id, [FromBody] PatientVM patient)
        {
            var updatePatient = _patientService.UpdatePatientById(id, patient);
            return Ok(updatePatient);
        }

        [HttpDelete("delete-patient-by-id/{id}")]
        public IActionResult DeletePatientById(int id)
        {
            _patientService.DeletePatientById(id);
            return Ok();
        }
    }
}
