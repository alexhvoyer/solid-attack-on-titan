import { createEffect, createResource, createSignal, Index, Show, startTransition } from "solid-js";
import { useNavigate, useParams } from "solid-app-router";
import Button from "@suid/material/Button";
import { fieldsConfig, fieldNameConfig } from "@/constants/domain";
import { Character } from "@/types/characters/entity";
import { Loader } from "@/components/loader";
import { S } from "./styles";

const fetchPerson = async (id: string): Promise<Character> => {
    const url = `/api/characters/${id}`;
    return (await fetch(url)).json();
};

const Person = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [id, setId] = createSignal(params.id);
    const [person] = createResource(id, fetchPerson);

    createEffect(() => {
        startTransition(() => setId(params.id));
    });

    createEffect(() => {
        if (person()?.error) {
            navigate('/404');
        }
    });

    const handleGoNext = () => navigate(`/persons/${Number(params.id) + 1}`);
    const handleGoPrev = () => navigate(`/persons/${Number(params.id) - 1}`);

    return (
        <Show when={person()} fallback={<Loader />}>
            <S.StyledSection>
                <Index each={fieldsConfig}>
                    {(item, index) => (
                        <S.FieldWrapper>
                            <S.StyledFieldName>{fieldNameConfig[index]}: </S.StyledFieldName>
                            <span>{person()?.[item()] || '-'}</span>
                        </S.FieldWrapper>
                    )}
                </Index>
                <S.ButtonsWrapper>
                    <Button onClick={handleGoPrev} disabled={params.id === '1'}>Previous character</Button>
                    <Button onClick={handleGoNext}>Next character</Button>
                </S.ButtonsWrapper>
            </S.StyledSection>
        </Show>
    )
};

export default Person;
