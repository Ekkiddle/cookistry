import localFont from "next/font/local";
import "./globals.css";
import { FilterProvider } from "./components/Filter";
import NavBar from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cookistry",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FilterProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="flex flex-col min-h-screen">
              <NavBar />
              {/* Spacer div for navigation */}
              <div className="w-full h-24 md:h-12"></div>
              {/* Main content */}
              <div className="flex-1">{children}</div>
              {/* Footer */}
              <div className="w-full h-12 bg-colour2 mt-auto"></div>
          </div>
        </body>
      </FilterProvider>
    </html>
  );
}
