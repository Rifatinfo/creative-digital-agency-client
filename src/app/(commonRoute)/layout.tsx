// import DeskTopNavbar from "@/components/shared/commonNavbar/DeskTopNavbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
         {/* <DeskTopNavbar/> */}
        {children}
    </div>
  );
}
