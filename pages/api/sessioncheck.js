import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('admin');

    if (!session) {
      const session = sessionStorage.getItem('user');
      if (!session) {
      router.push('/auth/signin');}
    }
    
  }, []);
  return null;
};