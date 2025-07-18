import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Heart, Share2, Download } from "lucide-react";
import Header from "@/components/Header";
import albumCover from "@/assets/album-cover.png";

const AlbumPage = () => {
  const tracks = [
    { number: 1, title: "Amani", duration: "4:23" },
    { number: 2, title: "Tulia", duration: "3:47" },
    { number: 3, title: "Utulivu", duration: "5:12" },
    { number: 4, title: "Huzuni", duration: "4:01" },
    { number: 5, title: "Subira", duration: "3:58" },
    { number: 6, title: "Faraja", duration: "4:34" },
    { number: 7, title: "Upendo", duration: "3:29" },
    { number: 8, title: "Busara", duration: "4:45" },
    { number: 9, title: "Mwanga", duration: "4:18" },
    { number: 10, title: "Pumziko", duration: "3:52" },
    { number: 11, title: "Usingizi", duration: "5:07" },
    { number: 12, title: "Baraka", duration: "3:41" },
    { number: 13, title: "Neema", duration: "4:26" },
    { number: 14, title: "Heri", duration: "3:33" },
    { number: 15, title: "Shukrani", duration: "4:09" },
    { number: 16, title: "Kijito cha Utulivu", duration: "6:15" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Album Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={albumCover} 
                  alt="Kijito cha utulivu Album Cover" 
                  className="w-80 h-80 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
            
            <div className="space-y-6 text-primary-foreground">
              <div>
                <p className="text-lg opacity-90 mb-2">Album</p>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kijito cha utulivu</h1>
                <p className="text-xl opacity-90">Tausi Music • 2024 • 16 tracks, 1 hr 8 min</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 rounded-full">
                  <Play className="w-5 h-5 mr-2" />
                  Play Album
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <Heart className="w-5 h-5 mr-2" />
                  Like
                </Button>
                <Button variant="ghost" size="lg" className="rounded-full text-primary-foreground hover:bg-primary-foreground/10">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Track List</h2>
            
            <Card className="shadow-card">
              <CardContent className="p-0">
                {tracks.map((track, index) => (
                  <div 
                    key={track.number}
                    className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer group ${
                      index !== tracks.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Play className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        <span className="group-hover:opacity-0 transition-opacity text-muted-foreground">
                          {track.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">Tausi Music</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-4 h-4" />
                      </Button>
                      <span className="text-muted-foreground text-sm">{track.duration}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlbumPage;