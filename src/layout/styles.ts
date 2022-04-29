import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
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

    export const StyledTypography = styled(Typography)({});

    export const ContentWrapper = styled('div')({
        width: '888px',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: '92vh'
    });
}
