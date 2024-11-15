import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  additionalImages?: string[];
}

export default function ProductCard({ 
  id,
  image, 
  name, 
  price, 
  oldPrice, 
  discount,
  additionalImages = []
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [image, ...additionalImages];
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image
    });
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
              -{discount}%
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{name}</h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-600">${price.toLocaleString()}</span>
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={20} />
            Agregar al carrito
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="relative">
                <img
                  src={allImages[currentImage]}
                  alt={name}
                  className="w-full h-96 object-contain"
                  onClick={nextImage}
                />
                {allImages.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto">
                    {allImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${name} ${index + 1}`}
                        className={`w-20 h-20 object-cover cursor-pointer rounded ${
                          currentImage === index ? 'border-2 border-blue-600' : ''
                        }`}
                        onClick={() => setCurrentImage(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-6">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-bold text-blue-600">
                    ${price.toLocaleString()}
                  </span>
                  {oldPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart size={24} />
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}