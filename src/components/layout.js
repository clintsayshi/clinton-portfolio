import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen scroll-smooth bg-gray-50 overflow-hidden">
      <Header />
      <main className="z-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
