import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //once in vieport trigger animation

  return (
    <motion.div
      ref={ref}
      className="mx-8 md:mx-14"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h1 className="text-2xl lg:text-4xl font-semibold">
        Meet <span className="italic font-bold">Aegis</span>
      </h1>
      <p className="text-lg text-gray-700 dark:text-slate-300">
        A defender of justice and a symbol of hope, Aegis has dedicated their
        life to protecting citizens and tackling the issues that matter most.
        With incredible abilities and a heart for the people, they are here to
        listen and help where they can. Every grievance logged brings us one
        step closer to a safer, happier community.
      </p>
    </motion.div>
  );
};

export default About;
