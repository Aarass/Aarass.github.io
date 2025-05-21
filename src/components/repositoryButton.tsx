import githubIcon from "../assets/github.svg";

export function RepositoryButton({ href }: { href: string }) {
  return (
    <div className="flex justify-center w-full">
      <a
        href={href}
        className="rounded-full bg-white border border-(--lightgray) py-1 px-2 flex items-center"
      >
        <img src={githubIcon} className="w-4 h-4 mr-2" />
        <span className="text-(--lightgray)">Repository</span>
      </a>
    </div>
  );
}
