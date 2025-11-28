export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export enum PageRoute {
  HOME = '/',
  SERVICES = '/services',
  WORK = '/work',
  ABOUT = '/about',
  BLOG = '/blog',
  CONTACT = '/contact',
  ADMIN = '/admin',
}
