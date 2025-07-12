import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateQuestionRequest } from "./types/create-question-request";
import type { CreateQuestionResponse } from "./types/create-question-response";
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response";

export function useCreateQuestions(roomId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreateQuestionRequest) => {
            const response = await fetch(`http://localhost:3000/rooms/${roomId}/questions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: CreateQuestionResponse = await response.json();
            return result;
        },
        onMutate({ question }) {
            //Executa no momento em que a chamada for feita para a API
            const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
                "get-questions",
                roomId,
            ]);

            const questionsArray = questions ?? [];

            const newQuestion = {
                id: crypto.randomUUID(),
                roomId,
                question,
                answer: null,
                createdAt: new Date().toISOString(),
            };
            queryClient.setQueryData<GetRoomQuestionsResponse>(
                ["get-questions", roomId],
                [newQuestion, ...questionsArray]
            );
            return { newQuestion, questions };
        },
        onSuccess(data, _variables, context) {
            queryClient.setQueryData<GetRoomQuestionsResponse>(
                ["get-questions", roomId],
                (questions) => {
                    if (!questions) {
                        return questions;
                    }

                    if (!context.newQuestion) {
                        return questions;
                    }

                    return questions.map((question) => {
                        if (question.id === context.newQuestion.id) {
                            return {
                                ...context.newQuestion,
                                id: data.questionId,
                                answer: data.answer,
                            };
                        }
                        return question;
                    });
                }
            );
        },

        onError: (_error, _variables, context) => {
            if (context?.questions) {
                queryClient.setQueryData<GetRoomQuestionsResponse>(
                    ["get-questions", roomId],
                    context.questions
                );
            }
        },
        // onSuccess: () => {
        //     queryClient.invalidateQueries({
        //         queryKey: ["get-questions", roomId],
        //     });
        // },
    });
}
