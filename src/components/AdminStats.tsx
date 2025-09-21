import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, QrCode, MapPin, TrendingUp } from "lucide-react";

const AdminStats = () => {
  const stats = [
    {
      title: "Total Trees",
      value: "247",
      change: "+12 this month",
      icon: TreePine,
      color: "text-forest-primary",
    },
    {
      title: "QR Codes Generated",
      value: "189",
      change: "+8 this week",
      icon: QrCode,
      color: "text-earth-primary",
    },
    {
      title: "Campus Locations",
      value: "15",
      change: "All areas covered",
      icon: MapPin,
      color: "text-forest-secondary",
    },
    {
      title: "Weekly Scans",
      value: "1,234",
      change: "+23% from last week",
      icon: TrendingUp,
      color: "text-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card bg-card/95 backdrop-blur-sm border border-border/50 hover:shadow-nature transition-nature">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminStats;