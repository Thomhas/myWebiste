import {Inter as FontSans} from "next/font/google";
import "./global.css";
import {ThemeProvider} from "@/components/theme-provider";

import {cn} from "@/lib/utils";
import {NavigationBar} from "@/components/navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
