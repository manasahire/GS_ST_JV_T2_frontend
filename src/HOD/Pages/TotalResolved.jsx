import {  Space, Table, Typography } from "antd";
import { useEffect,} from "react";
import { getTotalResolved } from "../API";

function TotalResolved() {
useEffect(() => {
   // Fetch the total Resolved data
    getTotalResolved().then((res) => {
      
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Resolved</Typography.Title>
      <Table
        columns={[
           // put coloumn name here 
         ]}
        
      ></Table>
    </Space>
  );
}
export default TotalResolved;
