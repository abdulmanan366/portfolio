import Footer from "@/components/Footer";

export const metadata = {
  title: "Abdul Manan | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
