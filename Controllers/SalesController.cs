using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_new_app.Models;
using mynewapp.Models;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    public class SalesController : Controller
    {
        private readonly NewBoilerPlateDBContext _context;

        public SalesController(NewBoilerPlateDBContext context)
        {
            _context = context;
        }




        [HttpGet()]
        // GET: Sales
        public async Task<IActionResult> Index()
        {
            var result = await
                    _context.Sales
                        .Include(x => x.Cust)
                        .Include(x => x.Prod)
                        .Include(x => x.Store)
                    .ToListAsync();




            return Ok(result);

            //return Ok(await _context.Sales.ToListAsync());
        }

      //  [HttpPost]
        public async Task<IActionResult> NewSales([FromBody]NewSalesRequest request)
        {
            var sale = new Sales 
            {
                Datesold = DateTime.Now,
                Cust = await _context.Customer.FindAsync(request.CustId),
                Prod = await _context.Product.FindAsync(request.ProdId),
                Store = await _context.Store.FindAsync(request.StoreId)
            };

            _context.Sales.Add(sale);
            await _context.SaveChangesAsync();

            return Ok(sale);
        }





        [HttpGet("{id}")]

        // GET: Sales/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var Sale = await _context.Sales
                .FirstOrDefaultAsync(m => m.Id == id);
            if (Sale == null)
            {
                return NotFound();
            }

            return Ok(Sale);
        }

        // POST: Sales/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.

        //[HttpPost]

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Sales Sale)
        {
            if (ModelState.IsValid)
            {
                Sale.Datesold = DateTime.Now;
                _context.Add(Sale);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));

            }
            return Ok(Sale);

        }

        // POST: Sales/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut("{id}")]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int? id, [FromBody] Sales Sale)
        {
            //    if (id != Sale.Id)
            //    {
            //        return NotFound();
            //    }

            if (ModelState.IsValid)
            {
                try
                {
                    //Sale.Datesold = DateTime.Now;
                    _context.Update(Sale);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SaleExists(Sale.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok();
            }
            return ValidationProblem();
        }

        // GET: Sales/Delete/5
        [HttpDelete("{id}")]
        // [HttpDelete]
        //[Route("api/Sales/Delete/{id}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var Sale = await _context.Sales
                .FirstOrDefaultAsync(m => m.Id == id);
            if (Sale == null)
            {
                return NotFound();
            }

            _context.Sales.Remove(Sale);
            await _context.SaveChangesAsync();

            return Ok(Sale);
        }

        private bool SaleExists(int id)
        {
            return _context.Sales.Any(e => e.Id == id);
        }
    }
}