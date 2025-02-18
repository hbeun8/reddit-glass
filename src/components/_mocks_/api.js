// Create a Jest mock function with the same name as the function we're mocking

import { fetchData } from './api.js';
import axios from 'axios'; // or use fetch directly if possible

const apiRequest = jest.fn(() => {
  return Promise.resolve({
    status: 200,
    json: () => ({ data: { dist: 25 } }), // mock the JSON response with a specific value
  });
});

export default apiRequest;