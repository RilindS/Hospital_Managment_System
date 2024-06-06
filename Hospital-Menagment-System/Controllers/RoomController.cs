using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private DoctorServices _doctorServices;
        private RoomServices _roomServices;

        public RoomController(DoctorServices doctorService,RoomServices roomServices)
        {
            _doctorServices = doctorService;
            _roomServices = roomServices;
        }

        [HttpGet("get-rommName")]
        public IEnumerable<string> GetRoomName()
        
        {
            return _roomServices.GetRoomName();
        }

        [HttpPost("add-Room")]
        public IActionResult AddDoctor([FromBody] RoomVM room)
        {
            try
            {
                _roomServices.AddRoom(room);
                return Ok("Room added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        
        [HttpGet("get-all-room")]
        public IActionResult GetAllRoom()
        {
            var allRoom = _roomServices.GetAllRooms();
            return Ok(allRoom);
        }

        [HttpGet("get-room-by-id/{id}")]
        public IActionResult GetRoomById(int id)
        {
            var doctor = _roomServices.GetRoomById(id);
            return Ok(doctor);
        }

        [HttpPut("update-room-by-id/{id}")]
        public IActionResult UpdateRoomById(int id, [FromBody] RoomVM room)
        {
            var updateDoctor = _roomServices.UpdateRoomById(id, room);
            return Ok(updateDoctor);
        }

        [HttpDelete("delete-room-by-id/{id}")]
        public IActionResult DeleteRoomById(int id)
        {
            _roomServices.DeleteRoomById(id);
            return Ok();
        }
    
    }
}
