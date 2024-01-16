// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import { nextAuthOptions } from "../lib/next-auth/options";
import { User } from "../types/types";
import { getServerSession } from "next-auth";

const Header = async () => {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;
  // console.log(user);

  return (
    <header className="bg-orange-400 text-black shadow-lg">
      <nav className="flex items-center justify-between p-3">
      <Image
              width={100}
              height={100}
              alt="logo"
              src={"/logo.png"}
            />
        <Link href={"/"} className="text-xl font-bold">
          Lucky Bepo Ramen
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ホーム
          </Link>
          <Link
            href={"/contact"}
            className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            問い合わせ
          </Link>
          <Link
            href={user ? "/profile" : "/api/auth/signin"}
            className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {user ? "プロフィール" : "ログイン"}
          </Link>
          {/* ユーザーがログインしてたらログアウト、してなかったら何もなし */}
          {user ? (
            <Link
              href={"/api/auth/signout"}
              className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              ログアウト
            </Link>
          ) : (
            ""
          )}
          <Link href={`/profile`}>
            <Image
            loading="eager"
              width={50}
              height={50}
              alt="profile_icon"
              src={user?.image || "/noFace-icon.png"}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
