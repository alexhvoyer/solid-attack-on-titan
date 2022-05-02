import Toolbar from "@suid/material/Toolbar";
import styled from "@suid/system/styled";

export namespace S {
    export const MainWrapper = styled('div')({
        display: 'grid',
    });

    export const StyledToolbar = styled(Toolbar)({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr repeat(3, 6em)',
        gap: '1em',
    });

    export const ContentWrapper = styled('article')({
        width: '888px',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: '92vh'
    });

    export const StyledImg = styled('img')({
        maxHeight: '50px',
        maxWidth: '100%'
    });
}
