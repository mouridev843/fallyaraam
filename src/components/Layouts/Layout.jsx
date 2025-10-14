// components/Layout.jsx
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-gray-800 font-sans antialiased">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Affichera Home, Contact, Services, etc. */}
      </main>
      <Footer />
    </div>
  );
}
