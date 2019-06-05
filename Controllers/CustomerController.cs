using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_new_app.Models;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        private readonly NewBoilerPlateDBContext _context;

        public CustomersController(NewBoilerPlateDBContext context)
        {
            _context = context;
        }


       // private static string[] Summaries = new[]
       //{
       //     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
       // };

       // [HttpGet("[action]")]
       // public IEnumerable<Customer> Customer()
       // {
       //     var rng = new Random();
       //     return Enumerable.Range(1, 5).Select(index => new Customer
       //     {
       //         Address = DateTime.Now.AddDays(index).ToString("d"),
       //        // TemperatureC = rng.Next(-20, 55),
       //         Name = Summaries[rng.Next(Summaries.Length)]
       //     });
       // }








        [HttpGet()]
        // GET: Customers
        public async Task<IActionResult> Index()
        {
            return Ok(await _context.Customer.ToListAsync());
        }
        




        [HttpGet("{id}")]
        
        // GET: Customers/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var customer = await _context.Customer
                .FirstOrDefaultAsync(m => m.Id == id);
            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        // POST: Customers/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.

        //[HttpPost]

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Customer customer)
        {
            if (ModelState.IsValid)
            {
                _context.Add(customer);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return Ok(customer);
        }

        // POST: Customers/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut("{id}")]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int? id,[FromBody] Customer customer)
        {
        //    if (id != customer.Id)
        //    {
        //        return NotFound();
        //    }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(customer);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CustomerExists(customer.Id))
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

        // GET: Customers/Delete/5
          [HttpDelete("{id}")]
       // [HttpDelete]
        //[Route("api/Customers/Delete/{id}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var customer = await _context.Customer
                .FirstOrDefaultAsync(m => m.Id == id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customer.Remove(customer);
            await _context.SaveChangesAsync();

            return Ok(customer);
        }

        private bool CustomerExists(int id)
        {
            return _context.Customer.Any(e => e.Id == id);
        }
    }
}