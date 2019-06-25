using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mynewapp.Models
{
    public class NewSalesRequest
    {
        //public int CustomerId { get; set; }
        //public int StoreID { get; set; }
        //public int ProductId { get; set; }

        public int ProdId { get; set; }
        public int CustId { get; set; }
        public int StoreId { get; set; }
    }
}
