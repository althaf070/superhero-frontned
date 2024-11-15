import About from "@/components/About";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Aboutpage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="mb-10">
      <div className="flex flex-col md:flex-row gap-1 items-center w-full min-h-[60vh]">
        <motion.div
          className="m-10 sm:w-[1600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <img
            src="./super.jpg"
            alt="superman"
            className="w-full h-full object-contain rounded-lg shadow-xl"
          />
        </motion.div>
        <div className="text-center">
          <About />
        </div>
      </div>
      <div className="mx-4 lg:mx-36 p-6 bg-[#3762C6] rounded-lg shadow-xl text-center my-12">
          <h1 className="text-2xl lg:text-4xl font-semibold text-white">Our Mission</h1>
          <p className="text-lg text-slate-300">
            Our mission is simple: empower people to have a voice and be heard
            by a superhero who cares. We’re committed to providing a
            transparent, user-friendly platform where your grievances are
            valued, reviewed, and, most importantly, taken seriously
          </p>
        </div>

        <div className="text-center mx-5">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4">How We Process..?</h1>
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid md:grid-cols-12 gap-5 place-items-center mx-10 row-span-1"
        >
         
          <div className="col-span-4 p-4 lg:p-6 bg-[#3762C6] rounded-lg shadow-lg md:h-[12rem]">
            <h1 className="text-lg md:text-2xl font-semibold text-white">Submit Your Grievance</h1>
            <p className=" text-slate-300">Using the "Log a Grievance" feature, share details of your issue. Whether it’s a small complaint or a significant concern, rest assured, it’s important to us.</p>
          </div>
          
          <div className="col-span-4 p-4 lg:p-6 bg-[#3762C6] rounded-lg shadow-lg md:h-[12rem]">
            <h1 className="text-lg md:text-2xl font-semibold text-white">Superhero Dashboard</h1>
            <p className=" text-slate-300">Our superhero has a secure, dedicated dashboard where they review and manage grievances, ensuring each one is handled with care and confidentiality.</p>
          </div>
          
          <div className="col-span-4 p-4 lg:p-6 bg-[#3762C6] rounded-lg shadow-lg md:h-[12rem]">
            <h1 className="text-lg md:text-2xl font-semibold text-white">Notifications and Updates</h1>
            <p className=" text-slate-300 ">The superhero receives an immediate email notification whenever a new grievance is logged, so they’re always ready to spring into action. We also keep you updated about your grievance status.</p>
          </div>
        </motion.div>
        </div>
    </section>
  );
};

export default Aboutpage;
