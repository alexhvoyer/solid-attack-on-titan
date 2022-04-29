import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import styled from "@suid/system/styled";

export namespace S {
    export const MainWrapper = styled('div')({
        display: 'grid',
    });

    export const StyledToolbar = styled(Toolbar)({
        display: 'grid',
        gridTemplateAreas: '"label . button1 button2"',
        gridTemplateColumns: 'auto 1fr 8em 8em',
        gap: '1em',
    });

    export const StyledTypography = styled(Typography)({
        gridArea: 'label'
    });

    export const ContentWrapper = styled('div')({
        width: '888px',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: '92vh'
    });
}
