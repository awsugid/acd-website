import React from "react";

type Sponsor = {
    name: string;
    logoUrl: string;
    website?: string;
};

type Tier = "Gold" | "Silver" | "Bronze" | "Community" | "Other";

type SponsorsByTier = {
    [key in Tier]: Sponsor[];
};

const TIER_ORDER: Tier[] = ["Gold", "Silver", "Bronze", "Community", "Other"];

const TIER_IMAGE_HEIGHT: Record<Tier, number> = {
    Gold: 100,
    Silver: 80,
    Bronze: 60,
    Community: 50,
    Other: 40,
};

const TIER_LABEL: Record<Tier, string> = {
    Gold: "Gold Sponsors",
    Silver: "Silver Sponsors",
    Bronze: "Bronze Sponsors",
    Community: "Community Sponsors",
    Other: "Other Sponsors",
};

// Example sponsors data (replace with your actual data)
const sponsors: SponsorsByTier = {
    Gold: [],
    Silver: [],
    Bronze: [],
    Community: [],
    Other: [{
        logoUrl: "https://gudang.awscommunity.id/sponsors/jetbrains-mono-white.png",
        name: "JetBrains",
        website: "https://www.jetbrains.com/",
    }],
};

const Sponsors: React.FC = () => (
    <section className="py-20 bg-slate-800/5">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>
        <div className="flex flex-col gap-10 items-center w-full">
            {TIER_ORDER.map((tier) => (
                <div
                    key={tier}
                    className="w-full max-w-4xl p-0"
                >
                    <h2 className="text-center text-xl font-semibold mb-6 text-white">
                        {TIER_LABEL[tier]}
                    </h2>
                    <div className="flex flex-wrap gap-8 justify-center items-center min-h-[60px]">
                        {sponsors[tier].length === 0 ? (
                            <div className="italic text-white text-lg w-full text-center">Slots available</div>
                        ) : (
                            sponsors[tier].map((sponsor) => (
                                <a
                                    key={sponsor.name}
                                    href={sponsor.website || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-0 min-w-[120px] min-h-[48px] transition"
                                    title={sponsor.name}
                                >
                                    <img
                                        src={sponsor.logoUrl}
                                        alt={sponsor.name}
                                        style={{
                                            height: TIER_IMAGE_HEIGHT[tier],
                                            maxWidth: 180,
                                            objectFit: "contain",
                                        }}
                                        className="block"
                                    />
                                </a>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Sponsors;