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

    return <MDXClient content={mdxSource} />
  } catch (error) {
    console.error('Error serializing MDX content:', error)
    return <div>Error loading content</div>
  }
} 