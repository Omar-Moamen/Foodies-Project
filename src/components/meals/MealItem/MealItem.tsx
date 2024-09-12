import { TMeal } from "@/types/meal"
import Image from "next/image"
import Link from "next/link"


const MealItem = ({ image, slug, title, creator, summary }: TMeal) =>
{
   const mealItemClasses = `h-full flex flex-col justify-between rounded-[4px] overflow-hidden bg-gradient-to-r from-[#2c1e19] to-[#25200f]
      [box-shadow:0_0_12px_rgba(0,0,0,0.3)] transition-all`;
   const btnClasses = `inline-block mt-4 text-white font-bold bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4
      transition-all hover:[box-shadow:var(--btn-shadow)] active:[box-shadow:var(--btn-shadow)]`;

   return (
      <article className={mealItemClasses}>
         <header>
            <div className="relative h-60">
               <Image
                  className="object-cover"
                  src={image} alt={title}
                  sizes="(max-width: 768px) 300px"
                  fill
               />
            </div>
            <div className="px-4 mt-3 text-slate-300">
               <h2 className="font-bold text-2xl font-sans">{title}</h2>
               <p className="italic text-[#aaa] text-sm ">by {creator}</p>
            </div>
         </header>
         <div className="text-slate-300 px-4 mt-3">
            <p>{summary}</p>
            <div className="my-4 text-right">
               <Link
                  className={btnClasses}
                  href={`/meals/${slug}`}
               >
                  View Details
               </Link>
            </div>
         </div>
      </article>
   )
}

export default MealItem;
