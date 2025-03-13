import Image from "next/image";
import Link from "next/link";

// This would typically come from a database or API
const getProductData = (slug: string) => {
  return {
    id: 1,
    name: "Modern Lounge Chair",
    price: 599,
    description: "Experience ultimate comfort with our Modern Lounge Chair. Featuring a sleek Scandinavian design with Japanese-inspired minimalism, this chair is perfect for any contemporary living space. The ergonomic design ensures proper posture while the premium upholstery adds a touch of luxury.",
    images: [
      "/images/chair-1.jpg",
      "/images/chair-2.jpg",
      "/images/chair-3.jpg"
    ],
    features: [
      "Ergonomic design for optimal comfort",
      "Premium quality upholstery",
      "Solid wood frame",
      "Easy assembly",
      "Available in multiple colors"
    ],
    specs: {
      dimensions: "30\" x 32\" x 34\"",
      weight: "45 lbs",
      materials: "Solid oak, premium fabric",
      colors: ["Sage Green", "Charcoal", "Cream"]
    },
    category: "Chairs",
    affiliateLink: "https://example.com/buy-chair"
  };
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductData(params.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/shop" className="hover:text-gray-900">Shop</Link></li>
              <li>/</li>
              <li><Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-gray-900">{product.category}</Link></li>
              <li>/</li>
              <li className="text-gray-900">{product.name}</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-8">${product.price}</p>
          
          <div className="prose prose-lg mb-8">
            <p>{product.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <dl className="grid grid-cols-1 gap-4">
              <div>
                <dt className="font-medium text-gray-500">Dimensions</dt>
                <dd>{product.specs.dimensions}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Weight</dt>
                <dd>{product.specs.weight}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Materials</dt>
                <dd>{product.specs.materials}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Available Colors</dt>
                <dd>{product.specs.colors.join(", ")}</dd>
              </div>
            </dl>
          </div>

          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-block text-center"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
} 