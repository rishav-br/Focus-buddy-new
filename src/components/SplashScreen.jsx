import { motion } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <motion.img
        src="/assets/1000302707.png"
        alt="Focus Buddy Logo"
        className="w-48 h-48"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onAnimationComplete={onFinish}
      />
    </div>
  );
};

export default SplashScreen;
