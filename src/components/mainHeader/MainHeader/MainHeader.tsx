import Image from "next/image";
import logoPng from "@/assets/logo.png";
import Link from "next/link";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";
import NavLinks from "../NavLinks/NavLinks";

const MainHeader = () =>
{
   return (
      <>
         <MainHeaderBackground />
         <header className="flex justify-between items-center py-8 px-40 text-slate-200 font-bold text-xl">
            <Link
               className="flex items-center uppercase text-2xl gap-10 hover:text-slate-300 transition-colors"
               href='/'
            >
               <Image
                  src={logoPng}
                  alt="A plate with food on it"
                  width={80}
                  height={80}
                  priority
               />
               NextLevel Food
            </Link>
            <nav>
               <NavLinks />
            </nav>
         </header>
      </>
   )
}

export default MainHeader;
