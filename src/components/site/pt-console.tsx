export function PtConsole() {
  return (
    <div className="rounded-xl bg-ink p-2 shadow-card">
      <div className="overflow-hidden rounded-lg bg-ink-2">
        <div className="flex items-center justify-between border-b border-line-on-ink px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-paper-2/40" />
            <span className="size-2 rounded-full bg-paper-2/25" />
            <span className="size-2 rounded-full bg-paper-2/15" />
          </div>
          <p className="text-micro tracking-micro text-subtle uppercase">
            Omnirexis PT
          </p>
          <span className="text-micro text-subtle">Example figures</span>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-3">
          <Stat label="Active clients" value="12" />
          <Stat label="Need attention" value="3" />
          <Stat label="Upcoming sessions" value="4" />
        </div>
        <div className="px-5 pb-5">
          <p className="text-micro tracking-micro text-subtle uppercase">
            Priority list
          </p>
          <ul className="mt-3 divide-y divide-line-on-ink border-t border-line-on-ink">
            <Row name="Chloe M." note="Check-in overdue" />
            <Row name="Marcus H." note="2 sessions remaining" />
            <Row name="Dani R." note="Attendance has dipped" />
          </ul>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line-on-ink px-4 py-3">
      <p className="text-micro tracking-micro text-subtle uppercase">
        {label}
      </p>
      <p className="mt-1 font-sans text-3xl tracking-tight text-bone tabular-nums">
        {value}
      </p>
    </div>
  );
}

function Row({ name, note }: { name: string; note: string }) {
  return (
    <li className="flex items-center justify-between gap-4 py-3">
      <span className="text-sm text-bone">{name}</span>
      <span className="text-xs text-subtle">{note}</span>
    </li>
  );
}
