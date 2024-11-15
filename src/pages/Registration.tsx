import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
}

const Registration = ({ isRegister = false }: { isRegister?: boolean }) => {
  const { signup, login, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistrationFormData>({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name:username, email, password } = formData;
    try {
      if (isRegister) {
        await signup(username, email, password);
      } else {
        await login(email, password);
      }
     
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {isRegister && (
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border text-gray-700 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300"
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border text-gray-700 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border text-gray-700 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300"
            />
          </div>
          <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200">
            {isLoading ? <Loader className="animate-spin text-center" size={24} /> : isRegister ? "Register" : "Login"}
          </button>
        </form>
        <div className="flex justify-center items-center gap-5 mt-5">
          {isRegister ? (
            <>
              <p>Already have an account?</p>
              <Link to="/login"><Button size="sm" variant="default">Login Now</Button></Link>
            </>
          ) : (
            <>
              <p>Don't have an account?</p>
              <Link to="/register"><Button size="sm" variant="default">Register</Button></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
