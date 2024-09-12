"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TNavLinkProps = {
   href: string;
   children: React.ReactNode;
}

const NavLink = ({ href, children }: TNavLinkProps) =>
{
   const pathname = usePathname();
   const navLinkClasses = `tracking-wide hover:text-secondary 
         hover:[text-shadow:var(--orange-text-shadow)] transition-all`;

   const activeClasses = "text-secondary";

   return (
      <>
         <Link
            href={href}
            className={pathname.startsWith(href) ?
               `${navLinkClasses} ${activeClasses}` : navLinkClasses}
         >
            {children}
         </Link>
      </>
   )
}

export default NavLink
