import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className={roboto.className}>
        
          <Navbar></Navbar>
          <div className="">{children}</div>
          <footer className="bg-blue-400 text-center">This is Footer</footer>
      </body>
      </AuthProvider>

    </html>
  );
}
