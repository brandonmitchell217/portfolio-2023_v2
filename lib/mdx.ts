import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  content: string
  tags: string[]
  published: boolean
  featured_image?: string
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(contentDirectory)
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title,
        description: data.description,
        date: data.date,
        content,
        tags: data.tags || [],
        published: data.published ?? false,
        featured_image: data.featured_image,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      content,
      tags: data.tags || [],
      published: data.published ?? false,
      featured_image: data.featured_image,
    }
  } catch (error) {
    return null
  }
}

export function createPost(post: Omit<BlogPost, 'slug'> & { slug?: string }): void {
  const slug = post.slug || post.title.toLowerCase().replace(/\s+/g, '-')
  const filePath = path.join(contentDirectory, `${slug}.mdx`)
  
  const frontmatter = {
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    published: post.published,
    featured_image: post.featured_image,
  }
  
  const content = `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
  .join('\n')}
---

${post.content}`
  
  fs.writeFileSync(filePath, content)
} 