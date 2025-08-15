import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frases Inspiradoras - Descubre sabiduría en cada palabra",
  description: "Aplicación web que genera frases famosas aleatorias acompañadas de hermosas imágenes de Unsplash. Diseño moderno y responsivo con Next.js y Tailwind CSS.",
  keywords: "frases, inspiración, motivación, imágenes, Unsplash, Next.js, Tailwind CSS",
  authors: [{ name: "Frases Inspiradoras" }],
  creator: "Frases Inspiradoras",
  openGraph: {
    title: "Frases Inspiradoras",
    description: "Descubre sabiduría en cada palabra, acompañada de belleza visual",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frases Inspiradoras",
    description: "Descubre sabiduría en cada palabra, acompañada de belleza visual",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
