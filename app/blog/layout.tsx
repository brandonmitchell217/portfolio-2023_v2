import React from 'react';
import type { WithContext, Blog } from "schema-dts";
import { Metadata } from 'next';

interface ExtendedBlog extends Blog {
  "@graph"?: Array<{
    "@type": string;
    itemListElement: Array<{
      "@type": string;
      item: {
        "@type": string;
        "@id": string;
      };
    }>;
  }>;
}

// This will override the root layout's metadata template
export const metadata: Metadata = {
  metadataBase: new URL("https://brandon-mitchell.dev"),
  openGraph: {
    siteName: "Brandon Mitchell's Blog",
    locale: "en_US",
    type: "website",
  }
};

const blogSchema: WithContext<ExtendedBlog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Brandon Mitchell's Blog",
  description: "Articles about frontend development, web technologies, and software engineering by Brandon Mitchell",
  url: "https://blog.brandon-mitchell.dev",
  author: {
    "@type": "Person",
    name: "Brandon Mitchell",
    url: "https://brandon-mitchell.dev",
    jobTitle: "Frontend Developer",
    image: "https://www.brandon-mitchell.dev/me1.jpg",
    sameAs: [
      "https://www.linkedin.com/in/brandonmitchell217/",
      "https://www.github.com/brandonmitchell217"
    ]
  },
  publisher: {
    "@type": "Person",
    name: "Brandon Mitchell",
    url: "https://brandon-mitchell.dev"
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  keywords: [
    "Frontend Development",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Design",
    "UI/UX",
    "Performance Optimization",
    "Software Engineering"
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://blog.brandon-mitchell.dev"
  },
  "@graph": [{
    "@type": "ItemList",
    itemListElement: [{
      "@type": "ListItem",
      item: {
        "@type": "BlogPosting",
        "@id": "https://blog.brandon-mitchell.dev#posts"
      }
    }]
  }]
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
