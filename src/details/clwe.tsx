import { FullscreenablePicture } from "../components/picture";
import catImage from "../assets/images/clwe/cat.jpg";
import clusterImage1 from "../assets/images/clwe/anim2.gif";
import clusterImage2 from "../assets/images/clwe/zelena elektrana.jpg";
import clusterImage3 from "../assets/images/clwe/new obstacles.jpg";
import clusterImage4 from "../assets/images/clwe/anim1.gif";
import { RepositoryButton } from "../components/repositoryButton";

export function ClweDetails() {
  return (
    <>
      <div className="font-[Source_Code_Pro] text-(--darkgray)">
        <h1 className="text-6xl text-center font-light mb-5">
          Can't Live Without Electricity
        </h1>
        <FullscreenablePicture
          src={catImage}
          portrait={false}
          imgClassName="rounded-2xl w-full"
          wrapperClassName=""
        />

        <p className="text-sm my-4">
          This is a project I worked on during the summer break between two
          academic years. It’s a clone of a game I came across recently and
          really enjoyed playing. When I discovered it, I thought recreating it
          would be a great learning opportunity — something complex enough to
          teach me new skills, yet manageable enough to stay on track and
          complete within a month or two. The goal was to have a fully playable
          version, not a polished product, but something fun and functional.
        </p>

        <p className="text-sm my-4">
          The main goal of the game is to connect every house to electricity,
          with each house requiring a specific color of power. Here’s a short
          clip from a play session to give you a better idea of how it works:
        </p>

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/h2APDjtcB1s"
          className="rounded-2xl mx-auto shadow-sm w-sm aspect-video my-10"
        ></iframe>

        <p className="text-sm my-4">
          This project put my understanding of graph theory to the test — a
          subject I had just finished studying at university. It was exciting to
          apply concepts I had learned in class to something so hands-on and
          interactive.
        </p>

        <p className="text-sm my-4">
          But the project didn’t start from scratch. It actually began with a
          few animations. I was drawn to the aesthetic of the game and thought
          it would be fun to model and animate a few characters. Somewhere along
          the way, the idea grew — and what started as a visual experiment
          slowly turned into a full-blown game. Here are a few of those early
          renders
        </p>

        <div className="flex flex-wrap gap-2 justify-center my-10">
          <FullscreenablePicture
            src={clusterImage1}
            portrait={false}
            imgClassName="rounded-2xl w-3xs"
            wrapperClassName=""
          />

          <FullscreenablePicture
            src={clusterImage2}
            portrait={false}
            imgClassName="rounded-2xl w-3xs"
            wrapperClassName=""
          />

          <FullscreenablePicture
            src={clusterImage3}
            portrait={false}
            imgClassName="rounded-2xl w-3xs"
            wrapperClassName=""
          />

          <FullscreenablePicture
            src={clusterImage4}
            portrait={false}
            imgClassName="rounded-2xl w-3xs"
            wrapperClassName=""
          />
        </div>

        <p className="text-sm my-4 mb-10">
          That said, the real MVP of this project was Blender. Right before I
          started working on the game, Blender introduced a new feature called
          Geometry Nodes. I had been experimenting with it, and this project
          turned out to be the perfect opportunity to put that knowledge into
          practice. With Geometry Nodes, I was able to delegate the entire map
          creation process to Blender. I’d feed it a pixel-art-style image of a
          map, and it would return a clean 3D mesh with perfectly aligned
          geometry and a grid overlay — exactly what I needed. I was thrilled
          with how seamlessly that system worked.
        </p>

        <section className="flex flex-wrap justify-center my-4 technologies gap-1">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
        </section>
        <RepositoryButton href="https://github.com/Aarass/rmas" />
      </div>
    </>
  );
}
