import Link from 'next/link';
import React from 'react'

const BlogPage = () => {
  return (
    <div className='p-24'>
      {
        blogPost.map((blog =>(
            <div key={blog.slug} className='border-2 p-12'>
                <h3>{blog.title}</h3>
                <h3>{blog.description}</h3>
                <button className='bg-cyan-600 p-4'>
                    <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                </button>
            </div>
        )))
      }
    </div>
  )
}

const blogPost = [
    {
      slug: "how-to-make-a-website",
      title: "A Beginner's Guide to Creating a Website",
      description: "Learn the basics of web development and build your own website from scratch.",
    },
    {
      slug: "top-10-programming-languages",
      title: "The Most Popular Programming Languages of 2024",
      description: "Discover the top 10 programming languages used by developers worldwide.",
    },
    {
      slug: "best-practices-for-seo",
      title: "SEO Tips and Tricks for Improving Your Website Ranking",
      description: "Optimize your website for search engines and attract more organic traffic.",
    },
    {
      slug: "learn-python-programming",
      title: "A Comprehensive Python Tutorial for Beginners",
      description: "Master the Python programming language and build real-world applications.",
    },
    {
      slug: "digital-marketing-strategies",
      title: "Effective Digital Marketing Strategies for Businesses",
      description: "Learn how to reach your target audience and drive conversions through digital marketing.",
    },
  ];

export default BlogPage
