import { IBlog } from "@/types/blog";

export default function RecomBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div>
      {blogs.map((item,idx) => {
        return(
            <div>
                <p key={idx}>{item.fields.title}</p>
            </div>
        )
      })}
    </div>
  );
}
