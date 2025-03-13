import Image from "next/image";
import Link from "next/link";

// This would typically come from a database or API
const products = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    price: 599,
    image: "/images/chair-1.jpg",
    category: "Chairs",
    slug: "modern-lounge-chair",
    tags: ["furniture", "seating", "living room"]
  },
  {
    id: 2,
    name: "Wooden Side Table",
    price: 299,
    image: "/images/table-1.jpg",
    category: "Tables",
    slug: "wooden-side-table",
    tags: ["furniture", "storage", "living room"]
  },
  // Add more products as needed
];

const categories = [
  "All",
  "Chairs",
  "Tables",
  "Lighting",
  "Decor",
  "Storage",
  "Outdoor"
];

const sortOptions = [
  { label: "Most Popular", value: "popular" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" }
];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Price Range</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">All Products</h1>
            <select className="px-4 py-2 border rounded-lg">
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`}>
                <div className="group">
                  <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
} 