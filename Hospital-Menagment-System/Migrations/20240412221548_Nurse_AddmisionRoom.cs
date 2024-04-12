using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class Nurse_AddmisionRoom : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AdmissionRoomId",
                table: "Nurse",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Nurse_AdmissionRoomId",
                table: "Nurse",
                column: "AdmissionRoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Nurse_AdmissionRoom_AdmissionRoomId",
                table: "Nurse",
                column: "AdmissionRoomId",
                principalTable: "AdmissionRoom",
                principalColumn: "AdmissionRoomId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Nurse_AdmissionRoom_AdmissionRoomId",
                table: "Nurse");

            migrationBuilder.DropIndex(
                name: "IX_Nurse_AdmissionRoomId",
                table: "Nurse");

            migrationBuilder.DropColumn(
                name: "AdmissionRoomId",
                table: "Nurse");
        }
    }
}
