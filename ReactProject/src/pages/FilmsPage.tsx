import { useEffect, useState, useCallback } from 'react';
import { Table, Typography, message, Spin, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import type{ Film } from '../types/Film';
import { FilmService } from '../api/services/apiService'; 

const { Title } = Typography;

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

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Author', dataIndex: 'author', key: 'author' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Title level={2} style={{ margin: 0 }}>Movies Catalog</Title>
        <Button type="primary" onClick={() => navigate('/films/add')}>
          Add Film
        </Button>
      </div>
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table 
          dataSource={films} 
          columns={columns} 
          rowKey="id" 
          pagination={{ pageSize: 10 }}
        />
      )}
    </div>
  );
};