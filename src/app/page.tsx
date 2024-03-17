
import ContentImages from "./assembly/content";
import Header from "./assembly/header";
import Footer from "./assembly/footer";
import Script from "next/script";

export default function Page() {
  // ClickEffect();
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24 ">
      <Script src="./assembly/mosclick.js" type="text/javascript"></Script>
      <Header/>

      <ContentImages/>

      <Footer/>
    </main>
  );
}
