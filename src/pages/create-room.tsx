import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"; //Link é melhor pois não recarrega a página

type GetRoomsApiResponse = Array<{
    id: string;
    name: string;
}>

export function CreateRoom() {
    const { data, isLoading } = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/rooms');
            const result: GetRoomsApiResponse = await response.json();
            return result;
        }
    });
    return (
        <div>
            {/* Com o ternario ? tem que usar o else, caso o else não mostra nada usa o && */}
            {isLoading && <p>Loading...</p>}
            <div className="flex flex-col gap-2">
                {data?.map(room => {
                    return (
                        <Link key={room.id} to={`/room/${room.id}`}>
                            {room.name}
                        </Link>
                    )
                })}
            </div>

            <Link to="/room">Go to Room</Link>
        </div >
    )
}