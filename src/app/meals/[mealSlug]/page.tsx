
type TProps = {
   params: { mealSlug: string };
}

const MealDetailsPage = ({ params }: TProps) =>
{
   return (
      <div className="text-3xl text-center">
         <h1 className="text-slate-50 font-bold">
            Meal Details
         </h1>
         <p className="text-slate-200 text-2xl italic">{params.mealSlug} </p>
      </div>
   )
}

export default MealDetailsPage
