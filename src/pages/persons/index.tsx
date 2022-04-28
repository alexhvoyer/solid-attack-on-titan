import { createEffect, createResource, For, Match, Switch } from "solid-js";
import { CharacterListResponse } from "@/types/characters/dto";

const fetchAll = async () => {
    return (await fetch('/api/v1/characters')).json();
}

const Persons = () => {
    const [data] = createResource<CharacterListResponse>(fetchAll);
    createEffect(() => {
        console.log(data.loading, data.error, data());
    })
    return (
        <div>
            <div>Persons</div>

            <Switch fallback={<div>Error</div>}>
                <Match when={data.loading}>
                    <div>loading</div>
                </Match>
                <Match when={data()}>
                    <For each={data()}>
                        {(item) => (
                            <div>{item.first_name}</div>
                        )}
                    </For>
                </Match>
            </Switch>
        </div>
    )
};

export default Persons;

