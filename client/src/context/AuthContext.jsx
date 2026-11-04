// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from 'react'

// const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user')

//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     }
//   }, [])

//   const logout = () => {
//     localStorage.removeItem('user')
//     setUser(null)
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)

// new 

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import api from '../services/api'

const AuthContext =
  createContext()

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] =
    useState(null)

  useEffect(() => {
    const storedUser =
      localStorage.getItem(
        'user'
      )

    if (storedUser) {
      setUser(
        JSON.parse(storedUser)
      )
    }
  }, [])

  // LOGIN FUNCTION
  const login = async (
    email,
    password
  ) => {
    try {
      const { data } =
        await api.post(
          '/auth/login',
          {
            email,
            password,
          }
        )

      localStorage.setItem(
        'user',
        JSON.stringify(data)
      )

      setUser(data)

      return {
        success: true,
      }
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data
            ?.message ||
          'Login failed',
      }
    }
  }

  // REGISTER FUNCTION
  const register =
    async (formData) => {
      try {
        const { data } =
          await api.post(
            '/auth/register',
            formData
          )

        localStorage.setItem(
          'user',
          JSON.stringify(data)
        )

        setUser(data)

        return {
          success: true,
        }
      } catch (error) {
        return {
          success: false,
          message:
            error.response?.data
              ?.message ||
            'Register failed',
        }
      }
    }

  // LOGOUT
  const logout = () => {
    localStorage.removeItem(
      'user'
    )

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>
  useContext(AuthContext)