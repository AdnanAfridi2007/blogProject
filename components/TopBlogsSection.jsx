import React from 'react';
import { Button } from "@/components/ui/button"

const TopBlogsSection = ({ blogs }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4" style={{ width: '80%' }}>
        <h2 className="text-3xl font-bold text-center mb-8">Top Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 border"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
              <p className="mt-2">{blog.excerpt}</p>
              <Button
                variant="outline"
                className='flex justify-center hover:text-purple-500 mt-4'
                href={blog.link}
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBlogsSection;