import React from "react";
import github from "../../../assets/icons8-github-48.png";

import "./style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon: boolean;
}

export function Button({ showIcon, title, ...props }: ButtonProps) {
  return (
    <button {...props} className="btn container">
      {showIcon && <img src={github} />} {title}
    </button>
  );
}
