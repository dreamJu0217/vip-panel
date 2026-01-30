export default function VipAvatar() {
  return (
    <div className="relative w-[96px] h-[96px]">
      {/* Outer bronze ring */}
      <div className="
        absolute inset-0 rounded-full
        bg-[linear-gradient(180deg,#CD7F32_0%,#804D1B_100%)]
        flex items-center justify-center
      ">
        {/* Inner light circle */}
        <div className="
          w-[78px] h-[78px] rounded-full
          bg-[radial-gradient(93.43%_93.43%_at_76.12%_-14.19%,#FFDB66_0%,rgba(255,219,102,0)_100%)]
          flex items-center justify-center
        ">
          {/* Avatar */}
          <img
            src="/default-avatar.png"   // your avatar image
            alt="VIP Avatar"
            className="w-[56px] h-[56px] object-contain"
          />
        </div>
      </div>

      {/* Medal badge */}
      <div className="absolute -bottom-1 -right-1">
        <img
          src="/vip-bronze.svg"
          alt="Bronze Medal"
          className="w-[28px] h-[28px]"
        />
      </div>
    </div>
  );
}
