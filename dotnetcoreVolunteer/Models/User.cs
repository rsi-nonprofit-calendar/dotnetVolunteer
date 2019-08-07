using System;
using System.ComponentModel.DataAnnotations;

/// <summary>
/// Summary description for Class1
/// </summary>
public class User
{
    [Key]
    public Guid UserId { get; set; }
    public int Email { get; set; }
    public int Password { get; set; }
    public int Name { get; set; }
    public int AboutMe { get; set; }
}
