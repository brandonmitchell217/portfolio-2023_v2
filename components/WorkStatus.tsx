import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WorkStatus() {
  return (
    <h3 className="font-medium text-[20px] md:text-[40px] tracking-[0.02em] lg:leading-[60px] text-center">
      I am currently on the marketing team at{" "}
      <Link href={"https://www.gloo.us/"} target="_blank">
        <Image
          src={"/gloo.png"}
          alt="Gloo Logo"
          height={45}
          width={89}
          className="inline pb-1 scale-50 -m-[22px] md:scale-100 md:m-0 lg:hover:scale-105 transition"
        />
      </Link>
      . Our team uses a combination of both React & Vue along with HubSpot to
      help drive new user/partner engagement.
    </h3>
  );
}
