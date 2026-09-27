import { useEffect, useState, useCallback } from 'react';
import { Typography, message, Spin, Button, Row, Col, Card } from 'antd';
import { PlayCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { Film } from '../types/Film';
import { FilmService } from '../api/services/apiService'; 

const { Title, Text } = Typography;

export const FilmsPage = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchFilms = useCallback(async () => {
    try {
      setLoading(true);
      const data = await FilmService.getAllFilms();
      setFilms(data);
    } catch (error) {
      message.error('Failed to load films from the server');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <Title level={2} style={{ margin: 0, color: '#fff' }}>Фильмы</Title>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          size="large"
          style={{ borderRadius: '8px' }}
          onClick={() => navigate('/films/add')}
        >
          Добавить фильм
        </Button>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[24, 32]}>
          {films.map((film) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={film.id}>
              <Card
                hoverable
                style={{ background: '#1f1f1f', borderColor: '#333', overflow: 'hidden' }}
                bodyStyle={{ padding: '16px' }}
                cover={
                  <div style={{ 
                    height: '280px', 
                    background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#555'
                  }}>
                    <PlayCircleOutlined style={{ fontSize: '48px' }} />
                  </div>
                }
              >
                <Title level={5} style={{ color: '#fff', margin: '0 0 8px 0' }} ellipsis={{ tooltip: film.title }}>
                  {film.title}
                </Title>
                <Text style={{ color: '#888', display: 'block', marginBottom: '4px' }}>
                  {film.year} • {film.author}
                </Text>
                <Text style={{ color: '#aaa', fontSize: '12px' }} ellipsis={{ tooltip: film.description }}>
                  {film.description}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};