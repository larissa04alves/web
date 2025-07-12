import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCreateRoom } from "@/http/use-create-room";


const createRoomSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    description: z.string(),
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
    const { mutateAsync: createRoom } = useCreateRoom();

    const createRoomForm = useForm<CreateRoomFormData>({
        resolver: zodResolver(createRoomSchema),
    })

    async function handleCreateRoom({ name, description }: CreateRoomFormData) {
        await createRoom({ name, description })
        await createRoomForm.reset();
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Create a new room</CardTitle>
                <CardDescription>
                    <p>Create a new room to start asking questions and receive answers from IA</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...createRoomForm}>
                    <form className="flex flex-col gap-4" onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}>
                        <FormField control={createRoomForm.control} name="name" render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Room Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Insert a romm name..." />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }} />
                        <FormField control={createRoomForm.control} name="description" render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }} />
                        <Button className="w-full" type="submit">
                            Create Room
                        </Button>

                    </form>
                </Form>

            </CardContent>
        </Card>
    );
}
