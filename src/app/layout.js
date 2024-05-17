import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Saturn",
  description: "Saturn by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmsans.className}>
      <body><ThemeProvider  attribute="class">{children}</ThemeProvider></body>
    </html>
  );
}