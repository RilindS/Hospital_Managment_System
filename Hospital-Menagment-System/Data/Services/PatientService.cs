﻿using Hospital_Management_System.Data.Models;
using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services
{
    public class PatientService
    {
        private AppDbContext _context;
        private readonly CityServices _cityServices;
        public PatientService(AppDbContext context, CityServices cityServices)
        {
            _cityServices = cityServices;
            _context = context;

        }
        
        public void AddPatient(PatientVM patient)
        {
            var cityId = _cityServices.GetCityIdByName(patient.Qyteti);
            if (cityId == null)
            {
                throw new ArgumentException("City name not found.");
            }

            var newPatient = new Patient
            {
                Name = patient.Name,
                Surname = patient.Surname,
                Email = patient.Email,
                PhoneNumber = patient.PhoneNumber,
                DateOfBirth = patient.DateOfBirth,
                Qyteti = patient.Qyteti,
                
                CityId = _cityServices.GetCityIdByName(patient.Qyteti), 
                //metoda GetCityIdByName e merr qytetin qe eshte zgedh ja merr Id
                //,Id na duhet tani me e shtu si foreigkey kur shtohet Pacienti ne DB
                Street = patient.Street,
                DateRegistered = DateTime.Now
            };

            _context.Patients.Add(newPatient);
            _context.SaveChanges();
        }


        public List<Patient> GetAllPatient()
        {
            var allPatient = _context.Patients.ToList();
            return allPatient;
        }
        public Patient GetPatientById(int patientId)
        {
            var allPatient = _context.Patients.FirstOrDefault(n => n.PatientId == patientId);
            return allPatient;
        }
        public Patient UpdatePatientById(int patientId, PatientVM patient)
        {
            var _patient = _context.Patients.FirstOrDefault(n => n.PatientId == patientId);

            if (_patient != null)
            {
                _patient.Name = patient.Name;
                _patient.Surname = patient.Surname;
                _patient.Email = patient.Email;
                _patient.PhoneNumber = patient.PhoneNumber;
                _patient.DateOfBirth = patient.DateOfBirth;
                _patient.Street = patient.Street;
                _patient.DateRegistered = DateTime.Now;
                _patient.Qyteti = patient.Qyteti;

                // nese esht ndrru qyteti me ja gjet prap ati qytetit te ri ID
                if (_patient.Qyteti != patient.Qyteti)
                {
                    var cityId = _cityServices.GetCityIdByName(patient.Qyteti);
                    if (cityId == null)
                    {
                        throw new ArgumentException("City name not found.");
                    }
                    _patient.CityId = cityId; // Assign the new city ID
                }

                _context.SaveChanges();
            }
            return _patient;
        }


        public void DeletePatientById(int patientId)
        {
            var _patient = _context.Patients.FirstOrDefault(n => n.PatientId == patientId);
            if (_patient != null)
            {
                _context.Patients.Remove(_patient);
                _context.SaveChanges();
            }
        }

    }

}

