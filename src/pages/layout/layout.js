
import { Layout } from 'antd';
import AppHeader from '../header/header';
import AppFooter from '../footer/footer';

const LayoutWithRoute = ({children}) =>{
    const { Content } = Layout;

    return (
        <>
        <Layout>
            <AppHeader />
            <Content className="site-layout " style={{ padding: '0 50px', marginTop: '7%' }}>
                {children}
            </Content>
            <AppFooter />
          </Layout>
            
        </>
    );
}

export default LayoutWithRoute;