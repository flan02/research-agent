import { motion } from "framer-motion";
// import { cn } from "@/lib/utils"; // Opcional: si usás Tailwind helpers

type props = {
  children: React.ReactNode;
}

export default function NeonBorderBox({ children }: props) {
  return (
    <div className="relative max-w-4xl p-1 mx-auto w-md">
      {/* Neon Border */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: "linear-gradient(270deg, #0fffc1, #3eecff, #7a5fff, #f600ff)",
          backgroundSize: "800% 800%",
          filter: "blur(6px)",
          zIndex: 0,
        }}
      />

      {/* Inner Container */}
      <div className="relative z-10 bg-[#0f0f1b] rounded-2xl text-white shadow-xl">
        {children}
      </div>
    </div>
  );
}