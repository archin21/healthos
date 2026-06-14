import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import LandingPage from "@/pages/landing";
import DashboardPage from "@/pages/dashboard";
import ReportPage from "@/pages/report";
import TrendsPage from "@/pages/trends";
import MentalHealthPage from "@/pages/mental-health";
import MedicinesPage from "@/pages/medicines";
import ProfilePage from "@/pages/profile";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/report/:id" component={ReportPage} />
      <Route path="/trends" component={TrendsPage} />
      <Route path="/mental-health" component={MentalHealthPage} />
      <Route path="/medicines" component={MedicinesPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
