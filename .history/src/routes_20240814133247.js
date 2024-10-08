import { HomePage } from './pages/home-page.jsx'
import { Explore } from './pages/explore.jsx'
// import { AboutUs } from './pages/about-us.jsx'
// import { StayApp } from './pages/stay-app.jsx'
// import { ReviewApp } from './pages/review-app.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'
// import { StayEdit } from './pages/stay-edit.jsx'
// import { StayDetails } from './pages/stay-details.jsx'
// import { UserDetails } from './pages/user-details.jsx'
// import { LogInApp } from './pages/login.jsx'
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
  // {
  //   path: 'stay/:id',
  //   component: <StayDetails />,
  //   label: 'Details',
  // },
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
    path: 'home/explore/:label',
    component: <Explore />,
    label: 'Explore',
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
  // {
  //   path: 'login/:login',
  //   component: <LogInApp />,
  //   label: 'log in',
  // },
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
