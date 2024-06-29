import { Routes,Route, } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import GrievanceTable from "../Pages/TotalPendingprm";
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
      <Route path="/" Component={Dashboard }></Route>
      <Route path="/TotalPendingprm" Component={GrievanceTable}></Route>
      <Route path="/TotalResolvedprm" Component={TotalResolved}></Route>
      <Route path="/TotalRejectprm" Component={TotalReject}></Route>
      <Route path="/TotalForwardedprm" Component={TotalForwarded}></Route>
      <Route path="/GreivanceFormprm" Component={GrievanceForm}></Route>
      <Route path="/AllGrievencesprm" Component={AllGrievences}></Route>
      <Route path="/ResolveGrievencesprm" Component={ResolveGrievences}></Route>
      <Route path="/SearchedDateprm" Component={SearchedDate}></Route>
      <Route path="/SearchedTalukavillageprm" Component={SearchedTalukavillage}></Route>
      <Route path="/SearchedGrievenceidprm" Component={ SearchedGrievenceid}></Route>
    </Routes>
    
  );
}
export default AppRoutesprm;
