import { TMeal } from "@/types/meal";
import MealItem from "../MealItem/MealItem";

type TMealsGridProps = {
  meals: TMeal[];
}

const MealsGrid = ({ meals }: TMealsGridProps) =>
{
  const mealsList = meals.map((meal) => (
    <MealItem key={meal.id} {...meal} />
  ));

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-14 w-[90%] max-w-[90rem] mb-20 mx-auto">
      {mealsList}
    </div>
  )
}

export default MealsGrid;
