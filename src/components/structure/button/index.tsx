import React from "react";
import { openContact } from "../../../util/contact";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link: string;
}

export function Button({ link, ...props }: ButtonProps) {
  const Link = link[0].toLocaleLowerCase();
  let title;
  if (Link === "c") {
    title = "Currículo";
  } else if (Link === "g") {
    title = "GitHub";
  } else {
    title = "LinkedIn";
  }
  return (
    <button
      {...props}
      onClick={() => openContact(link)}
      className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded m-1"
    >
      {title}
    </button>
  );
}
