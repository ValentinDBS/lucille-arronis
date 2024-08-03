import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucille-arronis.com"),
  keywords:
    "lucille arronis, lucillearronis, web designer, designer web, UX/UI designer, UX/UI, designer",
  title: {
    default: "Designeuse web • Lucille Arronis",
    template: "%s • Lucille Arronis",
  },
  description:
    "Designeuse web passionnée par la création d'expériences visuelles captivantes. Mon objectif est de transformer des concepts en designs interactifs et esthétiques.",
  openGraph: {
    description:
      "Designeuse web passionnée par la création d'expériences visuelles captivantes. Mon objectif est de transformer des concepts en designs interactifs et esthétiques.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          anton.className,
          "bg-background text-text overflow-x-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
