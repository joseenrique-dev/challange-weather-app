import { Button } from 'antd';
import { Result } from 'antd';
import { Redirect } from "react-router-dom";
export default function ErrorNotFound(){
    const goHome = () => <Redirect to={'/'} />;

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the city you are trying to find does not exist in our system, please check and try again, thank you !!!"
            extra={<Button onClick={goHome} type="primary">Back Home</Button>}
        />
    );
}