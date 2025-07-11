import { CreateRoomForm } from "./components/create-room-form";
import { RoomList } from "./components/room-list";

export function CreateRoom() {
    return (
        <div className="min-h-screen p-4 ">
            <div className="mx-auto max-w-4xl">
                <div className="flex w-full items-start gap-8">
                    <div />
                    <CreateRoomForm />
                    <RoomList />
                </div>
            </div>
        </div>

    );
}