import { darkMod } from "../../interface/darkMod";
import IconProfile from "../../assets/grin smile.png";
import { useEffect, useState } from "react";
import ParticleComponent from "../../components/structure/particles/";

export function Home({ darkMod }: darkMod) {
  const [currentImage, setCurrentImage] = useState(0);

  const imgHelloWord = [
    darkMod
      ? "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1000&color=FFFFFF&center=true&vCenter=true&random=false&width=500&lines=print(%22Hello,+world%22)"
      : "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1000&color=000000&center=true&vCenter=true&random=false&width=500&lines=print(%22Hello,+world%22)",
    darkMod
      ? "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1000&color=FFFFFF&center=true&vCenter=true&random=false&width=500&lines=console.log(%22Hello,+world%22)"
      : "https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=25&pause=1000&color=000000&center=true&vCenter=true&random=false&width=500&lines=console.log(%22Hello,+world%22)",
  ];

  useEffect(() => {
    const updateImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % imgHelloWord.length);
    };
    const intervalId = setInterval(updateImage, 6500);
    return () => clearInterval(intervalId);
  }, [darkMod, imgHelloWord.length]);

  return (
    <div>
      <main className="flex justify-center items-center">
        <div className="w-full ">
          <div className="flex justify-center items-center flex-wrap mt-40 ">
            <div className="flex justify-center flex-col">
              <figure>
                <img
                  src={IconProfile}
                  alt=""
                  className="w-44 rounded-full mt-[-50px] mb-[-10px] "
                />
              </figure>
            </div>
            {/* <ParticleComponent /> */}
            <section>
              <div className="flex-wrap ml-1 text-center md:text-left">
                <h2
                  className={`mt-10  ${
                    darkMod ? "text-white" : "text-black"
                  } font-['roboto'] md:text-3xl font-bold mt-8 md:mt-0`}
                >
                  Olá, meu nome é Rafael Ykher Masselli.
                </h2>
                <h2
                  className={`${
                    darkMod ? "text-slate-400" : "text-slate-800"
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
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
