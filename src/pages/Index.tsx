import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9b0453e4-1d7f-4199-a452-b2c1561a43b2/files/d2870c5c-2943-4586-a70e-9afa50bac2ca.jpg";

const SERVICES = [
  { icon: "Smartphone", title: "Замена экрана", desc: "Оригинальные дисплеи для всех моделей. Восстановим за 1–2 часа.", price: "от 2 500 ₽" },
  { icon: "Battery", title: "Замена аккумулятора", desc: "Устройство снова держит заряд весь день. Гарантия 12 месяцев.", price: "от 1 200 ₽" },
  { icon: "Camera", title: "Ремонт камеры", desc: "Чёткие снимки без пятен и артефактов. Меняем модуль или стекло.", price: "от 1 800 ₽" },
  { icon: "Wifi", title: "Ремонт платы", desc: "Не заряжается, зависает, не ловит сеть — диагностика и ремонт.", price: "от 3 000 ₽" },
  { icon: "Droplets", title: "Восстановление после воды", desc: "Упал в воду? Приносите сразу — каждый час на счету.", price: "от 2 000 ₽" },
  { icon: "Shield", title: "Замена корпуса", desc: "Трещины, сколы, деформации. Телефон снова выглядит как новый.", price: "от 1 500 ₽" },
];

const BRANDS = ["Apple", "Samsung", "Xiaomi", "Huawei", "OPPO", "OnePlus", "Realme", "Vivo", "Apple", "Samsung", "Xiaomi", "Huawei", "OPPO", "OnePlus", "Realme", "Vivo"];

const STEPS = [
  { num: "01", title: "Заявка онлайн", desc: "Опишите проблему или заполните форму диагностики" },
  { num: "02", title: "Оценка мастера", desc: "Перезвоним за 15 минут, назовём точную стоимость" },
  { num: "03", title: "Ремонт", desc: "Работаем быстро: большинство поломок — в день обращения" },
  { num: "04", title: "Готово!", desc: "Проверяем перед выдачей и даём письменную гарантию" },
];

