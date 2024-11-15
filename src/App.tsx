import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartPage from './components/CartPage';
import CategoryPage from './components/CategoryPage';
import AuthForm from './components/AuthForm';

const featuredProducts = [
  {
    id: 'feat1',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80',
    name: 'Monitor Gaming Ultra Wide 34" QHD 144Hz',
    price: 499999,
    oldPrice: 599999,
    discount: 17,
    additionalImages: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'feat2',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80',
    name: 'Laptop Gamer RTX 4070 32GB RAM',
    price: 1299999,
    oldPrice: 1499999,
    discount: 13,
    additionalImages: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'feat3',
    image: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80',
    name: 'Teclado Mecánico RGB Switch Blue',
    price: 89999,
    additionalImages: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595225476361-e0617e5c0c41?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'feat4',
    image: 'https://images.unsplash.com/photo-1600375104627-c94c416deefa?auto=format&fit=crop&q=80',
    name: 'Mouse Gaming Inalámbrico 20000 DPI',
    price: 69999,
    oldPrice: 79999,
    discount: 12,
    additionalImages: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80'
    ]
  },
  // More products for horizontal scroll
  {
    id: 'feat5',
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?auto=format&fit=crop&q=80',
    name: 'Auriculares Gaming 7.1',
    price: 129999,
    oldPrice: 149999,
    discount: 15,
  },
  {
    id: 'feat6',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80',
    name: 'Webcam 4K Pro',
    price: 79999,
    oldPrice: 99999,
    discount: 20,
  }
];

function HomePage() {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Productos Destacados
        </h2>
        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-[280px]">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda?</h2>
          <p className="text-lg mb-6">
            Nuestro equipo de expertos está disponible para asesorarte en tu
            compra
          </p>
          <a 
            href="https://wa.me/50577755284?text=Hola%20quiero%20mas%20informacion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar ahora
          </a>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <PayPalScriptProvider options={{ 
      "client-id": "test", // Replace with your PayPal client ID
      currency: "USD"
    }}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <CategoryBar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/auth" element={<AuthForm />} />
          </Routes>

          <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">TechVenta</h3>
                  <p className="text-gray-400">
                    Tu tienda de confianza para productos tecnológicos
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contacto</h3>
                  <p className="text-gray-400">
                    Email: ventas@techventa.com
                    <br />
                    Tel: (123) 456-7890
                    <br />
                    Dirección: Av. Tecnología 123
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Horario</h3>
                  <p className="text-gray-400">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 9:00 - 13:00
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                © 2024 TechVenta. Todos los derechos reservados.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;