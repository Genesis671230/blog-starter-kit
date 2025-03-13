import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    price: 599,
    image: "/images/chair-1.jpg",
    category: "Chairs",
    slug: "modern-lounge-chair"
  },
  {
    id: 2,
    name: "Wooden Side Table",
    price: 299,
    image: "/images/table-1.jpg",
    category: "Tables",
    slug: "wooden-side-table"
  },
  // Add more products as needed
];

const categories = [
  {
    name: "Japandi Design",
    description: "Japandi blends the smooth, modern lines of Scandinavian design with the sleek, functional, elegance of the Japanese aesthetic.",
    image: "/images/japandi.jpg",
    slug: "japandi"
  },
  {
    name: "Dark colors in 2024",
    description: "Choosing the right rug for your living space can be hard. It can sometimes feel like you are trying to solve a puzzle.",
    image: "/images/dark-colors.jpg",
    slug: "dark-colors"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-50">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold text-black mb-6">SALE</h1>
            <p className="text-xl text-gray-800 mb-8">
              The first step in determining your ideal working hours is to figure out when your mind and body naturally work the best.
            </p>
            <Link 
              href="/shop"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              See our big sale
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.slug}`}>
              <div className="group">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Productivity Banner */}
      <section className="bg-[#FFF5F0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Time to get productive</h2>
              <p className="text-gray-600 mb-8">
                The first step in determining your ideal working hours is to figure out when your mind and body naturally work the best.
              </p>
              <Link 
                href="/shop/office"
                className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Shop Office
              </Link>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/productivity.jpg"
                alt="Productivity workspace"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
