import {
    Zap,
    Gift,
    Info,
} from "lucide-react";

export default function BoostBonuses() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05070f] to-[#070b16] text-white">
            <div className="flex mx-auto max-w-6xl px-4 py-10">
                {/* ---------------- Weekly Boost ---------------- */}
                <div className="rounded-2xl bg-[#0e1730] p-5">
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-400">
                                <Zap size={16} />
                            </div>
                            <div>
                                <p className="font-medium">Weekly Boost</p>
                                <p className="text-xs text-gray-400">
                                    Next: Saturday 12:30 PM GMT
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span>$0.00</span>
                            <button className="rounded-lg bg-[#1a2555] px-4 py-1.5 text-xs hover:bg-[#24347a]">
                                Claim
                            </button>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4 text-xs text-gray-300">
                        <div>
                            <p className="flex items-center gap-2 font-medium text-white">
                                <Info size={12} /> Weekly Boost Details
                            </p>
                            <ul className="mt-2 space-y-1 text-gray-400">
                                <li>• Issued every Saturday at 12:30 PM GMT</li>
                                <li>• Based on weekly sports betting activity</li>
                                <li>• Notification sent via support@scorely.gg</li>
                            </ul>
                        </div>

                        {/* Multipliers */}
                        <div className="rounded-xl border border-yellow-500/20 bg-yellow-900/20 p-4">
                            <p className="mb-2 flex items-center gap-2 font-medium text-yellow-400">
                                ✨ Bonus Multipliers by Tier
                            </p>

                            <div className="grid grid-cols-5 text-center text-xs">
                                <Tier label="Bronze" value="1x" />
                                <Tier label="Silver" value="1.2x" />
                                <Tier label="Gold" value="1.5x" />
                                <Tier label="Platinum" value="2x" />
                                <Tier label="Diamond" value="3x" />
                            </div>
                        </div>

                        {/* Pro Tip */}
                        <div className="rounded-xl bg-[#111c3a] p-3 text-gray-400">
                            💡 <span className="text-white">Pro tip:</span> Keep an eye on
                            your inbox for weekly boost notifications from
                            support@scorely.gg
                        </div>
                    </div>
                </div>

                {/* ---------------- Monthly Bonus ---------------- */}
                <div className="rounded-2xl bg-[#0e1730] p-5">
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-purple-600/20 p-2 text-purple-400">
                                <Gift size={16} />
                            </div>
                            <div>
                                <p className="font-medium">Monthly Bonus</p>
                                <p className="text-xs text-gray-400">
                                    Available to claim
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span>$0.00</span>
                            <button className="rounded-lg bg-[#1a2555] px-4 py-1.5 text-xs hover:bg-[#24347a]">
                                Claim
                            </button>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4 text-xs text-gray-300">
                        <div>
                            <p className="flex items-center gap-2 font-medium text-white">
                                <Info size={12} /> Monthly Bonus Details
                            </p>
                            <ul className="mt-2 space-y-1 text-gray-400">
                                <li>• Released once per month</li>
                                <li>• Based on VIP level & recent betting volume</li>
                                <li>• Sent via email to eligible bettors</li>
                            </ul>
                        </div>

                        {/* Pro Tip */}
                        <div className="rounded-xl border border-purple-500/20 bg-purple-900/20 p-4 text-gray-200">
                            💎 <span className="font-medium text-purple-400">
                                Pro tip:
                            </span>{" "}
                            Higher VIP tiers receive significantly larger monthly
                            bonuses. Keep betting on sports to unlock better rewards!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------------- Tier Badge ---------------- */

function Tier({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-gray-400">{label}</p>
            <p className="font-semibold text-white">{value}</p>
        </div>
    );
}
