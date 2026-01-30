"use client";

import { Check, X, ChevronDown, Gift } from "lucide-react";
import { useState } from "react";

const tiers = [
  { key: "bronze", label: "Bronze", sub: "$10K", color: "text-orange-400" },
  { key: "silver", label: "Silver", sub: "$50K", color: "text-gray-300" },
  { key: "gold", label: "Gold", sub: "$100K", color: "text-yellow-400" },
  { key: "platinum", label: "Platinum", sub: "$250K", color: "text-cyan-400" },
  { key: "diamond", label: "Diamond", sub: "$25M", color: "text-purple-400" },
];

export default function BenefitsByTier() {
  const [open, setOpen] = useState(true);

  return (
    <section className="rounded-2xl bg-[#0b1224] p-6">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="mb-4 flex w-full items-center justify-between"
      >
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Gift className="h-4 w-4 text-yellow-400" />
            Benefits by Tier
          </h3>
          <p className="text-xs text-gray-400">
            Compare rewards across all VIP levels
          </p>
        </div>
        <ChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            {/* Head */}
            <thead>
              <tr className="border-b border-white/5 text-left">
                <th className="py-3 text-gray-400">Benefit</th>
                {tiers.map((t) => (
                  <th key={t.key} className="py-3 text-center">
                    <p className={`font-medium ${t.color}`}>
                      {t.label}
                    </p>
                    <p className="text-xs text-gray-500">{t.sub}</p>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-white/5">
              <Row
                label="Rakeback"
                desc="3.5% of theoretical margin returned as cash"
                values={["3.5%", "3.5%", "3.5%", "3.5%", "3.5%"]}
              />
              <Row
                label="Weekly Boost"
                desc="Bonus every Saturday at 12:30 PM GMT"
                values={[true, true, true, true, true]}
              />
              <Row
                label="Monthly Bonus"
                desc="Monthly bonus based on VIP level & wagers"
                values={[true, true, true, true, true]}
              />
              <Row
                label="Reload Bonus"
                desc="Daily bonus based on 7–42 days wagering"
                values={[false, false, false, true, true]}
              />
              <Row
                label="Bonus Multiplier"
                desc="Higher multipliers at each tier"
                values={["1x", "1.2x", "1.5x", "2x", "3x"]}
              />
              <Row
                label="VIP Host"
                desc="Dedicated account manager"
                values={[false, false, false, true, "Priority"]}
              />
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

/* ---------------- Table Row ---------------- */

function Row({
  label,
  desc,
  values,
}: {
  label: string;
  desc: string;
  values: (boolean | string)[];
}) {
  return (
    <tr>
      <td className="py-4">
        <p className="font-medium">{label}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </td>

      {values.map((v, i) => (
        <td key={i} className="py-4 text-center">
          {typeof v === "boolean" ? (
            v ? (
              <Check className="mx-auto text-green-500" size={16} />
            ) : (
              <X className="mx-auto text-gray-500" size={16} />
            )
          ) : (
            <span className="text-xs">{v}</span>
          )}
        </td>
      ))}
    </tr>
  );
}
