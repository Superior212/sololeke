import { useParams } from "react-router-dom";
import {
  BedDouble,
  Bath,
  Square,
  MapPin,
  Heart,
  Share2,
  CheckCircle,
} from "lucide-react";
import { properties } from "../lib/Data";

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold">Property not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Property Images */}
      <div className="relative h-[60vh] bg-gray-100">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.location}
                </p>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {property.price}
              </div>
            </div>

            {/* Property Features */}
            <div className="flex gap-8 py-6 border-y border-gray-200">
              <div className="flex items-center">
                <BedDouble className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.beds} beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.baths} baths</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Additional Features */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Gourmet Kitchen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Swimming Pool
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Smart Home System
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Wine Cellar
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Schedule a Viewing</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Schedule Viewing
                </button>
              </form>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Heart className="h-5 w-5" />
                  Save
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
