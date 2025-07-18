import React from "react";
import { Header} from "@/components/ui/header";

type props = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <Header/>
            <main className="px-3 lg:px-14">
            {children}
            </main>
        </>
    );
}
export default DashboardLayout;