import { FullscreenablePicture } from "../components/picture";
import banner from "../assets/images/easify/banner.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const originals = Object.values(
  import.meta.glob("/src/assets/images/easify/korup/!(scaled)*.jpg", {
    eager: true,
    as: "url",
  }),
);

const thumbnails = Object.values(
  import.meta.glob("/src/assets/images/easify/korup/(scaled)*.jpg", {
    eager: true,
    as: "url",
  }),
);

export function EasifyDetails() {
  return (
    <>
      <div className="font-[Source_Code_Pro] text-(--darkgray)">
        <h1 className="text-6xl text-center font-light mb-5">EasifyNis</h1>
        <FullscreenablePicture
          src={banner}
          portrait={false}
          imgClassName="rounded-2xl w-full"
          wrapperClassName=""
        />
        <p className="text-sm my-4 mb-10">
          EasifyNis is a web application built to assist tourists in navigating
          the city of Niš by offering a digital platform for discovering local
          businesses, planning visits, and accessing discounts. The app also
          allows entrepreneurs to promote their venues, such as restaurants,
          attractions, and taxi services, by placing them on a city map
          available to all users.
          <br />
          <br />
          This was my first project using Angular, and it was developed under
          intense time pressure, during a university exam period, as part of a
          two-person team. I was solely responsible for the frontend
          implementation. Despite the challenging conditions, I successfully
          designed and implemented a responsive Progressive Web App (PWA)
          interface that enables:
          <ul className="mx-4 my-2 list-disc list-inside ">
            <li>
              User registration and login for tourists and business owners
            </li>
            <li>
              Business creation and management through interactive map features
            </li>
            <li>
              Tourist planning tools with route optimization and date-based
              visit scheduling
            </li>
            <li>QR code scanning for real-time discount validation</li>
            <li>
              Admin panel features for content moderation and tag management
            </li>
          </ul>
        </p>
        <div className="mb-10">
          <ImageGallery
            showPlayButton={false}
            items={originals.map((original, i) => {
              return {
                original,
                thumbnail: thumbnails[i],
              };
            })}
          />
        </div>
        <section className="flex  flex-wrap justify-center my-4 technologies gap-1">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
            className="scale-125"
          />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
            className="scale-90"
          />
        </section>
      </div>
    </>
  );
}
