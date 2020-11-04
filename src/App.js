
import './App.css';
import AppHeader from './pages/header/header';
import AppHome from './pages/home/home';
import { Layout } from 'antd';
import AppFooter from './pages/footer/footer';


function App() {

const { Content } = Layout;
  return (
    <Layout>
    <AppHeader />
      <Content className="site-layout " style={{ padding: '0 50px', marginTop: '7%' }}>
        <AppHome />
        
      </Content>
      <AppFooter />
  </Layout>
  );
}

export default App;
