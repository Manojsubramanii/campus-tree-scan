import { Button } from "@/components/ui/button";
import { TreePine, Shield, QrCode, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/campus-trees-hero.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-nature">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful campus trees" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-primary/20 to-earth-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-card/90 backdrop-blur-sm rounded-full shadow-nature">
              <TreePine className="h-16 w-16 text-forest-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Campus<span className="text-forest-primary">Flora</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover, document, and explore every tree on campus. Your digital gateway to understanding our natural heritage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/admin">
              <Button size="lg" variant="outline" className="border-forest-primary text-forest-primary hover:bg-forest-primary hover:text-primary-foreground transition-nature px-8 py-4 text-lg shadow-card bg-card/90 backdrop-blur-sm">
                <Shield className="w-5 h-5 mr-3" />
                Admin Portal
              </Button>
            </Link>
            <Link to="/scan">
              <Button size="lg" className="bg-gradient-forest hover:shadow-glow transition-nature px-8 py-4 text-lg">
                <QrCode className="w-5 h-5 mr-3" />
                Scan Tree QR Code
              </Button>
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border/50">
              <Leaf className="h-8 w-8 text-forest-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Document Trees</h3>
              <p className="text-muted-foreground text-sm">Comprehensive tree information with photos and botanical details</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border/50">
              <QrCode className="h-8 w-8 text-forest-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">QR Code Access</h3>
              <p className="text-muted-foreground text-sm">Instant access to tree information via QR code scanning</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border/50">
              <Shield className="h-8 w-8 text-forest-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Secure Management</h3>
              <p className="text-muted-foreground text-sm">Protected admin interface for authorized tree documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;