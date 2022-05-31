import Button from "@suid/material/Button";
import { useNavigate } from "solid-app-router";
import { S } from "../styles"

const ErrorMain = () => {
    const navigate = useNavigate();
    return (
        <S.MainWrapper>
            <div>Oooops! An error occured!</div>
            <Button onClick={[navigate, '/']}>Go to main page</Button>
        </S.MainWrapper>
    );
};

export default ErrorMain;
