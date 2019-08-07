using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace dotnetcoreVolunteer.Migrations
{
    public partial class DBContextCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "AboutMe",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Email",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Name",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Password",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "OrganizationID",
                table: "Pictures",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "PicDescription",
                table: "Pictures",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PictureURL",
                table: "Pictures",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProfilePicture",
                table: "Pictures",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "UserID",
                table: "Pictures",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "CategoryName",
                table: "Organizations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CategoryType",
                table: "Organizations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Organizations",
                type: "varchar(200)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Organizations",
                type: "varchar(25)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Organizations",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CategoryID",
                table: "Events",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<DateTime>(
                name: "EventDate",
                table: "Events",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "EventDescription",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EventLocation",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EventName",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "EventTime",
                table: "Events",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "CategoryType",
                table: "Categories",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Categories",
                type: "varchar(25)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Achievements",
                type: "varchar(25)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Achievements",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AboutMe",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "OrganizationID",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "PicDescription",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "PictureURL",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "ProfilePicture",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "Pictures");

            migrationBuilder.DropColumn(
                name: "CategoryName",
                table: "Organizations");

            migrationBuilder.DropColumn(
                name: "CategoryType",
                table: "Organizations");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Organizations");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Organizations");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Organizations");

            migrationBuilder.DropColumn(
                name: "CategoryID",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EventDate",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EventDescription",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EventLocation",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EventName",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EventTime",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "CategoryType",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Achievements");

            migrationBuilder.AddColumn<Guid>(
                name: "AchievementId",
                table: "Users",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Achievements",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(25)",
                oldNullable: true);

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
    }
}
