export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-200 min-h-screen flex justify-center">
      <div className="w-full sm:w-[300px] px-10">{children}</div>
    </main>
  );
}
