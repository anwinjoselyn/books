import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (auth.user === false) {
      // router.push('/login');
      console.log('Unauthenticated user')
    }
  }, [auth, router]);

  return auth;
};

export default useRequireAuth;