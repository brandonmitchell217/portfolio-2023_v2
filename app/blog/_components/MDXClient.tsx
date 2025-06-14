'use client'

import { MDXRemote } from 'next-mdx-remote'
import Alert from '@/app/blog/_components/Alert'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXClientProps {
  content: MDXRemoteSerializeResult
}

const components = {
  Alert,
}

export default function MDXClient({ content }: MDXClientProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  )
} 