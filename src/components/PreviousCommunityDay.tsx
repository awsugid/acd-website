interface Album {
    link: string;
    title: string;
}

interface PreviousCommunityDayProp {
    albums: Album[]
}

export default function PreviousCommunityDay({ albums }: PreviousCommunityDayProp) {
    return (
        <section id="previous-community-day" className="previous-community-day section">
            <div className="container section-title" data-aos="fade-up">
                <p>Previous AWS Community Day</p>
            </div>
            <div className="container" data-aos="fade-up">
                <p>
                    <ul>
                        {albums.map((album) => (<li><a href={album.link}>{album.title}</a></li>))}
                    </ul>
                </p>
            </div>
        </section>
    );
}