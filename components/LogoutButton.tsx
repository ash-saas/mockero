"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";

export default function LogoutButton() {
    const redirectToLandingAfterSignOut = async () => {
        await signOut();
        redirect("/");
    };

    return (
        <Button className="cursor-pointer" onClick={redirectToLandingAfterSignOut}>
            Logout
        </Button>
    );
}
