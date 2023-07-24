export interface DataProps {
  id: number;
  created_at: string;
  title: string;
  description: string;
  imageURL: string;
  tag_array: string[];
  gh_link: string;
  live_link: string;
  featured?: boolean;
}
