﻿using System;
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
    public class ProductsController : Controller
    {

        
            private readonly NewBoilerPlateDBContext _context;

            public ProductsController(NewBoilerPlateDBContext context)
            {
                _context = context;
            }




            [HttpGet()]
            // GET: Products
            public async Task<IActionResult> Index()
            {
                return Ok(await _context.Product.ToListAsync());
            }





            [HttpGet("{id}")]

            // GET: Products/Details/5
            public async Task<IActionResult> Details(int? id)
            {
                if (id == null)
                {
                    return NotFound();
                }

                var Product = await _context.Product
                    .FirstOrDefaultAsync(m => m.Id == id);
                if (Product == null)
                {
                    return NotFound();
                }

                return Ok(Product);
            }

            // POST: Products/Create
            // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
            // more details see http://go.microsoft.com/fwlink/?LinkId=317598.

            //[HttpPost]

            [HttpPost]
            public async Task<IActionResult> Create([FromBody] Product Product)
            {
                if (ModelState.IsValid)
                {
                    _context.Add(Product);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));

                }
                return Ok(Product);

            }

            // POST: Products/Edit/5
            // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
            // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
            [HttpPut("{id}")]
            // [ValidateAntiForgeryToken]
            public async Task<IActionResult> Edit(int? id, [FromBody] Product Product)
            {
                //    if (id != Product.Id)
                //    {
                //        return NotFound();
                //    }

                if (ModelState.IsValid)
                {
                    try
                    {
                        _context.Update(Product);
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!ProductExists(Product.Id))
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

            // GET: Products/Delete/5
            [HttpDelete("{id}")]
            // [HttpDelete]
            //[Route("api/Products/Delete/{id}")]
            public async Task<IActionResult> Delete(int? id)
            {
                if (id == null)
                {
                    return NotFound();
                }

                var Product = await _context.Product
                    .FirstOrDefaultAsync(m => m.Id == id);
                if (Product == null)
                {
                    return NotFound();
                }

                _context.Product.Remove(Product);
                await _context.SaveChangesAsync();

                return Ok(Product);
            }

            private bool ProductExists(int id)
            {
                return _context.Product.Any(e => e.Id == id);
            }
        



    } 
}