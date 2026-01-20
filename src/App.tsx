import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Founder from "./pages/Founder";
import Committee from "./pages/Committee";
import Membership from "./pages/Membership";
import MembershipNew from "./pages/MembershipNew";
import LifetimeMembershipForm from "./pages/LifetimeMembershipForm";
import PatronMembershipForm from "./pages/PatronMembershipForm";
import GeneralMembershipForm from "./pages/GeneralMembershipForm";
import VolunteerMembershipForm from "./pages/VolunteerMembershipForm";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/join" element={<Membership />} />
          <Route path="/membership" element={<MembershipNew />} />
          <Route path="/membership/lifetime" element={<LifetimeMembershipForm />} />
          <Route path="/membership/patron" element={<PatronMembershipForm />} />
          <Route path="/membership/general" element={<GeneralMembershipForm />} />
          <Route path="/membership/volunteer" element={<VolunteerMembershipForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
