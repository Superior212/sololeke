import React from "react";
import { Award, Users, Clock, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">AboutSololeke</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your trusted partner in finding exceptional properties and
              creating lasting relationships
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010,Sololeke has grown from a small local agency to
              one of the most respected names in luxury real estate. Our journey
              has been defined by our unwavering commitment to excellence and
              our passion for helping clients find their perfect home.
            </p>
            <p className="text-gray-600">
              We believe that finding the right property is about more than just
              square footage and amenities—it's about finding a place where
              memories will be made and lives will flourish.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              alt="Our Office"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every interaction and transaction",
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Client First",
                description:
                  "Your success and satisfaction are our top priorities",
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty",
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Dedication",
                description:
                  "Available when you need us, every step of the way",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            Expert professionals ready to serve you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
              name: "John Anderson",
              role: "CEO & Founder",
            },
            {
              image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
              name: "Sarah Williams",
              role: "Senior Real Estate Agent",
            },
            {
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              name: "Michael Chen",
              role: "Property Consultant",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
