import Recomendation from "@/components/recom";
import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { getBlogRecom, getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();
  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog: IBlog = await getBlogSlug(params.slug);
  return {
    title: blog.fields.title,
    description: blog.fields.title,
    author: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);
  const blogNe:IBlog[] =await getBlogRecom(params.slug)
  console.log(blogNe)
  const options: Options = {
    renderMark: {
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal mx-6">{children}</ol>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-4">{children}</p>,
    },
  };
  
  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row mt-12 w-full max-w-screen-lg mx-auto px-4">
        <div className="lg:flex-[2] mb-4 lg:mb-0 max-sm:hidden ">
          <Link href={"/"}>kembali</Link>
          <Recomendation blogs={blogNe} />
          <div>
          <ShareButton slug={blog.fields.slug} />
          </div>
        </div>

        <div className="lg:flex-[5] box-content pr-0 lg:pr-56">
          <div className="text-md font-bold text-green-700 uppercase">
            <p>{blog.fields.category}</p>
          </div>
          <div className="text-3xl max-md:text-2xl font-bold my-4">
            <h1 className="text-center">{blog.fields.title}</h1>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="font-bold">{blog.fields.author.fields.name}</span>
            <span>{blog.fields.date}</span>
          </div>
          <div className="md:hidden">
          <ShareButton slug={blog.fields.slug} />
          </div>
          <div className="h-[300px] sm:h-[400px] w-full relative my-4">
            <Image
              src={`https:${blog.fields.thumbnail.fields.file.url}`}
              alt="gambar"
              fill
              className="object-cover"
              priority
            />
          </div>
          {documentToReactComponents(blog.fields.content, options)}
        </div>
      </div>
    </Wrapper>
  );
}

