import { createResource, createSignal, Match, Switch } from "solid-js";
import { CharacterListResponse } from "@/types/characters/dto";
import TextField from "@suid/material/TextField";
import { PersonsTable } from "./components/table";

const fetchAll = async (search: string): Promise<CharacterListResponse> => {
    const url = '/api/v1/characters';
    const query = new URLSearchParams({
        query: search
    });
    const result = await fetch(`${url}?` + query);
    return result.json();
}

const Persons = () => {
    const [search, setSearch] = createSignal('');
    const [data] = createResource(search, fetchAll);

    return (
        <div>
            <div>Persons</div>
            <TextField
                label="Name"
                variant="standard"
                onChange={(e) => setSearch(e.currentTarget.value)}
                value={search()}
            />
            <Switch fallback={<div>Error</div>}>
                <Match when={data.loading}>
                    <div>loading</div>
                </Match>
                <Match when={data()}>
                    <PersonsTable characters={data()} />
                    {/* <For each={data()}>
                        {(item) => (
                            <div>{item.first_name}</div>
                        )}
                    </For> */}
                </Match>
            </Switch>
        </div>
    )
};

export default Persons;

