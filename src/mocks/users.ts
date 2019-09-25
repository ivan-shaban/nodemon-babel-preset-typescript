export type User = {
    readonly id: string
    readonly username: string
}

export const response: { [id: string]: User } = {
    '1': {
        id: '1',
        username: 'Robin Wieruch',
    },
    '2': {
        id: '2',
        username: 'Dave Davids',
    },
};
