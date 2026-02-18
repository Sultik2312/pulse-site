import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import TelegramMock from "@/components/TelegramMock";

const faqItems = [
  {
    q: "Это заменяет тренера?",
    a: "Нет. Pulse не заменяет тренера, а помогает быстрее видеть состояние клиентов и принимать решения."
  },
  {
    q: "Сколько времени это занимает?",
    a: "Клиенту — около 30 секунд в день. Тренеру — обычно пару минут на просмотр сводки."
  },
  {
    q: "Нужно устанавливать приложение?",
    a: "Нет. Всё работает внутри Telegram."
  },
  {
    q: "Какие вопросы получает клиент?",
    a: "4 коротких вопроса: сон, энергия, стресс, физическое самочувствие."
  },
  {
    q: "Кому видны данные?",
    a: "Только тренеру и организатору пилота. Данные не передаются третьим лицам."
  },
  {
    q: "Если не зайдёт?",
    a: "Пилот можно остановить в любой момент, без обязательств."
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
            Получить доступ
          </Link>
        </div>
      </header>

      <main>
        <section id="hero" className="section">
          <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="badge">
                <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                Закрытый пилот · 14 дней
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Pulse — ежедневный контроль состояния клиентов в Telegram
              </h1>
              <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
                Клиент тратит ~30 секунд в день на 4 вопроса. Тренер получает сводку по своим
                клиентам и сразу видит, кому сегодня нужно внимание.
              </p>
              <p className="mt-4 max-w-2xl text-sm text-muted">
                Без отдельного приложения. Без таблиц вручную. Без “держать всё в голове”.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#lead" className="btn-primary">
                  Получить 2 скрина и сценарий пилота
                </Link>
              </div>
              <Link href="#pilot" className="mt-4 inline-block text-sm text-muted underline-offset-4 transition hover:text-white hover:underline">
                Это бесплатно? — Да, пилот 14 дней без обязательств
              </Link>
              <p className="mt-3 max-w-2xl text-xs text-muted">
                Если вам скинул ссылку коллега-тренер — оставьте контакт, я всё объясню и подключу.
              </p>
              <div className="mt-10 grid gap-3 text-sm text-muted sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span className="tag tag-green">{"\u{1F7E2} В порядке"}</span>
                  {"\u{1F7E2} В порядке"}
                </div>
                <div className="flex items-center gap-2">
                  <span className="tag tag-yellow">{"\u{1F7E1} Внимание"}</span>
                  {"\u{1F7E1} Внимание"}
                </div>
                <div className="flex items-center gap-2">
                  <span className="tag tag-red">{"\u{1F534} Критично"}</span>
                  {"\u{1F534} Критично"}
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
              До следующей тренировки может пройти несколько дней, и в это окно часто теряется
              контроль за состоянием клиента.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Между тренировками клиент может просесть, а вы узнаете об этом поздно",
                "Ручной сбор обратной связи съедает время",
                "Часть клиентов “теряется”, пока не случается срыв"
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
              Pulse работает внутри Telegram и показывает сигналы по состоянию без лишней рутины.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Telegram-native",
                  text: "Ответы прямо в чате, где клиент и так общается каждый день."
                },
                {
                  title: "Светофор сигналов",
                  text: "Не нужно читать длинные отчеты — сразу видно приоритеты на сегодня."
                },
                {
                  title: "Ежедневная сводка",
                  text: "Тренер быстро понимает: \u{1F7E2} В порядке, \u{1F7E1} Внимание или \u{1F534} Критично."
                },
                {
                  title: "Ранние сигналы",
                  text: "Проще вовремя скорректировать план, чем разбирать последствия позже."
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
                  title: "Шаг 1",
                  text: "Тренер нажимает “Добавить клиента” и отправляет клиенту готовое сообщение в Telegram (бот сам даёт текст + ссылку)."
                },
                {
                  step: "02",
                  title: "Шаг 2",
                  text: "Клиент отвечает на 4 вопроса (сон, энергия, стресс, физическое самочувствие) — ~30 секунд."
                },
                {
                  step: "03",
                  title: "Шаг 3",
                  text: "Тренер получает сводку по своим клиентам: \u{1F7E2} В порядке, \u{1F7E1} Внимание или \u{1F534} Критично."
                }
              ].map((item) => (
                <div key={item.step} className="card">
                  <div className="text-xs text-muted">{item.title}</div>
                  <p className="mt-3 text-sm text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="section pt-0">
          <div className="container">
            <h2 className="section-title">Кому подходит Pulse</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="card">
                <h3 className="text-base font-semibold text-white">Подходит</h3>
                <ul className="checklist mt-4 space-y-3">
                  <li>Онлайн-тренерам и тренерам с онлайн-сопровождением</li>
                  <li>Тем, кто ведёт несколько клиентов и не хочет терять контроль</li>
                  <li>Тем, кому важна регулярная обратная связь без лишней рутины</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-base font-semibold text-white">Не подходит</h3>
                <ul className="checklist mt-4 space-y-3">
                  <li>Если вы работаете только офлайн без сопровождения</li>
                  <li>Если не планируете регулярно смотреть сигналы по клиентам</li>
                  <li>Если вам комфортно всё вести вручную в чатах/таблицах</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pilot" className="section">
          <div className="container">
            <h2 className="section-title">Пилот на 14 дней</h2>
            <p className="section-subtitle">
              Проверяем пользу в реальной работе тренера и смотрим, как меняется контроль за клиентами.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="card">
                <h3 className="text-base font-semibold text-white">Что получает тренер</h3>
                <ul className="checklist mt-4 space-y-3">
                  <li>Ежедневную сводку по своим клиентам</li>
                  <li>Ранние сигналы, где возможен срыв</li>
                  <li>Понимание, кому писать сегодня в первую очередь</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-base font-semibold text-white">Что нужно от тренера</h3>
                <ul className="checklist mt-4 space-y-3">
                  <li>Добавить 3-10 клиентов в пилот</li>
                  <li>Реагировать на сигналы (коротким сообщением клиенту)</li>
                  <li>Дать честный фидбэк по итогам пилота</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-base font-semibold text-white">Что дальше</h3>
                <p className="mt-4 text-sm text-muted">
                  Оставляете заявку → получаете 2 скрина и короткую инструкцию → запускаете первых
                  клиентов в тот же день
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="social-proof" className="section">
          <div className="container">
            <h2 className="section-title">Что проверяем в пилоте</h2>
            <p className="section-subtitle">
              Стабильность ответов клиентов, скорость реакции тренера на сигналы и влияние ежедневной
              сводки на качество сопровождения.
            </p>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2 className="section-title">FAQ</h2>
            <p className="section-subtitle">Коротко отвечаем на частые вопросы.</p>
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
              <h2 className="section-title">Получить доступ к пилоту</h2>
              <p className="section-subtitle">
                Оставьте контакт — пришлю 2 скрина, короткий сценарий запуска и подключу к пилоту на
                14 дней.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-border/70 py-10">
        <div className="container flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <div>Pulse © {new Date().getFullYear()}</div>
          <div className="flex flex-wrap items-center gap-4">
            <span>Telegram: @s2312</span>
            <span>Email: pulse.team@mail.ru</span>
            <Link href="#" className="transition hover:text-white">
              Политика
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
