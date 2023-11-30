import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const authTokenKey = 'authToken';
    const token = localStorage.getItem(authTokenKey);
    console.log('Token before logout:', token);

    localStorage.removeItem(authTokenKey);

    window.location.reload();

  };


  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
