using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

public class Picture
{
    [Key]
    public Guid PictureId { get; set; }
    public string PictureURL { get; set; }
    [ForeignKey("Organization")]
    public Guid OrganizationID { get; set; }
    public int ProfilePicture { get; set; }
    [ForeignKey("User")]
    public Guid UserID { get; set; }
    public string PicDescription { get; set; }
}
