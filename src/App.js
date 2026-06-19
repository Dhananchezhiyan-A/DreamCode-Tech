import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/home/Hero';
import ServicesOverview from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import SalesforceEcosystem from './components/home/SalesforceEcosystem';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AboutSection from './about/Aboutsection';
import PartnersPage from './Partner/Partner';
import CareersPage from './careers/Careerspage';
import ResourcesPage from './resources/ResourcesPage';
import CaseStudies from './pages/CaseStudies';
import Servicepages from './components/Services/Servicepages';
import Customsoftwarepage from './components/Services/Customsoftwarepage';
import Mobileappdevelopment from './components/Services/Mobileappdevelopment';
import UIUXpage from './components/Services/UIUXpage';
import CloudServices from './components/Services/CloudServices';
import Applicationsupportpage from './components/Services/Applicationsupportpage';
import Dedicatedteamspage from './components/Services/Dedicatedteamspage';
import Salescloudpage from './components/Services/Salescloudpage';
import Servicecloudpage from './components/Services/Servicecloudpage';
import Marketingcloudpage from './components/Services/Marketingcloudpage';
import Platformintegrationpage from './components/Services/Platformintegrationpage';
import Analyticsaipage from './components/Services/Analyticsaipage';
import Supportmaintenancepage from './components/Services/Supportmaintenancepage';
import ContactUs from './pages/Contact';

// New service pages
import SalesforceServices from './components/Services/SalesforceServices';
import ZohoServices from './components/Services/ZohoServices';
import IntegrationServices from './components/Services/IntegrationServices';
import MaintenanceServices from './components/Services/MaintenanceServices';
import AnalyticsServices from './components/Services/AnalyticsServices';
import InfrastructureServices from './components/Services/InfrastructureServices';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <SalesforceEcosystem />
          </>
        } />
        <Route path="/about"            element={<AboutSection />} />
        <Route path="/services"         element={<Servicepages />} />

        {/* Existing Service Sub-Pages */}
        <Route path="/services/custom-software"      element={<Customsoftwarepage />} />
        <Route path="/services/mobile-app"           element={<Mobileappdevelopment />} />
        <Route path="/services/ui-ux"              element={<UIUXpage />} />
        <Route path="/services/cloud"              element={<CloudServices />} />
        <Route path="/services/app-support"          element={<Applicationsupportpage />} />
        <Route path="/services/dedicated-teams"      element={<Dedicatedteamspage />} />
        <Route path="/services/sales-cloud"          element={<Salescloudpage />} />
        <Route path="/services/service-cloud"        element={<Servicecloudpage />} />
        <Route path="/services/marketing-cloud"      element={<Marketingcloudpage />} />
        <Route path="/services/platform-integration" element={<Platformintegrationpage />} />
        <Route path="/services/analytics-ai"         element={<Analyticsaipage />} />
        <Route path="/services/support-maintenance"  element={<Supportmaintenancepage />} />

        {/* New Service Pages */}
        <Route path="/services/salesforce"      element={<SalesforceServices />} />
        <Route path="/services/zoho"            element={<ZohoServices />} />
        <Route path="/services/integrations"    element={<IntegrationServices />} />
        <Route path="/services/maintenance"     element={<MaintenanceServices />} />
        <Route path="/services/analytics"       element={<AnalyticsServices />} />
        <Route path="/services/infrastructure"  element={<InfrastructureServices />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/partner"          element={<PartnersPage />} />
        <Route path="/partner/:section" element={<PartnersPage />} />
        <Route path="/resources"        element={<ResourcesPage />} />
        <Route path="/resources/:section" element={<ResourcesPage />} />
        <Route path="/career"           element={<CareersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;