import MealsGrid from "@/components/meals/MealsGrid/MealsGrid";
import { getAllMeals } from "@/lib/meals";
import { TMeal } from "@/types/meal";
import Link from "next/link";

const MealsPage = async () =>
{
   const meals = await getAllMeals();

   return (
      <>
         <header className="text-slate-300 px-40 text-xl">
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
            <MealsGrid meals={meals as TMeal[]} />
         </main>
      </>
   )
}

export default MealsPage;
