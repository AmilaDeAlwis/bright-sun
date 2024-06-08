import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user); // get the current user
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-white shadow-lg'> {/*white background with shadow*/}
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'> {/*flex box with space between each element, centered items, max width 0f 6xl, auto margin, and padding of 3*/}
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-3xl flex flex-wrap'> {/*bold font, small text for mobile sizes and xl text for full size, and wrap them for responsiveness */}
            <span className='text-orange-400'>Bright&nbsp;</span>
            <span className='text-red-600'>Sun</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-200 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-96' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-background-600' /> {/*Font-Awesome search icon*/}
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'> {/*mobile size hidden, web size inline, when hovering underline visible*/}
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'> {/*mobile size hidden, web size inline, when hovering underline visible*/}
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
          
        </ul>
      </div>
    </header>
  );
}
