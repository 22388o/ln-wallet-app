import { useRouter, useSegments } from "expo-router";
import React from "react";
import { compare } from "react-native-bcrypt"


const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

export function Provider(props) {
  const [user, setAuth] = React.useState(null);

  useProtectedRoute(user);

  const signIn = async (email, password) => {
    const response = await fetch('https://user-api-sigma.vercel.app/api/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const { user } = await response.json();
      console.log("Login API response received. Authenticating user credentials ")
      const validEmail = user.email
      const validPassword = user.password
    // Authenticate user with email and password.
    const passwordMatch = new Promise((resolve, reject) => {
      compare(password, validPassword, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  
    if (email === validEmail && (await passwordMatch)) {
      console.log("Success! User logged in")
      setAuth(user); // Set user info
      return true;
    } else {
      return false;
    }
  };
}

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}