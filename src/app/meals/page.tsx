import { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid/MealsGrid";
import { getAllMeals } from "@/lib/meals";
import { TMeal } from "@/types/meal";

async function Meals()
{
   const meals = await getAllMeals();

   return <MealsGrid meals={meals as TMeal[]} />
}

const MealsPage = () =>
{
   const fallbackJSX = (<p className="animate-pulse text-slate-200 text-lg text-center">
      Fetching meals...
   </p>)
   return (
      <>
         <header className="text-slate-300 px-40 text-xl mb-20">
            <h1 className="font-sans font-bold text-5xl mb-10">
               Delicious meals, created
               <span className="text-transparent bg-clip-text bg-gradient-to-r
               from-primary to-secondary ml-3">
                  by you
               </span>
            </h1>
            <p>
               Choose your favorite recipe and cooke it yourself. It is easy and fun!
            </p>

            <p
               className="w-fit mt-4 capitalize text-slate-50 font-bold 
            rounded-md py-2 px-3 bg-gradient-to-r from-primary to-secondary"
            >
               <Link href="/meals/share">
                  Share your favorite recipe
               </Link>
            </p>
         </header>

         <main>
            <Suspense fallback={fallbackJSX}>
               <Meals />
            </Suspense>
         </main>
      </>
   )
}

export default MealsPage;
