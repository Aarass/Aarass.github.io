import { useEffect, useRef, useState, type ReactNode } from "react";
import "./App.css";
import arrowIcon from "./assets/arrow.svg";
import cvIcon from "./assets/cv.svg";
import emailIcon from "./assets/email.svg";
import emaildarkIcon from "./assets/emaildark.svg";
import githubIcon from "./assets/github.svg";
import avatar from "./assets/images/avatar.jpg";
import clweImage from "./assets/images/CLWE.png";
import locationIcon from "./assets/location.svg";
import phoneIcon from "./assets/phone.svg";
import closeIcon from "./assets/close.svg";

function App() {
  const [overlayChild, setOverlayChild] = useState<ReactNode>(null);

  return (
    <>
      <Overlay>{overlayChild}</Overlay>

      <header className="">
        <div className="w-full flex flex-col justify-center items-center">
          <hr className="my-10 w-1/2 border-(--lightgray)" />

          <div className="flex flex-col justify-center items-center">
            <img src={avatar} className="w-50 rounded-full"></img>
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
        <ProjectDisplay
          src={clweImage}
          name="Can't live without electricity"
          passChildren={setOverlayChild}
        >
          <div>
            <p>1</p>
          </div>
        </ProjectDisplay>
      </DisplaySection>

      <DisplaySection heading="🚧 Under Construction">
        <ProjectDisplay
          src={clweImage}
          name="Can't live without electricity"
          passChildren={setOverlayChild}
        >
          <div>
            <p>2</p>
          </div>
        </ProjectDisplay>
      </DisplaySection>

      <DisplaySection heading="🌱 My roots">
        <ProjectDisplay
          src={clweImage}
          name="Can't live without electricity"
          passChildren={setOverlayChild}
        >
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

function Overlay({ children }: { children: ReactNode | null }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const open = () => {
    console.log(dialogRef.current);
    dialogRef.current?.showModal();
    closeButton.current?.blur();
  };

  const close = () => {
    dialogRef.current?.close();
  };

  const backdrop = (ev: MouseEvent) => {
    if (dialogRef.current === null) return;

    if (dialogRef.current === ev.target) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    if (children === null) return;

    open();
    closeButton.current?.addEventListener("click", close);
    dialogRef.current?.addEventListener("click", backdrop);

    return () => {
      closeButton.current?.removeEventListener("click", close);
      dialogRef.current?.removeEventListener("click", backdrop);
    };
  });

  return (
    <dialog
      ref={dialogRef}
      className="max-w-screen max-h-svh w-full h-full p-10 bg-transparent"
    >
      <div className="bg-white w-full lg:w-1/2 h-full rounded-2xl p-3 m-auto overflow-hidden">
        <div className="flex justify-end">
          <button
            ref={closeButton}
            className="rounded-full p-1 ml-auto cursor-pointer"
          >
            <img src={closeIcon} className="w-6 aspect-square" />
          </button>
        </div>
        <div className="h-full overflow-scroll">{children}</div>
      </div>
    </dialog>
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
        <p className="font-light text-xl">{heading}</p>
        <div>
          <hr className="mb-5 mt-2 w-1/8 border-(--lightgray)" />
        </div>
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
  passChildren,
}: {
  src: string;
  name: string;
  children: ReactNode;
  passChildren: Function;
}) {
  return (
    <div
      className="p-3 shadow-sm rounded-2xl cursor-pointer hover:scale-105 transition-all"
      onClick={() => {
        passChildren(children);
      }}
    >
      <img src={src} className="w-2xs rounded-md"></img>
      <h1 className="font-light text-sm text-center mt-2">{name}</h1>
    </div>
  );
}

function IconButton({ src, href }: { src: string; href: string }) {
  return (
    <a
      href={href}
      className="w-10 aspect-square rounded-full border  border-(--lightgray) flex justify-center items-center mx-2"
    >
      <div className="w-3/5 ">
        <img src={src}></img>
      </div>
    </a>
  );
}

function FooterEntry(icon: string, text: string) {
  return (
    <div className="flex items-center justify-center">
      <img src={icon} className="w-5 mr-1"></img>
      <p className="text-(--darkgray) m-0 uppercase text-xs tracking-tighter leading-6">
        {text}
      </p>
    </div>
  );
}

export default App;
