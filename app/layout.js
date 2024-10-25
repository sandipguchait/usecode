import { Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})


export const metadata = {
  title: "useCode - Ace your interview",
  description: "Master your frontend engineer interview",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
       className={poppins.className}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
