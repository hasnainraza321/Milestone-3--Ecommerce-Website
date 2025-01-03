"use client";
import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: 'Happy Hour',
      description: "Get 50% off on all drinks from 5 PM to 7 PM",
    },
    {
      title: 'Family Meal Deal',
      description: "Enjoy a delicious meal for the whole family with 2 large pizzas, 4 drinks, and a dessert for just $29.99!",
    },
    {
      title: 'Weekly Brunch',
      description: "Indulge in our delightful Weekly Brunch with a variety of dishes and drinks to kickstart your weekend",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-yellow-500 shadow-lg rounded-lg text-center hover:bg-white transition duration-300 transform hover:scale-105 p-5"
            >
              <h3 className="text-2xl font-bold text-black">{offer.title}</h3>
              <p className="text-black mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
