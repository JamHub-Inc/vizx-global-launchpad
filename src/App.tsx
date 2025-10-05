import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecruitmentProcess from "./pages/RecruitmentProcess";
import RealEstateSolutions from "./pages/RealEstateSolutions";
import BackOffice from "./pages/BackOffice";
import CX from './pages/CXSolutions';
import MerchantServices from "./pages/MerchantSolutions";
import WhyKenya from "./pages/WhyKenya";
import VizxHI from "./pages/VizxHI";
import Technology from "./pages/Technology";
import Healthcare from "./pages/Healthcare";
import RealEstate from "./pages/RealEstate";
import Finance from "./pages/Finance";
import Travel from "./pages/Travel";
import Logistics from "./pages/Logistics";
import Retail from "./pages/Retail"
import Manufuctering from "./pages/Manufuctering";
import WelfareFund from "./pages/WelfareFund";
import ScrollToTopButton from "@/components/ScrollToTop";
import { ChatProvider } from "@/components/ChatContext";
import ChatButton from "@/components/chatButton";
import ChatbotWindow from "@/components/chatWindowComponent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vizx-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/rp" element={<RecruitmentProcess />} />
              <Route path="/real-estate" element={<RealEstateSolutions />} />
              <Route path="/back-office" element={<BackOffice />} />
              <Route path="/cx" element={<CX />} />
              <Route path="/merchant" element={< MerchantServices/>} />
              <Route path="/why-kenya" element={<WhyKenya />} />
              <Route path="/vizx-hi-ai" element={<VizxHI />} />
              <Route path="/healthcare" element={<Healthcare />} />
              <Route path="/real-estate-industry" element={<RealEstate />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/manufacturing" element={<Manufuctering />} />
              <Route path="/retail" element={<Retail />} />
              <Route path="/employee-welfare" element={<WelfareFund />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Chat components should be outside <Routes>, but inside <ChatProvider> */}
            <ChatButton />
            <ChatbotWindow />
          </ChatProvider>
        </BrowserRouter>
           <ScrollToTopButton/>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
