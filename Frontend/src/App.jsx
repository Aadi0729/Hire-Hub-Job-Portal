import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'

// New Page Imports
import JobCategoriesPage from './pages/JobCategoriesPage';
import CareerAdvicePage from './pages/CareerAdvicePage';
import FAQsPage from './pages/FAQsPage';

import CareerPlanning from './pages/CareerPlanning';
import ResumeWriting from './pages/ResumeWriting';
import JobInterviewTips from './pages/JobInterviewTips';
import Networking from './pages/Networking';
import WorkLifeBalance from './pages/WorkLifeBalance';
import CalltoAction from './pages/CallToAction';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },

  // New routes for the pages
  {
    path: '/categories',
    element: <JobCategoriesPage />,
  },

  // For carrer advice
  {
    path: '/career-advice',
    element: <CareerAdvicePage />,
  },
  {
    path: '/career-advice/career-planning',
    element: <CareerPlanning />
  },
  {
    path: '/career-advice/resume-writing',
    element: <ResumeWriting />
  },
  {
    path: '/career-advice/job-interview-tips',
    element: <JobInterviewTips />
  },
  {
    path: '/career-advice/networking',
    element: <Networking />
  },
  {
    path: '/career-advice/Work-Life Balance',
    element: <WorkLifeBalance />
  },
  {
    path: '/career-advice/CalltoAction',
    element: <CalltoAction />
  },
  {
    path: '/about',
    element: <AboutUs />
  },

  {
    path: '/faqs',
    element: <FAQsPage />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  
  // admin ke liye yha se start hoga
  {
    path:"/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App