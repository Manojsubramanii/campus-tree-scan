import Navigation from "@/components/Navigation";
import QRScanner from "@/components/QRScanner";

const Scanner = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <QRScanner />
    </div>
  );
};

export default Scanner;