using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class Qyteti_Added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.Sql("DELETE FROM Patients");
            
            migrationBuilder.DropTable(
                name: "Citys");

            migrationBuilder.RenameColumn(
                name: "Qyteti",
                table: "Patients",
                newName: "City");

            migrationBuilder.AddColumn<int>(
                name: "QytetiId",
                table: "Patients",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Qytetet",
                columns: table => new
                {
                    QytetiId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Qytetet", x => x.QytetiId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Patients_QytetiId",
                table: "Patients",
                column: "QytetiId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Qytetet_QytetiId",
                table: "Patients",
                column: "QytetiId",
                principalTable: "Qytetet",
                principalColumn: "QytetiId",
                onDelete: ReferentialAction.NoAction);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Qytetet_QytetiId",
                table: "Patients");

            migrationBuilder.DropTable(
                name: "Qytetet");

            migrationBuilder.DropIndex(
                name: "IX_Patients_QytetiId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "QytetiId",
                table: "Patients");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Patients",
                newName: "Qyteti");

            migrationBuilder.CreateTable(
                name: "Citys",
                columns: table => new
                {
                    CityId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Citys", x => x.CityId);
                });
        }
    }
}
