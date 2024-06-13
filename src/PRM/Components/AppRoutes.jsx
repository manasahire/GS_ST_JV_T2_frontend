import { Routes,Route, } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import TotalPending from "../Pages/TotalPending";
import TotalResolved from "../Pages/TotalResolved";
import TotalReject from "../Pages/TotalReject";
import TotalForwarded from "../Pages/TotalForwaded";
import ContactUs from "../Pages/Contactus";
import GrievanceForm from "../Pages/Greivance";


function AppRoutes() {
  return (
   
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/TotalPending" element={<TotalPending/>}></Route>
      <Route path="/TotalResolved" element={<TotalResolved/>}></Route>
      <Route path="/TotalReject" element={<TotalReject/>}></Route>
      <Route path="/TotalForwarded " element={<TotalForwarded/>}></Route>
      <Route path="/GrievanceForm" element={<GrievanceForm/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>

    </Routes>
    
  );
}
export default AppRoutes;
