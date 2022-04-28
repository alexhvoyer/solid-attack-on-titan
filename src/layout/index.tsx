import { children, Component, For } from "solid-js";
import AppBar from "@suid/material/AppBar";
import Button from "@suid/material/Button";

import { ContentWrapper, MainWrapper, StyledToolbar, StyledTypography } from "./styles";
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
        <MainWrapper>
            <AppBar position="static">
                <StyledToolbar>
                    <Link href="/">
                        <StyledTypography variant="h6">
                            Attack on Titan
                        </StyledTypography>
                    </Link>
                    <For each={buttonsConfig}>
                        {(item) => (
                            <Link href={item.link}>
                                <Button variant="text">
                                    {item.name}
                                </Button>
                            </Link>
                        )}
                    </For>

                </StyledToolbar>
            </AppBar>
            <ContentWrapper>
                {c()}
            </ContentWrapper>
        </MainWrapper>
    );
};

export default Layout;
