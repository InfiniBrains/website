'use client';
import MetamaskSignIn from '@/components/web3/metamask';
import { useRouter } from 'next/navigation';
import { message, notification, NotificationArgsProps } from "antd";
import React from "react";
import {NotificationProvider} from "@/app/NotificationContext";
import { LocalSignInDto } from "@/dtos/auth/local-sign-in.dto";


function Home() {
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  
  const [emailOrUsername, setEmailOrUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const openNotification = (description:string, message:string="info", placement: NotificationArgsProps['placement'] = 'topRight') => {
    notification.info({
      message,
      description: description,
      placement,
    });
  };
  
  const handleLogin = async (e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    console.log('emailOrUsername', emailOrUsername);
    e?.preventDefault();
    
    let body: LocalSignInDto;
    if (emailOrUsername.includes('@')) {
      body = { email: emailOrUsername, password };
    } else {
      body = { username: emailOrUsername, password };
    }
    const baseAddress = process.env.NEXT_PUBLIC_API_ADDRESS;
    const response = await fetch(`${baseAddress}/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body) ,
    });
    message.info('Login successful');
  }

  const handleLoginGoogle = async () => {
    openNotification('You just found a WiP feature. Help us finish by coding it for us, or you can pay us a beer or more.');
    async function signInWithGoogle() {}

    try {
      await signInWithGoogle();
      // router.push('/dashboard'); // Redirecionar após o login
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  const handleLoginGitHub = async () => {
    openNotification('You just found a WiP feature. Help us finish by coding it for us, or you can pay us a beer or more.');
    async function signInWithGitHub() {}

    try {
      await signInWithGitHub();

      // await router.push('/dashboard'); // Redirecionar após o login
    } catch (error) {
      console.error('Error logging in with GitHub:', error);
    }
  };

  return (
    <main>
      <NotificationProvider>
        <div className="flex h-screen justify-center items-center">
        <div className="max-w-md w-full p-6 bg-white border rounded-lg shadow">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="emailOrUsername" className="block text-sm font-medium">
                Email or Username
              </label>
              <input
                type="text"
                id="emailOrUsername"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
              onClick={handleLogin}
            >
              Log in
            </button>
          </form>
          {/*<div className="mt-4">*/}
          {/*  <button*/}
          {/*    onClick={handleLoginGoogle}*/}
          {/*    className="w-full bg-red-500 text-white p-2 rounded-md"*/}
          {/*  >*/}
          {/*    Log in with Google*/}
          {/*  </button>*/}
          {/*  <button*/}
          {/*    onClick={handleLoginGitHub}*/}
          {/*    className="w-full bg-gray-800 text-white p-2 rounded-md mt-2"*/}
          {/*  >*/}
          {/*    Log in with GitHub*/}
          {/*  </button>*/}
          {/*</div>*/}
          {/*<div className="mt-4">*/}
          {/*  <MetamaskSignIn />*/}
          {/*</div>*/}
        </div>
      </div>
      </NotificationProvider>  
    </main>
  );
}

export default Home;
