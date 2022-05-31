import { createEffect, createResource, createSignal, ErrorBoundary, Index, Show, startTransition, Suspense } from "solid-js";
import { useNavigate, useParams } from "solid-app-router";
import Button from "@suid/material/Button";
import { fieldsConfig, fieldNameConfig } from "@/constants/domain";
import { Character } from "@/types/characters/entity";
import { Loader } from "@/components/loader";
import { S } from "./styles";
import ErrorMain from "../errors/main";

const fetchPerson = async (id: string): Promise<Character> => {
    const url = `/api/characters/${id}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    return res.json();
};

const Person = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [id, setId] = createSignal(params.id);
    const [person] = createResource(id, fetchPerson);

    createEffect(() => {
        startTransition(() => setId(params.id));
    });

    const handleGoNext = () => navigate(`/persons/${Number(params.id) + 1}`);
    const handleGoPrev = () => navigate(`/persons/${Number(params.id) - 1}`);

    return (
        <ErrorBoundary fallback={<ErrorMain />}>
            <Suspense fallback={<Loader />}>
                <S.StyledSection>
                    <Index each={fieldsConfig}>
                        {(item, index) => (
                            <S.FieldWrapper>
                                <S.StyledFieldName>{fieldNameConfig[index]}: </S.StyledFieldName>
                                <span>{person()?.[item()] || '-'}</span>
                            </S.FieldWrapper>
                        )}
                    </Index>
                    <Show when={person()?.titan}>
                        <div>
                            {person()?.titan?.name}
                        </div>
                    </Show>
                    <S.ButtonsWrapper>
                        <Button onClick={handleGoPrev} disabled={params.id === '1'}>Previous character</Button>
                        <Button onClick={handleGoNext}>Next character</Button>
                    </S.ButtonsWrapper>
                </S.StyledSection>
            </Suspense>
        </ErrorBoundary>
    )
};

export default Person;
