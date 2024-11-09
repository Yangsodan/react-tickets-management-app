import Nav from "@/app/(components)/Nav";
import "@/app/globals.css";
import { Inter } from "next/font/google";

// import { config } from "@fortawesome/free-solid-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description:
    "24/10/25 Learning with freecodecamp, course: Next.js, Tailwind CSS, and MongoDB Project Tutorial – Ticketing App ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
