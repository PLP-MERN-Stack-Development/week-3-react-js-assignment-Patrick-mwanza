import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
  <div className="bg-indigo-50 min-h-screen flex flex-col items-center">
    <Navbar />
    <main className="flex-grow w-full max-w-3xl p-4 sm:p-6">{children}</main>
    <Footer />
  </div>
);

}
