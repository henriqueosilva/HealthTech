import { useAuth } from '../Context/AuthContext'

export default function HandleResponse(response) {
  const { logout } = useAuth()
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if(!response?.ok) {
      if([401, 403].indexOf(response.status) !== -1) {
        logout();
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  })
}