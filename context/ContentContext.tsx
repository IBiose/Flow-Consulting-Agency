import React, { createContext, useContext, useState, useEffect } from 'react';
import { Service, Project, BlogPost } from '../types';
import { SERVICES, PROJECTS, BLOG_POSTS } from '../constants';

interface ContentContextType {
  services: Service[];
  projects: Project[];
  posts: BlogPost[];
  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  deleteService: (id: string) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  addPost: (post: BlogPost) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from LocalStorage or Fallback to Constants
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('cms_services');
    return saved ? JSON.parse(saved) : SERVICES;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('cms_projects');
    return saved ? JSON.parse(saved) : PROJECTS;
  });

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('cms_posts');
    return saved ? JSON.parse(saved) : BLOG_POSTS;
  });

  // Persist to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('cms_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('cms_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('cms_posts', JSON.stringify(posts));
  }, [posts]);

  // Service Actions
  const addService = (item: Service) => setServices([...services, item]);
  const updateService = (item: Service) => setServices(services.map(s => s.id === item.id ? item : s));
  const deleteService = (id: string) => setServices(services.filter(s => s.id !== id));

  // Project Actions
  const addProject = (item: Project) => setProjects([...projects, item]);
  const updateProject = (item: Project) => setProjects(projects.map(p => p.id === item.id ? item : p));
  const deleteProject = (id: string) => setProjects(projects.filter(p => p.id !== id));

  // Blog Actions
  const addPost = (item: BlogPost) => setPosts([...posts, item]);
  const updatePost = (item: BlogPost) => setPosts(posts.map(p => p.id === item.id ? item : p));
  const deletePost = (id: string) => setPosts(posts.filter(p => p.id !== id));

  return (
    <ContentContext.Provider value={{
      services, projects, posts,
      addService, updateService, deleteService,
      addProject, updateProject, deleteProject,
      addPost, updatePost, deletePost
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
