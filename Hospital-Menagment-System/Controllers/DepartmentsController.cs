using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private DepartmentServices _departmentService;

        public DepartmentsController (DepartmentServices departmentService)
        {
            _departmentService = departmentService;
        }

        [HttpPost("add-department")]
        public IActionResult AddDepartment([FromBody] DepartmentVM department)
        {
            _departmentService.AddPatient(department);
            return Ok();
        }
        [HttpGet("get-all-department")]
        public IActionResult GetAllDepartment()
        {
            var allDepartment = _departmentService.GetAllDepartment();
            return Ok(allDepartment);
        }


        [HttpGet("get-department-by-id/{id}")]
        public IActionResult GetDepartmentById(int id)
        {
            var department = _departmentService.GetDepartmentById(id);
            return Ok(department);
        }
        

        [HttpPut("update-department-by-id/{id}")]
        public IActionResult UpdateDepartmentById(int id, [FromBody] DepartmentVM department)
        {
            var updateDepartment = _departmentService.UpdateDepartmentById(id, department);
            return Ok(updateDepartment);
        }

        [HttpDelete("delete-department-by-id/{id}")]
        public IActionResult DeleteDepartmentById(int id)
        {
            _departmentService.DeleteDepartmentById(id);
            return Ok();


        }
    }
    
}
