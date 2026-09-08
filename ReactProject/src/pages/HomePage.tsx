import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const HomePage = () => {
  return (
    <div>
      <Title level={2} style={{ marginTop: 0 }}>Welcome</Title>
      <Paragraph>The main dashboard will be located here.</Paragraph>
    </div>
  );
};