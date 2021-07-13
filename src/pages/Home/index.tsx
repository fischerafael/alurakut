import { MenuIcon, CodeIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { MainButton } from "../../../styles/design-system/Button";
import { Input, TextArea } from "../../../styles/design-system/Input";

import Link from "next/link";
import { ProjectCard } from "./components/ProjectCard";

const HomePage = () => {
  return (
    <>
      <header className="w-full bg-blue-200 h-header flex items-center justify-center px-2">
        <nav className="max-w-sm w-full flex justify-between items-center">
          <img src="/alurakut.svg" alt="" className="h-8" />
          <MenuIcon className="w-8 h-8 text-white" />
        </nav>
      </header>

      <main className="w-full bg-blue-100 flex flex-col items-center p-5 gap-5">
        <section className="bg-white w-full max-w-sm p-5 flex flex-col gap-5 rounded-md">
          <section className="flex gap-5">
            <img
              src="https://avatars.githubusercontent.com/u/47259718?v=4"
              alt=""
              className="w-20 h-20 rounded-full border-4 border-pink-500"
            />

            <section className="flex flex-col gap-5">
              <h1 className="text-lg">
                Bem-vindo(a), <span className="font-bold">Rafael</span>
              </h1>

              <section className="grid grid-cols-3 gap-4">
                <section className="flex flex-col items-center">
                  <h3 className="text-sm">Seguidores</h3>
                  <h2 className="text-lg font-bold">25</h2>
                </section>

                <section className="flex flex-col items-center">
                  <h3 className="text-sm">Seguindo</h3>
                  <h2 className="text-lg font-bold">25</h2>
                </section>

                <section className="flex flex-col items-center">
                  <h3 className="text-sm">Repositórios</h3>
                  <h2 className="text-lg font-bold">25</h2>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="bg-white w-full max-w-sm p-5 flex flex-col gap-5 rounded-md">
          <h1 className="text-lg font-bold">Publicar projeto</h1>
          <Input type="text" placeholder="Nome do Projeto" />
          <Input type="text" placeholder="Repositório do Projeto" />
          <TextArea placeholder="Descrição do Projeto" />
          <MainButton>Publicar Projeto</MainButton>
        </section>

        <section className="bg-white w-full max-w-sm p-5 flex flex-col gap-5 rounded-md">
          <h1 className="text-lg font-bold">Últimos projetos da galera</h1>

          <ProjectCard
            name="Alurakut"
            author="omariosouto"
            description="Projeto desenvolvido na imersão React utilizando tecnologias loucas"
            github="omariosouto"
            url="www.google.com"
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
