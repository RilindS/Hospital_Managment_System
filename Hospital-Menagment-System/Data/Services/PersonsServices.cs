using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;
using System.Data;
using System.IO;

namespace Hospital_Menagment_System.Data.Services
{
    public class PersonsServices
    {
        private AppDbContext _context;
        public PersonsServices(AppDbContext context)
        {

            _context = context;

        }
        public void AddPerosn(PersonVM peron)
        {
            var _perosn = new Person()
            {
                Name = peron.Name,
                Surname = peron.Surname,
                Email = peron.Email,
                Role = peron.Role,
                PhoneNumber = peron.PhoneNumber,
                DateOfBirth = peron.DateOfBirth,
                City = peron.City,
                Street = peron.Street,
                DateRegistered = DateTime.Now


            };
            _context.Persons.Add(_perosn);
            _context.SaveChanges();


        }
    
    public List<Person> GetAllPersons()
        {
            var allPersons=_context.Persons.ToList();  
            return allPersons;
        }
        public Person GetPersonById(int peronId)
        {
            var allPersons = _context.Persons.FirstOrDefault(n=> n.UserId == peronId);
            return allPersons;
        }

        public Person UpdatePersonById(int personId,PersonVM person)
        {
            var _person = _context.Persons.FirstOrDefault(n => n.UserId == personId);
                
                if (_person != null) {
                    _person.Name = person.Name;
                    _person.Surname = person.Surname;
                    _person.Email = person.Email;
                    _person.Role = person.Role;
                    _person.PhoneNumber = person.PhoneNumber;
                    _person.DateOfBirth = person.DateOfBirth;
                    _person.City = person.City;
                    _person.Street = person.Street;
                    _person.DateRegistered = DateTime.Now;

                _context.SaveChanges();
                }
            return _person;
        }
        public void DeletePersonById(int personId)
        {
            var _person = _context.Persons.FirstOrDefault(n => n.UserId == personId);
            if (_person != null) { 
                _context.Persons.Remove(_person);
                _context.SaveChanges();
            }
        }

    }
}
