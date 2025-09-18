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
import { ChatProvider } from "@/components/chatContext";
import ChatButton from "@/components/chatButton";
import ChatbotWindow from "@/components/chatWindowComponent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vizx-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="rp" element={<RecruitmentProcess />} />
              <Route path="real-estate" element={<RealEstateSolutions />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Chat components should be outside <Routes>, but inside <ChatProvider> */}
            <ChatButton />
            <ChatbotWindow />
          </ChatProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
