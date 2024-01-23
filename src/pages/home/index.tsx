import { SectionStart } from "../../components/pagesComponent/sectionStart";

interface homeProps {
  darkMod: boolean;
}

export function Home({ darkMod }: homeProps) {
  return (
    <div>
      <main className="flex justify-center items-center flex-col">
        <SectionStart darkMod={darkMod} />
        <section className="w-full flex justify-center items-center flex-col mt-[150px]">
          <h1
            className={`${
              darkMod ? "text-white" : "text-black"
            } font-['roboto'] md:text-3xl font-bold mt-8 md:mt-[100px]`}
          >
            Sobre mim
          </h1>
          <div>
            <div>
              <h2 className="">Tecnologias</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
