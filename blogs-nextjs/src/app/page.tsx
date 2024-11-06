import Card from "@/components/card";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";

export default async function Home() {
  return(
    <div>
      <Card />
    </div>
  )
}
