import {
  useEffect,
  useRef,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import arrowIcon from "./assets/arrow.svg";
import closeIcon from "./assets/close.svg";
import cvIcon from "./assets/cv.svg";
import emailIcon from "./assets/email.svg";
import emaildarkIcon from "./assets/emaildark.svg";
import githubIcon from "./assets/github.svg";
import avatar from "./assets/images/avatar.jpg";
import clweImage from "./assets/images/clwe/cat.jpg";
import rmasImage from "./assets/images/rmas/banner.jpg";
import rwaImage from "./assets/images/rwa/banner.png";
import locationIcon from "./assets/location.svg";
import phoneIcon from "./assets/phone.svg";
import { ClweDetails } from "./details/clwe.tsx";
import { RmasDetails } from "./details/rmas.tsx";
import { RwaDetails } from "./details/rwa.tsx";

function App() {
  return (
    <>
      <header className="">
        <div className="w-full flex flex-col justify-center items-center">
          <hr className="my-10 w-1/2 border-(--lightgray)" />

          <div className="flex flex-col justify-center items-center">
            <div className="relative">
              <img src={avatar} className="w-50 rounded-full"></img>
              <div className="absolute top-1/2 left-1/2">
                <div className="relative techstack">
                  <i className="devicon-angular-plain"></i>
                  <i className="devicon-kotlin-plain"></i>
                  <i className="devicon-nodejs-plain-wordmark"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-rust-original"></i>
                  <i className="devicon-csharp-plain"></i>
                  <i className="devicon-cplusplus-plain"></i>
                  <i className="devicon-c-plain"></i>
                  <i className="devicon-python-plain"></i>
                </div>
              </div>
            </div>
            <h1
              className="m-4 text-(--darkgray)"
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                fontFamily: `"Source Code Pro", monospace`,
                fontOpticalSizing: "auto",
                fontStyle: "normal",
                letterSpacing: "0.4rem",
                fontSize: "1.5em",
                lineHeight: "1.25",
                fontWeight: "400",
              }}
            >
              Aleksandar Prokopović
            </h1>
            <hr className="my-0 w-10 border-(--lightgray)" />
            <p
              className="m-4 text-(--darkgray)"
              style={{
                textTransform: "uppercase",
                fontFamily: `"Source Code Pro", monospace`,
                fontOpticalSizing: "auto",
                fontStyle: "normal",
                letterSpacing: "0.1em",
                fontSize: "0.75em",
                lineHeight: "1.25",
                fontWeight: "400",
              }}
            >
              Full-Stack Overthinker
            </p>
            <div className="flex justify-center items-center mt-5">
              <IconButton src={githubIcon} href="https://github.com/Aarass" />
              <IconButton src={cvIcon} href="mailto:prokopovic75@gmail.com" />
              <IconButton
                src={emailIcon}
                href="mailto:prokopovic75@gmail.com"
              />
            </div>
          </div>
          <hr className="my-10 w-1/2 border-(--lightgray)" />
        </div>
      </header>

      <div className="mx-auto w-8 mb-10">
        <img
          src={arrowIcon}
          className="animate-pulse"
          style={{ animationDelay: "0ms" }}
        ></img>
        <img
          src={arrowIcon}
          className="animate-pulse -translate-y-3"
          style={{
            animationDelay: "500ms",
          }}
        ></img>
      </div>

      <DisplaySection heading="💎 My Finest Work">
        <ProjectDisplay src={rwaImage} name="SquadUp">
          <RwaDetails />
        </ProjectDisplay>
        <ProjectDisplay src={rmasImage} name="SeekOut">
          <RmasDetails />
        </ProjectDisplay>

        <ProjectDisplay src={clweImage} name="Can't live without electricity">
          <ClweDetails />
        </ProjectDisplay>
      </DisplaySection>

      <DisplaySection heading="🚧 Under Construction">
        <ProjectDisplay src={clweImage} name="Can't live without electricity">
          <div>
            <p>2</p>
          </div>
        </ProjectDisplay>
      </DisplaySection>

      <DisplaySection heading="🌱 My roots">
        <ProjectDisplay src={clweImage} name="Can't live without electricity">
          <div>
            <p>3</p>
          </div>
        </ProjectDisplay>
      </DisplaySection>

      <footer className="lg:px-[25%] flex flex-col items-center">
        <hr className="my-10 w-1/2 border-(--lightgray)" />
        <div className="">
          {FooterEntry(locationIcon, "Serbia, Leskovac")}
          {FooterEntry(phoneIcon, "+381 62 1715606")}
          {FooterEntry(emaildarkIcon, "prokopovic75@gmail.com")}
        </div>
        <hr className="my-10 w-1/2 border-(--lightgray)" />
      </footer>
    </>
  );
}

function DisplaySection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-20 flex flex-col items-center">
      <div className="text-(--darkgray) ">
        <p className="font-light text-xl mb-8">{heading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 auto-cols-min gap-4 w-[fit-content] ">
          {children}
        </div>
      </div>
    </section>
  );
}

function ProjectDisplay({
  src,
  name,
  children,
}: PropsWithChildren & {
  src: string;
  name: string;
}) {
  const cardRef = useRef<HTMLImageElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const dialog = dialogRef.current;

    if (card === null) return;
    if (dialog === null) return;

    const handler = () => {
      dialogRef.current?.showModal();
      closeButtonRef.current?.blur();
    };

    const backdrop = (ev: MouseEvent) => {
      if (dialogRef.current === null) return;

      if (dialogRef.current === ev.target) {
        dialogRef.current.close();
      }
    };

    card.addEventListener("click", handler);
    dialog.addEventListener("click", backdrop);

    return () => {
      card.removeEventListener("click", handler);
      dialog.removeEventListener("click", backdrop);
    };
  });

  return (
    <div>
      <div
        ref={cardRef}
        className="p-3 shadow-sm rounded-2xl cursor-pointer hover:scale-105 transition-all"
      >
        <img src={src} className="w-2xs rounded-md" />
        <h1 className="font-light text-sm text-center mt-2">{name}</h1>
      </div>

      <div className="relative">
        <dialog
          ref={dialogRef}
          className="max-w-screen max-h-lvh w-full h-dvh lg:p-10 bg-transparent"
        >
          <div className="flex flex-col bg-white w-full lg:w-2/3 2xl:w-1/2 h-full lg:rounded-2xl p-3 m-auto overflow-hidden ">
            <div className="flex justify-end pb-3">
              <button
                ref={closeButtonRef}
                className="rounded-full p-1 ml-auto cursor-pointer"
                onClick={() => {
                  dialogRef.current?.close();
                }}
              >
                <img src={closeIcon} className="w-6 aspect-square" />
              </button>
            </div>
            <div className="flex-1 overflow-scroll dialog-bg">{children}</div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

function IconButton({ src, href }: { src: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 aspect-square rounded-full border  border-(--lightgray) flex justify-center items-center mx-2 hover:brightness-75 transition-all"
    >
      <div className="w-3/5 ">
        <img src={src} className=""></img>
      </div>
    </a>
  );
}

function FooterEntry(icon: string, text: string) {
  return (
    <div className="flex items-center justify-center">
      <img src={icon} className="w-5 mr-1"></img>
      <p className="text-(--darkgray) m-0 uppercase font-[300] text-xs tracking-tighter leading-6">
        {text}
      </p>
    </div>
  );
}

export default App;
