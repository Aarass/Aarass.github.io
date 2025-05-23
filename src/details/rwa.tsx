import banner from "../assets/images/rwa/banner.png";
import adminImage from "../assets/images/rwa/admin.png";
import { FullscreenablePicture } from "../components/picture";
import { RepositoryButton } from "../components/repositoryButton";

export function RwaDetails() {
  return (
    <>
      <div className="font-[Source_Code_Pro] text-(--darkgray)">
        <h1 className="text-6xl text-center font-light mb-5">SquadUp</h1>
        <FullscreenablePicture
          src={banner}
          portrait={false}
          imgClassName="rounded-2xl w-full border border-(--lightgray)"
          wrapperClassName=""
        />

        <p className="text-sm my-4">
          SquadUp is probably the project I put the most effort into. As my
          second Angular project, it was a chance to fix past mistakes and apply
          what I’d learned — especially from a recent internship, where I picked
          up better practices. I focused on clean architecture, consistent
          styling, and writing more maintainable code overall.
        </p>

        <section className="my-10">
          <div className="flex flex-wrap-reverse  mb-4 justify-center">
            <GridVideos />
            <p className="text-sm grow shrink basis-0 min-w-[30ch] md:mx-8">
              The platform makes it easier for casual athletes to either find a
              game to join or gather players for one they’re organizing.
              Organizers can create sessions by picking the sport, time,
              location, and optionally setting rules — like a required skill
              level or age range — to make sure the session reaches the right
              people. Players who don’t match the criteria won’t even see those
              sessions, which keeps everything clear and relevant. Whether
              you’re trying to fill a spot in your game or looking for one to
              join, the platform helps connect the right players more easily.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <article className="flex flex-wrap-reverse gap-4 justify-center">
            <p className="text-sm grow shrink basis-0 min-w-[30ch] text-right">
              Here you can see the filters you can use when searching for
              sessions. They cover everything that matters: location, time,
              sport, player limits.
            </p>
            
            <iframe
              src="https://www.youtube.com/embed/vfsFbXTZTTM?si=CWro9vPifIEgtBO7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-[12rem] aspect-video rounded-2xl"
            ></iframe>
            <p className="text-sm grow shrink basis-0 min-w-[30ch]">
              It’s simple to narrow things down and find something that really
              fits what you’re looking for.
            </p>
          </article>
          <article className="flex flex-wrap-reverse gap-4 justify-center">
            <p className="text-sm grow shrink basis-0 min-w-[30ch] text-right">
              I also built an admin panel that becomes available when a user
              with admin privileges logs in.
            </p>
            <FullscreenablePicture
              src={adminImage}
              portrait={false}
              imgClassName="w-[12rem] aspect-video rounded-2xl border border-(--lightgray)"
              wrapperClassName=""
            />
            <p className="text-sm grow shrink basis-0 min-w-[30ch]">
              From there, admins can add new sports and surfaces, as well as
              manage the images that have been uploaded to the server.
            </p>
          </article>
        </section>

        <p className="text-sm my-10">
          Since I was working with NgRx for state management, I quickly realized
          I had to get really comfortable with RxJS. Honestly, it was totally
          different from anything I’d done before. I’d be lying if I said I
          understood it all on the first try — or even the second or third. It
          took a few rounds of reading the RxJS docs before it finally clicked.
          But in the end, I got the hang of it and put it to good use.
        </p>

        <section className="flex flex-wrap justify-center my-4 technologies gap-1">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
            className="scale-125"
          />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        </section>
        <RepositoryButton href="https://github.com/Aarass/rwa" />
      </div>
    </>
  );
}

function GridVideos() {
  return (
    <div
      className="grid auto-cols-min w-fit gap-4"
      style={{
        gridTemplateAreas: `"big big" "left right"`,
      }}
    >
      <div
        style={{
          gridArea: "big",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/jlTbIi6hYlU?si=5B27WyfMIwdTIVjI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video rounded-2xl w-full"
        ></iframe>
      </div>
      <div
        className="w-[12rem] aspect-video"
        style={{
          gridArea: "left",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/_PW11PvFfN8?si=9gxzx6O5LmX9DwRL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video rounded-2xl w-full "
        ></iframe>
      </div>

      <div
        className="w-[12rem] aspect-video"
        style={{
          gridArea: "right",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/f045SgBB_Zg?si=HGlnajCpEu8xsg8d"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video rounded-2xl w-full"
        ></iframe>
      </div>
    </div>
  );
}
