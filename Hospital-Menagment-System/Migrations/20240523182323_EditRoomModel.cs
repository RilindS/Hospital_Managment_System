using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class EditRoomModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Cities_CityId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Room_Departaments_DepartamentId",
                table: "Room");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Room",
                table: "Room");

            migrationBuilder.RenameTable(
                name: "Room",
                newName: "Rooms");

            migrationBuilder.RenameIndex(
                name: "IX_Room_DepartamentId",
                table: "Rooms",
                newName: "IX_Rooms_DepartamentId");

            migrationBuilder.AddColumn<string>(
                name: "DepartamentName",
                table: "Rooms",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Floor",
                table: "Rooms",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NrOfBeds",
                table: "Rooms",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Rooms",
                table: "Rooms",
                column: "RoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Cities_CityId",
                table: "Patients",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "CityId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Rooms_Departaments_DepartamentId",
                table: "Rooms",
                column: "DepartamentId",
                principalTable: "Departaments",
                principalColumn: "DepartamentId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Cities_CityId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Rooms_Departaments_DepartamentId",
                table: "Rooms");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Rooms",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "DepartamentName",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "Floor",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "NrOfBeds",
                table: "Rooms");

            migrationBuilder.RenameTable(
                name: "Rooms",
                newName: "Room");

            migrationBuilder.RenameIndex(
                name: "IX_Rooms_DepartamentId",
                table: "Room",
                newName: "IX_Room_DepartamentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Room",
                table: "Room",
                column: "RoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Cities_CityId",
                table: "Patients",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "CityId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Room_Departaments_DepartamentId",
                table: "Room",
                column: "DepartamentId",
                principalTable: "Departaments",
                principalColumn: "DepartamentId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
