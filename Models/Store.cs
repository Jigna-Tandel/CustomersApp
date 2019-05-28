using System;
using System.Collections.Generic;

namespace my_new_app.Models
{
    public partial class Store
    {
        public Store()
        {
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
