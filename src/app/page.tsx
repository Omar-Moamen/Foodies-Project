import Link from "next/link";
// Styles
import classes from './home.module.css';

const { slideShow } = classes

export default function Home()
{
   return (
      <>
         <header className="flex gap-12 my-12 mx-auto w-11/12 max-w-6xl">
            <div className={slideShow}>

            </div>
            <div>
               <div className="hero text-2xl">
                  <h1 className="text-3xl w-96 mb-6 font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                     NextLevel food for nextLevel foodies
                  </h1>
                  <p className="text-slate-100 p-0">Taste & share foods from all over the world</p>
               </div>
               <div className="cta flex gap-6 text-2xl mt-3 text-white">
                  <Link
                     className="py-2 inline-block mt-4 text-orange-600 hover:text-orange-700 transition-colors"
                     href="/community"
                  >
                     Join Community
                  </Link>
                  <Link
                     className="py-2 px-4 rounded-lg font-bold inline-block mt-4 bg-gradient-to-r from-orange-700 to-orange-400 transition-colors"
                     href="/meals"
                  >
                     Explore Meals
                  </Link>
               </div>
            </div>
         </header>
         <main className="text-orange-50">
            <section className="flex flex-col text-2xl w-11/12 max-w-3xl my-8 mx-auto text-center leading-loose">
               <h2 className="font-bold my-4 text-4xl">How it works</h2>
               <p>
                  NextLevel Food is a platform for foodies to share their favorite
                  recipes with the world. It&apos;s a place to discover new dishes, and to
                  connect with other food lovers.
               </p>
               <p>
                  NextLevel Food is a place to discover new dishes, and to connect
                  with other food lovers.
               </p>
            </section>

            <section className="flex flex-col text-2xl w-10/12 max-w-3xl my-8 mx-auto text-center leading-loose">
               <h2 className="font-bold my-4 text-4xl">Why NextLevel Food?</h2>
               <p>
                  NextLevel Food is a platform for foodies to share their favorite
                  recipes with the world. It&apos;s a place to discover new dishes, and to
                  connect with other food lovers.
               </p>
               <p>
                  NextLevel Food is a place to discover new dishes, and to connect
                  with other food lovers.
               </p>
            </section>
         </main>
      </>
   );
}
