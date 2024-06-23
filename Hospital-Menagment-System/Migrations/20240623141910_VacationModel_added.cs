using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class VacationModel_added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vacations",
                columns: table => new
                {
                    VacationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Arsyja = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Vertetimi = table.Column<bool>(type: "bit", nullable: false),
                    Prej = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Deri = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacations", x => x.VacationId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vacations");
        }
    }
}
