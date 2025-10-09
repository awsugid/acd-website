import React from "react";

type Sponsor = {
    name: string;
    logoUrl: string;
    website?: string;
    isNeedBackground: boolean;
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
    Other: 60,
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
    Other: [
    {
        logoUrl: "https://gudang.awscommunity.id/sponsors/binus-uni.png",
        name: "BINUS University",
        website: "https://binus.ac.id/",
        isNeedBackground: true,
    },
    {
        logoUrl: "https://gudang.awscommunity.id/sponsors/jetbrains-mono-white.png",
        name: "JetBrains",
        website: "https://www.jetbrains.com/",
        isNeedBackground: false,
    },
],
};

const Sponsors: React.FC = () => (
    <section id="sponsors" className="py-20 bg-slate-800/5">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>
        <div className="flex flex-col gap-10 items-center w-full">
            <div className="flex flex-wrap gap-8 justify-center items-center min-h-[60px]">
                {sponsors["Other"].length === 0 ? (
                                <div className="italic text-white text-lg w-full text-center">Slots available</div>
                ) : (sponsors["Other"].map((sponsor) => (
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
                                                height: TIER_IMAGE_HEIGHT["Other"],
                                                maxWidth: 180,
                                                objectFit: "contain",
                                                backgroundColor: sponsor.isNeedBackground ? "white" : undefined,
                                            }}
                                            className="block"
                                        />
                                    </a>
                                ))
                            )}
                        </div>
                    </div>
                )
    </section>
);

export default Sponsors;