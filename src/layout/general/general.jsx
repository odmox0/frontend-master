import { React, useState } from 'react';
import {  Button, Layout, Menu, theme  } from 'antd';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PicCenterOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const General = (props) => {
    const navigate = useNavigate();
    const  { logout } = useAuth0();

    const { Header, Sider, Content } = Layout;

    const [collapsed, setCollapsed] = useState(false);
      const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    const toggle = (item) => {
      console.log(item.key);
      switch (item.key) {
        case '1':
          console.log('Map');
          navigate('/');
          break;
        case '2':
          console.log('Profile');
          navigate('/profile');
          break;
        case '3':
          console.log('Services');
          break;
        
      }
    }
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              
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
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onSelect={toggle }
            items={[
              {
                key: '1',
                icon: <UploadOutlined />,
                label: 'Map',
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: 'Profile',
              },
              {
                key: '3',
                icon: <VideoCameraOutlined />,
                label: 'Services',
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

