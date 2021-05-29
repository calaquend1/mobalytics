import React from 'react';

export type Table = {
    name: string;
}
export const Table = (props: Table) => {
    const {name} = props;
    return (<div>{name}</div>)
};
