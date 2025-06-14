import { serialize } from 'next-mdx-remote/serialize'
import MDXClient from './MDXClient'

interface MDXContentProps {
  content: string
}

export default async function MDXContent({ content }: MDXContentProps) {
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    },
  })

  // Return a client component with the serialized content
  return (
    <div className="mdx-content">
      <MDXClient content={mdxSource} />
    </div>
  )
} 