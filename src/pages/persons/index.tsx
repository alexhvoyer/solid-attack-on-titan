import { createResource, createSignal } from "solid-js";
import { CharacterListResponse } from "@/types/characters/dto";
import TextField from "@suid/material/TextField";
import { ResourceRenderer } from "@/components/resource";
import Typography from "@suid/material/Typography";
import { PersonsTable } from "./components/table";
import { S } from "./styles";

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
            <S.TitleWrapper>
                <Typography variant="h5" align="center">Persons</Typography>
            </S.TitleWrapper>

            <S.SearchWrapper>
                <Typography>Search: </Typography>
                <TextField
                    label="Name"
                    variant="standard"
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    value={search()}
                />
            </S.SearchWrapper>
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

