using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class OperatingRoom_Doctor_Added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OperatingRoom_Doctor",
                columns: table => new
                {
                    OperatingRoom_DoctorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EndTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OperatingRoomId = table.Column<int>(type: "int", nullable: false),
                    DoctorId = table.Column<int>(type: "int", nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Doctor_DoctorId",
                table: "OperatingRoom_Doctor",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_OperatingRoom_Doctor_OperatingRoomId",
                table: "OperatingRoom_Doctor",
                column: "OperatingRoomId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperatingRoom_Doctor");
        }
    }
}
