import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';


function LoginScreen() {  

  const [isAuthenticating,setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function loginHandler({email,password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email,password);
      console.log("token",token);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
          'Authentication failed!',
          'Could not logged you in please check your credentials or try again lator!'
        )
    }

    setIsAuthenticating(false)
  }
  if(isAuthenticating) {
    return <LoadingOverlay message="Logging you in ..." />
  }

  return <AuthContent isLogin  onAuthenticate={loginHandler} />;
}

export default LoginScreen;
