import { children, Component, For } from "solid-js";
import AppBar from "@suid/material/AppBar";
import Button from "@suid/material/Button";

import { S } from "./styles";
import { Link } from "solid-app-router";

const buttonsConfig = [
    {
        name: 'Persons',
        link: '/persons'
    },
    {
        name: 'Titans',
        link: '/titans',
    },
    {
        name: 'Arts',
        link: '/arts'
    }
];

const Layout: Component = (props) => {
    const c = children(() => props.children);
    return (
        <S.MainWrapper>
            <AppBar position="static">
                <S.StyledToolbar>
                    <Link href="/">
                        <S.StyledImg src="/src/assets/logo.png" />
                    </Link>
                    <div />
                    <For each={buttonsConfig}>
                        {(item) => (
                            <Link href={item.link}>
                                <Button variant="text">
                                    {item.name}
                                </Button>
                            </Link>
                        )}
                    </For>

                </S.StyledToolbar>
            </AppBar>
            <S.ContentWrapper>
                {c()}
            </S.ContentWrapper>
        </S.MainWrapper>
    );
};

export default Layout;
