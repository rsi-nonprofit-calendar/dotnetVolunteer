using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

public class Category
{
    [Key]
    public Guid CategoryId { get; set; }
    [Column(TypeName = "varchar(25)")]
    public string Name { get; set; }
    public string CategoryType { get; set; }
}
