import {
  BarChart3,
  DollarSign,
  Percent,
  Coins,
} from "lucide-react";

export default function YourStats() {
  return (
    <section className="mt-6 rounded-2xl bg-[#0b1224] p-6">
      <header className="mb-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <BarChart3 className="h-4 w-4 text-yellow-400" />
          Your Stats
        </h3>
        <p className="text-xs text-gray-400">
          Track your betting activity and rewards
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          icon={<DollarSign />}
          label="Total Wagered"
          value="$0.00"
        />
        <StatCard
          icon={<Percent />}
          label="Rakeback Earned"
          value="$0.00"
        />
        <StatCard
          icon={<Coins />}
          label="Freeplay Credited"
          value="$0.00"
        />
        <StatCard
          icon={<Coins />}
          label="Freeplay Wagered"
          value="$0.00"
        />
      </div>
    </section>
  );
}

/* ---------------- Stat Card ---------------- */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#0e1730] p-4">
      <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
        <span className="text-yellow-400">{icon}</span>
        {label}
      </div>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
