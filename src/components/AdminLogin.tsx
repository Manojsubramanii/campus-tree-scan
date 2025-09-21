import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TreePine } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Authentication Required",
        description: "Please connect to Supabase to enable admin authentication.",
        variant: "destructive",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-nature px-4">
      <Card className="w-full max-w-md shadow-nature bg-card/95 backdrop-blur-sm border border-border/50">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-forest-primary/10 rounded-full">
              <Shield className="h-8 w-8 text-forest-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <TreePine className="h-6 w-6 text-forest-primary" />
            Admin Portal
          </CardTitle>
          <CardDescription>
            Secure access to tree documentation system
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-nature focus:ring-forest-primary focus:border-forest-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-nature focus:ring-forest-primary focus:border-forest-primary"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-forest hover:shadow-nature transition-nature"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Authentication requires Supabase integration
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;