// "1080x2141";

import banner from "../assets/images/rmas/banner.jpg";
import leaderboard from "../assets/images/rmas/leaderboard.png";
import githubIcon from "../assets/github.svg";
import { RepositoryButton } from "../components/repositoryButton";
// "Share Tech Mono"
// font-[Architects_Daughter]
export function RmasDetails() {
  return (
    <div className="font-[Source_Code_Pro] text-(--darkgray)">
      <h1 className="text-6xl text-center font-light mb-5">SeekOut</h1>

      <img src={banner} className="w-full rounded-2xl my-2"></img>

      <p className=" text-sm my-4">
        SeekOut is a university project — a crowdmapping mobile app designed to
        connect outdoor enthusiasts. Users share photos of beautiful natural
        spots by marking them on an interactive map, explore nearby locations,
        and discover what others have found. They can comment on and rate these
        places, earning points that contribute to a community leaderboard.
      </p>

      <section className="flex flex-wrap my-10">
        <p className="text-sm my-4 md:max-w-1/3 md:m-auto">
          Watch this short video to explore the main features and how everything
          works in real time
        </p>
        <iframe
          width="178"
          height="357"
          allow="fullscreen;"
          src="https://www.youtube.com/embed/-4hIVowPUM8"
          className="rounded-2xl mx-auto shadow-sm"
        ></iframe>
      </section>

      <section className="flex flex-wrap flex-row-reverse my-10">
        <p className="text-sm my-4 md:max-w-1/3 md:m-auto">
          Here’s the leaderboard, where you’ll find an entry from the assistant
          who went over my work
        </p>
        <img
          width="178"
          height="357"
          src={leaderboard}
          className="rounded-2xl mx-auto shadow-sm"
        />
      </section>

      <section className="flex flex-wrap justify-center my-4 technologies">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
      </section>

      <RepositoryButton href="https://github.com/Aarass/rmas" />
    </div>
  );
}
