import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Session, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import icon from "../../assets/icon2.png";
import style from "./Login.module.css";

function Login(props: {
  sessionHandler: (supabase: SupabaseClient) => void;
  supabase: SupabaseClient;
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    props.supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = props.supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  props.sessionHandler(props.supabase);

  if (!session) {
    return (
      <div className={style.card}>
        <div className={style["logo-container"]}>
          <img className={style.icon} src={icon} />
          <h1>Habilite+</h1>
        </div>
        <Auth
          supabaseClient={props.supabase}
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
    setLocation("/dashboard/");
  }
}

export default Login;
