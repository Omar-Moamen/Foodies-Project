import Link from "next/link";
import ImagesSlideshow from "@/components/ImagesSlideshow/ImagesSlideshow";


export default function Home()
{
   const sectionClasses = "flex flex-col text-2xl w-10/12 max-w-3xl my-8 mx-auto text-center leading-loose"
   return (
      <>
         <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[70rem]">
            <div className="w-[30rem] h-[25rem]">
               <ImagesSlideshow />
            </div>
            <div>
               <div className="hero text-2xl">
                  <h1 className="text-3xl w-96 mb-6 font-black uppercase text-transparent bg-clip-text
                        bg-gradient-to-r from-primary via-orange-500 to-secondary"
                  >
                     NextLevel food for nextLevel foodies
                  </h1>
                  <p className="text-slate-100 p-0">Taste & share foods from all over the world</p>
               </div>
               <div className="cta flex gap-6 text-2xl mt-3 text-white">
                  <Link
                     className="py-2 inline-block mt-4 text-primary hover:text-orange-700
                        transition-colors"
                     href="/community"
                  >
                     Join Community
                  </Link>
                  <Link
                     className="py-2 px-4 rounded-lg font-bold inline-block mt-4 drop-shadow-md 
                        bg-gradient-to-r from-primary to-secondary transition-all
                        hover:brightness-90"
                     href="/meals"
                  >
                     Explore Meals
                  </Link>
               </div>
            </div>
         </header>
         <main className="text-orange-50">
            <section className={sectionClasses}
            >
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

            <section className={sectionClasses}>
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
