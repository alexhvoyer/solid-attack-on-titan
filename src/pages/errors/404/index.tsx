import Button from "@suid/material/Button";
import { useNavigate } from "solid-app-router";
import { S } from "./styles"

const Error404 = () => {
    const navigate = useNavigate();
    return (
        <S.MainWrapper>
            <div>Oooops! There is no such page!</div>
            <Button onClick={[navigate, '/']}>Go to main page</Button>
        </S.MainWrapper>
    );
};

export default Error404;
