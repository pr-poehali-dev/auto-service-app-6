import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/dda27e4c-d622-4880-96cd-2d7b52a37809/files/bea86b18-23ad-4325-b2be-b7127897bf8f.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '12+', label: 'Лет опыта' },
  { value: '5000+', label: 'Довольных клиентов' },
  { value: '98%', label: 'Положительных отзывов' },
  { value: '50+', label: 'Видов работ' },
];

const advantages = [
  { icon: 'ShieldCheck', title: 'Гарантия качества', desc: 'Даём гарантию на все виды работ и используемые запчасти' },
  { icon: 'Clock', title: 'Точно в срок', desc: 'Соблюдаем обговорённые сроки — ваше время ценно для нас' },
  { icon: 'BadgeCheck', title: 'Оригинальные запчасти', desc: 'Используем только оригинальные и сертифицированные детали' },
  { icon: 'Smartphone', title: 'Онлайн-запись', desc: 'Записывайтесь в любое время через личный кабинет' },
  { icon: 'Bell', title: 'Уведомления', desc: 'SMS и push-уведомления о статусе вашего автомобиля' },
  { icon: 'BarChart2', title: 'Прозрачные цены', desc: 'Фиксированные цены без скрытых доплат и сюрпризов' },
];

const services = [
  { icon: 'Droplets', name: 'Замена масла', price: 'от 800 ₽', color: 'bg-blue-50 text-blue-600' },
  { icon: 'Disc', name: 'Тормозная система', price: 'от 2 500 ₽', color: 'bg-orange-50 text-orange-600' },
  { icon: 'Zap', name: 'Диагностика', price: 'от 1 000 ₽', color: 'bg-green-50 text-green-600' },
  { icon: 'Wind', name: 'Кондиционер', price: 'от 1 500 ₽', color: 'bg-purple-50 text-purple-600' },
  { icon: 'Settings', name: 'ТО плановое', price: 'от 3 500 ₽', color: 'bg-indigo-50 text-indigo-600' },
  { icon: 'Car', name: 'Подвеска', price: 'от 1 200 ₽', color: 'bg-rose-50 text-rose-600' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden grad-hero">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/80 to-transparent" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-20 right-40 w-60 h-60 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              г. Новосибирск — ул. Плотинная, 1Б
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              АВТО<span className="text-grad-orange">СПЕКТР</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Профессиональный автосервис в Новосибирске. Диагностика, ТО, ремонт любой сложности — всё под одной крышей.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('booking')}
                className="px-8 py-4 rounded-2xl grad-accent text-white font-semibold text-lg btn-orange-glow transition-all"
              >
                Записаться онлайн
              </button>
              <a
                href="tel:+79132034981"
                className="px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Icon name="Phone" size={20} />
                +7 913 203-49-81
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">Наши услуги</div>
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">ПОПУЛЯРНЫЕ РАБОТЫ</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Полный спектр технического обслуживания и ремонта любых автомобилей</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 card-hover shadow-sm cursor-pointer" onClick={() => onNavigate('services')}>
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                <Icon name={s.icon as 'Droplets'} size={22} />
              </div>
              <div className="font-semibold text-gray-800 mb-1">{s.name}</div>
              <div className="text-sm font-bold text-blue-600">{s.price}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('services')}
            className="px-8 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            Все услуги и цены
          </button>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#0D1117] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/40 text-blue-400 text-sm font-semibold mb-4">Почему мы</div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">НАШИ ПРЕИМУЩЕСТВА</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all card-hover">
                <div className="w-12 h-12 rounded-xl grad-primary flex items-center justify-center mb-4">
                  <Icon name={a.icon as 'ShieldCheck'} size={22} className="text-white" />
                </div>
                <div className="font-semibold text-white text-lg mb-2">{a.title}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative rounded-3xl overflow-hidden grad-primary p-10 md:p-16 text-center">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/3" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">ЗАПИШИТЕСЬ СЕЙЧАС</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Онлайн-запись за 2 минуты. Подберём удобное время и напомним о визите.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('booking')}
                className="px-10 py-4 rounded-2xl bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
              >
                Записаться онлайн
              </button>
              <a
                href="tel:+79132034981"
                className="px-10 py-4 rounded-2xl border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
