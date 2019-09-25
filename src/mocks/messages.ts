export type Message = {
    readonly id: string
    readonly text: string
    readonly userId?: string
}

export const response: { [id: string]: Message } = {
    '1': {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    '2': {
        id: '2',
        text: 'By World',
        userId: '2',
    },
};
