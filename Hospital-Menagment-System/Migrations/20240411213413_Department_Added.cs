using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class Department_Added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Departament",
                table: "Doctors");

            migrationBuilder.AddColumn<int>(
                name: "DepartamentId",
                table: "Doctors",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Departaments",
                columns: table => new
                {
                    DepartamentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DepartamentSize = table.Column<int>(type: "int", nullable: false),
                    DepartamentStatus = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departaments", x => x.DepartamentId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_DepartamentId",
                table: "Doctors",
                column: "DepartamentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Doctors_Departaments_DepartamentId",
                table: "Doctors",
                column: "DepartamentId",
                principalTable: "Departaments",
                principalColumn: "DepartamentId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Doctors_Departaments_DepartamentId",
                table: "Doctors");

            migrationBuilder.DropTable(
                name: "Departaments");

            migrationBuilder.DropIndex(
                name: "IX_Doctors_DepartamentId",
                table: "Doctors");

            migrationBuilder.DropColumn(
                name: "DepartamentId",
                table: "Doctors");

            migrationBuilder.AddColumn<string>(
                name: "Departament",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
