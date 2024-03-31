import { Sidebar, TopMeu } from "@/components";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-5">
      <TopMeu />
      <Sidebar />
      <div className="px-9 sm:px-0">
        {children}
      </div>
      
    </main>
  );
}