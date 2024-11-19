import { motion } from 'framer-motion';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { SERVER_URL } from '@/lib/serverurl';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner"
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
interface FormData {
  grievanceType: string;
  description: string;
  location: string;
}
const serviceId='service_of4pt5f'
const templateId = 'template_sv2m0p9'
const publicKey = 'Pva-AyayBM1O1Jsx2'

const Grievance = () => {
  const {isAuthenticated,user} = useAuthStore()
  const navigate  = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    grievanceType: '',
    description: '',
    location: '',
  });

  const [isLoading, setisLoading] = useState(false);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const response = await axios.post(`${SERVER_URL}/post`, formData, {
        withCredentials: true,
      });
        // Prepare email parameters
        const templateParams = {
          from_name: user?.username,
          grievanceType:formData.grievanceType,
          location: formData.location,
          message: formData.description,
        }

  
        // Send email notification
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
  
      toast.success(response.data.message)
      navigate('/dashboard')
      setFormData({
        grievanceType: '',
        description: '',
        location: '',
      });
    } catch (err) {
    console.log(err);
      toast.error("Error Creating grievence " + err)
    } finally {
      setisLoading(false);
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="w-full max-w-lg p-8 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-6">
          Submit Your Grievance
        </h2>


        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Grievance Type */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="grievanceType">
              Grievance Type
            </label>
            <select
              id="grievanceType"
              name="grievanceType"
              value={formData.grievanceType}
              onChange={handleChange}
              required
              className="w-full p-3 text-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300"
            >
              <option value="" disabled>
                Select Grievance Type
              </option>
              <option value="Property Damage">Property Damage</option>
              <option value="Abuse">Abuse</option>
              <option value="Disturbance">Disturbance</option>
              <option value="Unlawful Surveillance">Unlawful Surveillance</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 text-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 text-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          {isAuthenticated ? <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-lg transition duration-200 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit Grievance'}
          </button>:<Link to={'/login'}><Button variant={"destructive"} className='mt-4 w-full py-3 px-6 rounded-lg transition duration-200'>Login</Button></Link>}
        </form>
      </div>
    </motion.div>
  );
};

export default Grievance;
