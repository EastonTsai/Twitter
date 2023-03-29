import { createContext, useState, useEffect } from "react"
import * as jwt from "jsonwebtoken"
import { useLocation } from "react-router-dom"

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
}

export const AuthContext = createContext(defaultAuthContext)

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [payload, setPayload] = useState(null)
  const { pathName } = useLocation()

  useEffect(() => {
    const checkTokenIsValid = () => {}
  }, [pathName])
}
