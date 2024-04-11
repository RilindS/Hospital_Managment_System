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

        public PatientsController (PatientService patientService)
        {
            _patientService = patientService;
        }

        [HttpPost("add-Patient")]
        public IActionResult AddPerosn([FromBody] PatientVM patient)
        {
            _patientService.AddPatient(patient);
            return Ok();
        }
    }
}
