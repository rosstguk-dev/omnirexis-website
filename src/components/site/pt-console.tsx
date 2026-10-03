// Mirrors the Free plan dashboard in the PT app (app/app/page.tsx): the same tiles and
// list labels, with example figures the Free plan can reach (2 active clients max).
const NEXT_SESSIONS = [
  { name: "Sam", when: "05/10/2026, 07:30:00" },
  { name: "Alex", when: "06/10/2026, 18:00:00" },
  { name: "Sam", when: "08/10/2026, 07:30:00" },
  { name: "Alex", when: "09/10/2026, 18:00:00" },
];

const LATEST_CHECK_INS = [
  { name: "Alex", when: "2026-10-03" },
  { name: "Sam", when: "2026-10-02" },
  { name: "Alex", when: "2026-09-26" },
];

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
          <Stat label="Active clients" value="2" />
          <Stat label="Upcoming sessions" value="4" />
          <Stat label="Recent check-ins" value="3" />
        </div>
        <div className="grid gap-5 px-5 pb-5 sm:grid-cols-2">
          <List title="Next sessions" rows={NEXT_SESSIONS} />
          <List title="Latest check-ins" rows={LATEST_CHECK_INS} />
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

function List({
  title,
  rows,
}: {
  title: string;
  rows: { name: string; when: string }[];
}) {
  return (
    <div>
      <p className="text-micro tracking-micro text-subtle uppercase">{title}</p>
      <ul className="mt-3 divide-y divide-line-on-ink border-t border-line-on-ink">
        {rows.map((row) => (
          <li
            key={row.name + row.when}
            className="flex items-center justify-between gap-4 py-2.5"
          >
            <span className="text-sm text-bone">{row.name}</span>
            <span className="text-xs text-subtle tabular-nums">{row.when}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
