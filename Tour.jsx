import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Info } from "lucide-react";

const tourismSpots = [
  {
    name: "Lalbagh Botanical Garden",
    description: "A historic botanical garden with diverse plant species and a beautiful glass house.",
    location: "Mavalli, Bangalore",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Lalbagh_Glasshouse.jpg"
  },
  {
    name: "Cubbon Park",
    description: "A lush green park in the heart of Bangalore, perfect for morning walks and relaxation.",
    location: "Sampangi Rama Nagar, Bangalore",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cubbon_Park_Bangalore.jpg"
  },
  {
    name: "Bangalore Palace",
    description: "A grand palace with Tudor-style architecture, reflecting Bangalore's royal history.",
    location: "Vasanth Nagar, Bangalore",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bangalore_Palace.jpg"
  },
  {
    name: "Nandi Hills",
    description: "A scenic hill station offering panoramic views and a perfect getaway from the city.",
    location: "Chikkaballapur, near Bangalore",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Nandi_Hills.jpg"
  }
];

export default function BangaloreTourism() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Bangalore's Local Tourism Spots</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourismSpots.map((spot, index) => (
          <Card key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Camera className="w-6 h-6 text-blue-500" /> {spot.name}
              </h2>
              <p className="text-gray-600 mt-2">{spot.description}</p>
              <p className="flex items-center gap-2 mt-3 text-gray-800 font-medium">
                <MapPin className="w-5 h-5 text-red-500" /> {spot.location}
              </p>
              <Button className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700">
                <Info className="w-5 h-5 mr-2" /> More Info
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
