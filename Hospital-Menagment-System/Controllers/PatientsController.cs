using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private PatientService _patientService;
        private CityServices _cityService;

        public PatientsController(PatientService patientService, CityServices cityService)
        {
            _patientService = patientService;
            _cityService = cityService;
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
