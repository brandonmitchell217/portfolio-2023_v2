"use client";
import React, { useEffect, useState } from "react";
import SocialShare from "./SocialShare";
import { MoveLeft, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

export default function TableOfContents({ title }: { title: string }) {
  const [headingsIds, setHeadingsIds] = useState<string[]>([]);
  const [headingsText, setHeadingsText] = useState<string[]>([]);
  const tablet = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    const headingsElements = document.querySelectorAll(
      ".blog-post__content h2, .blog-post__content h3, .blog-post__content h4, .blog-post__content h5, .blog-post__content h6"
    );

    if (headingsElements.length > 0) {
      headingsElements.forEach((heading) => {
        const headingText = heading.textContent;
        const hyphenatedHeadingText = headingText
          ?.toLowerCase()
          .split(" ")
          .join("-");
        if (hyphenatedHeadingText) {
          heading.setAttribute("id", hyphenatedHeadingText);
          setHeadingsIds((prev) => [...prev, hyphenatedHeadingText]);
        }
        if (headingText) {
          setHeadingsText((prev) => [...prev, headingText]);
        }
      });
    }
  }, []);

  return (
    <aside className="mt-8 lg:mt-0 lg:sticky lg:top-40 lg:left-0 lg:z-50 lg:space-y-4">
      <SocialShare title={title} />
      <details className="group open:pb-4" open={tablet}>
      <summary className="cursor-pointer text-lg text-light font-medium bg-dark p-4 rounded-full lg:rounded-tr-2.5xl lg:rounded-br-2.5xl lg:rounded-tl-2.5xl lg:rounded-bl-2.5xl flex justify-between items-center group-open:rounded-br-none group-open:rounded-bl-none">
          <span>Table of Contents</span>
          <Plus className="block group-open:hidden text-lime" />
          <Minus className="hidden group-open:block text-poppy" />
        </summary>
        <div className="flex flex-col border border-dark rounded-bl-2.5xl rounded-br-2.5xl">
          <nav className="relative lg:max-h-96 px-4">
          <div className="relative py-4 lg:max-h-96 lg:overflow-y-scroll">
          <ol className="pl-7 space-y-2 list-decimal relative z-0 marker:text-sm">
              {headingsIds.map((heading, index) => (
                <li key={index}>
                  <a
                    href={`#${heading}`}
                    aria-label={`Jump to ${headingsText[index]}`}
                    className="text-sm hover:underline"
                  >
                    {headingsText[index]}
                  </a>
                </li>
              ))}
              </ol>
              </div>
            </nav>
          <div className="bg-dark mt-2.5 p-4 rounded-bl-2.5xl rounded-br-2.5xl">
            <Link href="/blog" className="text-light flex items-center gap-2">
        <MoveLeft />
        <span>Back to Blog</span>
      </Link>
          </div>
        </div>
      </details>
    </aside>
  )

  // return (
  //   <aside className="table-of-contents sticky top-32 left-0 z-50 space-y-8 p-4 border border-dark rounded-2.5xl">
  //     <Link href="/blog" className="text-dark flex items-center gap-2">
  //       <MoveLeft />
  //       <span>Back to Blog</span>
  //     </Link>
  //     <details
  //       className="group open:pb-4 bg-light border lg:border-t lg:border-b lg:border-r border-dark rounded-2.5xl rounded-tl-2.5xl rounded-bl-2.5xl lg:rounded-2.5xl"
  //       open
  //     >
  //       <summary className="cursor-pointer text-lg text-light font-medium bg-dark px-4 py-2 rounded-full lg:rounded-tr-2.5xl lg:rounded-br-2.5xl lg:rounded-tl-2.5xl lg:rounded-bl-2.5xl flex justify-between items-center group-open:rounded-br-none group-open:rounded-bl-none">
  //         <span>Table of Contents</span>
  //         <Plus className="block group-open:hidden text-lime" />
  //         <Minus className="hidden group-open:block text-poppy" />
  //       </summary>
  //       <nav className="relative mt-6 lg:max-h-96">
  //         <div className="relative lg:max-h-96 lg:overflow-y-scroll">
  //           <ol className="pl-7 space-y-2 list-decimal relative z-0">
  //             {headingsIds.map((heading, index) => (
  //               <li key={heading}>
  //                 <a
  //                   href={`#${heading}`}
  //                   aria-label={`Jump to ${headingsText[index]}`}
  //                   className="hover:underline"
  //                 >
  //                   {headingsText[index]}
  //                 </a>
  //               </li>
  //             ))}
  //           </ol>
  //         </div>
          
  //         <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-dark to-transparent z-10" />
  //       </nav>
  //     </details>
  //     <SocialShare title={title} />
  //   </aside>
  // );
}
