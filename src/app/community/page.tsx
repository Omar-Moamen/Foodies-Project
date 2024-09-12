import Image from "next/image";
import mealIcon from '@public/assets/icons/meal.png';
import communityIcon from '@public/assets/icons/community.png';
import eventsIcon from '@public/assets/icons/events.png';

const CommunityPage = () =>
{
   const listItemClasses = "flex flex-col items-center text-2xl font-bold font-sans gap-8";
   const imageClasses = "w-32 h-32 object-cover";
   return (
      <>
         <header className="max-w-3xl mx-auto mt-11 text-center text-slate-300">
            <h1 className="text-5xl font-bold mb-7 font-sans">
               One shared passion: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary to-secondary">Food</span>
            </h1>
            <p className="text-2xl">Join our community and share your favorite recipes!</p>
         </header>
         <main className="mt-14 text-center text-slate-300">
            <h2 className="text-4xl font-bold">Community Perks</h2>

            <ul className="p-0 my-12">
               <li className={listItemClasses}>
                  <Image className={imageClasses}
                     src={mealIcon}
                     alt="A delicious meal"
                  />
                  <p>Share & discover recipes</p>
               </li>
               <li className={listItemClasses}>
                  <Image className={imageClasses}
                     src={communityIcon}
                     alt="A crowd of people, cooking"
                  />
                  <p>Find new friends & like-minded people</p>
               </li>
               <li className={listItemClasses}>
                  <Image className={imageClasses}
                     src={eventsIcon}
                     alt="A crowd of people at a cooking event"
                  />
                  <p>Participate in exclusive events</p>
               </li>
            </ul>
         </main>
      </>
   )
}

export default CommunityPage
