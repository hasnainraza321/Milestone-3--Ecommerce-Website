import { Product } from "@/pages/types"
import React from 'react'

interface ProductCardProps extends Product{
  onAddToCart: (product: Product) => void;

}

const ProductCard: React.FC<ProductCardProps> =({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
 <div className="bg-yellow-500 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
<img src={image} alt={name} 
className="w-full h-56 object-cover rounded-md mb-4 trnsfrom transition-all duration-300 ease-in-out hover:scale-110" />
<h3 className="text-xl font-semibold mb-2">{name}</h3>
<p className="text-lg text-black mb-4">{price}</p>

<button  onClick={() => onAddToCart({id, name, price, image})} className="bg-white text-black font-bold px-4 rounded-lg text-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out">
  Add To Cart
</button>
 </div>
  );
};
export default ProductCard; 