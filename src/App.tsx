import {Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Aboutpage from "./pages/Aboutpage";
import Grievence from "./pages/Grievence";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Story from "./pages/Story";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";


const App = () => {
  
  return (

    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
         <Route path="/register" element={<Registration isRegister />} />
         <Route path="/login" element={<Registration />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<Story />} />
          <Route path="/about" element={<Aboutpage />} />
            <Route path="/grievence" element={<Grievence />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
    </ThemeProvider>
  );
}

export default App