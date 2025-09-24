interface Speaker {
  id: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: Array<{
    id: number;
    name: string;
  }>;
  links: Array<{
    title: string;
    url: string;
    linkType: string;
  }>;
}

class SpeakersStore {
  private speakers: Speaker[] = [];
  private loading = true;
  private promise: Promise<Speaker[]> | null = null;

  async getSpeakers(): Promise<Speaker[]> {
    if (!this.promise) {
      this.promise = fetch('https://sessionize.com/api/v2/5vdlrudo/view/Speakers')
        .then(response => response.json())
        .then(data => {
          this.speakers = data;
          this.loading = false;
          return data;
        });
    }
    return this.promise;
  }

  getSpeakerPhoto(speakerId: string): string {
    const speaker = this.speakers.find(s => s.id === speakerId);
    return speaker?.profilePicture || '';
  }
}

export const speakersStore = new SpeakersStore();
