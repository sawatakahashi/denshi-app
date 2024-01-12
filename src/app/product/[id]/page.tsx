import { getDetailProduct } from "@/app/lib/microcms/client";
import Image from "next/image";
import React from "react";

const DetailProduct = async ({ params }: { params: { id: string } }) => {
  //   console.log(params.id);
  const product = await getDetailProduct(params.id);
//   console.log(product);
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={product.thumbnail.url}
          className="w-full h-80 object-cover object-center"
          width={700}
          height={700}
          alt={product.title}
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{product.title}k</h2>
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: product.content }}
          />

          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">
              公開日:{new Date(product.publishedAt as any).toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">
              最終更新:
              {new Date(product.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
