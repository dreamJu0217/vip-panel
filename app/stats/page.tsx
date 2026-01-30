import BenefitsByTier from "../components/benefitsByTier";
import YourStats from "../components/yourStats";
export default function BoostBonuses() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05070f] to-[#070b16] text-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <BenefitsByTier />
                <YourStats />
            </div>
        </div>
    )
}
