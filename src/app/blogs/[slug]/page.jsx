
import React from 'react'

const page = ({params}) => {
    const {title, description} = blogPost.find((blog)=> blog.slug == params.slug) ;
  return (
    <div className='h-screen text-center p-10'>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}
const blogPost = [
    {
      slug: "how-to-make-a-website",
      title: "A Beginner's Guide to Creating a Website",
      description: "Learn the basics of web development and build your website from scratch.",
    },
    {
      slug: "top-10-programming-languages",
      title: "The Most Popular Programming Languages of 2024",
      description: "Discover top 10 programming languages used by developers worldwide.",
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

export default page
