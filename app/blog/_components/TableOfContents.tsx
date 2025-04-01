import React from 'react'

export default function TableOfContents({ anchors, slug }: { anchors: string[], slug: string }) { 
   const currentUrl = `/blog/${slug}`

   if(!anchors) return null

   return (
      <aside className="hidden border-dark py-4 px-8 lg:block lg:fixed lg:top-32 lg:right-4 lg:border rounded-xl shadow-md">
         <nav className="sticky top-32">
            <h2 className="text-lg font-semibold">Table of Contents</h2>
            <ul className="space-y-2 pl-2.5 pt-2 border-l border-t border-dark">
               {anchors.map((anchor, index) => (
                  <li key={anchor}>
                     <a href={`${currentUrl}#${anchor}`} className="hover:text-blue-600">
                        <span>0{index + 1}.</span>
                        <span className="ml-1">{anchor.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </aside>
   )
}