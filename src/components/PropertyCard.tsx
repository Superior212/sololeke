import { BedDouble, Bath, Square, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  description?: string;
}

function PropertyCard({
  id,
  image,
  title,
  price,
  beds,
  baths,
  sqft,
  location,
  description,
}: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div className="relative h-48">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
            {price}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </p>

          {description && (
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          )}

          <div className="flex justify-between text-gray-600">
            <div className="flex items-center">
              <BedDouble className="h-4 w-4 mr-1" />
              <span>{beds} beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{baths} baths</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
