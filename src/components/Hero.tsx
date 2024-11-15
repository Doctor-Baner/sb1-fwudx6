import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80"
          alt="Technology Banner"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">
            Tecnología de última generación
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Descubre nuestra amplia selección de productos tecnológicos al mejor precio. 
            Envíos a todo el país y garantía oficial.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Ver ofertas
          </button>
        </div>
      </div>
    </div>
  );
}