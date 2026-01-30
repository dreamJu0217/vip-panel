"use client";

import { useState } from "react";
import {
    ArrowUp,
    Zap,
    Gift,
    Lock,
    Info,
    CheckCircle,
    AlertTriangle,
    ChevronDown,
} from "lucide-react";

export default function ClaimableRewardsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#05070f] to-[#070b16] text-white">
            <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
                {/* Page Header */}
                <header>
                    <h1 className="text-2xl font-semibold">Claimable Rewards</h1>
                    <p className="text-sm text-gray-400">
                        View and claim your VIP rewards
                    </p>
                </header>

                <RakebackCard />
                <ReloadCard />

            </div>
        </main>
    );
}

/* ============================================================
   Rakeback
============================================================ */

function RakebackCard() {
    const [open, setOpen] = useState(true);

    return (
        <section className="rounded-2xl bg-[#0b1224]">
            <Header
                icon={<ArrowUp />}
                title="Rakeback"
                subtitle="Claim anytime after betting"
                badge="3.5%"
                value="$0.00"
                action="Claim"
                open={open}
                setOpen={setOpen}
            />

            {open && (
                <div className="border-t border-white/5 p-6 space-y-6 text-sm">
                    {/* What is Rakeback */}
                    <div>
                        <h3 className="flex items-center gap-2 font-medium">
                            <Info size={14} /> What is Rakeback?
                        </h3>
                        <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                            All sports bets include a theoretical margin (vig). Rakeback
                            returns <span className="text-green-400">3.5%</span> of this
                            margin to you as cash — win or lose.
                        </p>
                    </div>

                    {/* Always Earning */}
                    <div className="rounded-xl border border-green-500/20 bg-green-900/20 p-4">
                        <h4 className="mb-2 flex items-center gap-2 text-green-400 font-medium">
                            <CheckCircle size={14} /> Always Earning
                        </h4>
                        <ul className="space-y-1 text-xs">
                            <li>• Available on all sports bets</li>
                            <li>• Applies to pre-match & live betting</li>
                            <li>• ≥3% theoretical margin</li>
                            <li className="text-red-400">
                                • Voided & cashed-out bets are excluded
                            </li>
                        </ul>
                    </div>

                    {/* Example */}
                    <div className="rounded-xl bg-[#111c3a] p-4 text-xs">
                        <p>Place a $1,000 sports bet</p>
                        <p>Theoretical margin (3%) → $30</p>
                        <p className="text-green-400">
                            Rakeback (3.5%) → $1.05 back
                        </p>
                        <p className="mt-2 text-gray-400">
                            Your rakeback increases with every bet you place.
                        </p>
                    </div>

                    {/* How to collect */}
                    <div>
                        <h4 className="font-medium">How to Collect</h4>
                        <p className="mt-1 text-xs text-gray-400">
                            Open the VIP page and select the rakeback tab. Your balance
                            never expires.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

/* ============================================================
   Reload (Locked)
============================================================ */

function ReloadCard() {
    return (
        <section className="rounded-2xl bg-[#0b1224] p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <IconWrap>
                        <Lock />
                    </IconWrap>
                    <div>
                        <p className="font-medium">Reload</p>
                        <p className="text-xs text-gray-400">
                            Available at Platinum
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span>$0.00</span>
                    <button
                        disabled
                        className="rounded-lg bg-gray-700 px-4 py-1.5 text-xs text-gray-400"
                    >
                        Locked
                    </button>
                </div>
            </div>

            <div className="mt-5 space-y-4 text-xs">
                <div className="rounded-lg bg-[#111c3a] p-3 text-blue-400">
                    🔓 Unlocks at Platinum II ($250,000 wagered)
                </div>

                <div>
                    <p className="font-medium">What is the Reload Bonus?</p>
                    <p className="mt-1 text-gray-400">
                        Reloads depend on VIP level and wagering activity over the
                        last 7–42 days. Losing more increases reload value.
                    </p>
                </div>

                <div className="space-y-3">
                    <h4 className="font-medium text-sm">
                        Reload Duration by Rank
                    </h4>

                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <table className="w-full text-xs">
                            <thead className="bg-[#111c3a] text-gray-400">
                                <tr>
                                    <th className="px-4 py-2 text-left">VIP Rank</th>
                                    <th className="px-4 py-2 text-right">Reload Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ReloadRow rank="Platinum I" duration="7 days" />
                                <ReloadRow rank="Platinum II" duration="14 days" />
                                <ReloadRow rank="Platinum III" duration="21 days" />
                                <ReloadRow rank="Platinum IV" duration="28 days" />
                                <ReloadRow rank="Platinum V" duration="35 days" />
                                <ReloadRow rank="Platinum VI" duration="42 days" />
                                <ReloadRow rank="Diamond+" duration="42 days (max)" />
                            </tbody>
                        </table>
                    </div>

                    <p className="text-xs text-gray-400">
                        Reload duration increases with VIP rank and determines how long
                        wagering activity is evaluated for reload eligibility.
                    </p>
                </div>

                <div className="rounded-xl border border-red-500/20 bg-red-900/20 p-4">
                    <p className="mb-1 flex items-center gap-2 font-medium text-red-400">
                        <AlertTriangle size={14} /> Important
                    </p>
                    <ul className="space-y-1">
                        <li>• Claim within 24 hours</li>
                        <li>• Missed reloads expire</li>
                        <li>• Some offers are email-only</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}


/* ============================================================
   Small helpers
============================================================ */

function Header({
    icon,
    title,
    subtitle,
    badge,
    value,
    action,
    open,
    setOpen,
}: any) {
    return (
        <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between p-6"
        >
            <div className="flex items-center gap-3">
                <IconWrap>{icon}</IconWrap>
                <div className="text-left">
                    <p className="font-medium">{title}</p>
                    <p className="text-xs text-gray-400">{subtitle}</p>
                </div>
                {badge && (
                    <span className="rounded bg-green-600 px-2 py-0.5 text-xs">
                        {badge}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3">
                <span>{value}</span>
                <span className="rounded bg-[#1a2555] px-4 py-1.5 text-xs">
                    {action}
                </span>
                <ChevronDown
                    className={`transition ${open ? "rotate-180" : ""}`}
                />
            </div>
        </button>
    );
}

function IconWrap({ children }: any) {
    return (
        <div className="rounded-lg bg-[#121c3f] p-2 text-yellow-400">
            {children}
        </div>
    );
}

function ReloadRow({
  rank,
  duration,
}: {
  rank: string;
  duration: string;
}) {
  return (
    <tr className="border-t border-white/5">
      <td className="px-4 py-2">{rank}</td>
      <td className="px-4 py-2 text-right text-gray-300">
        {duration}
      </td>
    </tr>
  );
}

