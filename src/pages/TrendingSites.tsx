import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, TrendingUp, Filter, Search } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import parisImage from "@/assets/destination-paris.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import newyorkImage from "@/assets/destination-newyork.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import dubaiImage from "@/assets/destination-dubai.jpg";

const trendingDestinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: parisImage,
    rating: 4.8,
    reviews: 1203,
    trending: "+23%",
    tags: ["Stunning sunsets", "White architecture", "+3 more"],
    price: "From $150/night",
    description: "Iconic blue domes and breathtaking sunsets"
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    image: tokyoImage,
    rating: 4.9,
    reviews: 2156,
    trending: "+18%",
    tags: ["Ancient temples", "Cherry blossoms", "+4 more"],
    price: "From $120/night",
    description: "Traditional temples and beautiful gardens"
  },
  {
    id: 3,
    name: "Banff National Park",
    country: "Canada",
    image: baliImage,
    rating: 4.7,
    reviews: 890,
    trending: "+31%",
    tags: ["Mountain lakes", "Wildlife viewing", "+2 more"],
    price: "From $200/night",
    description: "Pristine wilderness and turquoise lakes"
  },
  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    image: dubaiImage,
    rating: 4.6,
    reviews: 3200,
    trending: "+15%",
    tags: ["Luxury shopping", "Modern architecture", "+5 more"],
    price: "From $300/night",
    description: "Futuristic city with luxury experiences"
  },
  {
    id: 5,
    name: "Tulum",
    country: "Mexico",
    image: newyorkImage,
    rating: 4.5,
    reviews: 675,
    trending: "+28%",
    tags: ["Ancient ruins", "Cenotes", "+3 more"],
    price: "From $180/night",
    description: "Ancient Mayan ruins by pristine beaches"
  },
  {
    id: 6,
    name: "Reykjavik",
    country: "Iceland",
    image: parisImage,
    rating: 4.8,
    reviews: 540,
    trending: "+22%",
    tags: ["Northern lights", "Blue lagoon", "+4 more"],
    price: "From $250/night",
    description: "Gateway to Iceland's natural wonders"
  }
];

const categories = ["All Spots", "Beach", "Cultural", "Nature", "City", "Adventure"];

export default function TrendingSites() {
  const [selectedCategory, setSelectedCategory] = useState("All Spots");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Discover <span className="gradient-text">Trending Destinations</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the world's most popular destinations, updated daily based on traveler insights.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="text-center p-4 bg-card rounded-xl border">
            <div className="text-2xl font-bold text-primary">9+</div>
            <div className="text-sm text-muted-foreground">Destinations</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border">
            <div className="text-2xl font-bold text-primary">23%</div>
            <div className="text-sm text-muted-foreground">Avg Growth</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border">
            <div className="text-2xl font-bold text-primary">150M+</div>
            <div className="text-sm text-muted-foreground">Travelers</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border">
            <div className="text-2xl font-bold text-primary">4.7★</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover img-hd group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Trending Badge */}
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {destination.trending}
                </Badge>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-sm">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {destination.rating}
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-display text-xl font-bold">{destination.name}</h3>
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <MapPin className="h-3 w-3" />
                    {destination.country}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-3">{destination.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-primary">{destination.price}</div>
                    <div className="text-xs text-muted-foreground">{destination.reviews} reviews</div>
                  </div>
                  <Button size="sm">
                    Explore
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}