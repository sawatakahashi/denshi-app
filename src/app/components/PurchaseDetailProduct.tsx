import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "../types/types";


type purchaseDetailProps = {
  purchaseDetailProduct: ProductType;
};

const PurchaseDetailProduct = ({
  purchaseDetailProduct,
}: purchaseDetailProps) => {
  return (
    <Link
      href={`/product/${purchaseDetailProduct.id}`}
      className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
    >
      <Image
        priority
        src={purchaseDetailProduct.thumbnail.url}
        alt={purchaseDetailProduct.title}
        width={450}
        height={350}
        className="rounded-t-md"
      />
      <div className="px-4 py-4 bg-slate-100 rounded-b-md">
        <h2 className="text-lg font-semibold">{purchaseDetailProduct.title}</h2>
        {/* {purchaseDetailProduct.content} */}
        <p className="mt-2 text-md text-slate-700">
          値段：{purchaseDetailProduct.price}円
        </p>
      </div>
    </Link>
  );
};

export default PurchaseDetailProduct;
