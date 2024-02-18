import { SocialLinks } from "./util";

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
