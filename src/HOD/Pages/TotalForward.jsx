import React, { useEffect } from 'react'
import { getTotalForward } from '../API';
import { Space, Table, Typography } from 'antd';

const TotalForward = () => {
  useEffect(() => {
     // Fetch the total forwarded data
    getTotalForward().then((res) => {    // Assuming res is an array of data from your API
      
      
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Accepted</Typography.Title>
      <Table
        columns={[
           // put coloumn name here 
          ]}
        
      ></Table>
    </Space>
  );
}

export default TotalForward