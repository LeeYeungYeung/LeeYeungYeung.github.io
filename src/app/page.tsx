"use client"
import ContentImages from "./assembly/content";
import Header from "./assembly/header";
import Footer from "./assembly/footer";
import toast, { Toaster } from 'react-hot-toast';
import Script from "next/script";
import { useEffect } from "react";


export default function Page() {

  function handelClick() {
    toast('欢迎，请尽情点击吧！', {
      icon: '😁'
    })
  }
  useEffect(function () {
    console.log('hellow')
    toast('欢迎，请尽情点击吧！', {
      icon: '😁'
    })

  })

  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24 ">


      <Header />
      <ContentImages />
      {/* <button onClick={handelClick}>click</button> */}

      <Footer />
    </main>
  );
}
