const columns = ["Bronze", "Silver", "Gold", "Platinum", "Diamond"];

const benefits = [
  { name: "Instant Rakeback", values: [1, 1, 1, 1, 1] },
  { name: "Weekly Bonus", values: [1, 1, 1, 1, 1] },
  { name: "Level-Up Bonus", values: [1, 1, 1, 1, 1] },
  { name: "Rank Up Bonus", values: [1, 1, 1, 1, 1] },
  { name: "Monthly Bonus", values: [1, 1, 1, 1, 1] },
  { name: "Bonus Increase", values: [0, 1, 1, 1, 1] },
  { name: "VIP Host", values: [0, 0, 1, 1, 1] },
  { name: "Invitation to Shuffle Events", values: [0, 0, 0, 0, 1] },
];

export default function VipBenefitsTable() {
  return (
    <div className="px-6 py-8">
      <div className="overflow-x-auto rounded-xl border border-[#1A1F4D]">
        <table className="min-w-[800px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0B0F4A]">
              <th className="px-6 py-4 text-left font-medium text-[#CCCDEF]">
                VIP Rank
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-4 text-center font-medium text-[#CCCDEF]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {benefits.map((benefit) => (
              <tr
                key={benefit.name}
                className="border-t border-[#1A1F4D]"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {benefit.name}
                </td>

                {benefit.values.map((value, idx) => (
                  <td
                    key={idx}
                    className="px-6 py-4 text-center"
                  >
                    {value ? (
                      <span className="inline-flex w-4 h-4 items-center justify-center rounded-full bg-[#4DFF9C] text-black text-xs font-bold">
                        ✓
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
