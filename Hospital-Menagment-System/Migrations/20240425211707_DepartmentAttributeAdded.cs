using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class DepartmentAttributeAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DepartamentName",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DepartamentName",
                table: "Doctors");
        }
    }
}
