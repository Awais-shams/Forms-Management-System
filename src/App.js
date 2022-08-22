import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/dashboard/Dashboard';


// React Router V6
import { Routes,Route } from 'react-router-dom';

// HR-Form Components
import ResignationForm from './components/hr-forms/ResignationForm';
import EmployeeForm from './components/hr-forms/EmployeeForm';
import JobApplicationForm from './components/hr-forms/JobApplicationForm';
import MemoHooks from './components/hr-forms/MemoHooks';
import CustomHooks from './components/hr-forms/CustomHooks';
import UseRefHook from './components/hr-forms/UseRefHook';

const theme=createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#54BAB9',
    },
    secondary: {
      main: '#9ED2C6',
    },
    text: {
      primary: '#100F0F',
      secondary: '#0F3D3E',
    },
  },
  typography: {
    fontFamily: 'Rubik',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 2560,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
  
      <Dashboard/>
      <Routes>
        <Route path='resignationForm' element={<ResignationForm/>}/>
        <Route path='employeeForm' element={<EmployeeForm/>}/>
        <Route path='jobApplicationForm' element={<JobApplicationForm/>}/>
        <Route path='memoHooks' element={<MemoHooks/>}/>
        <Route path='customHooks' element={<CustomHooks/>}/>
        <Route path='useRefHooks' element={<UseRefHook/>}/>
      </Routes>
    </ThemeProvider>
   
  );
}

export default App;
