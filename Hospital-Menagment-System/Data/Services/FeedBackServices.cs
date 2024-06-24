using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;

public class FeedBackServices
{
    private readonly AppDbContext _context;

    public FeedBackServices(AppDbContext context)
    {
        _context = context;
    }

    public List<FeedBack> GetAllFeedBacks()
    {
        return _context.FeedBacks.ToList();
    }

    public FeedBack GetFeedBackById(int feedBackId)
    {
        return _context.FeedBacks.FirstOrDefault(n => n.FeedBackId == feedBackId);
    }

    public void AddFeedBack(FeedBackVM feedBack)
    {
        var newFeedBack = new FeedBack()
        {
            Comment = feedBack.Comment,
            DoctorName = feedBack.DoctorName,
            Rating = feedBack.Rating
        };

        _context.FeedBacks.Add(newFeedBack);
        _context.SaveChanges();
    }

    public FeedBack UpdateFeedBackById(int feedBackId, FeedBackVM feedBack)
    {
        var _feedback = _context.FeedBacks.FirstOrDefault(n => n.FeedBackId == feedBackId);

        if (_feedback != null)
        {
            _feedback.Comment = feedBack.Comment;
            _feedback.DoctorName = feedBack.DoctorName;
            _feedback.Rating = feedBack.Rating;

            _context.SaveChanges();
        }

        return _feedback;
    }

    public void DeleteFeedBackById(int feedBackId)
    {
        var _feedback = _context.FeedBacks.FirstOrDefault(n => n.FeedBackId == feedBackId);
        if (_feedback != null)
        {
            _context.FeedBacks.Remove(_feedback);
            _context.SaveChanges();
        }
    }
}