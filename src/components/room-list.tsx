import { ArrowRight } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { dayjs } from "@/lib/dayjs";
import { useRooms } from "@/http/use-rooms";


export function RoomList() {
    const { data, isLoading } = useRooms();
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent rooms</CardTitle>
                <CardDescription>
                    <p>Fast access to your recent rooms.</p>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-x-36">
                {isLoading && <p>Carregando Salas...</p>}
                {data?.map((room) => {
                    return (
                        <Link className="flex items-center justify-between rounded-lg p-3 hover:bg-accent/50"
                            key={room.roomId}
                            to={`/room/${room.roomId}`}>
                            <div className="flex flex-1 flex-col gap-1">
                                <h3 className="font-medium">{room.roomName}</h3>
                                <div className="flex items-center gap-2">
                                    <Badge className="text-xs" variant="secondary">{dayjs(room.createdAt).toNow()}</Badge>

                                    <Badge className="text-xs" variant="secondary">{room.questionsCount} question(s)</Badge>
                                </div>
                            </div>

                            <span className="flex items-center gap-1 text-sm">
                                Sign in <ArrowRight />
                            </span>

                        </Link>
                    );
                })}
            </CardContent>
        </Card>
    )
}