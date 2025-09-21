import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Download, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QRCodeGeneratorProps {
  treeId: string;
  treeData: any;
}

const QRCodeGenerator = ({ treeId, treeData }: QRCodeGeneratorProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // Generate QR code that links to tree information page
        const treeUrl = `${window.location.origin}/tree/${treeId}`;
        const qrCodeDataUrl = await QRCode.toDataURL(treeUrl, {
          width: 300,
          margin: 2,
          color: {
            dark: '#22543d', // forest-primary color
            light: '#ffffff'
          }
        });
        setQrCodeUrl(qrCodeDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    if (treeId) {
      generateQRCode();
    }
  }, [treeId]);

  const handleDownload = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.download = `tree-${treeId}-qr-code.png`;
      link.href = qrCodeUrl;
      link.click();
      
      toast({
        title: "QR Code Downloaded",
        description: `QR code for ${treeData?.commonName || 'tree'} has been downloaded.`,
      });
    }
  };

  const handleCopyUrl = async () => {
    const treeUrl = `${window.location.origin}/tree/${treeId}`;
    try {
      await navigator.clipboard.writeText(treeUrl);
      toast({
        title: "URL Copied",
        description: "Tree information URL has been copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy URL to clipboard.",
        variant: "destructive",
      });
    }
  };

  if (!qrCodeUrl) {
    return (
      <Card className="shadow-nature bg-card/95 backdrop-blur-sm border border-border/50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <QrCode className="h-5 w-5 text-forest-primary" />
            Generating QR Code...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-nature bg-card/95 backdrop-blur-sm border border-border/50">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <QrCode className="h-5 w-5 text-forest-primary" />
          QR Code Generated
        </CardTitle>
        <p className="text-muted-foreground">
          Scan this code to view tree information
        </p>
      </CardHeader>
      
      <CardContent className="text-center space-y-4">
        <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
          <img 
            src={qrCodeUrl} 
            alt={`QR Code for ${treeData?.commonName || 'tree'}`}
            className="w-64 h-64 mx-auto"
          />
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Tree: {treeData?.commonName} ({treeData?.scientificName})
          </p>
          <p className="text-sm text-muted-foreground">
            ID: {treeId}
          </p>
        </div>
        
        <div className="flex gap-2 justify-center">
          <Button
            onClick={handleDownload}
            variant="outline"
            className="border-forest-primary text-forest-primary hover:bg-forest-primary hover:text-primary-foreground"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          
          <Button
            onClick={handleCopyUrl}
            className="bg-gradient-forest hover:shadow-nature transition-nature"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy URL
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground mt-4 p-3 bg-nature-lighter/50 rounded">
          Print this QR code and attach it near the tree for easy public access to information.
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;