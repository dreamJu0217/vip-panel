// app/page.tsx
import VipProgress from './components/vipProgress'
import VipBenefitsTable from './components/vipBenefitsTable'
import VipLevels from './components/vipLevels'

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0B0E2A] p-6" >

            <div className="w-full max-w-[1200px] mx-auto text-white mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <img src={"./kingcap.svg"} />
                    <h2 className="font-soehne font-semibold text-[20px] leading-[24px] tracking-[0.02em] text-center  uppercase">VIP PROGRAM</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative rounded-xl border border-[#4C3A00] bg-[#000135]  p-6 overflow-hidden">
                        <div className="relative items-center gap-4 mb-6">
                            <div className="relative w-[96px] h-[96px]">
                                <div
                                    className="
          w-full h-full rounded-full mix-blend-plus-lighter
          bg-[radial-gradient(93.43%_93.43%_at_76.12%_-14.19%,#FFDB60_0%,rgba(255,219,102,0)_100%),linear-gradient(180deg,#FFDB00_0%,#804D1B_100%)]
          flex items-center justify-center 
        "
                                >
                                    <div className="w-[78px] h-[78px] rounded-full bg-[#e1b63c] flex items-center justify-center">
                                        <img
                                            src="/default-avatar.png"
                                            alt="VIP Avatar"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>

                                <div style={{ bottom: "-3px" }} className="absolute -bottom-1 -right-1 flex items-center justify-center shadow-lg">
                                    <img
                                        src="/vip-bronze.svg"
                                        alt="VIP Medal"
                                        className="w-9 h-10"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 pt-15">
                                <div className="flex justify-between text-body">
                                    <span className="text-[14px] font-medium">Your Progress</span>
                                    <span className="text-[14px] font-medium">49%</span>
                                </div>
                                <div className="mt-2 justify-between flex gap-3">
                                    <VipProgress />
                                </div>
                                <div className="flex justify-between mt-2 text-[12px] opacity-70">
                                    <span className="font-medium text-[#999AE0] text-[12px] leading-[21.6px] tracking-normal text-center capitalize">Bronze</span>
                                    <span className="font-medium text-[#FFE799] text-[12px] leading-[21.6px] tracking-normal text-center capitalize">Silver</span>
                                </div>
                            </div>
                            <div style={{ top: "0px", right: 0 }} className="absolute h-[120] bg-[#000135] flex items-center justify-center shadow-lg">
                                <img
                                    src="/metal1.svg"
                                    alt="VIP Medal"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="relative rounded-xl p-6 overflow-hidden border border-[#4C3A00]">

                        <div className="absolute inset-0 z-0 flex justify-end">
                            <img
                                src="/benefit-background.svg"
                                alt="Benefit Background"
                                className="h-full object-cover"
                            />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center shadow-lg">
                                    <img
                                        src="/vip-bronze.svg"
                                        alt="VIP Medal"
                                        className="w-[50] h-[56]"
                                    />
                                </div>
                                <h3 style={{fontWeight:700}} className="mix-blend-plus-lighter  font-soehne text-[16px] text-[#FFE799]">
                                    Bronze benefits
                                </h3>
                            </div>

                            <ul className="font-medium space-y-3 text-[12px]">
                                <li>•  Instant Rakeback On Every Bet.</li>
                                <li>•  Weekly Rewards Based On Your Activity.</li>
                                <li>•  Unlock Better Perks As You Level Up.</li>
                                <li className="line-through text-[#997500]">
                                    •  Extra Rewards For Reaching New Ranks.
                                </li>
                                <li className="line-through text-[#997500]">
                                    •  Monthly Payout Based On Overall Activity.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <div className="w-full max-w-[1200px] mx-auto text-white mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <img src={"./kingcap.svg"} />
                    <h2 className="font-soehne font-semibold text-[20px] leading-[24px] tracking-[0.02em] text-center  uppercase">VIP LEVELS</h2>
                </div>
                <div className="grid grid-cols-1">
                    <VipLevels />
                </div>
            </div>
            <div className="w-full max-w-[1200px] mx-auto text-white mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <img src={"./rocket.svg"} />
                    <h2 className="font-soehne font-semibold text-[20px] leading-[24px] tracking-[0.02em] text-center  uppercase">THE BENEFITS</h2>
                </div>
                <div className="grid grid-cols-1">
                    <VipBenefitsTable />
                </div>
            </div>
        </main>
    )
}
