import { Routes, Route, BrowserRouter } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { CreateRoom } from "./create-room"
import { Room } from "./pages/room"
import { RecordRoomAudio } from "./pages/record-room-audio"

const queryClient = new QueryClient()

export function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId" />
          <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}


