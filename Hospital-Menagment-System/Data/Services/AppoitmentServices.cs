using System;
using System.Collections.Generic;
using System.Linq;
using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services
{
    public class AppoitmentServices
    {
        private readonly AppDbContext _context;
        private readonly DoctorServices _doctorServices;
        private readonly DepartmentServices _departmentServices;

        public AppoitmentServices(AppDbContext context, DoctorServices doctorServices, DepartmentServices departmentServices)
        {
            _doctorServices = doctorServices;
            _context = context;
            _departmentServices = departmentServices;
        }

        public bool CheckAppointmentAvailability(AppointmentVM appointment)
        {
            var doctorId = _doctorServices.GetDoctorIdByName(appointment.DoctorName);
            if (doctorId == null)
            {
                throw new ArgumentException("Doctor name not found.");
            }

            bool isSlotTaken = _context.Appointments.Any(a => 
                a.DoctorId == doctorId && 
                a.Date == appointment.Date && 
                a.Time == appointment.Time
            );

            return !isSlotTaken;
        }

        public List<Appointment> GetAppointmentsByDate(DateTime date)
        {
            return _context.Appointments
                .Where(a => a.Date.Date == date.Date)
                .ToList();
        }

        public void AddAppoitment(AppointmentVM appointment)
        {
            var doctorId = _doctorServices.GetDoctorIdByName(appointment.DoctorName);
            if (doctorId == null)
            {
                throw new ArgumentException("Doctor name not found.");
            }

            bool isSlotTaken = _context.Appointments.Any(a => 
                a.DoctorId == doctorId && 
                a.Date == appointment.Date && 
                a.Time == appointment.Time
            );

            if (isSlotTaken)
            {
                throw new InvalidOperationException("This time slot is already booked for the selected doctor.");
            }

            var newAppoitment = new Appointment()
            {
                PatientName = appointment.PatientName,
                PatientEmail = appointment.PatientEmail,
                Date = appointment.Date,
                Time = appointment.Time,
                Reason = appointment.Reason,
                DoctorName = appointment.DoctorName,
                DoctorId = doctorId
            };

            _context.Appointments.Add(newAppoitment);
            _context.SaveChanges();
        }

        public List<Appointment> GetAllAppoitment()
        {
            return _context.Appointments.ToList();
        }

        public Appointment GetAppoitmentById(int appointmentId)
        {
            return _context.Appointments.FirstOrDefault(n => n.AppointmentId == appointmentId);
        }

        public Appointment UpdateAppoitmentById(int appointmentId, AppointmentVM appointment)
        {
            var _appoitment = _context.Appointments.FirstOrDefault(n => n.AppointmentId == appointmentId);

            if (_appoitment != null)
            {
                _appoitment.PatientEmail = appointment.PatientEmail;
                _appoitment.Date = appointment.Date;
                _appoitment.Time = appointment.Time;
                _appoitment.Reason = appointment.Reason;
                _appoitment.DoctorName = appointment.DoctorName;

                if (_appoitment.DoctorName != appointment.DoctorName)
                {
                    var doctorId = _doctorServices.GetDoctorIdByName(_appoitment.DoctorName);
                    if (doctorId == null)
                    {
                        throw new ArgumentException("Doctor name not found.");
                    }
                    _appoitment.DoctorId = doctorId;
                }

                _context.SaveChanges();
            }
            return _appoitment;
        }

        public void DeleteAppoitmentById(int appointmentId)
        {
            var _appointment = _context.Appointments.FirstOrDefault(n => n.AppointmentId == appointmentId);
            if (_appointment != null)
            {
                _context.Appointments.Remove(_appointment);
                _context.SaveChanges();
            }
        }
    }
}