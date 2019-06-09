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
    public class StoresController : Controller
    {
       
            private readonly NewBoilerPlateDBContext _context;

            public StoresController(NewBoilerPlateDBContext context)
            {
                _context = context;
            }




            [HttpGet()]
            // GET: Stores
            public async Task<IActionResult> Index()
            {
                return Ok(await _context.Store.ToListAsync());
            }





            [HttpGet("{id}")]

            // GET: Stores/Details/5
            public async Task<IActionResult> Details(int? id)
            {
                if (id == null)
                {
                    return NotFound();
                }

                var Store = await _context.Store
                    .FirstOrDefaultAsync(m => m.Id == id);
                if (Store == null)
                {
                    return NotFound();
                }

                return Ok(Store);
            }

            // POST: Stores/Create
            // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
            // more details see http://go.microsoft.com/fwlink/?LinkId=317598.

            //[HttpPost]

            [HttpPost]
            public async Task<IActionResult> Create([FromBody] Store Store)
            {
                if (ModelState.IsValid)
                {
                    _context.Add(Store);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));

                }
                return Ok(Store);

            }

            // POST: Stores/Edit/5
            // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
            // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
            [HttpPut("{id}")]
            // [ValidateAntiForgeryToken]
            public async Task<IActionResult> Edit(int? id, [FromBody] Store Store)
            {
                //    if (id != Store.Id)
                //    {
                //        return NotFound();
                //    }

                if (ModelState.IsValid)
                {
                    try
                    {
                        _context.Update(Store);
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!StoreExists(Store.Id))
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

            // GET: Stores/Delete/5
            [HttpDelete("{id}")]
            // [HttpDelete]
            //[Route("api/Stores/Delete/{id}")]
            public async Task<IActionResult> Delete(int? id)
            {
                if (id == null)
                {
                    return NotFound();
                }

                var Store = await _context.Store
                    .FirstOrDefaultAsync(m => m.Id == id);
                if (Store == null)
                {
                    return NotFound();
                }

                _context.Store.Remove(Store);
                await _context.SaveChangesAsync();

                return Ok(Store);
            }

            private bool StoreExists(int id)
            {
                return _context.Store.Any(e => e.Id == id);
            }
        }
    }