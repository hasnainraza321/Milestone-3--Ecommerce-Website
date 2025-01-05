
export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "BBQ Chicken Pizza",
            price: 149, // Corrected syntax
            image: "/images/BBQ Chicken Pizza.png", // Changed to 'image'
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
    res.status(200).json(products);
}