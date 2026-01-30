"use client";

import { useState } from "react";
import {
    BookOpen,
    Trophy,
    ChevronDown,
} from "lucide-react";

export default function VipLevelRequirements() {
    const [open, setOpen] = useState(true);

    return (

        <div className="min-h-screen bg-gradient-to-b from-[#05070f] to-[#070b16] text-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                {/* Header */}
                <button
                    onClick={() => setOpen(!open)}
                    className="mb-4 flex w-full items-center justify-between"
                >
                    <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold">
                            <BookOpen className="h-4 w-4 text-yellow-400" />
                            VIP Level Requirements
                        </h3>
                        <p className="text-xs text-gray-400">
                            Wager $10,000 on sports to join Bronze and start earning rewards
                        </p>
                    </div>
                    <ChevronDown
                        className={`transition ${open ? "rotate-180" : ""}`}
                    />
                </button>

                {open && (
                    <div className="space-y-6">
                        {/* How to Level Up */}
                        <div className="rounded-xl bg-[#0e1730] p-4">
                            <p className="mb-3 flex items-center gap-2 text-sm font-medium">
                                🟡 How to Level Up
                            </p>

                            <div className="rounded-lg bg-[#121c3f] p-4">
                                <div className="mb-2 flex items-center gap-2 text-yellow-400">
                                    <Trophy size={16} />
                                    <p className="font-medium">Total Wagered on Sports</p>
                                </div>
                                <p className="text-xs text-gray-400">
                                    Your VIP level is based on your total lifetime sports betting
                                    volume. Once you’ve wagered $10,000 on sports, you’ll join
                                    the Bronze level of the VIP Club.
                                </p>
                            </div>

                            <div className="mt-3 rounded-lg bg-[#10172e] px-4 py-2 text-xs text-gray-300">
                                Example: Wager a total of{" "}
                                <span className="text-yellow-400">$10,000</span> — Unlock{" "}
                                <span className="text-yellow-400">Bronze</span> rank and
                                receive rakeback on every wager.
                            </div>
                        </div>

                        {/* Tier Grid */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <TierCard
                                title="Bronze"
                                color="border-yellow-500/30"
                                rows={[["Bronze", "$10K volume"]]}
                            />

                            <TierCard
                                title="Silver"
                                color="border-gray-400/30"
                                rows={[["Silver", "$50K volume"]]}
                            />

                            <TierCard
                                title="Gold"
                                color="border-yellow-400/40"
                                highlight
                                rows={[["Gold", "$100K volume"]]}
                            />

                            <TierCard
                                title="Platinum"
                                color="border-cyan-500/40"
                                rows={[
                                    ["Platinum I", "$250K volume"],
                                    ["Platinum II", "$500K volume"],
                                    ["Platinum III", "$1M volume"],
                                    ["Platinum IV", "$3M volume"],
                                    ["Platinum V", "$5M volume"],
                                    ["Platinum VI", "$10M volume"],
                                ]}
                            />

                            <TierCard
                                title="Diamond"
                                color="border-purple-500/40"
                                rows={[
                                    ["Diamond I", "$25M volume"],
                                    ["Diamond II", "$50M volume"],
                                    ["Diamond III", "$100M volume"],
                                    ["Diamond IV", "$250M volume"],
                                    ["Diamond V", "$500M volume"],
                                ]}
                            />

                            <TierCard
                                title="Obsidian"
                                color="border-gray-600/40"
                                rows={[["Obsidian", "$1B volume"]]}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ---------------- Tier Card ---------------- */

function TierCard({
    title,
    rows,
    color,
    highlight,
}: {
    title: string;
    rows: [string, string][];
    color: string;
    highlight?: boolean;
}) {
    return (
        <div
            className={`rounded-xl border p-4 ${highlight
                    ? "bg-gradient-to-br from-yellow-900/20 to-[#0e1730]"
                    : "bg-[#0e1730]"
                } ${color}`}
        >
            <p className="mb-3 font-medium">{title}</p>

            <ul className="space-y-1 text-xs text-gray-300">
                {rows.map(([label, value]) => (
                    <li
                        key={label}
                        className="flex items-center justify-between"
                    >
                        <span>{label}</span>
                        <span className="text-gray-400">{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
