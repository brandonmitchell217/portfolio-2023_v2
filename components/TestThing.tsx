"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { DataProps } from "@/lib/types";

export const TestThing = ({ data }: any) => {
  useEffect(() => {
    console.log(data);
  });
  return (
    <div>
      {data.map((item: DataProps) => {
        return (
          <div key={item.id} className="text-white">
            <Image
              src={item.imageURL}
              alt={item.title}
              height={100}
              width={200}
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul className="flex gap-1 text-sm">
              {item.tag_array.map((tag: string, key: number) => (
                <li key={key}>{tag}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
