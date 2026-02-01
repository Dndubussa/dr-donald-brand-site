import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blink } from '@/lib/blink';
import { Card } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  author_name: string;
  image_url: string;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await blink.db.blogPosts.list({
          orderBy: { created_at: 'desc' }
        });
        setPosts(data as any);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-6">Patient Education</h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Medical Insights & <br />
              <span className="text-accent italic font-normal">Aesthetic Wisdom</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              Stay informed about the latest trends, recovery tips, and safety protocols in the world of plastic and cosmetic surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <Spinner size="lg" className="text-accent" />
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col h-full"
                >
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl mb-6 relative aspect-[16/10]">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center shadow-sm">
                        <Tag size={10} className="mr-1 text-accent" />
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center space-x-4 text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-4">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1 text-accent" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User size={12} className="mr-1 text-accent" />
                        By {post.author_name}
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                      {post.content}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-accent font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform"
                    >
                      Read Full Article <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-foreground/40">
              No articles published yet. Check back soon!
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-background rounded-[2.5rem] p-12 md:p-20 shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4 text-balance">Get Aesthetic Insights Delivered to Your Inbox</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">Join our patient community and receive monthly tips on aesthetic health and wellness.</p>
            </div>
            <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 h-14 rounded-full border-border bg-secondary/50 px-6 focus:ring-accent focus:border-accent"
              />
              <button className="h-14 rounded-full bg-primary text-white px-10 font-bold hover:bg-primary/90 transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
