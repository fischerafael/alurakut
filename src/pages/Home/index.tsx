import { MenuIcon, CodeIcon, ArrowRightIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainButton } from "../../../styles/design-system/Button";
import { Input, TextArea } from "../../../styles/design-system/Input";

import { ProjectCard } from "./components/ProjectCard";

const HomePage = () => {
  const { query } = useRouter();
  const { github } = query;

  const [userData, setUserData] = useState({
    name: "",
    avatar_url: "",
    login: "",
    followers: 0,
    following: 0,
    public_repos: 0,
  });

  console.log(userData);

  useEffect(() => {
    if (github) {
      (async () => {
        const { data } = await axios.get(
          `https://api.github.com/users/${github}`
        );

        setUserData({
          name: data.name,
          avatar_url: data.avatar_url,
          login: data.login,
          followers: data.followers,
          following: data.following,
          public_repos: data.public_repos,
        });
      })();
    }
  }, []);

  return (
    <>
      <header className="w-full bg-blue-100 h-header flex items-center justify-center px-2">
        <nav className="max-w-sm w-full flex justify-between items-center">
          <img src="/alurakut.svg" alt="" className="h-8" />
          <MenuIcon className="w-8 h-8 text-white" />
        </nav>
      </header>

      <main className="w-full bg-blue-50 flex flex-col items-center p-5 gap-5">
        <section className="bg-white w-full max-w-sm p-5 flex flex-col gap-5 rounded-md">
          <section className="flex gap-5">
            <img
              src={userData.avatar_url}
              alt=""
              className="w-20 h-20 rounded-full border-4 border-pink-500"
            />

            <section className="flex flex-col gap-5">
              <h1 className="text-lg">
                Bem-vindo(a), <span className="font-bold">{userData.name}</span>
              </h1>

              <section className="grid grid-cols-3 gap-4">
                <section className="flex flex-col items-center">
                  <h3 className="text-sm">Seguidores</h3>
                  <h2 className="text-lg font-bold">{userData.followers}</h2>
                </section>

                <section className="flex flex-col items-center">
                  <h3 className="text-sm">Seguindo</h3>
                  <h2 className="text-lg font-bold">{userData.following}</h2>
                </section>

                <section className="flex flex-col items-center">
                  <h3 className="text-sm">Repositórios</h3>
                  <h2 className="text-lg font-bold">{userData.public_repos}</h2>
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
