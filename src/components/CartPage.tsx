import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();

  const handlePaypalSuccess = (details: any) => {
    alert('¡Pago completado! Gracias por tu compra.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h2>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Carrito de compras</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-blue-600 font-bold">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="p-1 rounded-md hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-md hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 p-1 text-red-500 hover:bg-red-50 rounded-md"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Resumen de compra</h2>
              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${total().toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Envío</span>
                  <span>Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>${total().toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: (total() / 100).toString(),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order!.capture().then(handlePaypalSuccess);
                  }}
                />
              </div>

              <Link
                to="/"
                className="w-full block text-center text-blue-600 mt-4 hover:underline"
              >
                Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}