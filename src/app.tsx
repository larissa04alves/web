import { Routes, Route, BrowserRouter } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { CreateRoom } from "./create-room"
import { Room } from "./pages/room"

const queryClient = new QueryClient()

export function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId" />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}


