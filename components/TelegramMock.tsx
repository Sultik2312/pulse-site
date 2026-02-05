export default function TelegramMock() {
  return (
    <div className="animate-float rounded-[32px] border border-border/80 bg-black/50 p-6 shadow-card">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/60 to-white/10" />
        <div>
          <div className="text-sm font-semibold text-white">Pulse бот</div>
          <div className="text-xs text-muted">Сегодня, 08:30</div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="max-w-sm rounded-2xl rounded-tl-sm border border-border/60 bg-white/5 px-4 py-3 text-sm text-white">
          Как твое состояние сегодня? Выбери, как прошло утро.
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Сон", "Стресс", "Энергия", "Самочувствие"].map((label) => (
            <button
              key={label}
              className="rounded-xl border border-border/80 bg-surface/70 px-4 py-2 text-xs font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="tag tag-green">OK</span>
          <span className="tag tag-yellow">Внимание</span>
          <span className="tag tag-red">Риск</span>
        </div>
      </div>
    </div>
  );
}