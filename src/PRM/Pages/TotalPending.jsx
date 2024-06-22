import {Space, Table, Typography } from "antd";
import { useEffect, useState,} from "react";
import { getTotalPending} from "../API";

function TotalPending() {
  const[loading,setLoading] = useState(false)
  const[dataSource,setDataSource]= useState([])
  useEffect(() => {
    setLoading(true)
    getTotalPending().then(res => {  // Assuming res is an array of data from your API
      setDataSource(res.products);
      setLoading(false)
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Pending</Typography.Title>
      <Table
        loading={loading}
        columns={[
        {
          title:"title",
          dataIndex:"title",
        },
        {
          title:"Price",
          dataIndex:"price",
        },
        {
          title:"Rating",
          dataIndex:"rating",
        }
         // put coloumn name here 
         
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize:7
        }}
      ></Table>
    </Space>
  );
}
export default TotalPending;
