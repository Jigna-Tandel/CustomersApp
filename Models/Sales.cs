using System;
using System.Collections.Generic;

namespace my_new_app.Models
{
    public partial class Sales
    {
        //public Sales()
        //{
        //    Customers = new HashSet<Customer>();
        //}
        public int Id { get; set; }
        public int? ProdId { get; set; }
        public int? CustId { get; set; }
        public int? StoreId { get; set; }
        public DateTime? Datesold { get; set; }

        public Customer Cust { get; set; }
        public Product Prod { get; set; }
        public Store Store { get; set; }
       // public virtual ICollection<Customer> Customers { get; set; }
    }
}
