import "./header.css";
import { Layout, Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import weatherLogo from "../../assets/img/weatherLogo.png"

export default function AppHeader(){
    
    const { Search } = Input;
    const { Header } = Layout;
    const history = useHistory();
    
    const onSearch = location => {
         history.push(`${location}`);
         
    };
    return (
        <>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        
            <Link to={`/`} >
                <img src={weatherLogo} alt="weather app" style={{width: "3%",cursor:"pointer"}}/>            
            </Link>
            {/* <div className="logo" /> */}
            <div className="weather-search-style">
                <Search
                placeholder="Search ..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                />
            </div>
        </Header>
        </>
    );
}