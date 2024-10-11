import { useState } from "react";
import { auth } from "../firebase";  // Import Firebase configuration
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"; // Import method for creating user and sending verification email
import { Link, useNavigate } from "react-router-dom"; // Import navigation hook

export const SignUp = () => {
  const [email, setEmail] = useState(""); // State to store email input
  const [password, setPassword] = useState(""); // State to store password input
  const [error, setError] = useState(""); // State to store error messages
  const [success, setSuccess] = useState(""); // State to store success messages
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle sign up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset error message
    setSuccess(""); // Reset success message

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);
      setSuccess('Verification email sent! Please check your inbox.'); // Set success message
      navigate("/"); // Redirect to the home page after successful sign up (optional)
    } catch (err) {
      setError(`Failed to create an account: ${err}`); // Set error message if sign up fails
    }
  };

  return (
    <div className="flex flex-col gap-[20px] justify-center items-center h-screen">
      <form onSubmit={handleSignUp} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl mb-4">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message if exists */}
        {success && <p className="text-green-500">{success}</p>} {/* Display success message if exists */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          className="border p-2 w-full mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          className="border p-2 w-full mb-4"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Sign Up
        </button>
      </form>

      <p>Already have an account? Go to <Link className="text-sky-500" to={'../sign-in'}>sign in</Link></p>
    </div>
  );
};
