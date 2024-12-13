import { QueryClientProvider, QueryClient } from "react-query";
import Router from "./Router";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}