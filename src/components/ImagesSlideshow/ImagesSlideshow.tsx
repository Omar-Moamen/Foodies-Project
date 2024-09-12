"use client";

import { useState, useEffect } from "react";
import burgerImg from '@public/assets/images/burger.jpg';
import curryImg from '@public/assets/images/curry.jpg';
import dumplingsImg from '@public/assets/images/dumplings.jpg';
import macncheeseImg from '@public/assets/images/macncheese.jpg';
import pizzaImg from '@public/assets/images/pizza.jpg';
import schnitzelImg from '@public/assets/images/schnitzel.jpg';
import tomatoSaladImg from '@public/assets/images/tomato-salad.jpg';
import Image from "next/image";

const images = [
   { image: burgerImg, alt: "A delicious, juicy burger" },
   { image: curryImg, alt: "A delicious, spicy curry" },
   { image: dumplingsImg, alt: "Steamed dumplings" },
   { image: macncheeseImg, alt: "Mac and cheese" },
   { image: pizzaImg, alt: "A delicious pizza" },
   { image: schnitzelImg, alt: "A delicious schnitzel" },
   { image: tomatoSaladImg, alt: "A delicious tomato salad" },
]

const ImagesSlideShow = () =>
{
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const initialClasses = "w-full h-full absolute top-0 left-0 opacity-0 scale-110 -translate-x-4 -rotate-6 transition-all duration-1000"
   const activeClasses = "active z-10 opacity-100 scale-100 translate-x-0 rotate-0";

   const imagesList = images.map((image, idx) => (
      <Image
         key={idx}
         className={`${initialClasses} ${idx === currentImageIndex ? activeClasses : ''}`}
         src={image.image}
         alt={image.alt}
         priority
      />
   ))

   useEffect(() =>
   {
      const interval = setInterval(() =>
      {
         setCurrentImageIndex((prevIndex) => (
            prevIndex < (images.length - 1) ? prevIndex + 1 : 0
         )
         )
      }, 5000);

      return () => clearInterval(interval);
   }, [])

   return (
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-main">
         {imagesList}
      </div>
   )
}

export default ImagesSlideShow
