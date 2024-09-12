import Image from "next/image";
import logoPng from "@public/assets/images/logo.png"
import Link from "next/link";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";
import NavLink from "../NavLink/NavLink";

const MainHeader = () =>
{
   return (
      <>
         <MainHeaderBackground />
         <header className="flex justify-between items-center py-8 px-40 mb-10 text-slate-200 font-bold text-xl">
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
            <nav className="px-2 py-4">
               <ul className="flex gap-12">
                  <li>
                     <NavLink href="/meals">Browse Meals</NavLink>
                  </li>
                  <li>
                     <NavLink href="/community">Foodies Community</NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   )
}

export default MainHeader;
