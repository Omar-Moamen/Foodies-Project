import { getSingleMeal } from "@/lib/meals";
import { TMeal } from "@/types/meal";
import Image from "next/image";
import { notFound } from "next/navigation";
// Styles
import classes from './mealDetails.module.css';

type TProps = {
   params: { mealSlug: string };
}

const { header, headerText, instructions } = classes;

const MealDetailsPage = ({ params }: TProps) =>
{
   const meal: TMeal = getSingleMeal(params.mealSlug) as TMeal;

   if (!meal)
   {
      notFound();
   }

   // override meal.instructions (\n) to format it with <br/>
   meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

   return (
      <>
         <header className={`${header} flex py-8 px-4 gap-12 m-auto max-w-[80rem]`}>
            <div className="relative w-[30rem] h-80 ">
               <Image
                  className="object-cover rounded-lg shadow-main"
                  src={meal.image}
                  alt={meal.title}
                  sizes="w-[30rem]/h-80"
                  fill
               />
            </div>
            <div className={`${headerText} text-amber-100 pt-2 px-4`}>
               <h1 className="font-bold uppercase text-6xl font-sans">
                  {meal.title}
               </h1>
               <p className="my-6 text-2xl italic">
                  by
                  <a className="ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r
                        from-primary to-secondary hover:[text-shadow:var(--yellow-text-shadow)]
                        active:[text-shadow:var(--yellow-text-shadow)] transition-all"
                     href={`mailto:${meal.creator_email}`}
                  >{meal.creator}
                  </a>
               </p>
               <p className="text-2xl">{meal.summary}</p>
            </div>
         </header>
         <main>
            <p
               className={`${instructions} p-8 rounded-lg shadow-main bg-[#6e6464] text-[#13120f]
                  max-w-[60rem] my-8 mx-auto`}
               dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
         </main>

      </>
   )
}

export default MealDetailsPage
