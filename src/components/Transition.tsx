import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-gray-400 dark:bg-[#202A44]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: "0%]" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#DED7CC] dark:bg-gray-500"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: "0%]" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: "0%]" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
