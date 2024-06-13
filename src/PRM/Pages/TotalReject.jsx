import { Space, Table, Typography } from "antd";
import { useEffect, } from "react";
import { getTotalReject, } from "../API";

function TotalReject() {
  // const [setLoading] = useState(false);
  

  useEffect(() => {
    // setLoading(true);
    getTotalReject().then((res) => {
      
      // setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Reject</Typography.Title>
      <Table
        columns={[
          ]}
        
      ></Table>
    </Space>
  );
}
export default TotalReject;
