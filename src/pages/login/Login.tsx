import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import style from "./Login.module.css";
import { Session } from "@supabase/supabase-js";

function Login() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className={style.card}>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google", "facebook", "github"]}
          theme="dark"
          localization={{
            variables: {
              sign_up: {
                email_label: "E-mail",
                password_label: "Crie uma Senha",
                email_input_placeholder: "exemplo@email.com",
                password_input_placeholder: "Sua senha",
                button_label: "Cadastrar",
                loading_button_label: "Cadastrando ...",
                social_provider_text: "Entrar com {{provider}}",
                link_text: "Não tem uma conta? Cadastrar agora",
                confirmation_text:
                  "Confirme seu email para terminar o cadastro",
              },
              sign_in: {
                email_label: "E-mail",
                email_input_placeholder: "exemplo@email.com",
                password_label: "Senha",
                password_input_placeholder: "Sua senha",
                button_label: "Entrar",
                loading_button_label: "Carregando...",
                social_provider_text: "Entrar com {{provider}}",
                link_text: "Entrar em uma conta existente",
              },
              forgotten_password: {
                email_label: "E-mail",
                email_input_placeholder: "Seu email cadastrado",
                button_label: "Resetar Senha",
                loading_button_label: "Enviando instruções ...",
                link_text: "Esqueceu a senha?",
                confirmation_text: "Confira seu email para resetar sua senha",
              },
            },
          }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div>Logou, patrão!</div>
        <button onClick={() => supabase.auth.signOut()}>Sign out</button>
      </div>
    );
  }
}

export default Login;
