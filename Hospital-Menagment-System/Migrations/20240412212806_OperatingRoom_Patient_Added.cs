using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class OperatingRoom_Patient_Added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OperatingRoom_Patient",
                columns: table => new
                {
                    OperatingRoom_PatientId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdmissionDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReleaseDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    OperatingRoomId = table.Column<int>(type: "int", nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Patient_OperatingRoomId",
                table: "OperatingRoom_Patient",
                column: "OperatingRoomId");

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Patient_PatientId",
                table: "OperatingRoom_Patient",
                column: "PatientId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperatingRoom_Patient");
        }
    }
}
