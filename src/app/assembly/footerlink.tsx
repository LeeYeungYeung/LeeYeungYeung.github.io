"use client"
import Image from "next/image";
export default function FooterLogo
    ({ href, imgUrl }
        : { href: string, imgUrl: string }) {
    return (

        <a href={href} target="_blank">
            <Image
                className="relative self-center rounded transition ease-in-out hover:-translate hover:scale-110  duration-300"
                src={imgUrl}
                alt="page"
                width={25}
                height={25}
            />
        </a>
    )
}