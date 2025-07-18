const AlbumSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Album Details
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the 16 beautiful tracks that make up "Kijito cha utulivu" – a journey through sound and emotion. Each song is carefully crafted to bring you peace, serenity, and a moment of tranquil escape from the everyday world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-primary">16</div>
              <div className="text-muted-foreground">Beautiful Tracks</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-primary">60+</div>
              <div className="text-muted-foreground">Minutes of Tranquility</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground">Moments of Peace</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;