import {
  AppstoreFilled,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SendOutlined
 
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreFilled />,
            key: "/",
          },
          {
            label: "Total Pending",
            key: "/Totalpending",
            icon: <ClockCircleOutlined
            style={{
              color: "orange",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 15,
              fontSize: 14,
              padding: 8,
            }}
          />,
          },
          {
            label: "Total Resolved",
            key: "/TotalResolved",
            icon: <CheckCircleOutlined
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 15,
              fontSize: 14,
              padding: 8,
            }}
          />,
          },
          {
            label: "Total Forwarded",
            key: "/TotalForwarded",
            icon: <SendOutlined
            style={{
              color: "Orange",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 15,
              fontSize: 14,
              padding: 8,
            }}
          /> 
          },
          {
            label: "Total Reject",
            key: "/TotalReject",
            icon:
              <CloseCircleOutlined
                style={{
                  color: "Red",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 15,
                  fontSize: 14,
                  padding: 8,
                }}
              />
          },
          {
            label: "Greivance Form",
            key: "/Grivance",
            icon:
              <CloseCircleOutlined
                style={{
                  color: "Red",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 15,
                  fontSize: 14,
                  padding: 8,
                }}
              />
          },
          {
            label: "logout ",
            key: "/home",
            icon:
              <CloseCircleOutlined
                style={{
                  color: "Red",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 15,
                  fontSize: 14,
                  padding: 8,
                }}
              />
          },
          {
            label: "signup ",
            key: "/signup",
            icon:
              <CloseCircleOutlined
                style={{
                  color: "pink",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 15,
                  fontSize: 14,
                  padding: 8,
                }}
              />
          },
         
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
