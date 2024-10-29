import { Poppins } from 'next/font/google';
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from '../components/layout/Footer';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})


export const metadata = {
  title: "useFrontend - Ace your interview",
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
        <Footer/>
      </body>
    </html>
  );
}
