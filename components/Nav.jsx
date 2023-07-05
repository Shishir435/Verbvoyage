"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import Provider from "@components/Provider";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between sticky top-0 w-full bg-white dark:bg-[#121212] p-3 mb-6 z-40">
      <Link href="/" className="flex gap-2 flex-center">
        <div className="">
          <Image
            src="/assets/images/ship-96.png"
            alt="logo"
            width="50"
            height="50"
            className="rounded-[50%]"
          />
        </div>
        <p className="logo_text">VerbVoyage</p>
      </Link>

      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5 mx-4">
            
            <div className="self-center">
              {theme == "dark" ? (
                <BsSun
                  size={25}
                  cursor="pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <FiMoon
                  size={25}
                  cursor="pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </div>
            <Link href="/create-verb" className="blue_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <div className="self-center">
              {theme == "dark" ? (
                <BsSun
                  size={25}
                  cursor="pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <FiMoon
                  size={25}
                  cursor="pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </div>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex gap-4 relative">
      <div className="self-center">
              {theme == "dark" ? (
                <BsSun
                  size={25}
                  cursor="pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <FiMoon
                  size={25}
                  cursor="pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </div>
        {session?.user ? (
          <div className="flex">
            
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-verb"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
          
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
