import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import TelegramMock from "@/components/TelegramMock";

const faqItems = [
  {
    q: "Это заменяет программу тренировок?",
    a: "Нет. Пульс не заменяет тренера и программу. Он дает ранний сигнал, когда клиенту нужна коррекция нагрузки или восстановления."
  },
  {
    q: "Сколько времени занимает?",
    a: "Клиент отвечает ~30 секунд в день. Тренеру обычно нужно 1–3 минуты на просмотр светофора и короткую реакцию."
  },
  {
    q: "Нужно ли устанавливать приложение?",
    a: "Нет. Все ответы — прямо в Telegram, без отдельной установки."
  },
  {
    q: "Кому видны ответы?",
    a: "Только тренеру и админу пилота. Мы не продаем и не передаем данные третьим лицам."
  },
  {
    q: "Если клиент не отвечает?",
    a: "Это видно в отчете, плюс настраиваются мягкие напоминания."
  },
  {
    q: "Можно ли на группу?",
    a: "Да. Пульс работает и с группами — светофор показывает общую динамику и проблемы по людям."
  },
  {
    q: "Есть ли медицинские обещания?",
    a: "Нет. Пульс — инструмент наблюдения и коммуникации, без медицинских утверждений."
  }
];

export default function Home() {
  return (
    <div className="relative">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-black/40 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-white/5">
              P
            </span>
            Pulse
          </div>
          <nav className="hidden items-center gap-6 text-xs text-muted md:flex">
            <Link href="#problem" className="transition hover:text-white">
              Проблема
            </Link>
            <Link href="#solution" className="transition hover:text-white">
              Решение
            </Link>
            <Link href="#how" className="transition hover:text-white">
              Как работает
            </Link>
            <Link href="#pilot" className="transition hover:text-white">
              Пилот
            </Link>
            <Link href="#faq" className="transition hover:text-white">
              FAQ
            </Link>
          </nav>
          <Link href="#lead" className="btn-secondary">
            Запросить доступ
          </Link>
        </div>
      </header>

      <main>
        <section id="hero" className="section">
          <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="badge">
                <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                Закрытый пилот 14 дней
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Рука клиента — на штанге. Твоя — на пульсе.
              </h1>
              <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
                Автоматический мониторинг состояния клиентов в Telegram: 30 секунд в день — и ты
                видишь светофор рисков.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#lead" className="btn-primary">
                  Запросить доступ
                </Link>
                <Link href="#how" className="btn-secondary">
                  Как это работает
                </Link>
              </div>
              <div className="mt-10 grid gap-3 text-sm text-muted sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span className="tag tag-green">OK</span>
                  Пульс в норме
                </div>
                <div className="flex items-center gap-2">
                  <span className="tag tag-yellow">Внимание</span>
                  Нужна проверка
                </div>
                <div className="flex items-center gap-2">
                  <span className="tag tag-red">Риск</span>
                  Быстрое вмешательство
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/5 via-white/0 to-white/10 blur-2xl" />
              <div className="relative">
                <TelegramMock />
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="section">
          <div className="container">
            <h2 className="section-title">Слепая зона между тренировками</h2>
            <p className="section-subtitle">
              До следующей встречи может пройти неделя. В это время и рождаются перегрузка, срыв и
              травмоопасность.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Ты не видишь, что происходит с человеком между тренировками",
                "Никто не хочет устанавливать “ещё одно приложение”",
                "Срывы происходят тихо — пока не становится поздно"
              ].map((text) => (
                <div key={text} className="card">
                  <p className="text-base text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="section">
          <div className="container">
            <h2 className="section-title">30 секунд. Без приложений.</h2>
            <p className="section-subtitle">
              Пульс — Telegram-native система раннего мониторинга состояния клиентов. Минимум шума,
              максимум сигнала.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Telegram-native",
                  text: "Ответы прямо в чате, где клиент уже живет каждый день."
                },
                {
                  title: "Светофор рисков",
                  text: "Не нужно читать простыни — только сигналы и приоритеты."
                },
                {
                  title: "Еженедельная сводка",
                  text: "Кто в норме, кто проседает и где нужно вмешательство."
                },
                {
                  title: "Раннее предупреждение",
                  text: "Меньше перегруза и срывов за счет своевременной корректировки."
                }
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <h2 className="section-title">Как это работает</h2>
            <p className="section-subtitle">Три шага, которые занимают минуты.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Подключил клиентов по ссылке",
                  text: "Invite-link, настройка профиля и группы — занимает пару минут."
                },
                {
                  step: "02",
                  title: "Клиент отвечает кнопками",
                  text: "Сон, стресс, энергия и самочувствие — ~30 секунд в день."
                },
                {
                  step: "03",
                  title: "Ты видишь светофор",
                  text: "Красные требуют реакции — короткое сообщение решает многое."
                }
              ].map((item) => (
                <div key={item.step} className="card">
                  <div className="text-xs text-muted">Шаг {item.step}</div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="section">
          <div className="container grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="section-title">Пилот на 14 дней</h2>
              <p className="section-subtitle">
                Тестируем пользу на реальных клиентах. Если не заходит — спокойно останавливаемся.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="card">
                  <h3 className="text-base font-semibold text-white">Что получает тренер</h3>
                  <ul className="checklist mt-4 space-y-3">
                    <li>Мониторинг состояния и рисков</li>
                    <li>Еженедельные сводки и алерты</li>
                    <li>Понимание, кому нужна поддержка</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-base font-semibold text-white">Что нужно от тренера</h3>
                  <ul className="checklist mt-4 space-y-3">
                    <li>Коротко реагировать на “красные”</li>
                    <li>Давать обратную связь по сигналам</li>
                    <li>Поддерживать коммуникацию</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white">Что делаю я</h3>
              <p className="mt-3 text-sm text-muted">
                Ежедневно смотрю качество ответов, тексты и напоминания. Улучшаю механику, чтобы
                сигналы были точными, а ответы — стабильными.
              </p>
              <div className="mt-6 rounded-2xl border border-border/70 bg-black/40 p-5">
                <div className="text-xs text-muted">Условие пилота</div>
                <p className="mt-2 text-sm text-white">
                  Если не видим пользы — останавливаем пилот, без обязательств.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="social-proof" className="section">
          <div className="container">
            <h2 className="section-title">Что говорят тренеры</h2>
            <p className="section-subtitle">
              Пример отзыва (демо). Настоящие кейсы появятся после пилота.
            </p>
            <div className="mt-10 card">
              <blockquote className="text-base text-white">
                “Раньше я узнавал о перегрузе только когда клиент начинал пропускать тренировки.
                Теперь вижу динамику заранее и могу спокойно скорректировать план.”
              </blockquote>
              <p className="mt-4 text-xs text-muted">— пример отзыва, не реальный клиент</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2 className="section-title">FAQ</h2>
            <p className="section-subtitle">Коротко отвечаем на самые частые вопросы.</p>
            <div className="mt-8 grid gap-4">
              {faqItems.map((item) => (
                <details key={item.q} className="card group">
                  <summary className="cursor-pointer list-none text-base font-medium text-white">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lead" className="section">
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="section-title">Запросить доступ к пилоту</h2>
              <p className="section-subtitle">
                Оставь контакты — напишу в течение 24 часов и подключу к пилоту.
              </p>
              <div className="mt-8 card">
                <h3 className="text-base font-semibold text-white">Что дальше</h3>
                <ul className="checklist mt-4 space-y-3">
                  <li>Короткий созвон на 10 минут</li>
                  <li>Подключаем группу через invite-link</li>
                  <li>Смотрим первые сигналы уже на 2–3 день</li>
                </ul>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-border/70 py-10">
        <div className="container flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <div>Pulse © {new Date().getFullYear()}</div>
          <div className="flex flex-wrap items-center gap-4">
            <span>Telegram: @pulse_support</span>
            <span>Email: hello@pulse.fit</span>
            <Link href="#" className="transition hover:text-white">
              Политика
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}