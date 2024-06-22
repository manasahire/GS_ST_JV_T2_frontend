import { Space, Table, Typography } from "antd";
import { useEffect, } from "react";
import { getTotalReject, } from "../API";

function TotalReject() {
  useEffect(() => {
     // Fetch the total reject data
    getTotalReject().then((res) => {
      
      
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Reject</Typography.Title>
      <Table
        columns={[
           // put coloumn name here 
          ]}
        
      ></Table>
    </Space>
  );
}
export default TotalReject;
