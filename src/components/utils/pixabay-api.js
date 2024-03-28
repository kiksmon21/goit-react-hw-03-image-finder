export const fetchImages = (query = '', pageNumber = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=42395416-365c7c1d9b0e5b6ec2f614578&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)))
    .then(res => res.json())
    .then(data => data.hits);
};

export { fetchImages as default };