import Icon from '@/components/ui/icon';

const workHours = [
  { day: 'Понедельник', hours: '9:00 – 19:00', open: true },
  { day: 'Вторник', hours: '9:00 – 19:00', open: true },
  { day: 'Среда', hours: '9:00 – 19:00', open: true },
  { day: 'Четверг', hours: '9:00 – 19:00', open: true },
  { day: 'Пятница', hours: '9:00 – 19:00', open: true },
  { day: 'Суббота', hours: '9:00 – 17:00', open: true },
  { day: 'Воскресенье', hours: 'Выходной', open: false },
];

export default function ContactsPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0D1117] to-[#0D2447] py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">КОНТАКТЫ</h1>
          <p className="text-gray-400 text-lg">Мы находимся в Новосибирске и готовы принять вас!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon name="MapPin" size={22} className="text-blue-600" />
                </div>
                <div className="font-semibold text-lg text-gray-800">Адрес</div>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <div className="font-medium text-gray-800 text-lg">г. Новосибирск</div>
                <div>ул. Плотинная, 1Б</div>
                <div className="text-sm text-gray-400 mt-1">вход через «Родные масла»</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Icon name="Phone" size={22} className="text-orange-500" />
                </div>
                <div className="font-semibold text-lg text-gray-800">Телефон</div>
              </div>
              <a
                href="tel:+79132034981"
                className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors"
              >
                +7 913 203-49-81
              </a>
              <div className="text-sm text-gray-400 mt-1">Звоните в рабочее время</div>
              <a
                href="tel:+79132034981"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl grad-accent text-white font-semibold text-sm btn-orange-glow"
              >
                <Icon name="Phone" size={16} />
                Позвонить сейчас
              </a>
            </div>

            {/* Work hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <Icon name="Clock" size={22} className="text-green-600" />
                </div>
                <div className="font-semibold text-lg text-gray-800">Режим работы</div>
              </div>
              <div className="space-y-2">
                {workHours.map((wh) => (
                  <div key={wh.day} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 text-sm">{wh.day}</span>
                    <span className={`text-sm font-semibold ${wh.open ? 'text-gray-800' : 'text-red-400'}`}>{wh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map & Info */}
          <div className="space-y-4">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-72 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 stripe-bg" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full grad-primary flex items-center justify-center mx-auto mb-3 shadow-xl">
                  <Icon name="MapPin" size={30} className="text-white" />
                </div>
                <div className="font-display text-xl font-bold text-gray-700 mb-1">АВТОСПЕКТР</div>
                <div className="text-gray-500 text-sm">ул. Плотинная, 1Б</div>
                <a
                  href="https://yandex.ru/maps/?text=Новосибирск+Плотинная+1Б"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl grad-primary text-white text-sm font-medium btn-glow"
                >
                  <Icon name="ExternalLink" size={14} />
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>

            {/* How to find */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Icon name="Navigation" size={18} className="text-blue-500" />
                Как найти нас
              </div>
              <div className="space-y-3">
                {[
                  { icon: 'Car', text: 'На автомобиле: въезд с ул. Плотинной, ориентир — магазин «Родные масла»' },
                  { icon: 'Bus', text: 'На транспорте: остановка «Плотинная», маршруты 1, 3, 18, 45' },
                  { icon: 'ParkingCircle', text: 'Парковка: бесплатная стоянка для клиентов перед сервисом' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as 'Car'} size={15} className="text-blue-500" />
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white text-center card-hover cursor-pointer">
                <Icon name="CalendarCheck" size={28} className="mx-auto mb-2" />
                <div className="font-semibold text-sm">Онлайн запись</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-white text-center card-hover">
                <a href="tel:+79132034981" className="flex flex-col items-center">
                  <Icon name="Phone" size={28} className="mb-2" />
                  <div className="font-semibold text-sm">Позвонить</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
