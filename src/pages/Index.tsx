import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9b0453e4-1d7f-4199-a452-b2c1561a43b2/files/d2870c5c-2943-4586-a70e-9afa50bac2ca.jpg";
const BG_IMAGE = "https://cdn.poehali.dev/projects/9b0453e4-1d7f-4199-a452-b2c1561a43b2/files/64dcba1f-5d3a-4028-b7af-8626a67807ba.jpg";

const PHONE = "+79817540406";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
const EMAIL = "mobileacsess@yandex.ru";
const MAIL_LINK = `mailto:${EMAIL}`;

const SERVICES = [
  { icon: "Smartphone", title: "Ремонт телефонов", desc: "Замена экрана, аккумулятора, камеры, платы. Работаем со всеми брендами.", price: "от 1 200 ₽" },
  { icon: "Tablet", title: "Ремонт планшетов", desc: "iPad, Samsung, Huawei и другие. Дисплеи, зарядные порты, аккумуляторы.", price: "от 1 500 ₽" },
  { icon: "Laptop", title: "Ремонт ноутбуков", desc: "Замена матриц, клавиатур, SSD, чистка и замена термопасты.", price: "от 1 800 ₽" },
  { icon: "Lock", title: "Снятие блокировок", desc: "iCloud, Google, FRP, графический ключ, забытый пароль. Быстро и надёжно.", price: "от 800 ₽" },
  { icon: "Battery", title: "Замена аккумулятора", desc: "Устройство снова держит заряд весь день. Гарантия 12 месяцев.", price: "от 1 000 ₽" },
  { icon: "Droplets", title: "Ремонт после воды", desc: "Упал в воду? Приносите сразу — каждый час на счету.", price: "от 2 000 ₽" },
];

const BRANDS = ["Apple", "Samsung", "Xiaomi", "Huawei", "OPPO", "Lenovo", "Asus", "Acer", "Apple", "Samsung", "Xiaomi", "Huawei", "OPPO", "Lenovo", "Asus", "Acer"];

