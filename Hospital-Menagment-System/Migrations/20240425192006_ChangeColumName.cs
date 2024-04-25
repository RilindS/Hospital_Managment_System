using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class ChangeColumName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Doctors",
                newName: "DoctorName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DoctorName",
                table: "Doctors",
                newName: "Name");
        }
    }
}
