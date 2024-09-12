import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getAllMeals()
{
   await new Promise(resolve => resolve(setTimeout(resolve, 10000)))

   // throw new Error("Loading meals failed")
   return db.prepare("SELECT * FROM meals").all();
}

export function getSingleMeal(slug: string)
{
   return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}