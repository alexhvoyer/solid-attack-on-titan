import { Character } from "@/types/characters/entity";
import Table from "@suid/material/Table";
import TableBody from "@suid/material/TableBody";
import TableCell from "@suid/material/TableCell";
import TableHead from "@suid/material/TableHead";
import TableRow from "@suid/material/TableRow";
import { useNavigate } from "solid-app-router";
import { Component, For, Index } from "solid-js";

const headConfig = [
    'Id',
    'First name',
    'Last name',
    'Species',
    'Age',
    'Height',
    'Residence',
    'Status',
    'Alias'
];

const rowConfig = [
    'id',
    'first_name',
    'last_name',
    'species',
    'age',
    'height',
    'residence',
    'status',
    'alias'
] as const;

type Props = {
    characters?: Character[];
};

export const PersonsTable: Component<Props> = (props) => {
    const navigate = useNavigate();
    return (
        <Table stickyHeader>
            <TableHead>
                <Index each={headConfig}>
                    {(item) => (
                        <TableCell>{item()}</TableCell>
                    )}
                </Index>
            </TableHead>
            <TableBody>
                <For each={props.characters}>
                    {(character) => (
                        <TableRow
                            sx={{ cursor: 'pointer' }}
                            hover
                            onClick={() => navigate(String(character.id))}
                        >
                            <Index each={rowConfig}>
                                {(item) => (
                                    <TableCell>
                                        {character[item()] || '-'}
                                    </TableCell>
                                )}
                            </Index>
                        </TableRow>
                    )}
                </For>
            </TableBody>
        </Table>
    );
};
