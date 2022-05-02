import { createResource, Index } from "solid-js";
import { useParams } from "solid-app-router";
import { ResourceRenderer } from "@/components/resource";
import { fieldsConfig, fieldNameConfig } from "@/constants/domain";
import { Character } from "@/types/characters/entity";
import { S } from "./styles";

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
                <S.StyledSection>
                    <Index each={fieldsConfig}>
                        {(item, index) => person && (
                            <S.FieldWrapper>
                                <S.StyledFieldName>{fieldNameConfig[index]}: </S.StyledFieldName>
                                <span>{person[item()] || '-'}</span>
                            </S.FieldWrapper>
                        )}
                    </Index>
                </S.StyledSection>
            )}
        />
    )
};

export default Person;
