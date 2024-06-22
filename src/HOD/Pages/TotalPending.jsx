import {Space, Table, Typography } from "antd";
import { useEffect,} from "react";
import { getTotalPending} from "../API";

function TotalPending() {
  useEffect(() => {
     // Fetch the total pending data
    getTotalPending().then((res) => {
      
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Pending</Typography.Title>
      <Table
        
        columns={[
        // put coloumn name here 
        ]}
        
      ></Table>
    </Space>
  );
}
export default TotalPending;
