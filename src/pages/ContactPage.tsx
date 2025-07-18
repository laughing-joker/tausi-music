import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import Header from "@/components/Header";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 text-primary-foreground">
            <h1 className="text-4xl lg:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Connect with us for collaborations, bookings, or just to share your thoughts about our music
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                    <p className="text-muted-foreground">
                      We'd love to hear from you. Fill out the form below and we'll get back to you soon.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this about?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-32"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">hello@tausimusic.com</p>
                        <p className="text-muted-foreground">bookings@tausimusic.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+255 123 456 789</p>
                        <p className="text-muted-foreground">+255 987 654 321</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Masaki Peninsula<br />
                          Dar es Salaam, Tanzania<br />
                          East Africa
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground mb-6">
                      Stay connected with us on social media for the latest updates, behind-the-scenes content, and exclusive releases.
                    </p>
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" size="lg" className="flex-1 rounded-lg">
                        <Facebook className="w-5 h-5 mr-2" />
                        Facebook
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1 rounded-lg">
                        <Instagram className="w-5 h-5 mr-2" />
                        Instagram
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1 rounded-lg">
                        <Twitter className="w-5 h-5 mr-2" />
                        Twitter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-card bg-gradient-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                  <div className="space-y-3">
                    <Button variant="secondary" size="lg" className="w-full rounded-lg">
                      Book a Performance
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full rounded-lg">
                      Media Kit Download
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full rounded-lg">
                      Collaboration Inquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
            <Card className="shadow-card overflow-hidden">
              <div className="h-96 bg-gradient-primary flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-semibold mb-2">Tausi Music Studio</h3>
                  <p className="opacity-90">Masaki Peninsula, Dar es Salaam</p>
                  <p className="text-sm opacity-75 mt-2">Interactive map coming soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;