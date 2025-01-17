import { Search, SlidersHorizontal } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { properties } from "../lib/Data";

export default function Properties() {
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    baths: "",
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Available Properties</h1>
          <p className="text-xl">
            Find your perfect home from our exclusive listings
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search by location or property name..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-gray-300 hover:bg-gray-50">
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <PropertyCard {...property} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
