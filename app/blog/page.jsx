import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button";

const getBlogs = () => {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir, 'utf-8');

  const blogs = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      ...data,
      slug: file.replace('.md', ''),
    };
  });

  return blogs;
};

export default function BlogPage() {
  const blogs = getBlogs(); // Call the function to get blog data

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden border dark:bg-slate-950">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="mb-2">{blog.description}</p>
                <p className="text-sm mb-2">By {blog.author} on {blog.date}</p>

                <Link href={`/blog/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
