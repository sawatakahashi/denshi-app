import { ProductType } from "@/app/types/types";
import { createClient } from "microcms-js-sdk";
import { Content } from "next/font/google/index";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getALLProducts = async () => {
  const allProducts = await client.getList<ProductType>({
    endpoint: "denshiapp",
    customRequestInit: {
      cache: "no-store",
    },
  });

  return allProducts;
};

export const getDetailProduct = async (contentId: string) => {
  const detailProduct = await client.getListDetail<ProductType>({
    endpoint: "denshiapp",
    contentId,
    customRequestInit: {
      cache: "no-store",
    },
  });

  return detailProduct;
};
