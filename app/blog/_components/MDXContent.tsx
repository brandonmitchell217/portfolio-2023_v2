'use server'
import { serialize } from 'next-mdx-remote/serialize'
import MDXClient from './MDXClient'

interface MDXContentProps {
  content: string
}

export default async function MDXContent({ content }: MDXContentProps) {
  if (!content) {
    return null
  }

  try {
    const mdxSource = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
        format: 'mdx',
        remarkPlugins: [],
        rehypePlugins: [],
      },
    })

    // During static generation, return a simple div
    if (process.env.NODE_ENV === 'production') {
      return (
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )
    }

    // During development, use the full MDX client
    return <MDXClient content={mdxSource} />
  } catch (error) {
    console.error('Error serializing MDX content:', error)
    return <div>Error loading content</div>
  }
} 