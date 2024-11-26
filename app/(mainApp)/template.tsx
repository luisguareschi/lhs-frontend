import OverlayNavbar from "@/components/common/navbar/overlayNavbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OverlayNavbar />
      {children}
    </>
  );
};

export default MainLayout;
