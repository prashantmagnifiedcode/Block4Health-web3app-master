import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer'
import RegisterPatientScreen from './screens/RegisterPatientScreen'
import RegisterDoctorScreen from './screens/RegisterDoctorScreen'
import LoginPatientScreen from './screens/LoginPatientScreen'
import LoginDoctorScreen from './screens/LoginDoctorScreen'
import LoginAdminScreen from './screens/LoginAdminScreen'
import {useSelector} from 'react-redux';
import PatientNavbar from './components/PatientNavbar'
import PatientDashboardScreen from './screens/PatientDashboardScreen'
import DoctorNavbar from './components/DoctorNavbar'
import DoctorDashboardScreen from './screens/DoctorDashboardScreen'
import AdminNavbar from './components/AdminNavbar'
import AdminDashboardScreen from './screens/AdminDashboardScreen'
import PatientsList from './screens/PatientsList'
import DoctorsList from './screens/DoctorsList'
import DoctorsAccessList from './screens/DoctorsAccessList'
import PatientsAddViewEhr from './screens/PatientsAddViewEhr'
import AddEhrScreen from './screens/AddEhrScreen'
import PatientDocumentScreen from './screens/PatientDocumentScreen'
import PatientFullProfile from './screens/PatientFullProfile'

const App = () => {

  const patientState = useSelector(state => state.loginPatientReducer);
  const {currentPatient} = patientState;

  const doctorState = useSelector(state => state.loginDoctorReducer);
  const {currentDoctor} = doctorState;

  const adminState = useSelector(state => state.loginAdminReducer);
  const {currentAdmin} = adminState;

  return (
    <Router className="min-h-screen">
    
       {currentPatient ? (<>
         <PatientNavbar />
         <Routes>
          <Route exact path="/" element={<PatientDashboardScreen/>}/>
          <Route exact path="/access" element={<DoctorsAccessList/>}/>
          <Route exact path="/getpatientfullprofile" element={<PatientFullProfile/>}/>
       </Routes>
       </>) : (currentDoctor ? (<>
         <DoctorNavbar />
         <Routes>
          <Route exact path="/" element={<DoctorDashboardScreen/>}/>
          <Route exact path="/getdocument" element={<PatientDocumentScreen/>}/>
          <Route exact path="/getpatientfullprofile" element={<PatientFullProfile/>}/>
          <Route exact path="/addviewehr" element={<PatientsAddViewEhr/>}/>
          <Route exact path="/addehr" element={<AddEhrScreen/>}/>
         </Routes>
       </>) : (currentAdmin ? (<>
         <AdminNavbar />
         <Routes>
          <Route exact path="/" element={<AdminDashboardScreen/>}/>
          <Route exact path="/patients" element={<PatientsList/>}/>
          <Route exact path="/doctors" element={<DoctorsList/>}/>
         </Routes>
       </>) : (<>
         <Navbar />
       <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/register" element={<RegisterPatientScreen/>}/>
          <Route exact path='/register'>
             <Route exact path="registerpatient" element={<RegisterPatientScreen/>}/>
             <Route exact path="registerdoctor" element={<RegisterDoctorScreen/>}/>
          </Route>
          <Route exact path="/login" element={<LoginPatientScreen/>}/>
          <Route exact path='/login'>
             <Route exact path="loginpatient" element={<LoginPatientScreen/>}/>
             <Route exact path="logindoctor" element={<LoginDoctorScreen/>}/>
             <Route exact path="loginadmin" element={<LoginAdminScreen/>}/>
          </Route>
       </Routes>
       </>)))}
       <Footer />
    </Router>
  )
}

export default App
