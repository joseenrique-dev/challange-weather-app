import { Layout, Menu, Input } from 'antd';
import "./header.css";
import getWeatherData from "../../services/weather.services";
import { useEffect, useState } from "react";

export default function AppHeader(){
    const [location, setLocation] = useState(null);
    // const [, setWeatherData] = useState({});
    const { Search } = Input;
    const { Header } = Layout;
    const onSearch = value => setLocation(value);

    useEffect(() => {
        debugger
        //const loadingIndicatorTimeout = setTimeout(() => setIsLoading(true), 500);
        const getWeather = async () => {
            const result = await getWeatherData(location);
            console.log('API result', result);
        };

        getWeather();
    }, [location]);
    return (
        <>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <div className="weather-search-style">
                <Search
                placeholder="Search ..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                />
            </div>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
        </Header>
        </>
    );
}