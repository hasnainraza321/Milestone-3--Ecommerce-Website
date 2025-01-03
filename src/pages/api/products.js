export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Spicy Pepperoni Pizza",
            price: 149, // Corrected syntax
            image: "https://i.pinimg.com/736x/3f/d6/e8/3fd6e8dac810890aab944aa77b380665.jpg", // Changed to 'image'
        },
        {
            id: 2,
            name: "Cheesy Garlic Pizza",
            price: 149,
            image: "https://i.pinimg.com/236x/f2/99/96/f29996790936260eb1879226910d09b3.jpg",
        },
        {
            id: 3,
            name: "Classic Margherita Pizza",
            price: 149,
            image: "https://i.pinimg.com/236x/0c/b0/57/0cb05762415e64d86d01975b7bf510b2.jpg",
        },
        {
            id: 4,
            name: "Veggie Supreme Pizza",
            price: 149,
            image: "https://i.pinimg.com/236x/7f/15/d1/7f15d1ca5907819e607f2166445e87a2.jpg",
        },
        {
            id: 5,
            name: "BBQ Chicken Pizza",
            price: 149,
            image: "https://i.pinimg.com/236x/7a/f1/da/7af1daa3b7bf442bd3200fd7e3eaa2b4.jpg",
        },
        {
            id: 6,
            name: "Meat Lover's Pizza",
            price: 149,
            image: "https://i.pinimg.com/236x/3d/de/49/3dde496586cf51a2d6f6fb87bdab76db.jpg",
        },
    ];
    res.status(200).json(products);
}
