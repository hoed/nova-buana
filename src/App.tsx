import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OutboundTour from "./pages/OutboundTour";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import PrivateTour from "./pages/PrivateTour";
import ConsortiumTours from "./pages/ConsortiumTours";
import TravelDocuments from "./pages/TravelDocuments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/outbound-tour" element={<OutboundTour />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/private-tour" element={<PrivateTour />} />
          <Route path="/consortium-tours" element={<ConsortiumTours />} />
          <Route path="/travel-documents" element={<TravelDocuments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
