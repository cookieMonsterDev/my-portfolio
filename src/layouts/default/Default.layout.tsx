import { Background } from "@components/background";
import { DefaultLayoutProps } from "./Default.types";
import { NavBar, TabProps } from "@components/NavBar";
import { Head } from "@components/Head";
import { Footer } from "@components/Footer";
import Image from "next/image";
import img from "../../../public/favicon.ico";

const Tabs: TabProps[] = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Work",
    href: "/#work",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Head />
      <Background />
      <NavBar
        tabs={Tabs}
        logo={
          <Image
            src={img.src}
            alt="john_travolta_meme_gif"
            width={50}
            height={50}
            style={{
              borderRadius: "50%",
              border: "0.1rem solid var(--neon)",
            }}
          />
        }
      />
      {children}
    </>
  );
};
