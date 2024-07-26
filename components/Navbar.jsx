"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, UserCircleIcon } from "lucide-react";

export const Navbar = () => {
  const session = useSession();
  const [isToggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn((prev) => !prev);
  };

  return (
    <nav className="flex-between w-full mb-16 pt-4">
      <Link href="/" className="flex flex-center gap-2">
        <Image
          src="/assets/images/logo.png"
          alt="Promptly Logo"
          width="35"
          height="35"
          className="object-contain"
        />
        <p className="text-2xl font-bold">Promptly</p>
      </Link>

      <div className="sm:flex gap-4 hidden">
        {session.status == "authenticated" ? (
          <>
            <Link href="/create-post" className="black_btn">
              {" "}
              Create Post{" "}
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <UserCircleIcon className="w-8 h-8 hover:text-gray-400 transition-all" />
            </Link>
          </>
        ) : (
          <>
            {
              <button
                type="button"
                onClick={() => signIn("google")}
                className="black_btn"
              >
                Sign In
              </button>
            }
          </>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden relative space-y-2">
        {session?.user ? (
          <>
            <Menu
              className="w-8 h-8 p-1 border-2 rounded-lg  cursor-pointer"
              onClick={handleToggle}
            />
            {isToggleOn && (
              <div className="dropdown">
                <Link href="/profile" className="flex flex-center">
                  <UserCircleIcon className="w-8 h-8 mr-2 hover:text-gray-400 transition-all" />{" "}
                  Profile
                </Link>
                <Link href="/create-post" className="black_btn">
                  {" "}
                  Create Post{" "}
                </Link>
                <button
                  type="button"
                  onClick={signOut}
                  className="w-full outline_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {
              <button
                type="button"
                onClick={() => signIn("google")}
                className="w-full black_btn"
              >
                Sign In
              </button>
            }
          </>
        )}
      </div>
    </nav>
  );
};
