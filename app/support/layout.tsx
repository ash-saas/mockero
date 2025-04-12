import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {

    return (
        <div className="root-layout">
            <nav className="flex items-center justify-between w-full">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Mockero Logo" width={16} height={16} />
                    <h3 className="text-white">Mockero</h3>
                </Link>
            </nav>

            {children}
        </div>
    );
};

export default Layout;
