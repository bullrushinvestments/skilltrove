import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    createdAt: new Date(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSpecification(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('/api/business-specification', specification);
      // Handle success
    } catch (error) {
      setSubmitError('Failed to create business specification.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isMobile })}>
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      <form onSubmit={handleSubmit} aria-label="Business specification form">
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={specification.description}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm',
            isSubmitting ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          )}
        >
          {isSubmitting ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    createdAt: new Date(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSpecification(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('/api/business-specification', specification);
      // Handle success
    } catch (error) {
      setSubmitError('Failed to create business specification.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isMobile })}>
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      <form onSubmit={handleSubmit} aria-label="Business specification form">
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={specification.description}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm',
            isSubmitting ? 'bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          )}
        >
          {isSubmitting ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;