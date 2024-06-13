import {Space, Table, Typography } from "antd";
import { useEffect,} from "react";
import { getTotalForwarded} from "../API";

function TotalPending() {
  // const [setLoading] = useState(false);
  

  useEffect(() => {
    // setLoading(true);
    getTotalForwarded().then((res) => {
      // setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Pending</Typography.Title>
      <Table
        
        columns={[
        //  Dataaaaaa
        ]}
        
      ></Table>
    </Space>
  );
}
export default TotalPending;
