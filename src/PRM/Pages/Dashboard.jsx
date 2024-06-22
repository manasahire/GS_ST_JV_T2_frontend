import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleFilled,
  FileTextOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic,Typography } from "antd";
import { useEffect } from "react";
import { getTotalPending } from "../API";
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="page-container">
    <div className="Dashboard">
    <Space size={20} direction="vertical" style={{ width: "100%" }}>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Dashboard
      </Typography.Title>

      <Space direction="horizontal" wrap style={{ justifyContent: "center" }}>
        <DashboardCard
          icon={
            <ClockCircleOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/TotalPending">Total Pending</a>}
          value={15}
        />
        <DashboardCard
          icon={
            <CheckCircleOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/TotalResolved">Total Resolved</a>}
          value={5}
        />
        <DashboardCard
          icon={
            <SendOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/TotalForwarded">Total Forwarded</a>}
          value={5}
        />
        <DashboardCard
          icon={
            <CloseCircleFilled
              style={{
                color: "red",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/TotalReject">Total Reject</a>}
          value={0}
        />


       </Space>
       </Space>
       </div>

       <div className="Report">
      <Space size={20} direction="vertical" style={{ width: "100%" }}>

      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Reports
      </Typography.Title>
      <Space direction="horizontal" wrap style={{ justifyContent: "center" }}>
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "Orange",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/AllGrievences">All Grievences</a>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/ResolveGrievences">Resolve Grievences</a>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/SearchedDate">Searched by Date</a>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/SearchedTalukavillage">Searched by Taluka & village</a>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<a href="/SearchedGrievenceid">Searched by Greivence Id</a>}
          value={10}
        />
      </Space>

      <RecentGrievences/>
    </Space>
    </div>
    </div>
    
  );
  
}
  

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentGrievences() {
  useEffect(() => {
    getTotalPending().then((res) => {
      // Handle response
    });
  }, []);

  return (
    <>
      {/* <Typography.Text>Recent Grievances</Typography.Text> */}
      {/* <Table columns={[]} /> */}
    </>
  );
}

export default Dashboard;












































// import {
//   CheckCircleOutlined,
//   ClockCircleOutlined,
//   CloseCircleFilled,
//   SendOutlined,
 
  
// } from "@ant-design/icons";
// import { Card, Space, Statistic, Table, Typography } from "antd";
// import { useEffect } from "react";
// import { getTotalPending } from "../API";


// function Dashboard() {
//  return (
//     <Space size={20} direction="vertical">
//        <Typography.Title level={4} style={{ textAlign: "center" }}>
//         Dashboard
//       </Typography.Title>
      
//       <Space direction="horizontal">
//         <DashboardCard
//           icon={
//             <ClockCircleOutlined
//               style={{
//                 color: "orange",
//                 backgroundColor: "rgba(0,255,0,0.25)",
//                 borderRadius: 20,
//                 fontSize: 24,
//                 padding: 8,
//               }}
//             />
//           }
//           title={"Total Pending"}
//           value={15}
//         />
//         <DashboardCard
//           icon={
//             <CheckCircleOutlined
//               style={{
//                 color: "green",
//                 backgroundColor: "rgba(0,255,0,0.25)",
//                 borderRadius: 20,
//                 fontSize: 24,
//                 padding: 8,
//               }}
//             />
//           }
//           title={"Total Resolved"}
//           value={5}
//         />
//         <DashboardCard
//           icon={
//             <SendOutlined
//               style={{
//                 color: "Orange",
//                 backgroundColor: "rgba(0,255,0,0.25)",
//                 borderRadius: 20,
//                 fontSize: 24,
//                 padding: 8,
//               }}
//             />
//           }
//           title={"Total Forwarded"}
//           value={5}
//         />
//         <DashboardCard
//           icon={
//             <CloseCircleFilled
//               style={{
//                 color: "Red",
//                 backgroundColor: "rgba(0,255,0,0.25)",
//                 borderRadius: 20,
//                 fontSize: 24,
//                 padding: 8,
//               }}
//             />
//           }
//           title={"Total Reject"}
//           value={0}
//         />
// </Space>
      
//         <RecentGrievences />
//         </Space>
//   );
// }

// function DashboardCard({ title, value, icon }) {
//   return (
//     <Card>
//       <Space direction="horizontal">
//         {icon}
//         <Statistic title={title} value={value} />
//       </Space>
//     </Card>
//   );
// }
// function RecentGrievences() {
//   useEffect(() => {
//     // setLoading(true);
//     getTotalPending().then((res) => {
//     // setLoading(false);
//     });
//   }, []);

//   return (
//     <>
//       <Typography.Text> Recent Greviences </Typography.Text>
//       <Table
//         columns={[
          

//         ]}
        
//       ></Table>
//     </>
//   );
// }
// export default Dashboard;
