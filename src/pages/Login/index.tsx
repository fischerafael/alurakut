import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import tw from "tailwind-styled-components";

import { MainButton } from "../../../styles/design-system/Button";
import { Input } from "../../../styles/design-system/Input";
import { LayoutMain } from "../../../styles/design-system/Layout";

export const LoginPage = () => {
  const [github, setGithub] = useState("");

  const handleLogin = () => {
    Router.push(`/home?github=${github}`);
  };

  return (
    <LayoutMain>
      <section className="max-w-sm w-full flex flex-col gap-10">
        <LayoutSection>
          <img src="/alurakut.svg" alt="logo alurakut" className="w-40 mb-10" />
          <h2 className="w-full">
            <TextSpan>Conecte-se</TextSpan> com outros participantes da 3°
            Imersão React
          </h2>
          <h2 className="w-full">
            <TextSpan>Compartilhe</TextSpan> seu projeto
          </h2>
          <h2 className="w-full">
            <TextSpan>Conheça</TextSpan> o projeto dos outros participantes
          </h2>
        </LayoutSection>

        <LayoutSectionSecondary>
          <Input
            type="text"
            placeholder="Usuário Github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <MainButton onClick={handleLogin} className="">
            Entrar com Github
          </MainButton>

          <Link href="https://github.com/fischerafael">
            <a className="text-sm font-medium" target="_blank">
              Desenvolvido por Rafael Fischer
            </a>
          </Link>
        </LayoutSectionSecondary>
      </section>
    </LayoutMain>
  );
};

export const TextSpan = tw.span`
    text-pink-500 font-bold
`;

export const LayoutSection = tw.section`
    bg-white p-10 gap-3 rounded-md flex flex-col items-center
`;

export const LayoutSectionSecondary = tw.section`
    gap-3 flex flex-col items-center w-full
`;
