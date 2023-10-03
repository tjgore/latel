import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import progress from "./utils/progress";
// import "nprogress/nprogress.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import Rental from "./pages/Rental";
import NotFound from "./pages/Notfound";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: import.meta.env.MODE === 'production',
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/">
        <div className="min-h-screen font-sans overflow-hidden text-gray-700">
          <Nav />
          <main className="max-w-6xl m-auto py-10 px-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/rentals/:id" element={<Rental />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