const STEPS = [
  { num: "01", title: "Заявка онлайн", desc: "Заполните форму или напишите в WhatsApp / на почту" },
  { num: "02", title: "Оценка мастера", desc: "Перезвоним в течение 15 минут и назовём стоимость" },
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
    const text = encodeURIComponent(
      `Заявка с сайта MobileAccess\nИмя: ${diagForm.name}\nТелефон: ${diagForm.phone}\nУстройство: ${diagForm.device}\nПроблема: ${diagForm.problem}`
    );
    window.location.href = `${MAIL_LINK}?subject=Заявка на диагностику от ${diagForm.name}&body=${text}`;
    setDiagSent(true);
  };

  return (
    <div className="min-h-screen text-foreground font-sans" style={{ background: "#0d0d0d" }}>

      {/* FIXED BG */}
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 z-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,21,27,0.15) 0%, transparent 60%), rgba(0,0,0,0.6)" }} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e8151b, #7a0a0c)" }}>
              <Icon name="Wrench" size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-wide">
              Mobile<span className="neon-text-red">Access</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["home", "Главная"], ["services", "Услуги"], ["about", "О нас"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
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
          <div className="md:hidden border-t border-white/5 px-4 py-4 flex flex-col gap-4" style={{ background: "rgba(10,10,10,0.95)" }}>
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
      <section id="home" className="relative z-10 min-h-screen flex items-center pt-16 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 fade-in-up stagger-1 border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
              <span className="pulse-dot w-2 h-2 rounded-full bg-red-500 block"></span>
              <span className="text-sm text-muted-foreground">Принимаем заявки прямо сейчас</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 fade-in-up stagger-2">
              РЕМОНТ<br />
              <span className="neon-text-red">ТЕХНИКИ</span><br />
              <span className="text-3xl sm:text-4xl font-sans font-normal text-muted-foreground">быстро и с гарантией</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed fade-in-up stagger-3">
              Телефоны, планшеты, ноутбуки. Снятие блокировок. Красное село, ул. Ленина 51 — 1 этаж, павильон 1.13
            </p>

            <div className="flex flex-wrap gap-4 fade-in-up stagger-4">
              <button
                onClick={() => scrollTo("diagnosis")}
                className="btn-neon px-8 py-4 rounded-2xl text-base font-bold text-white flex items-center gap-2"
              >
                <Icon name="Zap" size={18} />
                Бесплатная диагностика
              </button>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-neon px-8 py-4 rounded-2xl text-base flex items-center gap-2"
              >
                <Icon name="MessageCircle" size={18} />
                WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 fade-in-up stagger-5">
              {[["5000+", "ремонтов"], ["30 мин", "диагностика"], ["12 мес", "гарантия"]].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-number text-3xl sm:text-4xl neon-text-red">{num}</div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block fade-in-up stagger-3">
            <div className="absolute inset-0 rounded-3xl blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(232,21,27,0.25), transparent)" }}></div>
            <img
              src={HERO_IMAGE}
              alt="Ремонт телефонов MobileAccess"
              className="relative rounded-3xl w-full object-cover aspect-square float-anim"
              style={{ boxShadow: "0 0 60px rgba(232,21,27,0.35), 0 40px 80px rgba(0,0,0,0.6)" }}
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-4 border neon-border-red" style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(20px)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(232,21,27,0.15)" }}>
                  <Icon name="Clock" size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="font-bold text-sm">Время работы</div>
                  <div className="text-xs text-muted-foreground">Пн–Вс: 10:00–21:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="relative z-10 py-4 border-y border-white/5 overflow-hidden" style={{ background: "rgba(232,21,27,0.06)" }}>
        <div className="ticker-wrap">
          <div className="ticker-track">
            {BRANDS.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-8 text-muted-foreground font-display font-medium tracking-widest text-sm uppercase">
                {b} <span className="neon-text-red">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium neon-text-red uppercase tracking-widest">Что мы чиним</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
              НАШИ <span className="neon-text-red">УСЛУГИ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card rounded-2xl p-7 cursor-pointer group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:opacity-100 transition-all border" style={{ background: "rgba(232,21,27,0.1)", borderColor: "rgba(232,21,27,0.2)" }}>
                  <Icon name={s.icon} size={22} className="text-red-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold neon-text-red text-lg">{s.price}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500/50 transition-colors">
                    <Icon name="ArrowRight" size={14} className="text-muted-foreground group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 py-24 px-4 sm:px-8" style={{ background: "rgba(232,21,27,0.03)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium neon-text-red uppercase tracking-widest">Просто и понятно</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
              КАК МЫ <span className="neon-text-red">РАБОТАЕМ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="glass-card rounded-2xl p-7 border border-white/5 hover:border-red-500/20 transition-all duration-300">
                <div className="font-display text-5xl font-bold leading-none mb-4" style={{ color: "rgba(232,21,27,0.35)" }}>{step.num}</div>
                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSIS FORM */}
      <section id="diagnosis" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-sm font-medium neon-text-red uppercase tracking-widest">Бесплатно</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
              ОНЛАЙН-<span className="neon-text-red">ДИАГНОСТИКА</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              Заявка придёт на почту mobileacsess@yandex.ru — ответим в течение 15 минут
            </p>
          </div>

          {diagSent ? (
            <div className="glass-card neon-border-red border rounded-3xl p-12 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}>
                <Icon name="CheckCircle" size={32} className="text-green-400" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Заявка отправлена!</h3>
              <p className="text-muted-foreground">Письмо открыто в вашей почте. Мы ответим на mobileacsess@yandex.ru в течение 15 минут.</p>
              <div className="flex gap-4 justify-center mt-6">
                <a href={MAIL_LINK} className="btn-neon px-6 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  Написать на почту
                </a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost-neon px-6 py-3 rounded-xl text-sm flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  WhatsApp
                </a>
              </div>
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
                    className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Телефон</label>
                  <input
                    required
                    value={diagForm.phone}
                    onChange={e => setDiagForm({ ...diagForm, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Модель устройства</label>
                <input
                  required
                  value={diagForm.device}
                  onChange={e => setDiagForm({ ...diagForm, device: e.target.value })}
                  placeholder="iPhone 15 Pro, Samsung Galaxy, ноутбук Asus..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Опишите проблему</label>
                <textarea
                  required
                  value={diagForm.problem}
                  onChange={e => setDiagForm({ ...diagForm, problem: e.target.value })}
                  rows={4}
                  placeholder="Разбит экран, не включается, забыт пароль, нет звука..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all resize-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>

              <button type="submit" className="btn-neon w-full py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2">
                <Icon name="Mail" size={18} />
                Отправить заявку на почту
              </button>

              <div className="flex items-center justify-center gap-3">
                <span className="text-xs text-muted-foreground/60">или напишите напрямую:</span>
                <a href={MAIL_LINK} className="text-xs text-red-400 hover:text-red-300 transition-colors font-medium">mobileacsess@yandex.ru</a>
                <span className="text-muted-foreground/30">|</span>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-xs text-red-400 hover:text-red-300 transition-colors font-medium">WhatsApp</a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 py-24 px-4 sm:px-8" style={{ background: "rgba(232,21,27,0.03)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium neon-text-red uppercase tracking-widest">Кто мы</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">О НАС</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              MobileAccess — сервисный центр в Красном селе. Мы ремонтируем телефоны, планшеты и ноутбуки любой сложности. Работаем только с сертифицированными компонентами и даём гарантию на все виды работ.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Специализируемся на снятии блокировок iCloud, Google и FRP. Приходите лично или оставьте заявку онлайн — ответим в течение 15 минут.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "MapPin", label: "Адрес", val: "Красное село, ул. Ленина 51" },
                { icon: "Store", label: "Павильон", val: "1 этаж, павильон 1.13" },
                { icon: "Clock", label: "Режим работы", val: "Пн–Вс: 10:00–21:00" },
                { icon: "Star", label: "Рейтинг", val: "5.0 / 5 — довольные клиенты" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={item.icon} size={16} className="text-red-500" />
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
                className="glass-card rounded-2xl p-8 flex flex-col justify-center border"
                style={{ borderColor: i === 0 ? "rgba(232,21,27,0.5)" : "rgba(255,255,255,0.05)", boxShadow: i === 0 ? "0 0 20px rgba(232,21,27,0.15)" : "none" }}
              >
                <div className="stat-number text-4xl sm:text-5xl neon-text-red font-bold leading-none mb-2">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium neon-text-red uppercase tracking-widest">Мы рядом</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">КОНТАКТЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Phone", label: "Телефон", val: "+7 (981) 754-04-06", sub: "Звоните с 10:00 до 21:00", href: "tel:+79817540406" },
              { icon: "MessageCircle", label: "WhatsApp", val: "+7 (981) 754-04-06", sub: "Ответим за 15 минут", href: WA_LINK },
              { icon: "Mail", label: "E-mail", val: "mobileacsess@yandex.ru", sub: "Для заявок и обращений", href: MAIL_LINK },
              { icon: "MapPin", label: "Адрес", val: "Красное село, ул. Ленина 51", sub: "1 этаж, павильон 1.13", href: "https://yandex.ru/maps/?text=Красное+село+Ленина+51" },
              { icon: "Clock", label: "Режим работы", val: "Пн–Вс: 10:00–21:00", sub: "Без выходных", href: null },
              { icon: "Star", label: "Рейтинг", val: "5.0 / 5 ★", sub: "Довольные клиенты", href: null },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href ?? undefined}
                target={item.href && !item.href.startsWith("tel") && !item.href.startsWith("mailto") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-card rounded-2xl p-7 border border-white/5 hover:border-red-500/30 transition-all duration-300 group block"
                style={{ textDecoration: "none" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-100 transition-all border" style={{ background: "rgba(232,21,27,0.1)", borderColor: "rgba(232,21,27,0.2)" }}>
                  <Icon name={item.icon} size={18} className="text-red-500" />
                </div>
                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                <div className="font-bold text-base mb-1 group-hover:text-red-400 transition-colors">{item.val}</div>
                <div className="text-xs text-muted-foreground/60">{item.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden grid-bg"
            style={{ background: "linear-gradient(135deg, rgba(232,21,27,0.12) 0%, rgba(100,5,8,0.08) 100%)", border: "1px solid rgba(232,21,27,0.3)" }}
          >
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                СЛОМАЛАСЬ ТЕХНИКА?<br />
                <span className="neon-text-red">МЫ ПОЧИНИМ!</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-base max-w-md mx-auto">
                Приходите в Красное село, ул. Ленина 51, пав. 1.13 или оставьте заявку — ответим в течение 15 минут
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => scrollTo("diagnosis")}
                  className="btn-neon px-10 py-4 rounded-2xl text-base font-bold text-white inline-flex items-center gap-2"
                >
                  <Icon name="Zap" size={18} />
                  Оставить заявку
                </button>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost-neon px-10 py-4 rounded-2xl text-base inline-flex items-center gap-2"
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-4 sm:px-8" style={{ background: "rgba(0,0,0,0.6)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e8151b, #7a0a0c)" }}>
              <Icon name="Wrench" size={12} className="text-white" />
            </div>
            <span className="font-display font-bold tracking-wide">
              Mobile<span className="neon-text-red">Access</span>
            </span>
          </div>
          <div className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2024 MobileAccess · Красное село, Ленина 51, пав. 1.13 · mobileacsess@yandex.ru
          </div>
          <div className="flex gap-5">
            {[["home", "Главная"], ["services", "Услуги"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs text-muted-foreground hover:text-white transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}