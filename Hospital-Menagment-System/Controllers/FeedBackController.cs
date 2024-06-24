using Hospital_Menagment_System.Data;
using Hospital_Menagment_System.Data.Services;
using Hospital_Menagment_System.Data.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Menagment_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedBackController : ControllerBase
    {
        private readonly FeedBackServices _feedBackServices;

        public FeedBackController(FeedBackServices feedBackServices)
        {
            _feedBackServices = feedBackServices;
        }

        [HttpGet("get-all-feedbacks")]
        public IActionResult GetAllFeedBacks()
        {
            var allFeedBacks = _feedBackServices.GetAllFeedBacks();
            return Ok(allFeedBacks);
        }

        [HttpGet("get-feedback-by-id/{id}")]
        public IActionResult GetFeedBackById(int id)
        {
            var feedBack = _feedBackServices.GetFeedBackById(id);
            return Ok(feedBack);
        }

        [HttpPost("add-feedback")]
        public IActionResult AddFeedBack([FromBody] FeedBackVM feedBack)
        {
            try
            {
                _feedBackServices.AddFeedBack(feedBack);
                return Ok("Feedback added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update-feedback-by-id/{id}")]
        public IActionResult UpdateFeedBackById(int id, [FromBody] FeedBackVM feedBack)
        {
            var updatedFeedBack = _feedBackServices.UpdateFeedBackById(id, feedBack);
            return Ok(updatedFeedBack);
        }

        [HttpDelete("delete-feedback-by-id/{id}")]
        public IActionResult DeleteFeedBackById(int id)
        {
            _feedBackServices.DeleteFeedBackById(id);
            return Ok();
        }
    }
}