import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Image, Space, Typography } from "antd";
import { useEffect} from "react";
import { getComments,  getTotalPending } from "../API";

function AppHeader() {
  useEffect(() => {
    getComments().then((res) => {
      
    });
    getTotalPending().then((res) => {
      
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={60}
        src="ZPlogo.png"
      ></Image>
      <Typography.Title> PRM Dashboard</Typography.Title>
      <Space>
        <MailOutlined
            style={{ fontSize: 24 }}
           
          />
        <BellFilled
            style={{ fontSize: 24 }}
            
          />
        </Space>
      </div>
  );
}
export default AppHeader;
