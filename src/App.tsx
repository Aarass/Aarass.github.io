import avatar from "./assets/images/avatar.jpg";
import githubIcon from "./assets/github.svg";
import emailIcon from "./assets/email.svg";
import emaildarkIcon from "./assets/emaildark.svg";
import arrowIcon from "./assets/arrow.svg";
import phoneIcon from "./assets/phone.svg";
import locationIcon from "./assets/location.svg";
import cvIcon from "./assets/cv.svg";
import "./App.css";

function App() {
  return (
    <>
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
              {IconButton(githubIcon, "https://github.com/Aarass")}{" "}
              {IconButton(cvIcon, "mailto:prokopovic75@gmail.com")}
              {IconButton(emailIcon, "mailto:prokopovic75@gmail.com")}
            </div>
          </div>
          <hr className="my-10 w-1/2 border-(--lightgray)" />
        </div>
      </header>
      <div className="scroll mx-auto w-8">
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

// <footer className="bg-(--lightgray) lg:px-[25%] ">
//   <div className="p-3 py-5 ">
//     <div className="flex flex-col items-end ">
//       {FooterEntry(phoneIcon, "+381 62 1715606")}
//       {FooterEntry(emaildarkIcon, "prokopovic75@gmail.com")}
//       {FooterEntry(locationIcon, "Serbia, Leskovac")}
//     </div>
//   </div>
// </footer>
// <div className="bg-(--darkgray) text-(--lightgray) text-center">
//   © 2025 Aleksandar Prokopović. All rights reserved.
// </div>
//
function IconButton(icon: string, link: string) {
  return (
    <a
      href={link}
      className="w-10 aspect-square rounded-full border  border-(--lightgray) flex justify-center items-center mx-2"
    >
      <div className="w-3/5 ">
        <img src={icon}></img>
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
