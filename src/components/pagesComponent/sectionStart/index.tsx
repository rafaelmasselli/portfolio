import React, { useEffect, useState } from "react";
import avatarProfile from "../../../assets/grin smile.png";
import { useSpring, animated } from "react-spring";
import "./style.css";
import { transitionDarkModeCss } from "../../../util/transitionDarkModCss";
import { useScrollToSection } from "../../../util/handleScroll";

interface sectionStartProps {
  darkMod: boolean;
}

export function SectionStart({ darkMod }: sectionStartProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { sectionRef } = useScrollToSection();

  const imgHelloWord = [
    darkMod
      ? "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1000&color=FFFFFF&center=true&vCenter=true&random=false&width=500&lines=print(%22Hello,+world%22)"
      : "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1000&color=000000&center=true&vCenter=true&random=false&width=500&lines=print(%22Hello,+world%22)",
    darkMod
      ? "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1500&color=FFFFFF&center=true&vCenter=true&random=false&width=500&lines=console.log(%22Hello,+world%22)"
      : "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1500&color=000000&center=true&vCenter=true&random=false&width=500&lines=console.log(%22Hello,+world%22)",
  ];

  useEffect(() => {
    const updateImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % imgHelloWord.length);
    };
    const intervalId = setInterval(updateImage, 7000);
    return () => clearInterval(intervalId);
  }, [darkMod, imgHelloWord.length]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  const avatarSpring = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(-10px)",
    from: { opacity: 0, transform: "translateY(-10px)" },
  });

  const textSpring = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(-10px)",
    from: { opacity: 0, transform: "translateX(-10px)" },
  });

  const backgroundSpring = useSpring({
    opacity: animate ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.section
      ref={sectionRef}
      className={`bg-slate-100 w-full h-[700px] ${
        darkMod ? "animation__background" : "animation__background__darkMod"
      } ${transitionDarkModeCss}`}
      style={backgroundSpring}
    >
      <div className="w-full">
        <div className="flex justify-center items-center flex-col  flex-wrap mt-[250px]">
          <animated.div style={avatarSpring}>
            <figure>
              <img
                src={avatarProfile}
                alt="icon profile"
                className="w-44 rounded-full mt-[-50px]"
              />
            </figure>
          </animated.div>
          <animated.div
            className="flex-wrap ml-1 text-center md:text-left"
            style={textSpring}
          >
            <h2
              className={` ${
                darkMod ? "text-white" : "text-black"
              } font-['roboto'] md:text-3xl font-bold mt-2 md:mt-0`}
            >
              Olá, meu nome é Rafael Ykher Masselli.
            </h2>
            <h2
              className={`${
                darkMod ? "text-slate-400" : "text-slate-900"
              } font-['roboto'] md:text-lg  font-normal`}
            >
              Engenheiro de software && Desenvolvedor Full-Stack
            </h2>
            <div className="bg-black w-full flex">
              <img
                src={imgHelloWord[currentImage]}
                alt="Typing SVG"
                className=""
              />
            </div>
          </animated.div>
        </div>
      </div>
    </animated.section>
  );
}
