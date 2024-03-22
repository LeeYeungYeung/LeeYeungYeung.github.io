"use client"
import FooterLogo from "./footerlink"
import Image from "next/image"
export default function Footer() {
    return (
        <div className="flex items-stretch space-x-5">

            <FooterLogo href="https://github.com/LeeyeungYeung" imgUrl="/github-mark.svg" />

            <FooterLogo href="https://www.douyin.com/user/MS4wLjABAAAAFwyxysvf4C3zw_4N25SRuHMBLRbLDWfOMvlB35lAxX0?showTab=like" imgUrl="/tiktok-svgrepo-com.svg" />
        </div>
    )
}