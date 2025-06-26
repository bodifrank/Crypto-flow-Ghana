import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Crypto Flow - Most Reliable Crypto Trading Platform",
  description: "Buy and sell cryptocurrencies and gift cards securely with Crypto Flow. Trusted by 10,000+ users across Ghana and Africa.",
  keywords: "cryptocurrency, bitcoin, ethereum, USDT, gift cards, trading, Ghana, Africa, secure trading",
  authors: [{ name: "Crypto Flow" }],
  openGraph: {
    title: "Crypto Flow - Most Reliable Crypto Trading Platform",
    description: "Buy and sell cryptocurrencies and gift cards securely with Crypto Flow.",
    url: "https://cryptoflow.com",
    siteName: "Crypto Flow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}