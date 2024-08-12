import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Logout } from '@mui/icons-material'
import { logout } from '../store/user.action'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

import { NavBarHeader } from '../cmp/nav-bar-header.jsx'
import { SearchHeader } from '../cmp/search-header.jsx'

export function AppHeader() {
  return <section className="main-header"></section>
}
