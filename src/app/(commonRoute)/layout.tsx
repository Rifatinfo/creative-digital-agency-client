
import Footer from "@/components/shared/Footer/Footer";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50">
        {children}
        <Footer/>
    </div>
  );
}
