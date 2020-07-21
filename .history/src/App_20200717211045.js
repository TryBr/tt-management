import React from 'react';
import './App.css';

import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout>
          <Sider width={200} className="">
            
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
