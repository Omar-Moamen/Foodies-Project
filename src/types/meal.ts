import { StaticImageData } from "next/image";

type TMeal = {
   id: number;
   image: StaticImageData;
   slug: string;
   title: string;
   creator: string;
   summary: string;
   instructions: string;
   creator_email: string;
}

export type { TMeal };