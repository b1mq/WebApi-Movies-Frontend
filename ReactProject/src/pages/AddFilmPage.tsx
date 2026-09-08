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
      message.success('Film successfully added');
      navigate('/films');
    } catch (error) {
      message.error('Failed to add film');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <Title level={2} style={{ marginTop: 0 }}>Add New Film</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the title' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input the description' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Year" name="year" rules={[{ required: true, message: 'Please input the year' }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Author" name="author" rules={[{ required: true, message: 'Please input the author' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Film
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};