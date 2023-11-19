"use client";
import { getServerSession } from "next-auth";
import Link from "next/link";

import ProductCard from "./components/ProductCard";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <h1>Hello!</h1>
      <button
      // onClick={async () => {
      //   const x = (await import("lodash")).default;

      //   const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
      //   const sorted = _.orderBy(users, ["name"]);
      //   console.log(sorted);
      // }}
      >
        Show
      </button>
      {/* <Link href="/users">Users</Link>
      <ProductCard></ProductCard> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="photo"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: '...'
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
