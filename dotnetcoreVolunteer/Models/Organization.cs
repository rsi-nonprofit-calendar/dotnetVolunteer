using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

public class Organization
{
    public Guid OrganizationId { get; set; }
    [Column(TypeName = "varchar(200)")]
    public string Email { get; set; }
    public string Password { get; set; }
    [Column(TypeName = "varchar(25)")]
    public string Name { get; set; }
    [ForeignKey("Category")]
    public string CategoryType { get; set; }
    public string CategoryName { get; set; }
}
