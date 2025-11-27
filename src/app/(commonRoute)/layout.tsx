// import DeskTopNavbar from "@/components/shared/commonNavbar/DeskTopNavbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50">
         {/* <DeskTopNavbar/> */}
        {children}
    </div>
  );
}
