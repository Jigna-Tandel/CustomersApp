using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_new_app.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sales>();
        }
        
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        [Column("Name", TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        public string Address { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
