// "use client";

import { getServerSession } from "next-auth";
import Link from "next/link";
import Product from "./components/Product";
import { getALLProducts } from "./lib/microcms/client";
import { nextAuthOptions } from "./lib/next-auth/options";
import { ProductType, Purchase, User } from "./types/types";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const { contents } = await getALLProducts();
  // console.log(contents);
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;

  let purchaseProductIds: string[] = [];

  if (user) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`,
      { cache: "no-store" }
    );
    const purchasesData = await response.json();
    // console.log("購入履歴データ", purchasesData);

    purchaseProductIds = purchasesData.map(
      (purchaseProduct: Purchase) => purchaseProduct.productId
    );
    // console.log(purchaseProductIds);
  }
  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Product Commerce
        </h2>
        {contents.map((product: ProductType) => (
          <Product
            key={product.id}
            product={product}
            isPurchased={purchaseProductIds.includes(product.id)}
          />
        ))}
      </main>
      <Link href={"https://luckybeporamen.com/"} className="flex items-center m-6 text-center text-gray-300">Luck Bepo Ramen</Link>
      
    </>
  );
}
