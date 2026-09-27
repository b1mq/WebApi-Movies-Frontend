import { Typography, Button } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #141414 0%, rgba(20,20,20,0) 100%), url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop") center/cover',
        borderRadius: '16px',
        padding: '60px',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Title style={{ color: '#fff', fontSize: '48px', margin: 0 }}>
          Смотри кино<br />без границ
        </Title>
        <Paragraph style={{ color: '#aaa', fontSize: '18px', maxWidth: '500px', marginTop: '16px' }}>
          Тысячи фильмов, сериалов и мультфильмов в отличном качестве. Добавляйте свои любимые ленты в каталог.
        </Paragraph>
        <Button 
          type="primary" 
          size="large" 
          icon={<PlayCircleFilled />}
          style={{ width: 'fit-content', marginTop: '20px', height: '48px', padding: '0 32px', fontSize: '16px', borderRadius: '24px' }}
          onClick={() => navigate('/films')}
        >
          Смотреть каталог
        </Button>
      </div>
    </div>
  );
};