import { Layout, Menu } from 'antd';
import { VideoCameraOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export const MainLayout = () => {
  const location = useLocation();
  const selectedKey = location.pathname.includes('/films') ? '2' : '1';

  return (
    <Layout style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Header 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: '#141414', 
          padding: '0 48px',
          borderBottom: '1px solid #333'
        }}
      >
        <div style={{ fontWeight: '900', fontSize: '24px', color: '#00d084', marginRight: '40px', letterSpacing: '1px' }}>
          MEGOGO<span style={{color: '#fff'}}></span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{ flex: 1, minWidth: 0, background: 'transparent', borderBottom: 'none' }}
          items={[
            { key: '1', icon: <HomeOutlined />, label: <Link to="/">Главная</Link> },
            { key: '2', icon: <VideoCameraOutlined />, label: <Link to="/films">Каталог</Link> },
          ]}
        />
      </Header>
      
      <Content style={{ padding: '40px 48px', maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <Outlet />
      </Content>
      
      <Footer style={{ textAlign: 'center', color: '#555', background: '#0a0a0a' }}>
        Yehor Tahirov.dev ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};