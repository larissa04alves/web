export type GetRoomsResponse = Array<{
    roomId: string;
    roomName: string;
    questionsCount: number;
    createdAt: Date;
}>;
