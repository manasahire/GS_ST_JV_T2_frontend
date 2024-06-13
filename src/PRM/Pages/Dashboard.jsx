import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleFilled,
  SendOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic,Typography } from "antd";
import { useEffect } from "react";
import { getTotalPending } from "../API";

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Dashboard
      </Typography.Title>

      <Space direction="horizontal">
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
          title={"Total Pending"}
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
          title={"Total Resolved"}
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
          title={"Total Forwarded"}
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
          title={"Total Reject"}
          value={0}
        />
       </Space>

      <RecentGrievences />
    </Space>
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
      <Typography.Text>Recent Grievances</Typography.Text>
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
