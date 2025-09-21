import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TreePine, Camera, MapPin, QrCode, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AdminStats from "./AdminStats";
import RecentTrees from "./RecentTrees";

const TreeRegistrationForm = () => {
  const [formData, setFormData] = useState({
    commonName: "",
    scientificName: "",
    species: "",
    age: "",
    height: "",
    diameter: "",
    location: "",
    coordinates: "",
    healthStatus: "",
    description: "",
    imageFile: null as File | null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate successful registration
    setTimeout(() => {
      toast({
        title: "Tree Registered Successfully! 🌳",
        description: `${formData.commonName} has been added to the campus tree database with QR code generated.`,
      });
      
      // Reset form
      setFormData({
        commonName: "",
        scientificName: "",
        species: "",
        age: "",
        height: "",
        diameter: "",
        location: "",
        coordinates: "",
        healthStatus: "",
        description: "",
        imageFile: null,
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, imageFile: file });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-nature py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Admin Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <TreePine className="h-8 w-8 text-forest-primary" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">Manage campus tree documentation system</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
              <p className="text-xs text-muted-foreground">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <AdminStats />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-nature bg-card/95 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Plus className="h-6 w-6 text-forest-primary" />
                  Register New Tree
                </CardTitle>
                <p className="text-muted-foreground">Add a new tree to the campus documentation system</p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="commonName">Common Name *</Label>
                      <Input
                        id="commonName"
                        placeholder="e.g., Red Oak"
                        value={formData.commonName}
                        onChange={(e) => setFormData({ ...formData, commonName: e.target.value })}
                        required
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="scientificName">Scientific Name *</Label>
                      <Input
                        id="scientificName"
                        placeholder="e.g., Quercus rubra"
                        value={formData.scientificName}
                        onChange={(e) => setFormData({ ...formData, scientificName: e.target.value })}
                        required
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                    </div>
                  </div>

                  {/* Physical Characteristics */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age (years)</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (feet)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="50"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="diameter">Diameter (inches)</Label>
                      <Input
                        id="diameter"
                        type="number"
                        placeholder="24"
                        value={formData.diameter}
                        onChange={(e) => setFormData({ ...formData, diameter: e.target.value })}
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Main Quad, near Library"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="coordinates">GPS Coordinates</Label>
                      <Input
                        id="coordinates"
                        placeholder="40.7128, -74.0060"
                        value={formData.coordinates}
                        onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                    </div>
                  </div>

                  {/* Health Status */}
                  <div className="space-y-2">
                    <Label htmlFor="healthStatus">Health Status *</Label>
                    <Select value={formData.healthStatus} onValueChange={(value) => setFormData({ ...formData, healthStatus: value })}>
                      <SelectTrigger className="focus:ring-forest-primary focus:border-forest-primary">
                        <SelectValue placeholder="Select health condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">Poor</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Additional notes about the tree, its significance, or unique characteristics..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      className="focus:ring-forest-primary focus:border-forest-primary"
                    />
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="image">Tree Photo</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="focus:ring-forest-primary focus:border-forest-primary"
                      />
                      <Camera className="h-5 w-5 text-muted-foreground" />
                    </div>
                    {formData.imageFile && (
                      <p className="text-sm text-muted-foreground">
                        Selected: {formData.imageFile.name}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-forest hover:shadow-nature transition-nature"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Registering Tree..."
                    ) : (
                      <>
                        <QrCode className="w-4 h-4 mr-2" />
                        Register Tree & Generate QR Code
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <RecentTrees />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeRegistrationForm;