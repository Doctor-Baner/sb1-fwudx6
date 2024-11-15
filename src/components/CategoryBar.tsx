import { Monitor, Cpu, Smartphone, Headphones, HardDrive } from 'lucide-react';

const categories = [
  { name: 'Monitores', icon: Monitor, id: 'monitors' },
  { name: 'Procesadores', icon: Cpu, id: 'processors' },
  { name: 'Celulares', icon: Smartphone, id: 'phones' },
  { name: 'Audio', icon: Headphones, id: 'audio' },
  { name: 'Almacenamiento', icon: HardDrive, id: 'storage' },
];

export default function CategoryBar() {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => scrollToCategory(category.id)}
              className="flex flex-col items-center min-w-[100px] px-4 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all"
            >
              <category.icon className="text-blue-600 mb-1" size={24} />
              <span className="text-sm text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}