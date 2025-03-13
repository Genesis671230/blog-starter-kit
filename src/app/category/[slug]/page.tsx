import Image from "next/image";
import Link from "next/link";

// This would typically come from a database or API
const getCategoryData = (slug: string) => {
  const categories = {
    japandi: {
      name: "Japandi Design",
      description: "Japandi blends the smooth, modern lines of Scandinavian design with the sleek, functional, elegance of the Japanese aesthetic.",
      image: "/images/japandi.jpg",
      products: [
        {
          id: 1,
          name: "Modern Lounge Chair",
          price: 599,
          image: "/images/chair-1.jpg",
          slug: "modern-lounge-chair"
        },
        {
          id: 2,
          name: "Wooden Side Table",
          price: 299,
          image: "/images/table-1.jpg",
          slug: "wooden-side-table"
        },
        // Add more products
      ]
    },
    "dark-colors": {
      name: "Dark Colors in 2024",
      description: "Choosing the right rug for your living space can be hard. It can sometimes feel like you are trying to solve a puzzle. We are here to help you decide what rug is right for your space.",
      image: "/images/dark-colors.jpg",
      products: [
        {
          id: 3,
          name: "Dark Wood Coffee Table",
          price: 499,
          image: "/images/table-2.jpg",
          slug: "dark-wood-coffee-table"
        },
        // Add more products
      ]
    }
  };

  return categories[slug as keyof typeof categories];
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryData(params.slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Category not found</h1>
        <Link href="/shop" className="text-indigo-600 hover:text-indigo-500">
          Return to shop
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-70"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {category.products.map((product) => (
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
      </div>

      {/* Related Categories */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-8">Related Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(getCategoryData(params.slug))
              .filter(([key]) => key !== params.slug)
              .slice(0, 3)
              .map(([slug, cat]) => (
                <Link key={slug} href={`/category/${slug}`}>
                  <div className="group">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 