import Image from "next/image";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../lib/next-auth/options";
import { ProductType, Purchase, User } from "../types/types";
import { getDetailProduct } from "../lib/microcms/client";
import PurchaseDetailProduct from "../components/PurchaseDetailProduct";

export default async function ProfilePage() {

  return (
      <div className="mt-10 text-center mx-auto w-96">
        <form className="contact">
          <div className="mb-4 text-left">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="名前を入力してください"
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              電話番号
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="電話番号を入力してください"
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              required
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="メールアドレスを入力してください"
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="問い合わせ内容を入力してください"
              
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-96 bg-gray-700 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            送信
          </button>
        </form>
      </div>
  );
}
