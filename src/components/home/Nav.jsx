import { searchGame } from "../functions/BGGSearch"

export default function Nav() {
  const handleFocus = (event) => {
    event.target.value = '';
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    (searchGame(event, searchText));
  }

  return (
  <>
    <div data-theme="light" className="navbar z-50 flex items-center justify-center sticky top-0 bg-dark-green h-20 shadow-box-shadow">
    <button className="absolute top-2 text-black left-2 normal-case text-lg z-50">LOGO</button>
        <input onFocus={handleFocus} onKeyUp={handleSearch} type="text" placeholder="Search..." className="input input-md w-1/2 input-accent rounded-md drop-shadow-md placeholder:text-lg"/>
        <button onClick={handleSearch} className="btn bg-alt-accent text-text-color hover:text-btn-text  hover:bg-accent border-none drop-shadow-md rounded-md ml-2 ease-in duration-150" type="submit">Search</button>
    </div>
</>
  )
}
