import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { formatedDate } from "@/helpers/formatedDate";
import { getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();
  return blogs.map((item) => ({
    slug: item.slug,
  }));
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog: IBlog = await getBlogSlug(params.slug);
  return {
    title: blog.title,
    description: blog.title,
    author: blog.user.username,
    openGraph: {
      images: [`${blog.thumbnail}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);
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
          <div>
          <ShareButton slug={blog.slug} />
          </div>
        </div>

        <div className="lg:flex-[5] box-content pr-0 lg:pr-56">
          <div className="text-md font-bold text-green-700 uppercase">
            <p>{blog.category}</p>
          </div>
          <div className="text-3xl max-md:text-2xl font-bold my-4">
            <h1 className="text-center">{blog.title}</h1>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="font-bold">{blog.user.username}</span>
            <span>{formatedDate(blog.createdAt)}
                
            </span>
          </div>
          <div className="md:hidden">
          <ShareButton slug={blog.slug} />
          </div>
          <div className="h-[300px] sm:h-[400px] w-full relative my-4">
            <Image
              src={`${blog.thumbnail}`}
              alt="gambar"
              fill
              className="object-cover"
              priority
            />
          </div>
          {documentToReactComponents(blog.content, options)}
        </div>
      </div>
    </Wrapper>
  );
}