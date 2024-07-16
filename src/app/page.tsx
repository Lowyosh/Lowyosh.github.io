import { FaCompass, FaHome } from "react-icons/fa";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNav";
import styles from "./page.module.css";
import Stack from "../../components/Stack";
import Work from "../../components/Work";
import Knowledge from "../../components/Knowledge";
import { FaBrain, FaDesktop, FaFolderOpen } from "react-icons/fa6";
import { Projects } from "../../components/Projects";
import { Footer } from "../../components/Footer";


export default function Home() {
  return (
   <main className="relative bg-cream dark:bg-darkblue flex justify-center items-center flex-col overflow-hidden ">
    <div className="w-full">
      <FloatingNav className=""
        navItems={[
          { name: "Work Experience", link: "#work", icon: <FaDesktop/> },
          { name: "Projects", link: "#projects", icon: <FaFolderOpen/> },
          { name: "Courses", link: "#courses", icon: <FaBrain/> },
          { name: "About me", link: "#about", icon: <FaCompass/> },
          ]}/>
      <Hero/>
      <Stack/>
      <Work/>
      <Projects/>
      <Knowledge/>
    </div>
    <Footer/>
   </main>
  );
}

// mx-auto sm:px-10 px-5