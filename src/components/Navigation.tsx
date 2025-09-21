import { Button } from "@/components/ui/button";
import { TreePine, Shield, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-card border-b shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <TreePine className="h-8 w-8 text-forest-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">CampusFlora</h1>
              <p className="text-xs text-muted-foreground">Tree Documentation System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/admin">
              <Button variant="outline" size="sm" className="border-forest-primary text-forest-primary hover:bg-forest-primary hover:text-primary-foreground transition-nature">
                <Shield className="w-4 h-4 mr-2" />
                Admin Portal
              </Button>
            </Link>
            <Link to="/scan">
              <Button size="sm" className="bg-gradient-forest hover:shadow-nature transition-nature">
                <QrCode className="w-4 h-4 mr-2" />
                Scan Tree
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;