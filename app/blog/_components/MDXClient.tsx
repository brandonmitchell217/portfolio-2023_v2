'use client'

import { MDXRemote } from 'next-mdx-remote'
import Alert from '@/app/blog/_components/Alert'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from '@/components/ui/mdx-components'

interface MDXClientProps {
  content: MDXRemoteSerializeResult
}

export default function MDXClient({ content }: MDXClientProps) {
  if (!content) {
    return null
  }

  // Use the comprehensive MDX components from mdx-components.tsx
  const components = useMDXComponents({
    Alert: (props: any) => <Alert {...props} />,
  })

  return (
    <div className="max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  )
} 