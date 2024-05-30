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
    public class DoctorController : ControllerBase
    {
        private DoctorServices _doctorServices;
        private CityServices _cityService;
        private DepartmentServices _departmentServices;
        private readonly AppDbContext _context;

        public DoctorController(AppDbContext context,DoctorServices doctorService, CityServices cityService,DepartmentServices departmentServices)
        {
            _doctorServices = doctorService;
            _cityService = cityService;
            _departmentServices = departmentServices;
            _context = context;
        }



        [HttpPost("add-Doctor")]
        public IActionResult AddDoctor([FromBody] DoctorVM doctor)
        {
            try
            {
                _doctorServices.AddDoctor(doctor);
                return Ok("Doctor added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
        
        [HttpGet("get-all-doctors")]
        public IEnumerable<string> GetDoctorName()
        {
            return _doctorServices.GetDoctorName();
        }

        
        [HttpGet("get-all-doctor")]
        public IActionResult GetAllDoctor()
        {
            var allDoctor = _doctorServices.GetAllDoctor();
            return Ok(allDoctor);
        }

        [HttpGet("get-doctor-by-id/{id}")]
        public IActionResult GetDoctorById(int id)
        {
            var doctor = _doctorServices.GetDoctorById(id);
            return Ok(doctor);
        }

        [HttpPut("update-doctor-by-id/{id}")]
        public IActionResult UpdateDoctorById(int id, [FromBody] DoctorVM doctor)
        {
            var updateDoctor = _doctorServices.UpdateDoctorById(id, doctor);
            return Ok(updateDoctor);
        }

        [HttpDelete("delete-doctor-by-id/{id}")]
        public IActionResult DeleteDoctorById(int id)
        {
            _doctorServices.DeleteDoctorById(id);
            return Ok();
        }
    }
}
