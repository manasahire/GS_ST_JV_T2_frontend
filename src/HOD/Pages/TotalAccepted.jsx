import React, { useEffect } from 'react'
import { Space, Table, Typography } from 'antd';
import { getTotalAccept } from '../API';

function TotalAccept()  {
  useEffect(() => {
     // Fetch the total accepted data
    getTotalAccept().then((res) => {
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

export default TotalAccept;