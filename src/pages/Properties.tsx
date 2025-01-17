import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { FilterModal } from "../components/FilterModal";
import { properties } from "../lib/Data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Properties() {
  const [filters, setFilters] = useState({
    type: "",
    price: "",
    beds: "",
    baths: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = !filters.beds || property.beds === parseInt(filters.beds);
    const matchesMinPrice =
      !filters.price ||
      parseInt(property.price) >= parseInt(filters.price);
    const matchesBeds =
      !filters.beds || property.beds >= parseInt(filters.beds);
    const matchesBaths =
      !filters.baths || property.baths >= parseInt(filters.baths);

    return (
      matchesSearch &&
      matchesType &&
      matchesMinPrice &&
      matchesBeds &&
      matchesBaths
    );
  });

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

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
              <Input
                type="text"
                placeholder="Search by location or property name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={handleOpenFilterModal}>
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <PropertyCard {...property} />
            </Link>
          ))}
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={handleCloseFilterModal}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
