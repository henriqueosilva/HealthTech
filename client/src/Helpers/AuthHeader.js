import { useAuth } from '../Context/AuthContext'

export default function AuthHeader() {
  const { currentUserValue } = useAuth()

  if(currentUserValue && currentUserValue?.token) {
    return { Authorization: `Bearer ${currentUserValue.token}`}
  }
  return {}
}