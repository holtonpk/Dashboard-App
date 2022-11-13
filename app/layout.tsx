import Header from "./components/Header";
import Link from "next/link";

import Navbar from "./components/Navbar/index";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-c8">
        <main className="flex flex-row">
          <Navbar />
          <div className="w-full ">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
