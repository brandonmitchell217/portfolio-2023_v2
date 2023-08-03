import { SocialLinks } from "./util";

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

export interface NavigationLinksProps {
  id: number;
  name: string;
  url: string;
  icon?: React.ReactNode;
}
