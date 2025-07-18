import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Music, Award, Radio } from "lucide-react";
import Header from "@/components/Header";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Kijito cha utulivu Reaches 1 Million Streams",
      excerpt: "Our debut album achieves a major milestone, touching hearts across the globe with its peaceful melodies.",
      date: "December 15, 2024",
      category: "Milestone",
      featured: true,
      image: "🎵"
    },
    {
      id: 2,
      title: "Live Performance at Serengeti Music Festival",
      excerpt: "Join us for an unforgettable evening of tranquil music under the African stars this February.",
      date: "December 10, 2024",
      category: "Events",
      featured: true,
      image: "🎤"
    },
    {
      id: 3,
      title: "New Single 'Baraka' Now Available",
      excerpt: "Experience the blessing of music with our latest release, featuring traditional African instruments.",
      date: "November 28, 2024",
      category: "Release",
      featured: false,
      image: "🎶"
    },
    {
      id: 4,
      title: "Behind the Scenes: Making of Utulivu",
      excerpt: "Discover the creative process behind our most peaceful track in this exclusive documentary.",
      date: "November 20, 2024",
      category: "Content",
      featured: false,
      image: "🎬"
    },
    {
      id: 5,
      title: "Tausi Music Wins East African Peace Award",
      excerpt: "Recognition for our contribution to mental health awareness through therapeutic music.",
      date: "November 15, 2024",
      category: "Award",
      featured: false,
      image: "🏆"
    },
    {
      id: 6,
      title: "Collaboration with Local Meditation Centers",
      excerpt: "Partnering with wellness centers to bring healing music to meditation sessions nationwide.",
      date: "November 5, 2024",
      category: "Partnership",
      featured: false,
      image: "🧘"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Milestone": return <Music className="w-4 h-4" />;
      case "Events": return <Calendar className="w-4 h-4" />;
      case "Award": return <Award className="w-4 h-4" />;
      case "Release": return <Radio className="w-4 h-4" />;
      default: return <Music className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Milestone": return "bg-primary text-primary-foreground";
      case "Events": return "bg-accent text-accent-foreground";
      case "Award": return "bg-yellow-500 text-white";
      case "Release": return "bg-green-500 text-white";
      case "Partnership": return "bg-blue-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 text-primary-foreground">
            <h1 className="text-4xl lg:text-5xl font-bold">Latest News</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Stay updated with our musical journey, upcoming events, and the latest from Tausi Music
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Stories</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredNews.map((item) => (
                <Card key={item.id} className="shadow-card hover:shadow-soft transition-all duration-300 cursor-pointer group">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(item.category)}>
                        {getCategoryIcon(item.category)}
                        <span className="ml-2">{item.category}</span>
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <div className="text-4xl">{item.image}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Recent Updates</h2>
            
            <div className="space-y-6">
              {regularNews.map((item) => (
                <Card key={item.id} className="shadow-card hover:shadow-soft transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <Badge className={getCategoryColor(item.category)}>
                            {getCategoryIcon(item.category)}
                            <span className="ml-2">{item.category}</span>
                          </Badge>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-card bg-gradient-primary">
              <CardContent className="p-8 space-y-6 text-primary-foreground">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Stay in Harmony</h2>
                  <p className="opacity-90">
                    Subscribe to our newsletter and never miss an update about new releases, 
                    concerts, and exclusive content.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                  />
                  <button className="bg-primary-foreground text-primary px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;