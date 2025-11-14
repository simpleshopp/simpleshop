import { FiSearch } from "react-icons/fi";

const SearchBar = () => (
  <form className="max-w-md mx-auto">
    <div className="relative bg-white border border-gray-200 rounded-full shadow-sm">
      <span className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FiSearch className="text-gray-400" size={20} />
      </span>
      <input
        type="search"
        id="search"
        className="w-full p-3 ps-10 pe-20 bg-transparent rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 hover:ring-1 hover:ring-gray-400 hover:border-gray-400 cursor-default"
        placeholder="Søg produkter..."
      />
      <button
        type="submit"
        className="absolute end-2 top-1/2 -translate-y-1/2 bg-rose-200! text-white rounded-full px-4 py-1 text-sm shadow-2xs cursor-pointer font-thin hover:bg-rose-300!"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchBar;

// Tailwind klasser brugt i SearchBar:

// Form wrapper:
// max-w-md         // Maksimal bredde medium
// mx-auto          // Centrerer elementet horisontalt

// Search ikon:
// absolute         // Positionerer elementet absolut
// inset-y-0        // Strækker elementet fra top til bund
// start-0          // Placerer elementet helt til venstre
// ps-3             // Padding-start: 0.75rem
// pointer-events-none // Ikonet ignorerer museklik


// Wrapper:
// relative         // Gør det muligt at placere elementer absolut indeni

// Input-felt:
// w-full           // Fylder hele bredden
// ps-10            // Padding-start: 2.5rem (plads til ikon)
// pe-20            // Padding-end: 5rem (plads til knap)
// focus:outline-none // Ingen standard outline ved fokus
// focus:ring-1     // 1px ring ved fokus
// focus:ring-gray-600 // Mørkegrå ring ved fokus
// focus:border-gray-600 // Mørkegrå kant ved fokus
// hover:ring-1     // 1px ring ved hover
// hover:ring-gray-400 // Lysere grå ring ved hover
// hover:border-gray-400 // Lysere grå kant ved hover
// cursor-default   // Standard cursor

// Search-knap:
// absolute         // Positionerer knappen absolut
// end-2            // Flytter knappen ind fra højre med 0.5rem, så den sidder tæt på kanten af inputfeltet
// top-1/2          // Placerer knappen midt på y-aksen (50% ned fra toppen af forælder-elementet)
// -translate-y-1/2 // Trækker knappen op med 50% af dens egen højde, så den bliver helt centreret vertikalt
