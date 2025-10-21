type Person = {
    name: string;
    profileUrl?: string;
    photoUrl?: string;
    title?: string;
};

interface OrganizersProps {
    organizers?: Person[];
    volunteers?: Person[];
}

const defaultOrganizers: Person[] = [
    {
        name: "Azmi Faiz Habibi",
        profileUrl: "https://id.linkedin.com/in/azmifaizh",
        photoUrl: "https://media.licdn.com/dms/image/v2/C5603AQE6siLSnPV8Qw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1651053043619?e=2147483647&v=beta&t=ROaIBDalnis6XIJ5Tw0MxuXveVV0iFu17XjlIys7UVI",
        title: "User Group Leader",
    },
    {
        name: "Jason Jeremy Wijadi",
        profileUrl: "https://id.linkedin.com/in/jason-jw",
        photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQEcxli8urQEmw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686809316497?e=2147483647&v=beta&t=AfjqZI8wBsu7DZ5WLjud_565dCXNKd6h9So3p5BniW8",
        title: "Consulting Analyst at Deloitte",
    },
    {
        name: "Nico Abel Laia"
    },
    {
        name: "Robert Theo"
    },
    {
        name: "Muhammad Razan Fawwaz",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbBzlHUchzWaE3CjNOg04Rti4UqyRYPW8WA&s",
        profileUrl: "https://id.linkedin.com/in/razanfawwaz/en"
    },
    {
        name: "Albert Suwandhi",
        photoUrl: "https://avatars.builderprofile.aws.dev/2xueFDPqeAvQ3oYB0pBnH4SLAJV.webp",
        profileUrl: "https://id.linkedin.com/in/albertsuwandhi",
        title: "AWS Hero"
    },
    {
        name: "Bervianto Leo Pratama",
        photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQGRUHZAfptb3w/profile-displayphoto-scale_400_400/B56ZmJzwr_JoAk-/0/1758953672834?e=1762387200&v=beta&t=LcKPjrCeLX-1-tqpTV_chY8pcxurVms7eQdfdImQVQU",
        profileUrl: "https://www.linkedin.com/in/bervianto-leo-pratama/",
        title: "AWS Community Builder"
    },
    {
        name: "Luthfi Anandra",
        photoUrl: "https://media.licdn.com/dms/image/v2/C5603AQFruR73ircbBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1628700538041?e=2147483647&v=beta&t=tgPMlmRFRRc0KQg40N0ivq2uCKNAv-H67gnXFUCftS8",
        profileUrl: "https://id.linkedin.com/in/luthfi-anandra",
        title: "Site Reliability Engineer at AccelByte"
    }
];

const defaultVolunteers: Person[] = [
    {
        name: "Colin Oliver",
        title: "Volunteer",
        profileUrl: "https://www.linkedin.com/in/colin-oliver-7b311830b",
        photoUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHb6syRrmEr3A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729529837686?e=1762387200&v=beta&t=16kQd9prisbqGS192TFMp2eBH-OGKlYpiZITOrBxvqQ"
    },
    {
        name: "Sherly Venicia",
        profileUrl: "https://www.linkedin.com/in/sherly-venicia",
        title: "Volunteer",
    },
    {
        name: "Scholastica Celine Wahyudi",
        profileUrl: "https://www.linkedin.com/in/scholastica-celine-wahyudi-1505a0291",
        photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQHcRygy6W_VYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725615943973?e=1762387200&v=beta&t=cf8MYwmq1-9ncnBdiP2pii5H3LrTtcoqW8oUgV5dOqw",
        title: "Volunteer",
    },
    {
        name: "Alettadhira Syasyah",
        profileUrl: "https://www.linkedin.com/in/alettasyasyah/",
        title: "Volunteer",
    },
    {
        name: "Rahma Azzahra",
        title: "Volunteer",
    },
    {
        name: "Valentina Aileen Cruz Handoko",
        profileUrl: "https://www.linkedin.com/in/valentina-aileen-cruz-handoko-494358326",
        title: "Volunteer",
    }
];

function getFallbackAvatar(name = "User") {
    const q = encodeURIComponent(name);
    // ui-avatars generates a simple user image based on name; colors chosen to match site
    return `https://ui-avatars.com/api/?name=${q}&size=256&background=1f2937&color=ffffff&rounded=true`;
}

export default function Organizers({
    organizers = defaultOrganizers,
    volunteers = defaultVolunteers,
}: OrganizersProps) {
    function PersonCard({ person }: { person: Person }) {
        const fallback = getFallbackAvatar(person.name);

        const img = (
            <img
                src={person.photoUrl || fallback}
                alt={person.name}
                className="h-28 w-28 rounded-full object-cover"
                loading="lazy"
                onError={(e: any) => {
                    if (e?.currentTarget?.src !== fallback) {
                        e.currentTarget.src = fallback;
                    }
                }}
            />
        );

        const content = (
            <div className="flex flex-col items-center text-center gap-2">
                {img}
                <div className="text-white font-medium">{person.name}</div>
                {person.title ? <div className="text-sm text-gray-300">{person.title}</div> : null}
            </div>
        );

        return person.profileUrl ? (
            <a
                href={person.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition"
                aria-label={person.name}
                title={person.name}
            >
                {content}
            </a>
        ) : (
            <div>{content}</div>
        );
    }

    return (
        <section id="organizers" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Organizers & Volunteers</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Organizers */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white text-center mb-6">Organizers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {organizers.length === 0 ? (
                            <div className="italic text-white text-lg w-full text-center">Slots available</div>
                        ) : (
                            organizers.map((p) => <PersonCard key={p.name} person={p} />)
                        )}
                    </div>
                </div>

                {/* Volunteers */}
                <div>
                    <h3 className="text-xl font-semibold text-white text-center mb-6">Volunteers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {volunteers.length === 0 ? (
                            <div className="italic text-white text-lg w-full text-center">Slots available</div>
                        ) : (
                            volunteers.map((p) => <PersonCard key={p.name} person={p} />)
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}