export default function Index() {
  const [diagForm, setDiagForm] = useState({ device: "", problem: "", name: "", phone: "" });
  const [diagSent, setDiagSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleDiag = (e: React.FormEvent) => {
    e.preventDefault();
    setDiagSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-orange to-orange-600 flex items-center justify-center">
              <Icon name="Wrench" size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-wide">
              ФИКС<span className="neon-text-orange">ПРО</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["home", "Главная"], ["services", "Услуги"], ["about", "О нас"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("diagnosis")}
            className="btn-neon hidden md:block px-5 py-2 rounded-xl text-sm font-bold text-white"
          >
            Диагностика бесплатно
          </button>

          <button className="md:hidden text-muted-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden glass-card border-t border-white/5 px-4 py-4 flex flex-col gap-4">
            {[["home", "Главная"], ["services", "Услуги"], ["about", "О нас"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-base font-medium text-foreground/80">
                {label}
              </button>
            ))}
            <button onClick={() => scrollTo("diagnosis")} className="btn-neon px-5 py-3 rounded-xl text-sm font-bold text-white w-full">
              Диагностика бесплатно
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="hero-gradient grid-bg min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 fade-in-up stagger-1">
              <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 block"></span>
              <span className="text-sm text-muted-foreground">Принимаем заявки прямо сейчас</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 fade-in-up stagger-2">
              РЕМОНТ<br />
              <span className="neon-text-orange">ТЕЛЕФОНОВ</span><br />
              <span className="text-3xl sm:text-4xl font-sans font-normal text-muted-foreground">быстро и с гарантией</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed fade-in-up stagger-3">
              Профессиональный сервисный центр. Более 5&nbsp;000 отремонтированных устройств. Работаем с любыми брендами и моделями.
            </p>

            <div className="flex flex-wrap gap-4 fade-in-up stagger-4">
              <button
                onClick={() => scrollTo("diagnosis")}
                className="btn-neon px-8 py-4 rounded-2xl text-base font-bold text-white flex items-center gap-2"
              >
                <Icon name="Zap" size={18} />
                Бесплатная диагностика
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="btn-ghost-neon px-8 py-4 rounded-2xl text-base"
              >
                Все услуги
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 fade-in-up stagger-5">
              {[["5000+", "ремонтов"], ["30 мин", "диагностика"], ["12 мес", "гарантия"]].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-number text-3xl sm:text-4xl neon-text-orange">{num}</div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block fade-in-up stagger-3">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-orange/20 to-transparent blur-3xl"></div>
            <img
              src={HERO_IMAGE}
              alt="Ремонт телефонов"
              className="relative rounded-3xl w-full object-cover aspect-square float-anim"
              style={{ boxShadow: "0 0 60px rgba(255,107,26,0.3), 0 40px 80px rgba(0,0,0,0.5)" }}
            />
            <div className="absolute -bottom-4 -left-4 glass-card neon-border-cyan rounded-2xl px-5 py-4 border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-cyan-400" />
                </div>
                <div>
                  <div className="font-bold text-sm">Срок ремонта</div>
                  <div className="text-xs text-muted-foreground">1–3 часа в большинстве случаев</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="py-4 border-y border-white/5 overflow-hidden bg-secondary/30">
        <div className="ticker-wrap">
          <div className="ticker-track">
            {BRANDS.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-8 text-muted-foreground font-display font-medium tracking-widest text-sm uppercase">
                {b} <span className="neon-text-orange">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium neon-text-cyan uppercase tracking-widest">Что мы чиним</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
              НАШИ <span className="neon-text-orange">УСЛУГИ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card rounded-2xl p-7 cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                  <Icon name={s.icon} size={22} className="text-neon-orange" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold neon-text-orange text-lg">{s.price}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                    <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-neon-orange transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 sm:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium neon-text-cyan uppercase tracking-widest">Просто и понятно</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
              КАК МЫ <span className="neon-text-orange">РАБОТАЕМ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-orange-500/40 to-transparent z-10" style={{ width: "calc(100% - 2rem)" }}></div>
                )}
                <div className="glass-card rounded-2xl p-7 hover:border-orange-500/20 transition-all duration-300">
                  <div className="font-display text-5xl font-bold neon-text-orange mb-4 leading-none" style={{ opacity: 0.3 }}>{step.num}</div>
                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE DIAGNOSIS FORM */}
      <section id="diagnosis" className="py-24 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-sm font-medium neon-text-cyan uppercase tracking-widest">Бесплатно</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
              ОНЛАЙН-<span className="neon-text-orange">ДИАГНОСТИКА</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              Опишите проблему — мастер перезвонит за 15 минут и скажет точную стоимость ремонта
            </p>
          </div>

          {diagSent ? (
            <div className="glass-card neon-border-cyan border rounded-3xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-green-400" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Заявка принята!</h3>
              <p className="text-muted-foreground">Наш мастер свяжется с вами в течение 15 минут. Диагностика бесплатна.</p>
            </div>
          ) : (
            <form onSubmit={handleDiag} className="glass-card rounded-3xl p-8 sm:p-10 space-y-5 border border-white/5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Ваше имя</label>
                  <input
                    required
                    value={diagForm.name}
                    onChange={e => setDiagForm({ ...diagForm, name: e.target.value })}
                    placeholder="Александр"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Телефон</label>
                  <input
                    required
                    value={diagForm.phone}
                    onChange={e => setDiagForm({ ...diagForm, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Модель устройства</label>
                <input
                  required
                  value={diagForm.device}
                  onChange={e => setDiagForm({ ...diagForm, device: e.target.value })}
                  placeholder="iPhone 15 Pro, Samsung Galaxy S24..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Опишите проблему</label>
                <textarea
                  required
                  value={diagForm.problem}
                  onChange={e => setDiagForm({ ...diagForm, problem: e.target.value })}
                  rows={4}
                  placeholder="Разбит экран, не включается, упал в воду, не заряжается..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-neon w-full py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2">
                <Icon name="Zap" size={18} />
                Отправить заявку на диагностику
              </button>

              <p className="text-center text-xs text-muted-foreground/60">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 sm:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium neon-text-cyan uppercase tracking-widest">Кто мы</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">О НАС</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              Мы — команда сертифицированных специалистов с опытом более 8 лет. Специализируемся исключительно на ремонте мобильных устройств, работаем только с оригинальными и сертифицированными компонентами.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Наш сервис оснащён профессиональным оборудованием: микроскопы, паяльные станции, термовоздушные системы. Это позволяет делать ремонт любой сложности — от замены стекла до восстановления материнской платы.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "Award", label: "Сертифицированные мастера", val: "6 специалистов" },
                { icon: "Clock", label: "Режим работы", val: "Пн–Вс 9:00–21:00" },
                { icon: "MapPin", label: "Адрес", val: "ул. Примерная, 1" },
                { icon: "Star", label: "Рейтинг", val: "4.9 / 5 (824 отзыва)" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={item.icon} size={18} className="text-neon-orange" />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                  <div className="font-semibold text-sm">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { num: "8+", label: "лет на рынке" },
              { num: "5 000+", label: "ремонтов выполнено" },
              { num: "99%", label: "довольных клиентов" },
              { num: "12 мес", label: "гарантия на работы" },
            ].map((s, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-8 flex flex-col justify-center ${i === 0 ? "neon-border-orange border" : "border border-white/5"}`}
              >
                <div className="stat-number text-4xl sm:text-5xl neon-text-orange font-bold leading-none mb-2">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium neon-text-cyan uppercase tracking-widest">Мы рядом</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">КОНТАКТЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Phone", label: "Телефон", val: "+7 (999) 123-45-67", sub: "Звоните с 9:00 до 21:00" },
              { icon: "MessageCircle", label: "WhatsApp / Telegram", val: "@fixpro_service", sub: "Ответим в течение 5 минут" },
              { icon: "MapPin", label: "Адрес", val: "ул. Примерная, д. 1", sub: "м. Центральная, 5 мин пешком" },
              { icon: "Clock", label: "Режим работы", val: "Пн–Вс: 9:00–21:00", sub: "Без выходных" },
              { icon: "Mail", label: "E-mail", val: "info@fixpro.ru", sub: "Для официальных обращений" },
              { icon: "Star", label: "Рейтинг", val: "4.9 / 5 ★", sub: "824 отзыва на Яндекс Картах" },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-7 border border-white/5 hover:border-orange-500/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon name={item.icon} size={18} className="text-neon-orange" />
                </div>
                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                <div className="font-bold text-base mb-1">{item.val}</div>
                <div className="text-xs text-muted-foreground/60">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(255,107,26,0.15) 0%, rgba(0,212,255,0.08) 100%)", border: "1px solid rgba(255,107,26,0.3)" }}
          >
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                СЛОМАЛСЯ ТЕЛЕФОН?<br />
                <span className="neon-text-orange">МЫ ПОЧИНИМ!</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-base max-w-md mx-auto">
                Не откладывайте — запишитесь на бесплатную диагностику прямо сейчас
              </p>
              <button
                onClick={() => scrollTo("diagnosis")}
                className="btn-neon px-10 py-5 rounded-2xl text-base font-bold text-white inline-flex items-center gap-2"
              >
                <Icon name="Zap" size={18} />
                Получить бесплатную диагностику
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-neon-orange to-orange-600 flex items-center justify-center">
              <Icon name="Wrench" size={12} className="text-white" />
            </div>
            <span className="font-display font-bold tracking-wide">
              ФИКС<span className="neon-text-orange">ПРО</span>
            </span>
          </div>
          <div className="text-xs text-muted-foreground/50 text-center">
            © 2024 ФиксПро. Профессиональный ремонт телефонов.
          </div>
          <div className="flex gap-5">
            {[["home", "Главная"], ["services", "Услуги"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}