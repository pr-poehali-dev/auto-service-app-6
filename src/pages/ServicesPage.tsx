import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const categories = [
  { id: 'all', label: 'Все услуги' },
  { id: 'maintenance', label: 'ТО' },
  { id: 'repair', label: 'Ремонт' },
  { id: 'diagnostics', label: 'Диагностика' },
  { id: 'wheels', label: 'Шины' },
];

const services = [
  { id: 1, cat: 'maintenance', icon: 'Droplets', name: 'Замена масла и фильтра', desc: 'Замена моторного масла с фильтром и проверка уровней', price: 'от 800 ₽', duration: '30–45 мин', popular: true },
  { id: 2, cat: 'maintenance', icon: 'Settings', name: 'Плановое ТО', desc: 'Полное обслуживание по регламенту производителя', price: 'от 3 500 ₽', duration: '2–4 часа', popular: true },
  { id: 3, cat: 'maintenance', icon: 'Wind', name: 'Заправка кондиционера', desc: 'Диагностика системы кондиционирования и заправка фреоном', price: 'от 1 500 ₽', duration: '45–60 мин', popular: false },
  { id: 4, cat: 'repair', icon: 'Disc', name: 'Замена тормозных колодок', desc: 'Замена передних или задних тормозных колодок', price: 'от 1 200 ₽', duration: '1–2 часа', popular: true },
  { id: 5, cat: 'repair', icon: 'Car', name: 'Ремонт подвески', desc: 'Замена амортизаторов, рычагов, шаровых и сайлентблоков', price: 'от 2 000 ₽', duration: '2–6 часов', popular: false },
  { id: 6, cat: 'repair', icon: 'Zap', name: 'Ремонт электрики', desc: 'Диагностика и ремонт электрооборудования', price: 'от 1 000 ₽', duration: '1–3 часа', popular: false },
  { id: 7, cat: 'diagnostics', icon: 'Activity', name: 'Компьютерная диагностика', desc: 'Полная диагностика всех систем автомобиля', price: 'от 1 000 ₽', duration: '30–60 мин', popular: true },
  { id: 8, cat: 'diagnostics', icon: 'Search', name: 'Диагностика ходовой', desc: 'Проверка состояния подвески и рулевого управления', price: 'от 800 ₽', duration: '30–45 мин', popular: false },
  { id: 9, cat: 'wheels', icon: 'RotateCcw', name: 'Шиномонтаж', desc: 'Замена, балансировка и хранение шин', price: 'от 1 200 ₽', duration: '30–60 мин', popular: true },
  { id: 10, cat: 'wheels', icon: 'Gauge', name: 'Развал-схождение', desc: 'Регулировка углов установки колёс', price: 'от 1 500 ₽', duration: '45–60 мин', popular: false },
];

const packages = [
  {
    name: 'Базовый',
    icon: 'Star',
    price: '3 900 ₽',
    color: 'border-gray-200 bg-white',
    badge: '',
    items: ['Замена масла и фильтра', 'Проверка тормозной системы', 'Диагностика ходовой', 'Проверка уровней жидкостей', 'Осмотр подвески'],
  },
  {
    name: 'Стандарт',
    icon: 'Zap',
    price: '7 500 ₽',
    color: 'border-blue-500 bg-blue-600',
    badge: 'Популярный',
    items: ['Всё из Базового', 'Компьютерная диагностика', 'Замена воздушного фильтра', 'Проверка аккумулятора', 'Проверка тормозных колодок', 'Регулировка клапанов'],
  },
  {
    name: 'Премиум',
    icon: 'Crown',
    price: '14 900 ₽',
    color: 'border-orange-400 bg-white',
    badge: 'Полное ТО',
    items: ['Всё из Стандарт', 'Замена тормозных колодок', 'Замена фильтра салона', 'Замена свечей зажигания', 'Промывка инжекторов', 'Обработка кузова'],
  },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' ? services : services.filter(s => s.cat === activeCategory);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0D1117] to-[#0D2447] py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">УСЛУГИ И ЦЕНЫ</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Профессиональный ремонт и обслуживание. Цены фиксированные — без сюрпризов.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Packages */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4">Пакеты обслуживания</div>
            <h2 className="font-display text-3xl font-bold text-gray-900">ВЫБЕРИТЕ ПАКЕТ ТО</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const isPrimary = pkg.color.includes('bg-blue-600');
              const isOrange = pkg.badge === 'Полное ТО';
              return (
                <div key={pkg.name} className={`rounded-3xl border-2 ${pkg.color} p-8 relative overflow-hidden card-hover`}>
                  {pkg.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${isPrimary ? 'bg-white/20 text-white' : isOrange ? 'bg-orange-500 text-white' : 'bg-blue-50 text-blue-600'}`}>
                      {pkg.badge}
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${isPrimary ? 'bg-white/20' : 'grad-primary'}`}>
                    <Icon name={pkg.icon as 'Star'} size={22} className={isPrimary ? 'text-white' : 'text-white'} />
                  </div>
                  <div className={`font-display text-2xl font-bold mb-2 ${isPrimary ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</div>
                  <div className={`text-3xl font-bold mb-6 ${isPrimary ? 'text-white' : 'text-blue-600'}`}>{pkg.price}</div>
                  <ul className="space-y-2.5 mb-8">
                    {pkg.items.map((item, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-600'}`}>
                        <Icon name="Check" size={16} className={isPrimary ? 'text-blue-200' : 'text-green-500'} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate('booking')}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                      isPrimary
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : isOrange
                        ? 'grad-accent text-white btn-orange-glow'
                        : 'grad-primary text-white btn-glow'
                    }`}
                  >
                    Записаться
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* All services */}
        <div>
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">ВСЕ УСЛУГИ</h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id ? 'grad-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(s => (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4 card-hover">
                <div className="w-12 h-12 rounded-xl grad-primary flex items-center justify-center flex-shrink-0">
                  <Icon name={s.icon as 'Droplets'} size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-semibold text-gray-800">{s.name}</div>
                    {s.popular && (
                      <span className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 text-xs font-medium">Популярное</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">{s.desc}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-bold text-blue-600">{s.price}</span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Icon name="Clock" size={13} />
                        {s.duration}
                      </span>
                    </div>
                    <button
                      onClick={() => onNavigate('booking')}
                      className="px-4 py-1.5 rounded-xl bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-100 transition-colors"
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
