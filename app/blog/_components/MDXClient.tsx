'use client'

import { MDXRemote } from 'next-mdx-remote'
import Alert from '@/app/blog/_components/Alert'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXClientProps {
  content: MDXRemoteSerializeResult
}

const components = {
  Alert: (props: any) => <Alert {...props} />,
}

export default function MDXClient({ content }: MDXClientProps) {
  if (!content) {
    return null
  }

  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  )
} 