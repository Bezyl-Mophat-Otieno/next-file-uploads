import type { Metadata } from "next";
import { PrimeReactProvider } from 'primereact/api';
import { Inter } from "next/font/google";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeflex/primeflex.css";
        

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
        {children}
        </PrimeReactProvider>
        </body>
    </html>
  );
}
