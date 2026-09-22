import type { ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingPhone from "./FloatingPhone";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
      <Footer />
      <FloatingPhone />
    </>
  );
}
