import {
  Crown,
  Gift,
  TrendingUp,
  Zap,
  Lock,
  BarChart3,
} from "lucide-react";

export default function VipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05070f] to-[#070b16] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">
            Scorely VIP Program
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Climb through 15+ levels with exclusive rewards and benefits
          </p>
        </div>

        {/* VIP Status */}
        <section className="mb-8 rounded-2xl bg-[#0b1224] p-6 shadow-lg">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Crown className="h-4 w-4 text-yellow-400" />
            Your VIP Status
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Avatar / Progress */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-xl">
                🙂
              </div>
              <div>
                <p className="text-sm text-gray-400">Your Progress</p>
                <p className="text-sm font-semibold text-yellow-400">
                  Bronze — 0%
                </p>
              </div>
            </div>

            {/* Rank */}
            <div>
              <p className="text-sm text-gray-400">Your Rank</p>
              <p className="mt-1 text-lg font-semibold text-yellow-400">
                Bronze
              </p>
            </div>

            {/* Benefits */}
            <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 text-black">
              <h3 className="mb-2 font-semibold">Bronze benefits</h3>
              <ul className="space-y-1 text-sm">
                <li>• 3.5% Rakeback on sports bets</li>
                <li>• Weekly boosts every Saturday</li>
                <li>• Monthly bonus based on activity</li>
                <li>• VIP support access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Claimable Rewards */}
        <section className="mb-8 rounded-2xl bg-[#0b1224] p-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Gift className="h-4 w-4 text-yellow-400" />
            Claimable Rewards
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <RewardCard
              title="Rakeback"
              subtitle="Claim anytime after betting"
              value="$0.00"
              badge="3.5%"
              action="Claim"
              icon={<TrendingUp />}
            />

            <RewardCard
              title="Reload"
              subtitle="Available at Platinum"
              value="$0.00"
              locked
              icon={<Lock />}
            />

            <RewardCard
              title="Weekly Boost"
              subtitle="Next Saturday 12:30 PM GMT"
              value="$0.00"
              action="Claim"
              icon={<Zap />}
            />

            <RewardCard
              title="Monthly Bonus"
              subtitle="Available to claim"
              value="$0.00"
              action="Claim"
              icon={<Gift />}
            />
          </div>
        </section>

        {/* Collapsible Sections */}
        <div className="space-y-3">
          <InfoRow title="VIP Levels" />
          <InfoRow title="VIP Level Requirements" subtitle="Wager $10,000 on sports to join Bronze" />
          <InfoRow title="Benefits by Tier" />
          <InfoRow title="Your Stats" icon={<BarChart3 />} />
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          © 2025 Scorely. All rights reserved.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function RewardCard({
  title,
  subtitle,
  value,
  action,
  badge,
  locked,
  icon,
}: any) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#0e1730] p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-[#121c3f] p-2 text-yellow-400">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{title}</p>
            {badge && (
              <span className="rounded bg-green-600 px-2 py-0.5 text-xs">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm">{value}</span>
        <button
          disabled={locked}
          className={`rounded-lg px-4 py-1.5 text-sm font-medium ${
            locked
              ? "cursor-not-allowed bg-gray-700 text-gray-400"
              : "bg-[#18245a] hover:bg-[#22307a]"
          }`}
        >
          {locked ? "Locked" : action}
        </button>
      </div>
    </div>
  );
}

function InfoRow({ title, subtitle, icon }: any) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#0b1224] px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="text-yellow-400">{icon || <Crown />}</div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          {subtitle && (
            <p className="text-xs text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>
      <span className="text-gray-500">⌄</span>
    </div>
  );
}
