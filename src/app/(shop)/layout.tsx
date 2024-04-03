import { Footer, Sidebar, TopMeu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <TopMeu />
      <Sidebar />
      <div className="md:px-9 px-0">{children}</div>
      <Footer />
    </main>
  );
}
