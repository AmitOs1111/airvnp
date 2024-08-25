import { HomePage } from './pages/home-page.jsx'
import { Explore } from './pages/explore.jsx'
import { StayDetails } from './pages/stay-details.jsx'
import { SummaryReserve } from './pages/summary-reserve .jsx'
import { FullGallery } from './pages/full-gallery.jsx'
// import { AboutUs } from './pages/about-us.jsx'
// import { StayApp } from './pages/stay-app.jsx'
// import { ReviewApp } from './pages/review-app.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'
// import { StayEdit } from './pages/stay-edit.jsx'
// import { UserDetails } from './pages/user-details.jsx'
import { LogInApp } from './pages/login.jsx'
import { SignUpApp } from './pages/signup.jsx'
import { DashBoard } from './pages/dashboard.jsx'
// import { BecomeHost } from './pages/become-host.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  // {
  //   path: 'stay/edit/:id',
  //   component: <StayEdit />,
  //   label: 'Edit',
  // },
  // {
  //   path: 'stay/edit',
  //   component: <StayEdit />,
  //   label: 'Edit',
  // },
  {
    path: 'home/stay/:id',
    component: <StayDetails />,
    label: 'Details',
  },
  {
    path: '/home/reserve/:id',
    component: <SummaryReserve />,
    label: 'SummaryReserve',
  },
  // {
  //   path: 'stay/explore/:name',
  //   component: <Explore />,
  //   label: 'Explore',
  // },
  // {
  //   path: 'stay/explore/type/:type',
  //   component: <Explore />,
  //   label: 'Explore',
  // },
  // {
  //   path: 'stay/explore/amenities/:amenities/room/:room',
  //   component: <Explore />,
  //   label: 'Explore',
  // },
  {
    path: '',
    component: <HomePage />,
    label: 'Home 🏠',
  },
  {
    path: 'home',
    component: <HomePage />,
    label: 'Home 🏠',
  },

  {
    path: 'home/explore',
    component: <Explore />,
    label: 'Explore',
  },
  {
    path: 'home/explore/:type',
    component: <Explore />,
    label: 'Explore',
  },
  {
    path: 'gallery/:id',
    component: <FullGallery />,
    label: 'FullGallery',
  },
  // {
  //   path: 'review',
  //   component: <ReviewApp />,
  //   label: 'Reviews',
  // },
  // {
  //   path: 'chat',
  //   component: <ChatApp />,
  //   label: 'Chat',
  // },
  // {
  //   path: 'about',
  //   component: <AboutUs />,
  //   label: 'About us',
  // },
  // {
  //   path: 'admin',
  //   component: <AdminApp />,
  //   label: 'Admin Only',
  // },
  {
    path: 'login',
    component: <LogInApp />,
    label: 'log in',
  },
  {
    path: 'signup',
    component: <SignUpApp />,
    label: 'sign up',
  },
  {
    path: 'dashboard',
    component: <DashBoard />,
    label: 'dashboard',
  },
  // {
  //   path: 'user-details/:id',
  //   component: <UserDetails />,
  //   label: 'user-details',
  // },
  // {
  //   path: 'become-host',
  //   component: <BecomeHost />,
  //   label: 'become-host',
  // },
]

export default routes
