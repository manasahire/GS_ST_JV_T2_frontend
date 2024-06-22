import {  Space, Table, Typography } from "antd";
import { useEffect} from "react";
import {getTotalPending } from "../API";

function TotalResolved() {
 
  

  useEffect(() => {
    
    getTotalPending().then((res) => {    // Assuming res is an array of data from your API
      
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
