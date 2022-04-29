import { ResourceRenderer } from "@/components/resource";
import { Character } from "@/types/characters/entity";
import { useParams } from "solid-app-router";
import { createResource } from "solid-js";

const fetchPerson = async (id: string): Promise<Character> => {
    const url = `/api/v1/characters/${id}`;
    const result = await fetch(url);
    return result.json();
};

const Person = () => {
    const params = useParams();
    const [person] = createResource(params.id, fetchPerson);

    return (
        <ResourceRenderer
            data={person}
            dataRenderer={(person) => (
                <div>{person?.first_name}</div>
            )}
        />
    )
};

export default Person;
