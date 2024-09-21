"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

type TProps = {
   label: string;
   name: string;
}

const ImagePicker = ({ label, name }: TProps) =>
{
   const [pickedImage, setPickedImage] = useState<string | null>(null);
   const imageInputRef = useRef<HTMLInputElement>(null);

   const imagePickerClickHandler = () =>
   {
      imageInputRef.current!.click();
   }

   const imageChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
   {
      const file = event.target.files![0];

      if (!file)
      {
         // To insure the preview was reset
         setPickedImage(null);
         return;
      }

      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () =>
      {
         if (fileReader.result)
            setPickedImage(fileReader.result.toString());
      }
   }

   return (
      <div>
         <label
            className="block mb-2 font-bold font-sans uppercase text-[#b3aea5] mt-4"
         >
            {label}
         </label>
         <div className="flex items-start gap-4 mb-6">
            <div
               className="relative object-cover p-2 w-44 h-44 border-2 border-[#454952] border-solid bg-[#1c2027] text-sm 
               font-sans text-[#ddd6cb] flex items-center justify-center"
            >
               {pickedImage ?
                  <Image
                     src={pickedImage!}
                     alt="The image selected by the user."
                     fill
                     sizes="(max-width: 768px) 300px"
                  /> :
                  <p>No image picked yet.</p>
               }
            </div>
            <input
               className="hidden w-full py-2 px-4 rounded border border-[#454952] border-solid
            bg-[#1c2027] text-lg font-sans text-[#ddd6cb] resize-none"
               type="file"
               id={name}
               name={name}
               accept="image/png, image/jpeg, image/webp, image/jpg"
               ref={imageInputRef}
               onChange={imageChangeHandler}
               required
            />
            <button
               className="py-2 px-6 bg-slate-400 hover:bg-slate-300 transition-all"
               type="button"
               onClick={imagePickerClickHandler}
            >
               Pick an image
            </button>
         </div>
      </div>
   )
}

export default ImagePicker
