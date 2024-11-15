import About from '@/components/About'
import Testimonial from '@/components/Testimonial'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Eye, Flame, Shield, ShieldQuestion, SquarePen } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
   <main className="min-h-[85vh] flex flex-col items-center justify-center mb-5">
    <div>
      <h1 className="text-4xl lg:text-8xl font-semibold text-center dark:text-white mt-20">
      Welcome <br className="md:hidden"/>To <br className="md:hidden"/><span className="text-gray-700 dark:text-slate-300">JusticeBridge</span></h1>
    <p className="text-xl mt-3 md:text-3xl text-gray-800 dark:text-gray-300 text-center">Heroes Speak Up: Your Grievance, My Mission!</p>
   
    <div className="text-center mt-10">
      <div className="grid gap-6 md:grid-cols-11 place-items-center m-5">
        <div className="col-span-1"></div>
      <motion.div
      className="max-w-sm mx-auto bg-[#3762C6] rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 col-span-3 h-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
        <div className="p-8">
        <div className='flex justify-center'><SquarePen size={34} color='whitesmoke'/></div>
          <motion.p
            className="mt-2 text-slate-200 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Share Your worries to superhero!
          </motion.p>
         <p className='text-center'> </p>
        </div>
    </motion.div>

      <motion.div
      className="max-w-sm mx-auto bg-[#3762C6] rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 col-span-3 h-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
        <div className="p-8">
        <div className='flex justify-center'><Eye size={34} color='whitesmoke'/></div>
          <motion.p
            className="mt-2 text-slate-200 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Superhero carefully review your worry
          </motion.p>
        </div>
    </motion.div>
      <motion.div
      className="max-w-sm mx-auto bg-[#3762C6] rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 col-span-3 h-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
        <div className="p-8">
        <div className='flex justify-center'><Flame size={34} color='whitesmoke'/></div>
          <motion.p
            className="mt-2 text-slate-200 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
           After that superhero will let you know about action
          </motion.p>
        </div>
    </motion.div>
    <div className="col-span-1"></div>
      </div>
    </div>
    </div>
    <motion.div 
    className="flex gap-4"
    initial={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.7 }}
    >
   <Link to={'/grievence'}><Button><Shield size={30}/> Log Grievence</Button></Link> 
   <Link to={'/about'}><Button className='bg-yellow-400 font-semibold hover:bg-slate-950 text-blue-950 hover:text-white'><ShieldQuestion size={30}/> Who am i..?</Button></Link>
    </motion.div>
   </main>
  
     {/* about */}
     <div className='text-center my-10'>
      <About/>

      {/* testmonails */}
      <h1 className='text-2xl lg:text-4xl font-semibold mt-10'>Testimonials</h1>
      <p className='italic text-gray-700 dark:text-slate-300'>What Others Wants to say about our website</p>
     <div className="flex flex-col lg:flex-row gap-5 mx-10 mt-5 justify-around">
     <Testimonial author='Sarah Thompson' role='Community manager' quote="This platform has completely transformed how we manage our grievances. The user interface is intuitive, and the support team is fantastic!" avatarSrc='https://randomuser.me/api/portraits/women/44.jpg'/>
      <Testimonial author='Jon' role='Bus driver' quote='JusticeBridge has made it easy to report and track issues that affect our community. Their commitment to transparency and user feedback is unparalleled.' avatarSrc='https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png'/>
      <Testimonial author='Jon' role='Buisness partnerr' quote='I ve never seen a grievance platform with such a polished design and responsive support. It feels like Aegis is genuinely here to help' avatarSrc='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Testimonial author='Jon' role='Bus driver' quote='With Aegis, I feel empowered to make a difference in my community. Reporting issues and seeing progress has been incredibly rewarding.' avatarSrc='https://media.istockphoto.com/id/524177132/photo/happy-driver-inviting-on-board-of-intercity-bus.jpg?s=612x612&w=0&k=20&c=OPHGfh5rSg0O_vcp7zgYxBfEkota4hkg063sJg-ZKPM='/>
     </div>
      </div>
   </>
  )
}

export default HomePage