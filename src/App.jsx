
import logo from './assets/lws-logo-en.svg'
import star from './assets/star.svg'
import book_img from './assets/book.png'
import { useState } from 'react';
function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const programmingBooks = [
    { id: '01', name: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2018, price: '$29.99' },
    { id: '02', name: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008, price: '$39.99' },
    { id: '03', name: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008, price: '$24.99' },
    { id: '04', name: 'Python Crash Course', author: 'Eric Matthes', year: 2015, price: '$35.99' },
    { id: '05', name: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Dave Thomas, Andy Hunt', year: 1999, price: '$49.99' },
    { id: '06', name: 'Head First Design Patterns', author: 'Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra', year: 2004, price: '$44.99' },
    { id: '07', name: 'Java: The Complete Reference', author: 'Herbert Schildt', year: 2017, price: '$49.99' },
    { id: '08', name: 'C# in Depth', author: 'Jon Skeet', year: 2019, price: '$45.99' },
    { id: '09', name: 'Ruby on Rails Tutorial', author: 'Michael Hartl', year: 2016, price: '$29.99' },
    { id: '10', name: 'Learning React', author: 'Alex Banks, Eve Porcello', year: 2017, price: '$39.99' },
  ];
  const [filteredBooks, setFilteredBooks] = useState([...programmingBooks]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter books based on the search query
    const filtered = programmingBooks.filter((book) => book.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredBooks(filtered);
  };

  console.log(programmingBooks);



  return (
    <>
      {/* <!-- Navbar Starts --> */}
      <nav className="py-6 ">
        <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
          {/* <!-- Logo --> */}
          <a href="/">
            <img className="max-w-[100px] md:max-w-[165px]" src={logo} alt="Lws" />
          </a>
          {/* <!-- Logo Ends --> */}
          {/* <!-- Notification --> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_33_142)">
              <path
                d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
                stroke="#1C4336"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                stroke="#1C4336"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_33_142">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </nav>
      {/* <!-- Navbar Ends --> */}
      {/* <!-- main --> */}
      <main className="my-10 lg:my-14">
        {/* <!-- header --> */}
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div
            className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
          >
            {/* <!-- info , title , search --> */}
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
              <h2
                className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
              >
                Trending Books of the Year
              </h2>
              {/* <!-- Search Box --> */}
              <form>
                <div className="flex">
                  <div
                    className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]"
                  >
                    <input
                      type="search"
                      id="search-dropdown"
                      className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                      placeholder="Search Book"
                      value={searchQuery}
                      onChange={handleSearch}
                      required
                    />
                    <div className="absolute right-0 top-0 flex h-full items-center">
                      <button
                        type="submit"
                        className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                      >
                        <svg
                          className="h-[14px] w-[14px]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Search Box Ends --> */}
            </div>
            {/* <!-- sort - filter --> */}
            <div className="flex items-stretch space-x-3">
              {/* <!-- Sort --> */}
              <select
                className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                name="sortBy"
                id="sortBy"
              >
                <option value="">Sort</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="year_asc">Publication Year (Oldest)</option>
                <option value="year_desc">Publication Year (Newest)</option>
              </select>

            </div>
          </div>
        </header>
        {/* <!-- header ends --> */}
        {/* <!-- Book Grid --> */}
        <div
          className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {/* <!-- Book Item --> */}
          {filteredBooks.map(book =>
            <div className="space-y-3" key={book.id}>
              {/* <!-- thumbnail --> */}
              <div
                className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
              >
                <img className="max-w-[144px]" src={book_img} alt="book name" />
              </div>
              {/* <!-- info --> */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl">{book.name}</h4>
                <p className="text-xs lg:text-sm">By : <span>{book.author}</span></p>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold lg:text-xl">{book.price}</h4>
                  {/* <!-- stars --> */}
                  <div className="flex items-center space-x-1">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <span className="text-xs lg:text-sm">(4 Star)</span>
                  </div>
                  {/* <!-- stars ends --> */}
                </div>

                <div className="flex items-center gap-3 text-xs lg:text-sm">
                  <button
                    className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    Add to Cart
                  </button>
                  <button
                    className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    Favourite
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* <!-- Book Item Ends --> */}
        </div>
        {/* <!-- Book Grid Ends --> */}
      </main>
      {/* <!-- main ends --> */}
      {/* <!-- Footer --> */}
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-sm lg:text-base">
            Copyright ©2023 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
