using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;

public class RoomServices
{
      private AppDbContext _context;
      private DepartmentServices _departmentServices;
     // private RoomServices _roomServices;

          
        
        public RoomServices(AppDbContext context, DepartmentServices departmentServices)
        {
            _context = context;
          //  _roomServices = roomServices;
            _departmentServices = departmentServices;


        }
        public int GetRoomIdByName(string Room)
        {
            var city = _context.Rooms.FirstOrDefault(c => c.RoomName == Room);
            if (city != null)
            {
                return city.RoomId;
            }
            else
            {
                throw new ArgumentException("City not found", nameof(Room));
            }
        }
        
        public void AddRoom(RoomVM room)
        {
           
            var departmentId = _departmentServices.GetDepartmentIdByName(room.DepartamentName);
            if (departmentId == null)
            {
                throw new ArgumentException("department name not found.");
            }
            

            var newRoom = new Room()
            {
                RoomName  = room.RoomName,
                Description = room.Description,
                Floor = room.Floor,
                NrOfBeds = room.NrOfBeds,
              
                DepartamentName= room.DepartamentName,
                
                DepartamentId = _departmentServices.GetDepartmentIdByName(room.DepartamentName)
                
                //metoda GetCityIdByName e merr qytetin qe eshte zgedh ja merr Id
                //,Id na duhet tani me e shtu si foreigkey kur shtohet Pacienti ne DB
                
            };

            _context.Rooms.Add(newRoom);
            _context.SaveChanges();
        }


        public List<Room> GetAllRooms()
        {
            var allRoom = _context.Rooms.ToList();
            return allRoom;
        }
        public Room GetRoomById(int roomId)
        {
            var allRoom = _context.Rooms.FirstOrDefault(n => n.RoomId == roomId);
            return allRoom;
        }
        public Room UpdateRoomById(int romId, RoomVM room)
        {
            var _room = _context.Rooms.FirstOrDefault(n => n.RoomId == romId);

            if (_room != null)
            {
                 _room.RoomName = room.RoomName;
                 _room.Description = room.Description;
                 _room.Floor = room.Floor;
                 _room.NrOfBeds = room.NrOfBeds;

                 _room.DepartamentName = room.DepartamentName;

                // nese esht ndrru qyteti me ja gjet prap ati qytetit te ri ID
               
                if (_room.DepartamentName != room.DepartamentName)
                {
                    var deptid = _departmentServices.GetDepartmentIdByName(_room.DepartamentName);
                    if (deptid == null)
                    {
                        throw new ArgumentException("DepartamentName  not found.");
                    }
                    _room.DepartamentId = deptid; 
                }

                _context.SaveChanges();
            }
            return _room;
        }


        public void DeleteRoomById(int deptId)
        {
            var _room = _context.Rooms.FirstOrDefault(n => n.RoomId == deptId);
            if (_room != null)
            {
                _context.Rooms.Remove(_room);
                _context.SaveChanges();
            }
        }

}