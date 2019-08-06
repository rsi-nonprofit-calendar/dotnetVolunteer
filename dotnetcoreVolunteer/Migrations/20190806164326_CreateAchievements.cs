using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace dotnetcoreVolunteer.Migrations
{
    public partial class CreateAchievements : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AchievementId",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Achievements",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_AchievementId",
                table: "Users",
                column: "AchievementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Achievements_AchievementId",
                table: "Users",
                column: "AchievementId",
                principalTable: "Achievements",
                principalColumn: "AchievementId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Achievements_AchievementId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_AchievementId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "AchievementId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Achievements");
        }
    }
}
