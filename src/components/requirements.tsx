import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IContentRequirements {
  title: string;
  description: string;
  targetAudience: string[];
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<IContentRequirements>();
  const router = useRouter();

  const onSubmit = async (data: IContentRequirements) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/confirmation');
    } catch (err) {
      setError('An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register('title', { required: true })}
          id="title"
          type="text"
          placeholder="Enter title..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">Title is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: true })}
          id="description"
          rows={3}
          placeholder="Enter description..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">Description is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <input
          {...register('targetAudience', { required: true })}
          id="targetAudience"
          type="text"
          placeholder="Enter target audience..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.targetAudience && <p className="text-red-500 text-xs mt-1">Target audience is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className="block text-sm font-medium text-gray-700">Content Types</label>
        <input
          {...register('contentTypes', { required: true })}
          id="contentTypes"
          type="text"
          placeholder="Enter content types..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.contentTypes && <p className="text-red-500 text-xs mt-1">Content types are required</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IContentRequirements {
  title: string;
  description: string;
  targetAudience: string[];
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<IContentRequirements>();
  const router = useRouter();

  const onSubmit = async (data: IContentRequirements) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/confirmation');
    } catch (err) {
      setError('An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register('title', { required: true })}
          id="title"
          type="text"
          placeholder="Enter title..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">Title is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: true })}
          id="description"
          rows={3}
          placeholder="Enter description..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">Description is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <input
          {...register('targetAudience', { required: true })}
          id="targetAudience"
          type="text"
          placeholder="Enter target audience..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.targetAudience && <p className="text-red-500 text-xs mt-1">Target audience is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className="block text-sm font-medium text-gray-700">Content Types</label>
        <input
          {...register('contentTypes', { required: true })}
          id="contentTypes"
          type="text"
          placeholder="Enter content types..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.contentTypes && <p className="text-red-500 text-xs mt-1">Content types are required</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </form>
  );
};

export default GatherRequirements;