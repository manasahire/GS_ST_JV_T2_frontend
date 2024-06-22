import React, { Component } from 'react';
import { Space, Table, Typography } from 'antd';
import { getTotalForwarded } from '../API';

class TotalForwarded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define any state properties here if needed, e.g. data and loading
      // loading: true,
      // data: [],
    };
  }

  componentDidMount() {
    // Fetch the total forwarded data 
    getTotalForwarded().then((res) => {   // Assuming res is an array of data from your API
     
    });
  }

  render() {
   
    const columns = [
    //  add coloumn name here
    ];

    return (
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Total Forwarded</Typography.Title>
        <Table
          columns={columns}
          
        />
      </Space>
    );
  }
}

export default TotalForwarded;
