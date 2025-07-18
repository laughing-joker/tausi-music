import { Card, CardContent } from "@/components/ui/card";
import { Music, Heart, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import artistPortrait from "@/assets/artist-portrait.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold">About Tausi Music</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Crafting melodies that touch the soul and bring peace to the heart. 
                Our journey is one of musical exploration, cultural celebration, and 
                the pursuit of tranquility through sound.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={artistPortrait} 
                  alt="Tausi Music Artist" 
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-card"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                A journey through music, culture, and the art of tranquility
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Tausi Music was born from a simple yet profound belief: that music has the power to heal, 
                inspire, and bring peace to our busy lives. Our name, "Tausi," represents the beautiful 
                peacock – a symbol of grace, beauty, and serenity that perfectly embodies our musical philosophy.
              </p>

              <p className="text-lg leading-relaxed">
                Founded in the heart of East Africa, we draw inspiration from the rich musical traditions 
                of our homeland while embracing contemporary sounds that speak to modern audiences. Our music 
                is a bridge between generations, cultures, and hearts seeking solace in melody.
              </p>

              <p className="text-lg leading-relaxed">
                "Kijito cha utulivu" – our flagship album – represents years of musical exploration and 
                spiritual growth. Each track is carefully crafted to guide listeners on a journey of 
                inner peace, emotional healing, and cultural appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Our Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Music className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Authenticity</h3>
                  <p className="text-muted-foreground">
                    Creating genuine music that reflects our cultural heritage and personal truth.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Healing</h3>
                  <p className="text-muted-foreground">
                    Music as medicine for the soul, bringing comfort and peace to listeners.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Unity</h3>
                  <p className="text-muted-foreground">
                    Bridging cultures and communities through the universal language of music.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Excellence</h3>
                  <p className="text-muted-foreground">
                    Pursuing the highest standards in composition, performance, and production.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-card">
              <p className="text-xl text-primary-foreground leading-relaxed">
                "To create music that serves as a sanctuary for the soul, where listeners can find 
                peace, healing, and connection to something greater than themselves. Through our art, 
                we aspire to make the world a more harmonious and understanding place."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;