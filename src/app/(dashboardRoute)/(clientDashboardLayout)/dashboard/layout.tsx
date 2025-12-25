export default function DashboardClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto container">
        {children}
    </div>
  );
}
