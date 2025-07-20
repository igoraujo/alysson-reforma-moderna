import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Como pintar uma casa: 7 passos',
      excerpt: 'Descubra o passo a passo completo para pintar sua casa de forma profissional e duradoura.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=300&fit=crop',
      date: '15 de Janeiro, 2024',
      category: 'Pintura',
      readTime: '5 min'
    },
    {
      title: 'Construir uma casa do zero: 7 etapas',
      excerpt: 'Guia completo das etapas fundamentais para construir sua casa dos sonhos do zero.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop',
      date: '10 de Janeiro, 2024',
      category: 'Construção',
      readTime: '8 min'
    },
    {
      title: 'Acidentes domésticos: 8 exemplos e como evitá-los',
      excerpt: 'Conheça os principais acidentes domésticos e as melhores práticas de prevenção para sua segurança.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop',
      date: '5 de Janeiro, 2024',
      category: 'Segurança',
      readTime: '6 min'
    }
  ];

  const categories = [
    { name: 'Construção', count: 12, color: 'bg-primary' },
    { name: 'Reforma', count: 8, color: 'bg-accent' },
    { name: 'Pintura', count: 6, color: 'bg-neutral-600' },
    { name: 'Segurança', count: 4, color: 'bg-primary' }
  ];

  return (
    <section id="blog" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Blog e <span className="text-gradient">Dicas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossas dicas especializadas, guias práticos e novidades do mundo da construção civil.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-large transition-all duration-300 group"
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Read Time */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 space-y-4">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      {post.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-display font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <Button 
                      variant="ghost" 
                      className="group/btn text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
                    >
                      <span className="flex items-center gap-2">
                        Ler mais
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button asChild className="btn-outline">
                <a href="#blog">
                  Ver Todos os Artigos
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Categorias
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Receba Nossas Dicas
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Inscreva-se para receber dicas exclusivas sobre construção e reforma.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-primary w-full">
                  Inscrever-se
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Não enviamos spam. Cancele a qualquer momento.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="cta-background rounded-xl p-6 text-center space-y-4">
              <h3 className="text-xl font-display font-semibold text-white">
                Precisa de Ajuda?
              </h3>
              <p className="text-white/90 text-sm">
                Nossa equipe está pronta para tirar suas dúvidas e ajudar com seu projeto.
              </p>
              <Button asChild className="btn-accent w-full">
                <a href="#contact">Falar com Especialista</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;