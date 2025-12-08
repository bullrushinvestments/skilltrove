import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestFormValues>();

  const onSubmit: SubmitHandler<TestFormValues> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      alert('Test created successfully!');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Failed to create test');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Create a Test</h1>
      {error && <p role="alert" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-grow flex flex-col">
        <div className="relative z-0 mb-6 w-full group">
          <input type="text" {...register('title', { required: true })} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
          <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-2.5 peer-focus:left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:top-1/4 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.title && "This field is required"}</p>

        <div className="relative z-0 mb-6 w-full group">
          <textarea {...register('description', { required: true })} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-2.5 peer-focus:left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:top-1/4 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.description && "This field is required"}</p>

        <button type="submit" disabled={loading} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestFormValues>();

  const onSubmit: SubmitHandler<TestFormValues> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/tests', data);
      alert('Test created successfully!');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Failed to create test');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Create a Test</h1>
      {error && <p role="alert" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-grow flex flex-col">
        <div className="relative z-0 mb-6 w-full group">
          <input type="text" {...register('title', { required: true })} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
          <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-2.5 peer-focus:left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:top-1/4 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.title && "This field is required"}</p>

        <div className="relative z-0 mb-6 w-full group">
          <textarea {...register('description', { required: true })} placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-2.5 peer-focus:left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:top-1/4 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
        </div>
        <p className="text-red-500 text-xs italic">{errors.description && "This field is required"}</p>

        <button type="submit" disabled={loading} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;