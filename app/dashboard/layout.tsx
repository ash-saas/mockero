import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import LogoutButton from "@/components/LogoutButton";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between w-full">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Mockero Logo" width={16} height={16} />
          <h3 className="text-white">Mockero</h3>
        </Link>
        <LogoutButton />
      </nav>

      {children}
    </div>
  );
};

export default Layout;
