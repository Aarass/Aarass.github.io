import { useEffect, useRef } from "react";
import closeIcon from "../assets/close.svg";

export function FullscreenablePicture({
  src,
  imgClassName,
  wrapperClassName,
  portrait,
}: {
  src: string;
  imgClassName: string;
  wrapperClassName: string;
  portrait: boolean;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const dialog = dialogRef.current;

    if (img === null) return;
    if (dialog === null) return;

    const handler = () => {
      dialogRef.current?.showModal();
    };

    const backdrop = (ev: MouseEvent) => {
      if (dialogRef.current === null) return;

      if (dialogRef.current === ev.target) {
        dialogRef.current.close();
      }
    };

    img.addEventListener("click", handler);
    dialog.addEventListener("click", backdrop);

    return () => {
      img.removeEventListener("click", handler);
      dialog.removeEventListener("click", backdrop);
    };
  });

  return (
    <>
      <div className={wrapperClassName}>
        <img
          src={src}
          className={"cursor-pointer " + imgClassName}
          ref={imgRef}
        />
        <div className="relative">
          <dialog
            ref={dialogRef}
            className="max-w-screen max-h-lvh w-full h-dvh lg:p-10 bg-transparent"
          >
            <div className="absolute top-1/2 left-1/2 -translate-1/2 flex items-center justify-center">
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  className={
                    portrait
                      ? "max-w-[unset] w-[90vw] sm:w-[unset] sm:h-[90svh]"
                      : "max-w-[unset] w-[90vw] 2xl:w-[unset] 2xl:h-[90dvh]"
                  }
                />

                <div className="absolute top-0 right-0 bg-white rounded-bl-4xl pl-1.5 pb-1.5">
                  <button
                    className="rounded-full p-2 ml-auto cursor-pointer"
                    onClick={() => {
                      dialogRef.current?.close();
                    }}
                  >
                    <img src={closeIcon} className="w-6 aspect-square" />
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
