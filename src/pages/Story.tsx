import { motion } from 'framer-motion';

const Story = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div className="p-4 lg:m-14 lg:p-8">
      <h1 className="text-center font-semibold text-2xl lg:text-4xl mb-6">How Aegis Originated..?</h1>
      <div className="grid md:grid-cols-12 place-items-center gap-8 lg:gap-16 md:p-4">
        
        {/* Section 1 */}
        <div className="col-span-1 hidden md:block"></div>
        <motion.div 
          className="col-span-12 md:col-span-5 w-full h-full object-contain rounded-lg shadow-lg"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <img src="./no1.jpg" alt="no1" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div 
          className="col-span-12 md:col-span-5 text-justify my-5"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p>
            In a bustling city plagued by unrest and rising concerns, a humble scientist named Alex Grant dedicated his life to advancing protective technology...
          </p>
        </motion.div>
        <div className="col-span-1 hidden md:block"></div>

        {/* Section 2 */}
        <div className="col-span-1 hidden md:block"></div>
        <motion.div 
          className="col-span-12 md:col-span-5 text-justify my-5"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p>
            One evening, while Alex was testing Aegium in his lab, a sudden power surge ripped through the building...
          </p>
        </motion.div>
        <motion.div 
          className="col-span-12 md:col-span-5 w-full h-full object-contain rounded-lg shadow-lg"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <img src="./no2.jpg" alt="no2" className="rounded-lg shadow-lg" />
        </motion.div>
        <div className="col-span-1 hidden md:block"></div>

        {/* Section 3 */}
        <div className="col-span-1 hidden md:block"></div>
        <motion.div 
          className="col-span-12 md:col-span-5 w-full h-full object-contain rounded-lg shadow-lg"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <img src="./no3.jpg" alt="no3" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div 
          className="col-span-12 md:col-span-5 text-justify my-5"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p>
            Driven by his belief that everyone deserved a protector, Aegis began his vigilante work under the cover of night...
          </p>
        </motion.div>
        <div className="col-span-1 hidden md:block"></div>

        {/* Section 4 */}
        <div className="col-span-1 hidden md:block"></div>
        <motion.div 
          className="col-span-12 md:col-span-5 text-justify my-5"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}
        >
          <p>
            Over time, Aegis’s efforts inspired a wave of change. Citizens began standing up for one another...
          </p>
        </motion.div>
        <motion.div 
          className="col-span-12 md:col-span-5 w-full h-full object-contain rounded-lg shadow-lg"
          variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}
        >
          <img src="./no4.jpg" alt="no4" className="rounded-lg shadow-lg" />
        </motion.div>
        <div className="col-span-1 hidden md:block"></div>

      </div>
    </motion.div>
  );
};

export default Story;
