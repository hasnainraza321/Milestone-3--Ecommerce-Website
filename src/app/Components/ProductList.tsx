import React from "react";
import Image from "next/image";

const products = [
  {
    id: "1",
    title: "Sicilian pizza",
    category: "Fixing",
    price: "2,000",
    image: "/images/Sicilian Pizza.png",
    bgColor: "bg-yellow-500",
  },
  {
    id: "2",
    title: "Four cheese pizza",
    category: "Classic",
    price: "3,000",
    image: "/images/Four cheese pizza.png",
    bgColor: "bg-yellow-500",
  },
  {
    id: "3",
    title: "Greek pizza",
    category: "Family",
    price: "4,000 ",
    image: "/images/Greek pizza.jpg",
    bgColor: "bg-yellow-500",
  },
];

  const ProductList = () => {
  return (
    <div className="p-4 flex flex-wrap items-center justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className={`m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out`}
        >
          {/* Product Image */}
          <div className="flex justify-center items-center p-6">
            <Image
              className="w-82 h-82 object-cover rounded-lg transition-transform transform hover:scale-110 ease-in-out duration-300"
              src={product.image}
              alt={product.title}
              width={300} // Set appropriate width
              height={300} // Set appropriate height
            />
          </div>

          {/* Product Details */}
          <div className="p-4 text-center">
            <span className="block text-black text-xl font-bold opacity-75">
              {product.category}
            </span>
            <h3 className="text-xl font-extrabold text-black">{product.title}</h3>
            <span className="block mt-2 text-black bg-white hover:bg-orange-500 text-sm font-bold px-4 py-2 rounded-full">
              {product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
