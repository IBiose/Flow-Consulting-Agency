
import { Project, Service, Stat, TeamMember, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to amplify your brand presence across all digital channels. SEO, PPC, and Social Media mastery.',
    icon: 'Megaphone',
  },
  {
    id: '2',
    title: 'Branding & Identity',
    description: 'Forging memorable brand identities that resonate with your audience. Logo design, voice, and visual systems.',
    icon: 'Fingerprint',
  },
  {
    id: '3',
    title: 'Web Development',
    description: 'Building blazing fast, secure, and responsive websites using the latest technologies like React and Tailwind.',
    icon: 'Code',
  },
  {
    id: '4',
    title: 'Creative Design',
    description: 'Stunning visuals for print and digital. We craft UI/UX experiences that convert and delight users.',
    icon: 'Palette',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    description: 'A complete rebrand for a futuristic tech startup focused on AI solutions.',
    client: 'Horizon AI',
    year: '2024',
  },
  {
    id: '2',
    title: 'EcoLife App',
    category: 'Development',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    description: 'Mobile application design and development for sustainable living tracking.',
    client: 'EcoLife Global',
    year: '2023',
  },
  {
    id: '3',
    title: 'Velvet Cafe',
    category: 'Marketing',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    description: 'Social media campaign driving a 300% increase in foot traffic for a luxury cafe.',
    client: 'The Velvet Group',
    year: '2023',
  },
  {
    id: '4',
    title: 'Apex Gear',
    category: 'Design',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    description: 'Packaging and merchandise design for a high-performance athletic brand.',
    client: 'Apex Sports',
    year: '2024',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'How artificial intelligence is reshaping the landscape of customer engagement and ad targeting.',
    content: 'Artificial Intelligence is no longer a buzzword; it is a fundamental shift in how we approach digital marketing. From predictive analytics to personalized content generation, AI tools are empowering agencies to deliver unprecedented ROI...',
    imageUrl: 'https://picsum.photos/800/400?random=20',
    author: 'Elena Rostova',
    date: 'Oct 12, 2024',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Minimalism: A Design Trend That Never Dies',
    excerpt: 'Why clean lines and whitespace continue to dominate the visual language of top global brands.',
    content: 'In a noisy world, silence stands out. Minimalism in design is not about lack of effort; it is about the intentional removal of the unnecessary to highlight the essential...',
    imageUrl: 'https://picsum.photos/800/400?random=21',
    author: 'Marcus Chen',
    date: 'Sep 28, 2024',
    category: 'Design'
  },
  {
    id: '3',
    title: 'Optimizing for Core Web Vitals in 2025',
    excerpt: 'A technical deep dive into Google\'s latest ranking factors and how to prepare your site.',
    content: 'Speed is currency. With the latest updates to Core Web Vitals, interaction to next paint (INP) has become a critical metric for developers...',
    imageUrl: 'https://picsum.photos/800/400?random=22',
    author: 'Sarah Jenkins',
    date: 'Sep 15, 2024',
    category: 'Development'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    role: 'Founder & CEO',
    imageUrl: 'https://picsum.photos/400/400?random=10',
    bio: 'Visionary leader with 15 years of experience in global advertising markets.',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Creative Director',
    imageUrl: 'https://picsum.photos/400/400?random=11',
    bio: 'Award-winning designer obsessed with typography and minimalism.',
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Head of Tech',
    imageUrl: 'https://picsum.photos/400/400?random=12',
    bio: 'Full-stack wizard ensuring our digital products are as robust as they are beautiful.',
  },
];

export const STATS: Stat[] = [
  { id: '1', label: 'Projects Completed', value: 540, suffix: '+' },
  { id: '2', label: 'Client Satisfaction', value: 98, suffix: '%' },
  { id: '3', label: 'Awards Won', value: 25, suffix: '' },
  { id: '4', label: 'Years in Business', value: 12, suffix: '+' },
];

export const CLIENTS = [
  { name: 'Arla Foods', logo: 'https://flowconsulting.ng/wp-content/uploads/2025/02/Arla_Foods_logo.svg.png' },
  { name: 'Unilever', logo: 'https://flowconsulting.ng/wp-content/uploads/2025/02/Unilever-Logo-1.png' },
  { name: 'Diageo', logo: 'https://flowconsulting.ng/wp-content/uploads/2025/02/Diageo.svg.png' },
  { name: 'Interswitch', logo: 'https://flowconsulting.ng/wp-content/uploads/2025/02/Interswitch_logo.svg.png' },
  { name: '9mobile', logo: 'https://flowconsulting.ng/wp-content/uploads/2025/01/9mobile-icon-1180x2048-dxvixl8f-1.png' },
  { name: 'Wrigley', logo: 'https://flowconsulting.ng/wp-content/uploads/2025/02/The_Wrigley_Company_logo._2012.svg.png' },
  { name: 'Standard Chartered', logo: 'https://flowconsulting.ng/wp-content/uploads/2025/01/image-4.png' },
];
