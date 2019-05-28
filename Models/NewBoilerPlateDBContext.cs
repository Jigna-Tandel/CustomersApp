﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace my_new_app.Models
{
    public partial class NewBoilerPlateDBContext : DbContext
    {
        public NewBoilerPlateDBContext()
        {
        }

        public NewBoilerPlateDBContext(DbContextOptions<NewBoilerPlateDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Sales> Sales { get; set; }
        public virtual DbSet<Store> Store { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=(local);Database=NewBoilerPlateDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customer");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("product");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Sales>(entity =>
            {
                entity.ToTable("sales");

                entity.Property(e => e.CustId).HasColumnName("custId");

                entity.Property(e => e.Datesold)
                    .HasColumnName("datesold")
                    .HasColumnType("datetime");

                entity.Property(e => e.ProdId).HasColumnName("prodId");

                entity.Property(e => e.StoreId).HasColumnName("storeId");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK__sales__custId__0DAF0CB0");

                entity.HasOne(d => d.Prod)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.ProdId)
                    .HasConstraintName("FK__sales__prodId__0CBAE877");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.StoreId)
                    .HasConstraintName("FK__sales__storeId__0EA330E9");
            });

            modelBuilder.Entity<Store>(entity =>
            {
                entity.ToTable("store");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
