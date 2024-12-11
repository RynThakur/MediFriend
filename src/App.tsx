// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Navbar from './components/Navbar';
// import Landing from './components/Landing';
// import VitalsHome from './components/VitalsHome';
// import VitalsForm from './components/VitalsForm';
// import HealthHistory from './components/HealthHistory';
// import CovidCheck from './components/CovidCheck';
// import GlobalStats from './components/GlobalStats';
// import CountriesGrid from './components/CountriesGrid';
// import CountryDetails from './components/CountryDetails';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
//           <Navbar />
//           <main className="container mx-auto px-4 py-8">
//             <Routes>
//               <Route path="/" element={<Landing />} />
//               <Route path="/vitals" element={<VitalsHome />} />
//               <Route path="/vitals/check" element={<VitalsForm />} />
//               <Route path="/vitals/history" element={<HealthHistory />} />
//               <Route path="/vitals/covid" element={<CovidCheck />} />
//               <Route path="/global" element={<GlobalStats />} />
//               <Route path="/global/countries" element={<CountriesGrid />} />
//               <Route path="/global/country/:countryId" element={<CountryDetails />} />
//             </Routes>
//           </main>
//         </div>
//       </BrowserRouter>
//     </QueryClientProvider>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/navigation/Navbar';
import CountriesGrid from './components/CountriesGrid';
import CountryDetails from './components/CountryDetails';
import Landing from './components/Landing';
import VitalsHome from './components/VitalsHome';
import VitalsForm from './components/VitalsForm';
import HealthHistory from './components/HealthHistory';
import CovidCheck from './components/CovidCheck';
import GlobalStats from './components/GlobalStats';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/vitals" element={<VitalsHome />} />
              <Route path="/vitals/check" element={<VitalsForm />} />
              <Route path="/vitals/history" element={<HealthHistory />} />
              <Route path="/vitals/covid" element={<CovidCheck />} />
              <Route path="/global" element={<GlobalStats />} />
              <Route path="/global/countries" element={<CountriesGrid />} />
              <Route path="/country/:countryId" element={<CountryDetails />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;