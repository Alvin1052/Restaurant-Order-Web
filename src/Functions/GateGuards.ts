import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuthGuard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (
      token === null ||
      token === undefined ||
      token === 'undefined' ||
      token === '' ||
      !token
    )
      navigate('/login', { replace: true });
  }, [navigate]);
}
