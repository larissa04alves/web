import { Navigate, useParams } from "react-router-dom"

type RoomParams = {
    id: string
}

export function Room() {
    const params = useParams<RoomParams>()

    if (params.id) {
        // This will be the room ID from the URL
        return <Navigate replace to="/" /> // Redirect to home if room ID is present
    }

    return <div>Room Details</div>
}