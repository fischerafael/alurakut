import tw from "tailwind-styled-components";

export const LoginPage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-blue-100 p-10">
      <section className="max-w-screen-sm w-full flex flex-col gap-10">
        <LayoutSection>
          <img src="/alurakut.svg" alt="logo alurakut" className="w-40 mb-10" />
          <h2>
            <TextSpan>Conecte-se</TextSpan> com outros participantes da 3°
            Imersão React
          </h2>
          <h2>
            <TextSpan>Compartilhe</TextSpan> seu projeto
          </h2>
          <h2>
            <TextSpan>Conheça</TextSpan> o projeto dos outros participantes
          </h2>
        </LayoutSection>

        <LayoutSectionSecondary>
          <input
            className="border rounded-md border-gray-300 h-10 px-4 text-sm flex w-full"
            type="text"
            placeholder="ex: fischerafael"
          />
          <button className="w-full bg-pink-500 h-10 rounded-md text-white flex items-center justify-center">
            Entrar com Github
          </button>
        </LayoutSectionSecondary>
      </section>
    </main>
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

export const Input = tw.input`

`;
