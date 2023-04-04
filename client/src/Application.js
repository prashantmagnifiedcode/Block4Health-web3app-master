import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginAdminPage from "./pages/LoginAdminPage";
import PortalAdminHomePage from "./pages/PortalAdminHomePage";
import PortalDoctorHomeCreateEHRPage from "./pages/PortalDoctorHomeCreateEHRPage";
import PortalDoctorHomeViewEHRPage from "./pages/PortalDoctorHomeViewEHRPage";
import LoginDoctorPage from "./pages/LoginDoctorPage";
import RegisterDoctorPage from "./pages/RegisterDoctorPage";
import PortalPatientHomeGrantAccessPa from "./pages/PortalPatientHomeGrantAccessPa";
import PortalPatientHomeViewEHRPage from "./pages/PortalPatientHomeViewEHRPage";
import LoginPatientPage from "./pages/LoginPatientPage";
import RegisterPatientPage from "./pages/RegisterPatientPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/loginadminpage":
        title = "";
        metaDescription = "";
        break;
      case "/portaladminhomepage":
        title = "";
        metaDescription = "";
        break;
      case "/portaldoctorhomecreateehrpage":
        title = "";
        metaDescription = "";
        break;
      case "/portaldoctorhomeviewehrpage":
        title = "";
        metaDescription = "";
        break;
      case "/logindoctorpage":
        title = "";
        metaDescription = "";
        break;
      case "/registerdoctorpage":
        title = "";
        metaDescription = "";
        break;
      case "/portalpatienthomegrantaccesspage":
        title = "";
        metaDescription = "";
        break;
      case "/portalpatienthomeviewehrpage":
        title = "";
        metaDescription = "";
        break;
      case "/loginpatientpage":
        title = "";
        metaDescription = "";
        break;
      case "/registerpatientpage":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/loginadminpage" element={<LoginAdminPage />} />

      <Route path="/portaladminhomepage" element={<PortalAdminHomePage />} />

      <Route
        path="/portaldoctorhomecreateehrpage"
        element={<PortalDoctorHomeCreateEHRPage />}
      />

      <Route
        path="/portaldoctorhomeviewehrpage"
        element={<PortalDoctorHomeViewEHRPage />}
      />

      <Route path="/logindoctorpage" element={<LoginDoctorPage />} />

      <Route path="/registerdoctorpage" element={<RegisterDoctorPage />} />

      <Route
        path="/portalpatienthomegrantaccesspage"
        element={<PortalPatientHomeGrantAccessPa />}
      />

      <Route
        path="/portalpatienthomeviewehrpage"
        element={<PortalPatientHomeViewEHRPage />}
      />

      <Route path="/loginpatientpage" element={<LoginPatientPage />} />

      <Route path="/registerpatientpage" element={<RegisterPatientPage />} />

    </Routes>
  );
}
export default App;
