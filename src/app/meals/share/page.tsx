"use client"
import ImagePicker from "@/components/meals/ImagePicker/ImagePicker";
import { shareMeal } from "@/lib/actions";


const ShareMealPage = () =>
{
   const labelsClasses = "block mb-2 font-bold font-sans uppercase text-[#b3aea5] mt-4";
   const inputsClasses = `block w-full py-2 px-4 rounded border border-[#454952] border-solid
                           bg-[#1c2027] text-xl font-sans text-[#ddd6cb] resize-none`

   return (
      <>
         <header className="mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb]">
            <h1 className="text-5xl font-bold font-sans mb-4">
               Share your
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ml-4" >
                  favorite meal
               </span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
         </header>
         <main className="w-[90%] max-w-[75rem] my-12 mx-auto">

            <form className="max-w-3xl" action={shareMeal}>
               <div className="grid grid-cols-2 gap-6">
                  <div>
                     <label className={labelsClasses} htmlFor="name">Your name</label>
                     <input className={inputsClasses} type="text" id="name" name="name" required />
                  </div>
                  <div>
                     <label className={labelsClasses} htmlFor="email">Your email</label>
                     <input className={inputsClasses} type="email" id="email" name="email" required />
                  </div>
               </div>
               <div>
                  <label className={labelsClasses} htmlFor="title">Title</label>
                  <input className={inputsClasses} type="text" id="title" name="title" required />
               </div>
               <div>
                  <label className={labelsClasses} htmlFor="summary">Short Summary</label>
                  <input className={inputsClasses} type="text" id="summary" name="summary" required />
               </div>
               <div>
                  <label className={labelsClasses} htmlFor="instructions">Instructions</label>
                  <textarea className={inputsClasses}
                     id="instructions"
                     name="instructions"
                     rows={10}
                     required
                  ></textarea>
               </div>
               <ImagePicker label="Your image" name="image" />
               <div className="w-fit mt-4 ml-auto">
                  <button
                     className="py-2 px-6 font-sans text-xl bg-gradient-to-r from-primary to-secondary 
                        text-white hover:from-[#fd4715] hover:to-[#f9b241]
                        focus:from-[#fd4715] focus:to-[#f9b241] transition-all disabled:cursor-not-allowed"
                     type="submit"
                  >
                     Share Meal
                  </button>
               </div>
            </form>
         </main>
      </>
   );
}

export default ShareMealPage;