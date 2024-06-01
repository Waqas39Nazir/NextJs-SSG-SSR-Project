import React from "react";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

type Props = {
  children?: any;
};

const ContentWrapper = ({ children }: Props) => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <main className="px-[5%] py-8 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default ContentWrapper;
