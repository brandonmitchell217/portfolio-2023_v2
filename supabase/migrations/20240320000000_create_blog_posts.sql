create table if not exists public.blog_posts (
  id bigint primary key generated always as identity,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  content text not null,
  description text not null,
  published boolean default false,
  slug text not null unique,
  tags text[] default array[]::text[],
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.blog_posts enable row level security;

-- Allow public read access to published posts
create policy "Allow public read access to published posts"
  on public.blog_posts
  for select
  using (published = true);

-- Allow authenticated users to perform all operations
create policy "Allow authenticated users full access"
  on public.blog_posts
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated'); 