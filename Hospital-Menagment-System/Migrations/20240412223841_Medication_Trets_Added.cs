using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Menagment_System.Migrations
{
    /// <inheritdoc />
    public partial class Medication_Trets_Added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Medication",
                columns: table => new
                {
                    MedicationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medication", x => x.MedicationID);
                });

            migrationBuilder.CreateTable(
                name: "Treats_Medication",
                columns: table => new
                {
                    Treats_MedicationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MedicationID = table.Column<int>(type: "int", nullable: false),
                    TreatsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Treats_Medication", x => x.Treats_MedicationId);
                    table.ForeignKey(
                        name: "FK_Treats_Medication_Doctor_Treats_Patient_TreatsId",
                        column: x => x.TreatsId,
                        principalTable: "Doctor_Treats_Patient",
                        principalColumn: "TreatsId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Treats_Medication_Medication_MedicationID",
                        column: x => x.MedicationID,
                        principalTable: "Medication",
                        principalColumn: "MedicationID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Treats_Medication_MedicationID",
                table: "Treats_Medication",
                column: "MedicationID");

            migrationBuilder.CreateIndex(
                name: "IX_Treats_Medication_TreatsId",
                table: "Treats_Medication",
                column: "TreatsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Treats_Medication");

            migrationBuilder.DropTable(
                name: "Medication");
        }
    }
}
