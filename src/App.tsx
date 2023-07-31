import { Route } from "wouter";
import { useState } from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

const initialClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

function App() {
  const [supabase, setSupabase] = useState<SupabaseClient>(initialClient);

  function sessionHandler(supabase:SupabaseClient) {
    setSupabase(supabase);
  }
  
  return (
    <>
      <Route path="/" component={()=><Login sessionHandler={sessionHandler} supabase={initialClient}/>} />
      <Route path="/dashboard" component={()=><Dashboard supabase={supabase as SupabaseClient}/>} />
    </>
  )
}

export default App;