import React, { useEffect } from 'react'
import { Space, Table, Typography } from 'antd';
import { getTotalForwarded } from '../API';

const TotalForwarded = () => {
  useEffect(() => {
    // setLoading(true);
    getTotalForwarded().then((res) => {
      
      // setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Forwared </Typography.Title>
      <Table
        columns={[
          ]}
        
      ></Table>
    </Space>
  );
}

export default TotalForwarded;