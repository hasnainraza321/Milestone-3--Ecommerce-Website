// src/app/api/products/route.ts

export async function GET() {
  const products = [
    {
      id: 1,
      name: "BBQ Chicken Pizza",
      price: 149,
      image: "/images/BBQ Chicken Pizza.png",
    },
    {
      id: 2,
      name: "Cheese Lover Pizza",
      price: 149,
      image: "/images/Cheese Lover Pizza.png",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      price: 149,
      image: "/images/Margherita Pizza.png",
    },
    {
      id: 4,
      name: "Sicilian Pizza",
      price: 149,
      image: "/images/Sicilian Pizza.png",
    },
    {
      id: 5,
      name: "Pepperoni Pizza",
      price: 149,
      image: "/images/Pepperoni Pizza.png",
    },
    {
      id: 6,
      name: "Veggie Pizza",
      price: 149,
      image: "/images/Veggie Pizza.png",
    },
  ];
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
