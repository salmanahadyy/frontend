import AOSProvider from "@/components/aost";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AOSProvider>

      <Navbar />
      {children}
      </AOSProvider>
      
    </main>
  );
}
