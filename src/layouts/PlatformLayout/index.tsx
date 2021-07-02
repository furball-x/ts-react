import React, { FC, useState, useCallback } from 'react'
import { Switch, Route } from 'react-router-dom'
import AudioLoop from '@/features/annotate/AudioLoop'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider, Content } = Layout

const PlatformLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = useCallback(() => setCollapsed(!collapsed), [collapsed])

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <span onClick={toggle}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 2000,
          }}
        >
          <Switch>
            <Route path="/platform/test" component={AudioLoop} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default PlatformLayout
