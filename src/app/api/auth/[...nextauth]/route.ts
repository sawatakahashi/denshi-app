import { nextAuthOptions } from "@/app/lib/next-auth/options";
import nextAuth from "next-auth/next";

const handler = nextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
