// components/SpecialsMenu.jsx (Updated)
import React from 'react';

const specialItems = [
  {
    name: "Chef's Special Pizza",
    price: 22.99,
    description: "Premium toppings with truffle oil",
    image: "https://assets.grok.com/users/cac4ed01-e6bc-43c7-9315-bee7b5d61da2/generated/2RPED10c9HmJARur/image.jpg",
    highlight: true
  },
  {
    name: "Seasonal Salad",
    price: 12.99,
    description: "Fresh seasonal ingredients",
    image: "https://assets.grok.com/users/cac4ed01-e6bc-43c7-9315-bee7b5d61da2/generated/91XwUu0LYXLUkAOg/image.jpg",
    highlight: false
  }
];

function SpecialsMenu() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-amber-600 mb-8 text-center relative">
        Daily Specials
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-400 rounded"></span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {specialItems.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
              item.highlight ? 'bg-amber-50 border-2 border-amber-400' : 'bg-white'
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-medium text-gray-800">{item.name}</h4>
                <p className="text-gray-600 text-sm italic">{item.description}</p>
              </div>
              <span className="text-xl font-semibold text-amber-600">${item.price}</span>
            </div>
            {item.highlight && (
              <span className="inline-block mt-3 px-3 py-1 text-sm text-white bg-amber-500 rounded-full">
                Chef's Choice
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialsMenu;