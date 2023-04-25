import { React, useState } from 'react';
import {  Button, Layout, Menu, theme  } from 'antd';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PicCenterOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react'

const { Header, Sider, Content } = Layout;

const General = (props) => {
  const  { logout } = useAuth0();

  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Profile',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Services',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Map',
              },
            ]}
          />
        </Sider>
        <Layout>
          
          <Header
            Content style={{
              padding: 0,
              background: colorBgContainer,
              position: PicCenterOutlined,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 60,
                height:64,
              }}
            />
            <Button
              type="text"
              icon= {<LogoutOutlined />}
              onClick={()=>logout()}
              style={{
                fontSize: '16px',
                width: 60,
                height:64,
              }}
            />
          </Header>
          
          <Content
            style={{
              margin: '32px',
              height: '163px',
              padding: 10,
              minHeight: 160,
              background: colorBgContainer,
            }}
          >
             {props.children}
          </Content>
        </Layout>
      </Layout>
      
    );
};
export default General;

