"use client";
import { useEffect } from "react";
import { MDXRemote } from "next-mdx-remote";
import Alert from "@/app/blog/_components/Alert";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "@/components/ui/mdx-components";

interface MDXClientProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXClient({ content }: MDXClientProps) {
  if (!content) {
    return null;
  }

  const components = useMDXComponents({
    Alert: (props: any) => <Alert {...props} />,
  });

  useEffect(() => {
    const links = document.querySelectorAll(".blog-post__content a");

    if (links.length > 0) {
      links.forEach((link) => {
        link.setAttribute("target", "_blank");
      });
    }
  }, []);

  return (
    <div className="max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  );
}
