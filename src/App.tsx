import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages";
import Ein from "./pages/ein";
import Fax from "./pages/ein/fax";
import Signature from "./pages/ein/fax/signature";
import Package from "./pages/package";
import MyCompanies from "./pages/company";
import TransactionHistory from "./pages/transactions";
import RefferalProgram from "./pages/refferal";
import StartBusiness from "./pages/form/start-business";
import CompanyInfo from "./pages/form/company-info";
import ContactPerson from "./pages/form/contact";
import CompanyPackage from "./pages/form/address/package";
import AddressForm from "./pages/form/address";
import Members from "./pages/form/members";
import NotFound from "./pages/notFound";
import RegisterAgent from "./pages/form/register-agent";
import OwnAgent from "./pages/form/agent/my-own";
import ProAgent from "./pages/form/agent/pro-agent";
import BusinessBank from "./pages/business-bank";
import OwnAgentRegister from "./pages/form/agent/my-own/register";
import Consultation from "./pages/business-bank/consultation";
import { useEffect } from "react";
import Checkout from "./pages/checkout";
import MemberData from "./pages/form/members/memberData";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    const tg = (window as any).Telegram.WebApp;

    tg.ready();
    console.log("Foydalanuvchi:", tg.initDataUnsafe?.user);
  }, []);

  return (
    <>
      <Router>
        <div className="flex flex-col justify-between min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package" element={<Package />} />
            <Route path="/ein" element={<Ein />} />
            <Route path="/ein/fax" element={<Fax />} />
            <Route path="/ein/fax/signature" element={<Signature />} />
            <Route path="/my-companies" element={<MyCompanies />} />
            <Route path="/transactions" element={<TransactionHistory />} />
            <Route path="/refferal" element={<RefferalProgram />} />
            <Route path="/form/start-business" element={<StartBusiness />} />
            <Route path="/form/company-info" element={<CompanyInfo />} />
            <Route path="/form/contact" element={<ContactPerson />} />
            <Route path="/form/package" element={<CompanyPackage />} />
            <Route path="/form/package/address" element={<AddressForm />} />
            <Route path="/form/members" element={<Members />} />
            <Route path="/form/members/members-data" element={<MemberData />} />
            <Route path="/form/register-agent" element={<RegisterAgent />} />
            <Route path="/form/my-own" element={<OwnAgent />} />
            <Route
              path="/form/my-own/register"
              element={<OwnAgentRegister />}
            />
            <Route path="/form/professional" element={<ProAgent />} />
            <Route path="/business-bank" element={<BusinessBank />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Not found */}
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to={"/not-found"} />} />
          </Routes>
          <LocationDisplay />
        </div>
      </Router>
    </>
  );
}

function LocationDisplay() {
  const location = useLocation();
  const isFormPath = location.pathname.includes("/form");
  const isCheckout = location.pathname.includes("/checkout");
  const isNotFound = location.pathname?.includes("/not-found");
  if (!(isFormPath || isNotFound || isCheckout)) {
    return (
      <span className="block w-max mx-auto text-[13px] text-[#090A0A] mb-2 mt-[23px]">
        @LLC Booster.LLC
      </span>
    );
  }
}

export default App;
