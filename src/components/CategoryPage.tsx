import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const categoryProducts = {
  monitors: [
    {
      id: 'mon1',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80',
      name: 'Monitor Gaming Ultra Wide 34" QHD 144Hz',
      price: 499999,
      oldPrice: 599999,
      discount: 17,
    },
    {
      id: 'mon2',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80',
      name: 'Monitor 27" 4K IPS HDR',
      price: 399999,
      oldPrice: 449999,
      discount: 11,
    },
  ],
  processors: [
    {
      id: 'cpu1',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80',
      name: 'Procesador Intel Core i9 13900K',
      price: 599999,
      oldPrice: 699999,
      discount: 14,
    },
    {
      id: 'cpu2',
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80',
      name: 'Procesador AMD Ryzen 9 7950X',
      price: 549999,
      oldPrice: 629999,
      discount: 13,
    },
  ],
  phones: [
    {
      id: 'phone1',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80',
      name: 'Smartphone Galaxy S24 Ultra',
      price: 999999,
      oldPrice: 1199999,
      discount: 17,
    },
    {
      id: 'phone2',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80',
      name: 'iPhone 15 Pro Max',
      price: 1099999,
      oldPrice: 1299999,
      discount: 15,
    },
  ],
  audio: [
    {
      id: 'audio1',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80',
      name: 'Audífonos Inalámbricos Pro',
      price: 199999,
      oldPrice: 249999,
      discount: 20,
    },
    {
      id: 'audio2',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80',
      name: 'Parlante Bluetooth Premium',
      price: 149999,
      oldPrice: 179999,
      discount: 17,
    },
  ],
  storage: [
    {
      id: 'storage1',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80',
      name: 'SSD NVMe 2TB',
      price: 199999,
      oldPrice: 249999,
      discount: 20,
    },
    {
      id: 'storage2',
      image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&q=80',
      name: 'Disco Duro Externo 5TB',
      price: 149999,
      oldPrice: 179999,
      discount: 17,
    },
  ],
};

const categoryTitles: { [key: string]: string } = {
  monitors: 'Monitores',
  processors: 'Procesadores',
  phones: 'Celulares',
  audio: 'Audio',
  storage: 'Almacenamiento',
};

export default function CategoryPage() {
  const { category } = useParams<{ category: keyof typeof categoryProducts }>();
  const products = category ? categoryProducts[category] : [];
  const title = category ? categoryTitles[category] : '';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}