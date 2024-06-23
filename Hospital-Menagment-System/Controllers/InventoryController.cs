using Hospital_Menagment_System.Data;
using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {


        private readonly InventoryServices _inventoryServices;
        private readonly AppDbContext _context;

        public InventoryController(AppDbContext context, InventoryServices inventoryServices)
        {
            _context = context;
            _inventoryServices = inventoryServices;
        }

        [HttpPost("add-inventory")]
        public IActionResult AddInventory([FromBody] InventoryVM inventory)
        {
            try
            {
                _inventoryServices.AddInventory(inventory);
                return Ok("Inventory added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-all-inventorys")]
        public IActionResult GetAllInventorys()
        {
            var allAppointments = _inventoryServices.GetAllInventory();
            return Ok(allAppointments);
        }

        [HttpGet("get-inventory-by-id/{id}")]
        public IActionResult GetInventoryById(int id)
        {
            var appointment = _inventoryServices.GetInventoryById(id);
            return Ok(appointment);
        }

        [HttpPut("update-inventory-by-id/{id}")]
        public IActionResult UpdateInventoryById(int id, [FromBody] InventoryUpdateVM inventory)
        {
            var updatedAppointment = _inventoryServices.UpdateInventoryById(id, inventory);
            return Ok(updatedAppointment);
        }

        [HttpDelete("delete-inventory-by-id/{id}")]
        public IActionResult DeleteInventoryById(int id)
        {
            _inventoryServices.DeleteInventoryById(id);
            return Ok();
        }
    }
}

