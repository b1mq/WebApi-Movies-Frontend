import { useEffect, useState } from 'react';
import { Table, Typography, message, Spin } from 'antd';
import type{ Film } from '../types/Film';
import {  FilmService} from '../api/services/apiService'; 

const { Title } = Typography;

export const FilmsPage = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await FilmService.getAllFilms();
        setFilms(data);
      } catch (error) {
        message.error('Failed to load films from the server');
      } finally {
        setLoading(false);
      }
    };
    
    fetchFilms();
  }, []);

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Author', dataIndex: 'author', key: 'author' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
  ];

  return (
    <div>
      <Title level={2} style={{ marginTop: 0 }}>Movies Catalog</Title>
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