import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Scan, TreePine, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRScanner = () => {
  const [qrCode, setQrCode] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [treeData, setTreeData] = useState(null);
  const { toast } = useToast();

  const handleScan = async () => {
    if (!qrCode.trim()) {
      toast({
        title: "Please enter a QR code",
        description: "Enter the QR code value to view tree information.",
        variant: "destructive",
      });
      return;
    }

    setIsScanning(true);
    
    // Simulate QR code lookup
    setTimeout(() => {
      // Mock tree data
      const mockTreeData = {
        id: qrCode,
        commonName: "Red Oak",
        scientificName: "Quercus rubra",
        age: 25,
        height: 50,
        diameter: 24,
        location: "Main Quad, near Library",
        coordinates: "40.7128, -74.0060",
        healthStatus: "Excellent",
        description: "A magnificent red oak tree that has been a centerpiece of the campus for over two decades. Known for its brilliant fall foliage and impressive canopy that provides shade for students year-round.",
        dateAdded: "2024-01-15",
      };
      
      setTreeData(mockTreeData);
      setIsScanning(false);
      
      toast({
        title: "Tree Found!",
        description: "Displaying information for tree ID: " + qrCode,
      });
    }, 1500);
  };

  const handleManualEntry = () => {
    if (qrCode === "DEMO001") {
      handleScan();
    } else {
      toast({
        title: "Tree Not Found",
        description: "Try entering 'DEMO001' to see sample tree data.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-nature py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Scanner Card */}
        <Card className="shadow-nature bg-card/95 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <QrCode className="h-6 w-6 text-forest-primary" />
              Tree QR Scanner
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="text-center py-8 border-2 border-dashed border-border rounded-lg bg-nature-lighter/50">
              <Scan className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                QR Camera scanning requires device camera access
              </p>
              <p className="text-sm text-muted-foreground">
                For demo purposes, enter "DEMO001" below
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="qrInput">Or enter QR code manually:</Label>
              <div className="flex gap-2">
                <Input
                  id="qrInput"
                  placeholder="Enter QR code (try DEMO001)"
                  value={qrCode}
                  onChange={(e) => setQrCode(e.target.value)}
                  className="focus:ring-forest-primary focus:border-forest-primary"
                />
                <Button
                  onClick={handleManualEntry}
                  disabled={isScanning}
                  className="bg-gradient-forest hover:shadow-nature transition-nature"
                >
                  {isScanning ? "Scanning..." : "Scan"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tree Information Card */}
        {treeData && (
          <Card className="shadow-nature bg-card/95 backdrop-blur-sm border border-border/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TreePine className="h-5 w-5 text-forest-primary" />
                {treeData.commonName}
              </CardTitle>
              <p className="text-muted-foreground italic">{treeData.scientificName}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Physical Characteristics</h4>
                  <div className="space-y-1">
                    <p><span className="font-medium">Age:</span> {treeData.age} years</p>
                    <p><span className="font-medium">Height:</span> {treeData.height} feet</p>
                    <p><span className="font-medium">Diameter:</span> {treeData.diameter} inches</p>
                    <p><span className="font-medium">Health:</span> 
                      <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                        treeData.healthStatus === 'Excellent' ? 'bg-green-100 text-green-800' : 
                        treeData.healthStatus === 'Good' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {treeData.healthStatus}
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Location</h4>
                  <div className="space-y-1">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-forest-primary mt-0.5 flex-shrink-0" />
                      {treeData.location}
                    </p>
                    {treeData.coordinates && (
                      <p className="text-sm text-muted-foreground ml-6">
                        GPS: {treeData.coordinates}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground ml-6">
                      Added: {new Date(treeData.dateAdded).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              
              {treeData.description && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h4>
                  <p className="text-sm leading-relaxed">{treeData.description}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QRScanner;