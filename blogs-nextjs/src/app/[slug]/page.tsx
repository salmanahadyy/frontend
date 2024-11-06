import { getBlogSlug } from "@/libs/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default async function DetailBlog({params}:{params:{slug:string}}){
    const {slug}= params
    const data= await getBlogSlug(slug)
    console.log(data)
    return(
        <div>
            {documentToReactComponents(data.fields.content)}
        </div>
    )
}