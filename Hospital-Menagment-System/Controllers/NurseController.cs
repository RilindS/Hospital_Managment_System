using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NurseController : ControllerBase
    {


        private NurseServices _nurseServices;

        public NurseController(NurseServices nurseServices)
        {
        
            _nurseServices = nurseServices;
        }



        [HttpPost("add-Nurse")]
        public IActionResult AddNurse([FromBody] NurseVM nurse)
        {
            try
            {
                _nurseServices.AddNurse(nurse);
                return Ok("Nurse added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        
        [HttpGet("get-all-nurse")]
        public IActionResult GetAllNurse()
        {
            var allNurse = _nurseServices.GetAllNurse
                ();
            return Ok(allNurse);
        }

        [HttpGet("get-nurse-by-id/{id}")]
        public IActionResult getNurseById(int id)
        {
            var nurse = _nurseServices.GetNurseById(id);
            return Ok(nurse);
        }

        [HttpPut("update-nurse-by-id/{id}")]
        public IActionResult UpdateDoctorById(int id, [FromBody] NurseVM nurse)
        {
            var updateNurse = _nurseServices.UpdateNurseById(id, nurse);
            return Ok(updateNurse);
        }

        [HttpDelete("delete-nurse-by-id/{id}")]
        public IActionResult DeleteNurseById(int id)
        {
            _nurseServices.DeleteNurseById(id);
            return Ok();
        }
    }
    }

