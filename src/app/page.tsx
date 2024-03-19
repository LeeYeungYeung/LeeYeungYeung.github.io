'use client'

import ContentImages from "./assembly/content";
import Header from "./assembly/header";
import Footer from "./assembly/footer";
import toast from 'react-hot-toast';


export default function Page() {
  const handleButtonClick = () => {
    toast('欢迎，请尽情点击吧！', {
      icon: '😘'
    })
  }

  setTimeout(() => {
    () => handleButtonClick();
  }, 3300);

  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24 ">
      <Header />

      <ContentImages />

      <Footer />
    </main>
  );
}
