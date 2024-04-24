﻿// <auto-generated />
using System;
using Hospital_Menagment_System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Hospital_Management_System.Data.Models.Patient", b =>
                {
                    b.Property<int>("PatientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PatientId"));

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateOfBirth")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateRegistered")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("QytetiId")
                        .HasColumnType("int");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PatientId");

                    b.HasIndex("QytetiId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.AdmissionRoom", b =>
                {
                    b.Property<int>("AdmissionRoomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AdmissionRoomId"));

                    b.Property<int>("NrOfBeds")
                        .HasColumnType("int");

                    b.Property<int>("RoomId")
                        .HasColumnType("int");

                    b.HasKey("AdmissionRoomId");

                    b.HasIndex("RoomId");

                    b.ToTable("AdmissionRoom");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Dean", b =>
                {
                    b.Property<int>("DeanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DeanId"));

                    b.Property<int>("StaffId")
                        .HasColumnType("int");

                    b.HasKey("DeanId");

                    b.HasIndex("StaffId");

                    b.ToTable("Dean");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Departament", b =>
                {
                    b.Property<int>("DepartamentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DepartamentId"));

                    b.Property<int>("DepartamentSize")
                        .HasColumnType("int");

                    b.Property<bool>("DepartamentStatus")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DepartamentId");

                    b.ToTable("Departaments");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor", b =>
                {
                    b.Property<int>("DoctorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DoctorId"));

                    b.Property<int>("DepartamentId")
                        .HasColumnType("int");

                    b.Property<string>("Qualification")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DoctorId");

                    b.HasIndex("DepartamentId");

                    b.ToTable("Doctors");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor_Patient", b =>
                {
                    b.Property<int>("BookId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BookId"));

                    b.Property<int>("DoctorId")
                        .HasColumnType("int");

                    b.Property<int>("PatientId")
                        .HasColumnType("int");

                    b.HasKey("BookId");

                    b.HasIndex("DoctorId");

                    b.HasIndex("PatientId");

                    b.ToTable("Doctors_Patients");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor_Treats_Patient", b =>
                {
                    b.Property<int>("TreatsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TreatsId"));

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Diagnosis")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DoctorId")
                        .HasColumnType("int");

                    b.Property<int>("PatientId")
                        .HasColumnType("int");

                    b.HasKey("TreatsId");

                    b.HasIndex("DoctorId");

                    b.HasIndex("PatientId");

                    b.ToTable("Doctor_Treats_Patient");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Medication", b =>
                {
                    b.Property<int>("MedicationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MedicationID"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MedicationID");

                    b.ToTable("Medication");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Nurse", b =>
                {
                    b.Property<int>("NurseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("NurseId"));

                    b.Property<int>("AdmissionRoomId")
                        .HasColumnType("int");

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StaffId")
                        .HasColumnType("int");

                    b.HasKey("NurseId");

                    b.HasIndex("AdmissionRoomId");

                    b.HasIndex("StaffId");

                    b.ToTable("Nurse");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.OperatingRoom", b =>
                {
                    b.Property<int>("OperatingRoomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OperatingRoomId"));

                    b.Property<string>("OperatingRoomDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OperatingRoomName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoomId")
                        .HasColumnType("int");

                    b.HasKey("OperatingRoomId");

                    b.HasIndex("RoomId");

                    b.ToTable("OperatingRoom");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.OperatingRoom_Doctor", b =>
                {
                    b.Property<int>("OperatingRoom_DoctorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OperatingRoom_DoctorId"));

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DoctorId")
                        .HasColumnType("int");

                    b.Property<string>("EndTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OperatingRoomId")
                        .HasColumnType("int");

                    b.Property<string>("StartTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("OperatingRoom_DoctorId");

                    b.HasIndex("DoctorId");

                    b.HasIndex("OperatingRoomId");

                    b.ToTable("OperatingRoom_Doctor");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.OperatingRoom_Patient", b =>
                {
                    b.Property<int>("OperatingRoom_PatientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OperatingRoom_PatientId"));

                    b.Property<string>("AdmissionDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OperatingRoomId")
                        .HasColumnType("int");

                    b.Property<int>("PatientId")
                        .HasColumnType("int");

                    b.Property<string>("ReleaseDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("OperatingRoom_PatientId");

                    b.HasIndex("OperatingRoomId");

                    b.HasIndex("PatientId");

                    b.ToTable("OperatingRoom_Patient");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Qyteti", b =>
                {
                    b.Property<int>("QytetiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QytetiId"));

                    b.Property<string>("CityName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("QytetiId");

                    b.ToTable("Qytetet");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Room", b =>
                {
                    b.Property<int>("RoomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoomId"));

                    b.Property<int>("DepartamentId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoomName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RoomId");

                    b.HasIndex("DepartamentId");

                    b.ToTable("Room");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Services", b =>
                {
                    b.Property<int>("ServiceID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ServiceID"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.HasKey("ServiceID");

                    b.ToTable("Services");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Staff", b =>
                {
                    b.Property<int>("StaffId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StaffId"));

                    b.Property<string>("AvilableDays")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EndShift")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Salary")
                        .HasColumnType("float");

                    b.Property<string>("StartShift")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("StaffId");

                    b.ToTable("Staff");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Treats_Medication", b =>
                {
                    b.Property<int>("Treats_MedicationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Treats_MedicationId"));

                    b.Property<int>("MedicationID")
                        .HasColumnType("int");

                    b.Property<int>("TreatsId")
                        .HasColumnType("int");

                    b.HasKey("Treats_MedicationId");

                    b.HasIndex("MedicationID");

                    b.HasIndex("TreatsId");

                    b.ToTable("Treats_Medication");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Treats_Services", b =>
                {
                    b.Property<int>("Treats_ServicesId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Treats_ServicesId"));

                    b.Property<int>("PatientID")
                        .HasColumnType("int");

                    b.Property<int>("ServiceID")
                        .HasColumnType("int");

                    b.Property<int>("TreatsId")
                        .HasColumnType("int");

                    b.HasKey("Treats_ServicesId");

                    b.HasIndex("PatientID");

                    b.HasIndex("ServiceID");

                    b.HasIndex("TreatsId");

                    b.ToTable("Treats_Services");
                });

            modelBuilder.Entity("Hospital_Management_System.Data.Models.Patient", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Qyteti", "Qyteti")
                        .WithMany("Patients")
                        .HasForeignKey("QytetiId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Qyteti");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.AdmissionRoom", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Room", "Room")
                        .WithMany("AdmissionRoom")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Room");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Dean", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Staff", "Staff")
                        .WithMany("Dean")
                        .HasForeignKey("StaffId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Staff");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Departament", "Departament")
                        .WithMany("Doctor")
                        .HasForeignKey("DepartamentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Departament");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor_Patient", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Doctor", "Doctor")
                        .WithMany("Doctor_Patient")
                        .HasForeignKey("DoctorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Hospital_Management_System.Data.Models.Patient", "Patient")
                        .WithMany("Doctor_Patient")
                        .HasForeignKey("PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Doctor");

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor_Treats_Patient", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Doctor", "Doctor")
                        .WithMany("Doctor_Treats_Patient")
                        .HasForeignKey("DoctorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Hospital_Management_System.Data.Models.Patient", "Patient")
                        .WithMany("Doctor_Treats_Patient")
                        .HasForeignKey("PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Doctor");

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Nurse", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.AdmissionRoom", "AdmissionRoom")
                        .WithMany("Nurse")
                        .HasForeignKey("AdmissionRoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Hospital_Menagment_System.Data.Models.Staff", "Staff")
                        .WithMany("Nurse")
                        .HasForeignKey("StaffId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AdmissionRoom");

                    b.Navigation("Staff");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.OperatingRoom", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Room", "Room")
                        .WithMany("OperatingRoom")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Room");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.OperatingRoom_Doctor", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Doctor", "Doctor")
                        .WithMany("OperatingRoom_Doctor")
                        .HasForeignKey("DoctorId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Hospital_Menagment_System.Data.Models.OperatingRoom", "OperatingRoom")
                        .WithMany("OperatingRoom_Doctor")
                        .HasForeignKey("OperatingRoomId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Doctor");

                    b.Navigation("OperatingRoom");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.OperatingRoom_Patient", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.OperatingRoom", "OperatingRoom")
                        .WithMany("OperatingRoom_Patient")
                        .HasForeignKey("OperatingRoomId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Hospital_Management_System.Data.Models.Patient", "Patient")
                        .WithMany("OperatingRoom_Patient")
                        .HasForeignKey("PatientId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("OperatingRoom");

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Room", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Departament", "Departament")
                        .WithMany("Room")
                        .HasForeignKey("DepartamentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Departament");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Treats_Medication", b =>
                {
                    b.HasOne("Hospital_Menagment_System.Data.Models.Medication", "Medication")
                        .WithMany("Treats_Medication")
                        .HasForeignKey("MedicationID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Hospital_Menagment_System.Data.Models.Doctor_Treats_Patient", "Doctor_Treats_Patient")
                        .WithMany("Treats_Medication")
                        .HasForeignKey("TreatsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Doctor_Treats_Patient");

                    b.Navigation("Medication");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Treats_Services", b =>
                {
                    b.HasOne("Hospital_Management_System.Data.Models.Patient", "Patient")
                        .WithMany("Treats_Services")
                        .HasForeignKey("PatientID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Hospital_Menagment_System.Data.Models.Services", "Services")
                        .WithMany("Treats_Services")
                        .HasForeignKey("ServiceID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Hospital_Menagment_System.Data.Models.Doctor_Treats_Patient", "Doctor_Treats_Patient")
                        .WithMany("Treats_Services")
                        .HasForeignKey("TreatsId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Doctor_Treats_Patient");

                    b.Navigation("Patient");

                    b.Navigation("Services");
                });

            modelBuilder.Entity("Hospital_Management_System.Data.Models.Patient", b =>
                {
                    b.Navigation("Doctor_Patient");

                    b.Navigation("Doctor_Treats_Patient");

                    b.Navigation("OperatingRoom_Patient");

                    b.Navigation("Treats_Services");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.AdmissionRoom", b =>
                {
                    b.Navigation("Nurse");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Departament", b =>
                {
                    b.Navigation("Doctor");

                    b.Navigation("Room");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor", b =>
                {
                    b.Navigation("Doctor_Patient");

                    b.Navigation("Doctor_Treats_Patient");

                    b.Navigation("OperatingRoom_Doctor");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Doctor_Treats_Patient", b =>
                {
                    b.Navigation("Treats_Medication");

                    b.Navigation("Treats_Services");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Medication", b =>
                {
                    b.Navigation("Treats_Medication");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.OperatingRoom", b =>
                {
                    b.Navigation("OperatingRoom_Doctor");

                    b.Navigation("OperatingRoom_Patient");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Qyteti", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Room", b =>
                {
                    b.Navigation("AdmissionRoom");

                    b.Navigation("OperatingRoom");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Services", b =>
                {
                    b.Navigation("Treats_Services");
                });

            modelBuilder.Entity("Hospital_Menagment_System.Data.Models.Staff", b =>
                {
                    b.Navigation("Dean");

                    b.Navigation("Nurse");
                });
#pragma warning restore 612, 618
        }
    }
}
