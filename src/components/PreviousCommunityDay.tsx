interface Album {
  link: string;
  title: string;
}

interface PreviousCommunityDayProp {
  albums: Album[];
}

export default function PreviousCommunityDay({
  albums,
}: PreviousCommunityDayProp) {
  return (
    <section
      id="previous-community-day"
      className="previous-community-day section"
    >
      <h2 className="section-title" data-aos="fade-up">
        Previous AWS Community Day
      </h2>
      <div className="container" data-aos="fade-up">
        <p>
          <ul className="list-unstyled">
            {albums.map((album) => (
              <li>
                <a href={album.link}>{album.title}</a>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </section>
  );
}
