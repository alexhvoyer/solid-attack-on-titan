import CircularProgress from "@suid/material/CircularProgress";
import { JSX, Match, Resource, Switch } from "solid-js";
import { S } from "./styled";

type Props<T> = {
    data: Resource<T>;
    dataRenderer: (data: T) => JSX.Element;
}

export const ResourceRenderer = <T,>(props: Props<T>) => {
    return (
        <Switch fallback={<div>Error</div>}>
            <Match when={props.data.loading}>
                <S.LoaderWrapper>
                    <CircularProgress />
                </S.LoaderWrapper>
            </Match>
            <Match when={props.data()}>
                {props.dataRenderer(props.data())}
            </Match>
        </Switch>
    );
};
