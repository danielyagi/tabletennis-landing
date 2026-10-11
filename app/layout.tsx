import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TableTennis Pro - O App Completo de Tênis de Mesa",
  description: "Placar digital, vídeos educacionais, guia de equipamentos e treinos personalizados. Tudo em português, tudo integrado. Cadastre-se para o beta gratuito.",
  keywords: ["tênis de mesa", "ping pong", "placar", "treino", "raquete", "app", "brasil"],
  openGraph: {
    title: "TableTennis Pro - O App Completo de Tênis de Mesa",
    description: "O único app que precisa para evoluir no Tênis de Mesa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
