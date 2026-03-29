import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// Layout
import SiteLayout from '@/components/layout/SiteLayout';

// Pages
import Home from '@/pages/Home';
import Ledger from '@/pages/Ledger';
import Credits from '@/pages/Credits';
import Community from '@/pages/Community';
import About from '@/pages/About';
import Grievance from '@/pages/Grievance';
import FAQ from '@/pages/FAQ';
import Careers from '@/pages/Careers';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-basalt">
        <div className="w-6 h-6 border-2 border-white/10 border-t-ochre rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/"          element={<Home />} />
        <Route path="/ledger"    element={<Ledger />} />
        <Route path="/credits"   element={<Credits />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about"     element={<About />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/faq"       element={<FAQ />} />
        <Route path="/careers"   element={<Careers />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;