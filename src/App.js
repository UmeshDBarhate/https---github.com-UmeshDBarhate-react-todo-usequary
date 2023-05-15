import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from './component/Home';



function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Home/>
      <ReactQueryDevtools  initialIsOpen/>
    </QueryClientProvider>
    
    </div>
  );
}

export default App;
