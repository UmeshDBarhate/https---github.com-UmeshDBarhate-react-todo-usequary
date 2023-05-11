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
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Post from './component/Post';


function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route  exact path="/" element={<Home/>}/>
          <Route path="/:id" element={<Post/>}/>

        
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools  />
    </QueryClientProvider>
    
    </div>
  );
}

export default App;
