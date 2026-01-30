type VipProgressProps = {
  total?: number;
  active?: number;
};

export default function VipProgress({
  total = 16,
  active = 8,
}: VipProgressProps) {
  return (
    <div className="flex justify-between gap-3 ">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i < active;

        return (
          <div
            key={i}
            className="w-6 h-9 rounded-[8px] overflow-hidden bg-[#081156]"
          >
            {isActive && (
              <div
                className="w-full h-full
                  bg-[linear-gradient(90deg,#8287ED_0%,#E6E7FF_50%,#FFFFFF_100%)]"
                style={{
                  backgroundSize: `${active * 100}% 100%`,
                  backgroundPosition: `${
                    (i / Math.max(active - 1, 1)) * 100
                  }% 0%`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
