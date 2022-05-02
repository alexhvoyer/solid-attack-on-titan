import CircularProgress from "@suid/material/CircularProgress";
import { S } from "./styles";

export const Loader = () => (
    <S.LoaderWrapper>
        <CircularProgress />
    </S.LoaderWrapper>
);
