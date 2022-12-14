import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BTCN_1 from "./pages/PersonalExercises/BTCN1/GomokuGame";
import BTCN_2 from "./pages/PersonalExercises/BTCN2/GomokuGame";
import BTCN_3 from "./pages/PersonalExercises/BTCN3";
import BTCN_4 from "./pages/PersonalExercises/BTCN4";
import BTCN_5 from "./pages/PersonalExercises/BTCN5";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
      {/* <h1>Hello</h1> */}
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/web-nang-cao-19-3" element={<Home />}/>
        <Route path="/web-nang-cao-19-3/btcn1" element={<BTCN_1 />}/>
        <Route path="/web-nang-cao-19-3/btcn2" element={<BTCN_2 />}/>
        <Route path="/web-nang-cao-19-3/btcn3" element={<BTCN_3 />}/>
        <Route path="/web-nang-cao-19-3/btcn4" element={<BTCN_4 />}/>
        <Route path="/web-nang-cao-19-3/btcn5" element={<BTCN_5 />}/>
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
