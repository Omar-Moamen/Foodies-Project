"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () =>
{
   const pathname = usePathname();

   return (
      <ul className="flex gap-12">
         <li className={`${pathname === "/meals" ? "text-orange-300" : ''} active:text-orange-300 hover:text-orange-300 transition-colors`}>
            <Link href="/meals" >
               Browse Meals
            </Link>
         </li>
         <li className={`${pathname === "/community" ? "text-orange-300" : ''} active:text-orange-300 hover:text-orange-300 transition-colors`}>
            <Link href="/community">
               Foodies Community
            </Link>
         </li>
      </ul>
   )
}

export default NavLinks
