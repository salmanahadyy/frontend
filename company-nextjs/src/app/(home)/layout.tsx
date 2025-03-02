import AOSProvider from "@/components/aos";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";



export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <AOSProvider>

      <Navbar />
      {children}
      <Footer />
      </AOSProvider>
      
    </main>
  );
}