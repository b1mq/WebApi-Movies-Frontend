// src/components/MainLayout.tsx
import { Layout, Menu, theme } from 'antd';
import { VideoCameraOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  // Получаем текущий путь, чтобы меню подсвечивало нужную вкладку
  const location = useLocation();
  const selectedKey = location.pathname.includes('/films') ? '2' : '1';

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', background: '#fff', padding: '0 48px' }}>
        <div style={{ fontWeight: '900', fontSize: '22px', color: '#fa8c16', marginRight: '40px', letterSpacing: '1px' }}>
          PIRAT.tv
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{ flex: 1, minWidth: 0, borderBottom: 'none' }}
          items={[
            { key: '1', icon: <HomeOutlined />, label: <Link to="/">Главная</Link> },
            { key: '2', icon: <VideoCameraOutlined />, label: <Link to="/films">Каталог</Link> },
          ]}
        />
      </Header>
      
      <Content style={{ padding: '32px 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: '70vh',
            padding: 32,
            borderRadius: borderRadiusLG,
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)'
          }}
        >
          {/* Outlet работает как "окно", куда React Router будет вставлять контент текущей страницы */}
          <Outlet />
        </div>
      </Content>
      
      <Footer style={{ textAlign: 'center', color: '#8c8c8c' }}>
        Yehor Tahirov.dev ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};