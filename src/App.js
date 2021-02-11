import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Phones from './Phones';
import CreatePhone from './CreatePhone';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CreatePhone />
      <Phones />
    </QueryClientProvider>
  );
}

export default App;
