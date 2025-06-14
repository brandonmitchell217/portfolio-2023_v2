import type { MDXComponents } from 'mdx/types'
import Alert from '@/app/blog/_components/Alert'

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-bold mb-2 mt-4">{children}</h3>,
  p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
  a: ({ children, href }) => (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="mb-1">{children}</li>,
  code: ({ children }) => (
    <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-100 rounded p-4 mb-4 overflow-x-auto font-mono text-sm">{children}</pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-lg my-4 max-w-full" />
  ),
  Alert,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...components,
  }
} 