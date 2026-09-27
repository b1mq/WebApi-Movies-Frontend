import { useState } from 'react';
import { Form, Input, InputNumber, Button, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FilmService } from '../api/services/apiService';

const { Title } = Typography;

export const AddFilmPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: { title: string; description: string; year: number; author: string }) => {
    try {
      setLoading(true);
      await FilmService.createFilm(values);
      message.success('Фильм успешно добавлен');
      navigate('/films');
    } catch (error) {
      message.error('Не удалось добавить фильм');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: 500, 
      margin: '40px auto', 
      background: '#141414', 
      padding: '40px', 
      borderRadius: '16px',
      border: '1px solid #333'
    }}>
      <Title level={2} style={{ marginTop: 0, color: '#fff', textAlign: 'center', marginBottom: '32px' }}>
        Добавить фильм
      </Title>
      <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
        <Form.Item label={<span style={{ color: '#aaa' }}>Название</span>} name="title" rules={[{ required: true, message: 'Введите название' }]}>
          <Input size="large" style={{ background: '#1f1f1f', border: '1px solid #333', color: '#fff' }} placeholder="Например: Дюна" />
        </Form.Item>
        
        <Form.Item label={<span style={{ color: '#aaa' }}>Описание</span>} name="description" rules={[{ required: true, message: 'Введите описание' }]}>
          <Input.TextArea rows={4} style={{ background: '#1f1f1f', border: '1px solid #333', color: '#fff' }} placeholder="Сюжет фильма..." />
        </Form.Item>
        
        <Form.Item label={<span style={{ color: '#aaa' }}>Год выпуска</span>} name="year" rules={[{ required: true, message: 'Введите год' }]}>
          <InputNumber size="large" style={{ width: '100%', background: '#1f1f1f', border: '1px solid #333', color: '#fff' }} placeholder="2024" />
        </Form.Item>
        
        <Form.Item label={<span style={{ color: '#aaa' }}>Режиссер / Автор</span>} name="author" rules={[{ required: true, message: 'Введите автора' }]}>
          <Input size="large" style={{ background: '#1f1f1f', border: '1px solid #333', color: '#fff' }} placeholder="Дени Вильнёв" />
        </Form.Item>
        
        <Form.Item style={{ marginTop: '32px', marginBottom: 0 }}>
          <Button type="primary" htmlType="submit" loading={loading} block size="large" style={{ borderRadius: '8px' }}>
            Сохранить фильм
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};