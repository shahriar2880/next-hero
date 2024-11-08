"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Contact",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },

    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "About",
      path: "/abouts",
    },
  ];
  const handlerLogin = () => {
    router.push("/api/auth/signin");
  };

  if (pathName.includes("dashboard")) return <div>Dashboard Layout</div>;

  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
      <h6 className="text-3xl">
        Next <span className="text-cyan-700">Hero</span>
      </h6>
      <ul className="flex justify-between items-center space-x-4">
        {links?.map((link) => (
          <Link
            className={`${pathName === link.path && "text-cyan-700"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      {session.status === "authenticated" ? (
        <button onClick={handlerLogin} className="bg-white text-cyan-700 p-3">
          LogIn
        </button>
      ) : (
        <button onClick={handlerLogin} className="bg-white text-cyan-700 p-3">
          Logout
        </button>
      )}
      {/* {session.data ? (
  <div>
    <h6>
      {session.data.user.name}
      <br />
      {session.data.user.type ? session.data.user.type : "N/A"}
    </h6>
  </div>
) : null} */}
      <div>
        <h6>
          <Image src={session?.data?.user?.image} alt={session?.data?.user?.name} height={20} width={20}/>
          {session?.data?.user?.name}
          <br />
          {session?.data?.user?.type}
        </h6>
      </div>
    </nav>
  );
};

export default Navbar;
