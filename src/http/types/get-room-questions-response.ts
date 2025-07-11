export type GetRoomQuestionsResponse = Array<{
    id: string;
    roomId: string;
    question: string;
    answer: string | null;
    createdAt: string;
}>;
