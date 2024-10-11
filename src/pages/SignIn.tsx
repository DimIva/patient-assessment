import { useState } from "react";
import { auth } from "../firebase";  // Import Firebase configuration
import { signInWithEmailAndPassword } from "firebase/auth"; // Import method for signing in
import { Link, useNavigate } from "react-router-dom"; // Import navigation hook

export const SignIn = () => {
  const [email, setEmail] = useState(""); // State to store email input
  const [password, setPassword] = useState(""); // State to store password input
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle sign in
  const handleSignIn = async (e: React.FormEvent) => {
    console.log('start');
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
  
    if (!trimmedEmail || !trimmedPassword) {
      setError("Email and password must not be empty");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      console.log('User signed in successfully', userCredential);
      const idToken = userCredential.user.refreshToken;
      console.log('start', userCredential.user);
      localStorage.setItem("idToken", idToken);
      navigate("/");
    } catch (err) {
      setError(`Invalid email or password: ${err}`);
    }
  };

  return (
    <div className="flex flex-col gap-[20px] justify-center items-center h-screen">
      <form onSubmit={handleSignIn} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl mb-4">Sign In</h1>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message if exists */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          className="border p-2 w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Sign In
        </button>
      </form>

      <p>Don't have an account yet? Go to <Link className="text-sky-500" to={'../sign-up'}>sign up</Link></p>
    </div>
  );
};
