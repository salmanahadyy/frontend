"use client";

import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import ButtonSignIn from "./buttonSignin";
import { useEffect, useState } from "react";
import supabase from "@/services/supabase";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  };

  useEffect(() => {
    getSession();
  }, []);
  return (
    <div className="bg-teal-500 h-[60px] sticky top-0 z-10 shadow-md">
      <Wrapper>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src="/Blogger.png"
                alt="logo blogger"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
                Blogger
              </span>
            </Link>
          </div>

          <div className="flex">
            {user ? (
              <Avatar
                picture={user.user_metadata.picture}
                full_name={user.user_metadata.name}
                email={user.user_metadata.email}
              />
            ) : (
              <ButtonSignIn />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
