using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class RemoveModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Nurse_AdmissionRoom_AdmissionRoomId",
                table: "Nurse");

            migrationBuilder.DropForeignKey(
                name: "FK_Nurse_Staff_StaffId",
                table: "Nurse");

            migrationBuilder.DropTable(
                name: "AdmissionRoom");

            migrationBuilder.DropTable(
                name: "Dean");

            migrationBuilder.DropTable(
                name: "Doctors_Patients");

            migrationBuilder.DropTable(
                name: "OperatingRoom_Doctor");

            migrationBuilder.DropTable(
                name: "OperatingRoom_Patient");

            migrationBuilder.DropTable(
                name: "Treats_Medication");

            migrationBuilder.DropTable(
                name: "Treats_Services");

            migrationBuilder.DropTable(
                name: "Staff");

            migrationBuilder.DropTable(
                name: "OperatingRoom");

            migrationBuilder.DropTable(
                name: "Medication");

            migrationBuilder.DropTable(
                name: "Doctor_Treats_Patient");

            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Nurse",
                table: "Nurse");

            migrationBuilder.DropIndex(
                name: "IX_Nurse_AdmissionRoomId",
                table: "Nurse");

            migrationBuilder.DropIndex(
                name: "IX_Nurse_StaffId",
                table: "Nurse");

            migrationBuilder.DropColumn(
                name: "AdmissionRoomId",
                table: "Nurse");

            migrationBuilder.DropColumn(
                name: "StaffId",
                table: "Nurse");

            migrationBuilder.RenameTable(
                name: "Nurse",
                newName: "Nurses");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Nurses",
                table: "Nurses",
                column: "NurseId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Nurses",
                table: "Nurses");

            migrationBuilder.RenameTable(
                name: "Nurses",
                newName: "Nurse");

            migrationBuilder.AddColumn<int>(
                name: "AdmissionRoomId",
                table: "Nurse",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StaffId",
                table: "Nurse",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Nurse",
                table: "Nurse",
                column: "NurseId");

            migrationBuilder.CreateTable(
                name: "AdmissionRoom",
                columns: table => new
                {
                    AdmissionRoomId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomId = table.Column<int>(type: "int", nullable: false),
                    NrOfBeds = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdmissionRoom", x => x.AdmissionRoomId);
                    table.ForeignKey(
                        name: "FK_AdmissionRoom_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "RoomId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Doctor_Treats_Patient",
                columns: table => new
                {
                    TreatsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DoctorId = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Diagnosis = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctor_Treats_Patient", x => x.TreatsId);
                    table.ForeignKey(
                        name: "FK_Doctor_Treats_Patient_Doctors_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "Doctors",
                        principalColumn: "DoctorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Doctor_Treats_Patient_Patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patients",
                        principalColumn: "PatientId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Doctors_Patients",
                columns: table => new
                {
                    BookId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DoctorId = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors_Patients", x => x.BookId);
                    table.ForeignKey(
                        name: "FK_Doctors_Patients_Doctors_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "Doctors",
                        principalColumn: "DoctorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Doctors_Patients_Patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patients",
                        principalColumn: "PatientId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Medication",
                columns: table => new
                {
                    MedicationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medication", x => x.MedicationID);
                });

            migrationBuilder.CreateTable(
                name: "OperatingRoom",
                columns: table => new
                {
                    OperatingRoomId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomId = table.Column<int>(type: "int", nullable: false),
                    OperatingRoomDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OperatingRoomName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperatingRoom", x => x.OperatingRoomId);
                    table.ForeignKey(
                        name: "FK_OperatingRoom_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "RoomId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    ServiceID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.ServiceID);
                });

            migrationBuilder.CreateTable(
                name: "Staff",
                columns: table => new
                {
                    StaffId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AvilableDays = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EndShift = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Salary = table.Column<double>(type: "float", nullable: false),
                    StartShift = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Staff", x => x.StaffId);
                });

            migrationBuilder.CreateTable(
                name: "Treats_Medication",
                columns: table => new
                {
                    Treats_MedicationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicationID = table.Column<int>(type: "int", nullable: false),
                    TreatsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Treats_Medication", x => x.Treats_MedicationId);
                    table.ForeignKey(
                        name: "FK_Treats_Medication_Doctor_Treats_Patient_TreatsId",
                        column: x => x.TreatsId,
                        principalTable: "Doctor_Treats_Patient",
                        principalColumn: "TreatsId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Treats_Medication_Medication_MedicationID",
                        column: x => x.MedicationID,
                        principalTable: "Medication",
                        principalColumn: "MedicationID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OperatingRoom_Doctor",
                columns: table => new
                {
                    OperatingRoom_DoctorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DoctorId = table.Column<int>(type: "int", nullable: false),
                    OperatingRoomId = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EndTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartTime = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperatingRoom_Doctor", x => x.OperatingRoom_DoctorId);
                    table.ForeignKey(
                        name: "FK_OperatingRoom_Doctor_Doctors_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "Doctors",
                        principalColumn: "DoctorId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OperatingRoom_Doctor_OperatingRoom_OperatingRoomId",
                        column: x => x.OperatingRoomId,
                        principalTable: "OperatingRoom",
                        principalColumn: "OperatingRoomId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OperatingRoom_Patient",
                columns: table => new
                {
                    OperatingRoom_PatientId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OperatingRoomId = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    AdmissionDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReleaseDate = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperatingRoom_Patient", x => x.OperatingRoom_PatientId);
                    table.ForeignKey(
                        name: "FK_OperatingRoom_Patient_OperatingRoom_OperatingRoomId",
                        column: x => x.OperatingRoomId,
                        principalTable: "OperatingRoom",
                        principalColumn: "OperatingRoomId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OperatingRoom_Patient_Patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patients",
                        principalColumn: "PatientId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Treats_Services",
                columns: table => new
                {
                    Treats_ServicesId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PatientID = table.Column<int>(type: "int", nullable: false),
                    ServiceID = table.Column<int>(type: "int", nullable: false),
                    TreatsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Treats_Services", x => x.Treats_ServicesId);
                    table.ForeignKey(
                        name: "FK_Treats_Services_Doctor_Treats_Patient_TreatsId",
                        column: x => x.TreatsId,
                        principalTable: "Doctor_Treats_Patient",
                        principalColumn: "TreatsId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Treats_Services_Patients_PatientID",
                        column: x => x.PatientID,
                        principalTable: "Patients",
                        principalColumn: "PatientId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Treats_Services_Services_ServiceID",
                        column: x => x.ServiceID,
                        principalTable: "Services",
                        principalColumn: "ServiceID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Dean",
                columns: table => new
                {
                    DeanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StaffId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dean", x => x.DeanId);
                    table.ForeignKey(
                        name: "FK_Dean_Staff_StaffId",
                        column: x => x.StaffId,
                        principalTable: "Staff",
                        principalColumn: "StaffId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Nurse_AdmissionRoomId",
                table: "Nurse",
                column: "AdmissionRoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Nurse_StaffId",
                table: "Nurse",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "IX_AdmissionRoom_RoomId",
                table: "AdmissionRoom",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Dean_StaffId",
                table: "Dean",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "IX_Doctor_Treats_Patient_DoctorId",
                table: "Doctor_Treats_Patient",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_Doctor_Treats_Patient_PatientId",
                table: "Doctor_Treats_Patient",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_Patients_DoctorId",
                table: "Doctors_Patients",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_Patients_PatientId",
                table: "Doctors_Patients",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_RoomId",
                table: "OperatingRoom",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Doctor_DoctorId",
                table: "OperatingRoom_Doctor",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Doctor_OperatingRoomId",
                table: "OperatingRoom_Doctor",
                column: "OperatingRoomId");

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Patient_OperatingRoomId",
                table: "OperatingRoom_Patient",
                column: "OperatingRoomId");

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Patient_PatientId",
                table: "OperatingRoom_Patient",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_Treats_Medication_MedicationID",
                table: "Treats_Medication",
                column: "MedicationID");

            migrationBuilder.CreateIndex(
                name: "IX_Treats_Medication_TreatsId",
                table: "Treats_Medication",
                column: "TreatsId");

            migrationBuilder.CreateIndex(
                name: "IX_Treats_Services_PatientID",
                table: "Treats_Services",
                column: "PatientID");

            migrationBuilder.CreateIndex(
                name: "IX_Treats_Services_ServiceID",
                table: "Treats_Services",
                column: "ServiceID");

            migrationBuilder.CreateIndex(
                name: "IX_Treats_Services_TreatsId",
                table: "Treats_Services",
                column: "TreatsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Nurse_AdmissionRoom_AdmissionRoomId",
                table: "Nurse",
                column: "AdmissionRoomId",
                principalTable: "AdmissionRoom",
                principalColumn: "AdmissionRoomId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Nurse_Staff_StaffId",
                table: "Nurse",
                column: "StaffId",
                principalTable: "Staff",
                principalColumn: "StaffId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
