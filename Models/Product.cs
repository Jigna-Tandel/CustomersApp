using System;
using System.Collections.Generic;

namespace my_new_app.Models
{
    public partial class Product
    {
        public Product()
        {
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
