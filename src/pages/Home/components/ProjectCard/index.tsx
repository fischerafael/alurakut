import { ArrowRightIcon, CodeIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const ProjectCard = ({ name, author, description, github, url }) => {
  return (
    <section className="border-t border-gray-200 py-3 flex flex-col gap-3 hover:bg-gray-50">
      <section>
        <h1 className="text-xl font-bold text-pink-500">{name}</h1>
        <h2 className="text-xs text-gray-200">{author}</h2>
      </section>

      <section className="text-xs leading-relaxed">{description}</section>
      <section className="flex justify-between mt-5">
        <Link href={github}>
          <a
            target="_blank"
            className="flex gap-2 items-center text-xs font-medium"
          >
            Ver no Github <CodeIcon className="w-4 h-4 text-pink-500" />
          </a>
        </Link>

        <Link href={url}>
          <a
            target="_blank"
            className="flex gap-2 items-center text-xs font-medium"
          >
            Ver ao vivo
            <ArrowRightIcon className="w-4 h-4 text-pink-500" />
          </a>
        </Link>
      </section>
    </section>
  );
};
