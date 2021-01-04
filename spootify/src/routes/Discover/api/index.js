import makeRequest from './makeRequest';

const fetchData = async (path) => {
  try {
    const { data } = await makeRequest(path);
    return data;
  } catch (error) {
    // it will return { error, error_description }
    throw new Error(error?.response?.data?.error_description);
  }
};

export { fetchData };