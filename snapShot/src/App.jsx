import { useContext, useEffect, useState } from 'react';
import Images from './components/images';
import UseImageInfo from './hooks/useImageInfo';
import Imagecontext from './contexts/imagecontext';

function App() {
  const [inputData, setInputData] = useState("flowers");
  const { setUrl } = useContext(Imagecontext);

  const searchInput = (e) => {
    e.preventDefault(); // Prevent form submission
  };

  let ImageInfo = UseImageInfo(inputData);

  useEffect(() => {
    if (ImageInfo && ImageInfo.length > 0) {
      const urls = ImageInfo.map(info => info.urls.small); // Collect all URLs
      setUrl(urls); // Set the data as an array of URLs
    }
  }, [ImageInfo, setUrl]);

  return (
    <>
      <div className='container-sm'>
        <h1 className='position-absolute top-0 start-50 translate-middle-x mt-4'>SnapShot</h1>
        <form className="d-flex position-absolute top-0 start-50 translate-middle-x p-5" role="search">
          <input
            className="form-control w-150 p-2 mt-5"
            type="search"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success mt-5" onClick={searchInput} type="submit">
            Search
          </button>
        </form>
      </div>
      <br></br> <br></br> <br></br> <br></br> <br></br>
              <Images />
    </>
  );
}

export default App;
