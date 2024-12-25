import { Menu } from "@/components/menu/menu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
      <header>
      <Menu />
    </header>
    <main>

        {children}
    </main>
      </body>
    </html>
  );
}
