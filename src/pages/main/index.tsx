import Typography from "@suid/material/Typography";
import { Component } from "solid-js";
import { S } from "./styles";

const MainPage: Component = () => {
    return (
        <div>
            <S.TitleWrapper>
                <Typography variant="h3" align="center">Welcome to Attack on Titan Library!</Typography>
            </S.TitleWrapper>
            <picture>
                <S.StyledImg src="/src/assets/art.jpg" alt="Attack on Titan Art" />
            </picture>
        </div>
    );
};

export default MainPage;
