// components/MainMenu.jsx (Updated)
import React from 'react';

const menuItems = [
  {
    category: "Starters",
    items: [
      {
        name: "Allo tikki",
        price: 5.99,
        description: "Toasted with fresh garlic and herbs",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Paneer",
        price: 7.99,
        description: "Fresh tomatoes on crispy bread",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Allo tikki",
        price: 5.99,
        description: "Toasted with fresh garlic and herbs",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Allo tikki",
        price: 5.99,
        description: "Toasted with fresh garlic and herbs",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },{
        name: "Allo tikki",
        price: 5.99,
        description: "Toasted with fresh garlic and herbs",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },{
        name: "Allo tikki",
        price: 5.99,
        description: "Toasted with fresh garlic and herbs",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },{
        name: "Allo tikki",
        price: 5.99,
        description: "Toasted with fresh garlic and herbs",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },
    ]
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Grilled Salmon",
        price: 18.99,
        description: "Served with lemon butter sauce",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Pasta icecream",
        price: 14.99,
        description: "Fresh vegetables in creamy sauce",
        // image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      },
    ]
  }
];

function MainMenu() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-amber-600 mb-8 text-center relative">
        Main Menu
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-400 rounded"></span>
      </h2>
      
      {menuItems.map((category, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">🍽️</span>{category.category}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainMenu;