import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      {showSplash ? (
        <motion.img
          src="/assets/1000302707.png"
          alt="Focus Buddy Logo"
          className="w-48 h-48"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      ) : (
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Welcome to Focus Buddy!
        </h1>
      )}
    </div>
  );
}

export default App;
