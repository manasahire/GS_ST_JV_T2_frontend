import {  Space, Table, Typography } from "antd";
import { useEffect,} from "react";
import {getTotalPending } from "../API";

function TotalResolved() {
  // const [setLoading] = useState(false);
  

  useEffect(() => {
    // setLoading(true);
    getTotalPending().then((res) => {
      // setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Resolved</Typography.Title>
      <Table
        columns={[
         ]}
        
      ></Table>
    </Space>
  );
}
export default TotalResolved;
