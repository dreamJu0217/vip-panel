const levels = [
  { id: 1, icon: "/vip-bronze.svg", active: true },
  { id: 2, icon: "/vip-silver.svg" },
  { id: 3, icon: "/vip-gold.svg" },
  { id: 4, icon: "/vip-diamond.svg" },
  { id: 5, icon: "/vip-elite.svg" },
];

export default function VipLevels() {
  return (
    <div className="w-full px-6 py-6">
      {/* Progress Track */}
      <div className="relative flex items-center">
        {/* Base line */}
        <div className="absolute left-[15px] right-[15px] h-[14px] bg-[#1A1F4D] rounded-full" />

        {/* Active fill */}
        <div
          className="absolute left-[15px] h-[14px] rounded-full bg-gradient-to-r from-[#FFFFFF] to-[#BFC1FF]"
          style={{ width: "20%" }} // active progress
        />

        {/* Medals */}
        <div className="relative z-10 flex justify-between w-full">
          {levels.map((level, index) => (
            <div key={level.id} className="relative flex flex-col items-center">
              <img
                src={level.icon}
                alt="VIP Level"
                className={`w-[150px] h-[150px] ${
                  level.active ? "" : "opacity-80"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
