import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TreePine, MapPin, Calendar } from "lucide-react";

const RecentTrees = () => {
  const recentTrees = [
    {
      id: "TR001",
      commonName: "Red Oak",
      scientificName: "Quercus rubra",
      location: "Main Quad",
      dateAdded: "2024-01-15",
      healthStatus: "Excellent",
    },
    {
      id: "TR002", 
      commonName: "Sugar Maple",
      scientificName: "Acer saccharum",
      location: "Library Gardens",
      dateAdded: "2024-01-14",
      healthStatus: "Good",
    },
    {
      id: "TR003",
      commonName: "White Pine",
      scientificName: "Pinus strobus",
      location: "Science Building",
      dateAdded: "2024-01-13",
      healthStatus: "Fair",
    },
  ];

  const getHealthBadgeColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "Good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Fair":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="shadow-card bg-card/95 backdrop-blur-sm border border-border/50">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <TreePine className="h-5 w-5 text-forest-primary" />
          Recently Added Trees
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTrees.map((tree) => (
            <div key={tree.id} className="flex items-center justify-between p-3 bg-nature-lighter/50 rounded-lg border border-border/30">
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{tree.commonName}</h4>
                <p className="text-sm text-muted-foreground italic">{tree.scientificName}</p>
                <div className="flex items-center gap-4 mt-1">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {tree.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(tree.dateAdded).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge className={`text-xs ${getHealthBadgeColor(tree.healthStatus)}`}>
                  {tree.healthStatus}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">
                  {tree.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTrees;