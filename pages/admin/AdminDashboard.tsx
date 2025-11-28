import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../context/ContentContext';
import Button from '../../components/ui/Button';
import { Trash2, Edit2, Plus, LogOut, Layout, Briefcase, FileText } from 'lucide-react';
import { Service, Project, BlogPost } from '../../types';

type Tab = 'services' | 'work' | 'blog';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { 
    services, addService, updateService, deleteService,
    projects, addProject, updateProject, deleteProject,
    posts, addPost, updatePost, deletePost
  } = useContent();

  const [activeTab, setActiveTab] = useState<Tab>('services');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin');
  };

  const openModal = (item?: any) => {
    setEditingItem(item || {});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingItem(null);
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      if (activeTab === 'services') deleteService(id);
      if (activeTab === 'work') deleteProject(id);
      if (activeTab === 'blog') deletePost(id);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const id = editingItem.id || Date.now().toString();
    const newItem = { ...editingItem, id };

    if (activeTab === 'services') {
      editingItem.id ? updateService(newItem as Service) : addService(newItem as Service);
    } else if (activeTab === 'work') {
      editingItem.id ? updateProject(newItem as Project) : addProject(newItem as Project);
    } else if (activeTab === 'blog') {
      editingItem.id ? updatePost(newItem as BlogPost) : addPost(newItem as BlogPost);
    }
    closeModal();
  };

  const renderFormFields = () => {
    if (activeTab === 'services') {
      return (
        <>
          <InputField label="Title" name="title" value={editingItem.title} onChange={e => setEditingItem({...editingItem, title: e.target.value})} />
          <InputField label="Description" name="description" value={editingItem.description} textarea onChange={e => setEditingItem({...editingItem, description: e.target.value})} />
          <InputField label="Icon Name (Lucide)" name="icon" value={editingItem.icon} placeholder="e.g. Megaphone, Code" onChange={e => setEditingItem({...editingItem, icon: e.target.value})} />
        </>
      );
    }
    if (activeTab === 'work') {
      return (
        <>
          <InputField label="Project Title" name="title" value={editingItem.title} onChange={e => setEditingItem({...editingItem, title: e.target.value})} />
          <InputField label="Category" name="category" value={editingItem.category} onChange={e => setEditingItem({...editingItem, category: e.target.value})} />
          <InputField label="Image URL" name="imageUrl" value={editingItem.imageUrl} onChange={e => setEditingItem({...editingItem, imageUrl: e.target.value})} />
          <InputField label="Client" name="client" value={editingItem.client} onChange={e => setEditingItem({...editingItem, client: e.target.value})} />
          <InputField label="Year" name="year" value={editingItem.year} onChange={e => setEditingItem({...editingItem, year: e.target.value})} />
          <InputField label="Description" name="description" value={editingItem.description} textarea onChange={e => setEditingItem({...editingItem, description: e.target.value})} />
        </>
      );
    }
    if (activeTab === 'blog') {
        return (
          <>
            <InputField label="Post Title" name="title" value={editingItem.title} onChange={e => setEditingItem({...editingItem, title: e.target.value})} />
            <InputField label="Category" name="category" value={editingItem.category} onChange={e => setEditingItem({...editingItem, category: e.target.value})} />
            <InputField label="Author" name="author" value={editingItem.author} onChange={e => setEditingItem({...editingItem, author: e.target.value})} />
            <InputField label="Date" name="date" value={editingItem.date} onChange={e => setEditingItem({...editingItem, date: e.target.value})} />
            <InputField label="Image URL" name="imageUrl" value={editingItem.imageUrl} onChange={e => setEditingItem({...editingItem, imageUrl: e.target.value})} />
            <InputField label="Excerpt" name="excerpt" value={editingItem.excerpt} textarea onChange={e => setEditingItem({...editingItem, excerpt: e.target.value})} />
            <InputField label="Full Content" name="content" value={editingItem.content} textarea rows={6} onChange={e => setEditingItem({...editingItem, content: e.target.value})} />
          </>
        );
      }
    return null;
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Top Bar */}
      <header className="bg-surface border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 z-20">
        <h1 className="text-xl font-bold text-secondary">Lumina CMS</h1>
        <Button variant="ghost" onClick={handleLogout} className="text-red-400 hover:text-red-300">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </Button>
      </header>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-surface/50 border-r border-white/10 p-4">
          <nav className="space-y-2">
            <TabButton active={activeTab === 'services'} onClick={() => setActiveTab('services')} icon={Layout} label="Services" />
            <TabButton active={activeTab === 'work'} onClick={() => setActiveTab('work')} icon={Briefcase} label="Work" />
            <TabButton active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} icon={FileText} label="Blog" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-secondary capitalize">{activeTab} Management</h2>
            <Button onClick={() => openModal()} className="flex items-center">
              <Plus className="w-4 h-4 mr-2" /> Add New
            </Button>
          </div>

          <div className="grid gap-4">
            {activeTab === 'services' && services.map((item) => (
              <ListItem key={item.id} title={item.title} subtitle={item.description} onEdit={() => openModal(item)} onDelete={() => handleDelete(item.id)} />
            ))}
            {activeTab === 'work' && projects.map((item) => (
              <ListItem key={item.id} title={item.title} subtitle={`${item.client} • ${item.year}`} onEdit={() => openModal(item)} onDelete={() => handleDelete(item.id)} />
            ))}
            {activeTab === 'blog' && posts.map((item) => (
              <ListItem key={item.id} title={item.title} subtitle={`${item.author} • ${item.date}`} onEdit={() => openModal(item)} onDelete={() => handleDelete(item.id)} />
            ))}
          </div>
        </main>
      </div>

      {/* Edit/Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-2xl rounded-2xl border border-white/10 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-secondary mb-6">{editingItem.id ? 'Edit Item' : 'Add New Item'}</h3>
            <form onSubmit={handleSave} className="space-y-4">
              {renderFormFields()}
              <div className="flex justify-end gap-4 mt-8">
                <Button type="button" variant="ghost" onClick={closeModal}>Cancel</Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Subcomponents for cleaner code
const TabButton = ({ active, onClick, icon: Icon, label }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${active ? 'bg-accent text-black font-bold' : 'text-muted hover:bg-white/5 hover:text-secondary'}`}
  >
    <Icon className="w-5 h-5 mr-3" /> {label}
  </button>
);

const ListItem = ({ title, subtitle, onEdit, onDelete }: any) => (
  <div className="bg-surface border border-white/5 rounded-xl p-4 flex justify-between items-center group hover:border-white/20 transition-all">
    <div>
      <h4 className="font-bold text-secondary">{title}</h4>
      <p className="text-sm text-muted line-clamp-1">{subtitle}</p>
    </div>
    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button onClick={onEdit} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg"><Edit2 className="w-4 h-4" /></button>
      <button onClick={onDelete} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg"><Trash2 className="w-4 h-4" /></button>
    </div>
  </div>
);

const InputField = ({ label, name, value, onChange, textarea, rows = 3, placeholder }: any) => (
  <div>
    <label className="block text-sm font-medium text-muted mb-2">{label}</label>
    {textarea ? (
      <textarea
        name={name}
        value={value || ''}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent"
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent"
      />
    )}
  </div>
);

export default AdminDashboard;
