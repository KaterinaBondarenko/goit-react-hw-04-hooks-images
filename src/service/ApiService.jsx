const fetchImage = async (searchQuery, page) => {
  const API_KEY = '24465009-c19d13b3d7a0e5b95e4231612';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horisontal&per_page=12`;
  const result = await fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });

  return result;
};

export default fetchImage;
