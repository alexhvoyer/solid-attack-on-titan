import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import styled from "@suid/system/styled";

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
