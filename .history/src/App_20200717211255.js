import React from 'react';
import './App.css';

import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout>
          <Sider width={200} className="left-sidebar">
            
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className=""
              style={{
                padding: 24,
                margin: 0
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
