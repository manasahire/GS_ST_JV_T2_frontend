import { Routes,Route, } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import TotalPending from "../Pages/TotalPending";
import TotalResolved from "../Pages/TotalResolved";
import TotalReject from "../Pages/TotalReject";
import TotalForwarded from "../Pages/TotalForwaded";

import GrievanceForm from "../Pages/Greivance";
import ResolveGrievences from "../Pages/ReportPage/ResolveGrievences";
import AllGrievences from "../Pages/ReportPage/AllGrievences";
import SearchedDate from "../Pages/ReportPage/SearchedDate";
import SearchedTalukavillage from "../Pages/ReportPage/SearchedTalukavillage";
import SearchedGrievenceid from "../Pages/ReportPage/SearchedGrievenceid";



function AppRoutesprm() {
  return (
   
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/TotalPending" element={<TotalPending/>}></Route>
      <Route path="/TotalResolved" element={<TotalResolved/>}></Route>
      <Route path="/TotalReject" element={<TotalReject/>}></Route>
      <Route path="/TotalForwarded" element={<TotalForwarded/>}></Route>
      <Route path="/GreivanceForm" element={<GrievanceForm/>}></Route>
      <Route path="/AllGrievences" element={<AllGrievences/>}></Route>
      <Route path="/ResolveGrievences" element={<ResolveGrievences/>}></Route>
      <Route path="/SearchedDate" element={<SearchedDate/>}></Route>
      <Route path="/SearchedTalukavillage" element={<SearchedTalukavillage/>}></Route>
      <Route path="/SearchedGrievenceid" element={< SearchedGrievenceid/>}></Route>
    </Routes>
    
  );
}
export default AppRoutesprm;
