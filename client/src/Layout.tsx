import Header from "./components/Header";
import Footer from "./components/Footer";


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
