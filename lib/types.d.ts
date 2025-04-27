import { SocialLinks } from "./util";
import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
    onMouseMove?: (event: React.MouseEvent) => void;
    onMouseLeave?: () => void;
  }
}

export interface NavigationLinksProps {
  id?: number;
  name?: string;
  url?: string;
  icon?: React.ReactNode;
  iconFnc?: (size) => React.ReactNode;
  links?:
    | {
      id: number | undefined;
      name: string;
      url: string;
      icon?: React.ReactNode;
    }[]
    | any;
}

export interface ProjectsProps {
  data: Database;
  filter?: (data: Database) => Database | React.JSX.Element;
  sort?: (a: Database, b: Database) => number;
}

export interface BlogPost {
  id: number;
  created_at: string;
  featured_image?: string | null;
  title: string;
  content: string;
  description: string;
  post_image?: string;
  published: boolean;
  slug: string;
  tags: string[];
  anchors?: string[];
  updated_at: string;
}

export interface BlogCardProps {
  post: BlogPost;
}