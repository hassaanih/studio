"use client";

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProviderCard } from '@/components/provider-card';
import { vendors } from '@/lib/data';
import { vendorCategories } from '@/lib/types';
import { Search } from 'lucide-react';
import { Header } from '@/components/header';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceType, setServiceType] = useState('all');

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const matchesSearch =
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesService = serviceType === 'all' || vendor.category === serviceType;
      return matchesSearch && matchesService;
    });
  }, [searchTerm, serviceType]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card border-b">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-foreground">
              ProcurLink Vendor Portal
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Connecting businesses with top-tier service providers. Find your perfect partner today.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search vendors"
              />
            </div>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger className="w-full md:w-[200px]" aria-label="Filter by service type">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {vendorCategories.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVendors.map((vendor) => (
                <ProviderCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold">No Vendors Found</h2>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
