import "./header.css";
import { Layout, Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import weatherLogo from "../../assets/img/weatherLogo.png"
import { Row, Col } from 'antd';
export default function AppHeader(){
    
    const { Search } = Input;
    const { Header } = Layout;
    const history = useHistory();
    
    const onSearch = location => {
         history.push(`/${location}`);
         
    };
    return (
        <>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row>
                <Col xs={2} sm={2} md={3} lg={6} xl={8}>
                <Link to={`/`} >
                <img src={weatherLogo} alt="weather app" style={{width: "10%", maxWidth:"12%", minWidth: "3%",cursor:"pointer"}}/>            
            </Link>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div className="weather-search-style">
                <Search
                placeholder="Search ..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                />
            </div>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                
                </Col>
            </Row>
        
            
            {/* <div className="logo" /> */}
            
        </Header>
        </>
    );
}