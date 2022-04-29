import { createResource, createSignal } from "solid-js";
import { CharacterListResponse } from "@/types/characters/dto";
import TextField from "@suid/material/TextField";
import { PersonsTable } from "./components/table";
import { ResourceRenderer } from "@/components/resource";

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
            <ResourceRenderer
                data={data}
                dataRenderer={(data) => (
                    <PersonsTable characters={data} />
                )}
            />
        </div>
    )
};

export default Persons;

