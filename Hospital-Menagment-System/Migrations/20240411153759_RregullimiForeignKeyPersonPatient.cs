using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class RregullimiForeignKeyPersonPatient : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Persons_PersonUserId",
                table: "Patients");

            migrationBuilder.RenameColumn(
                name: "DateRegistred",
                table: "Persons",
                newName: "DateRegistered");

            migrationBuilder.RenameColumn(
                name: "PersonUserId",
                table: "Patients",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "DateRegistred",
                table: "Patients",
                newName: "DateRegistered");

            migrationBuilder.RenameIndex(
                name: "IX_Patients_PersonUserId",
                table: "Patients",
                newName: "IX_Patients_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Persons_UserId",
                table: "Patients",
                column: "UserId",
                principalTable: "Persons",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Persons_UserId",
                table: "Patients");

            migrationBuilder.RenameColumn(
                name: "DateRegistered",
                table: "Persons",
                newName: "DateRegistred");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Patients",
                newName: "PersonUserId");

            migrationBuilder.RenameColumn(
                name: "DateRegistered",
                table: "Patients",
                newName: "DateRegistred");

            migrationBuilder.RenameIndex(
                name: "IX_Patients_UserId",
                table: "Patients",
                newName: "IX_Patients_PersonUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Persons_PersonUserId",
                table: "Patients",
                column: "PersonUserId",
                principalTable: "Persons",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
