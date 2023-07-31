import { SupabaseClient } from '@supabase/supabase-js';
import { useLocation } from 'wouter';

export default function Dashboard(props:{supabase:SupabaseClient}) {
  const [, setLocation] = useLocation();

  if(!props.supabase) {
    setLocation('/');
  }

  async function logoutHandler() {
    const logout = await props.supabase.auth.signOut();
    logout && setLocation('/');
  }

  return (
    <>
      <div>Logou na dashboard!</div>
      <button onClick={logoutHandler}>Sign out</button>
    </>
  );
}