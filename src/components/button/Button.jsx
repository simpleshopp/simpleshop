"use client"; // Gør komponenten til en klientkomponent (brug af state og hooks)

import Link from "next/link";
import { useState } from "react";

const buttonVariants = { // Definer forskellige varianter af knapper
  primary: "bg-blue-600! text-white! hover:bg-blue-800!",
  secondary: "bg-gray-200! text-gray-800! hover:bg-gray-400!",
  tertiary:
    "bg-gradient-to-r! from-pink-500! via-purple-500! to-indigo-500! text-white! shadow-lg! hover:scale-105! hover:shadow-xl! transition-transform! duration-200!",
  romantic:
    "bg-pink-200! text-pink-700! border-2! border-pink-400! shadow-md! hover:bg-pink-300! hover:text-pink-900! hover:scale-105! transition-transform! duration-200!",
  hacked:
    "bg-black! text-red-600! border-2! border-red-900! shadow-2xl! hover:bg-red-900! hover:text-white! hover:scale-105! transition-transform! duration-200! tracking-widest! uppercase!",
  link: "group/link text-gray-500! hover:underline bg-transparent! p-0!",
};

const buttonSizes = { // Definer forskellige størrelser af knapper
  lg: "px-6 py-3 text-lg",
  md: "px-4 py-2 text-md",
  sm: "px-2 py-1 text-sm",
};

// Special click-handlers (kan eksporteres)
//   - Brug 'export' foran funktionen, hvis du vil kunne importere og bruge den i andre filer.
//   - Fx: import { AlertClick } from "@/components/button/Button";
//   - Hvis du kun skriver 'const', kan funktionen kun bruges i denne fil.
export const AlertClick = () => alert("Du er blevet hacket!");

// Reusable Button
const Button = ({
  variant = "primary", //Bestemmer farve/udseende (default primary)
  size = "md", // Bestemmer størrelse (default md)
  href, // Hvis sat, skal knappen fungere som et link
  icon: Icon, // Ikonkomponent, hvis knappen skal have et ikon
  children, // Indholdet af knappen (tekst, ikon osv.)
  onClick, // Click event handler
  showModalOnClick, // Vis modal ved klik
  ...props // Alle andre props (fx. onClick, type osv.)
}) => {
  const [open, setOpen] = useState(false);
  const classes = `rounded transition ${buttonVariants[variant]} ${buttonSizes[size]}`;

  // Funktion der håndterer klik på knappen
  const handleClick = (event) => {
    // Hvis showModalOnClick-prop er sat, vis modal ved klik
    if (showModalOnClick) {
      // Hvis der er en onClick-prop, kald den og send event med
      setOpen(true);
    }
    if (onClick) onClick(event);
  };

  // Indhold: ikon først, derefter tekst
  const content = (
    <>
      {/* Hvis Icon-prop er sat, vis ikon med styling */}
      {Icon && <Icon className="w-5 h-5 mr-2 inline" />}
      {/* children: alt indhold/tekst i knappen */}
      {children}
    </>
  );

  if (href) {
    // Hvis der er en destination, brug Link:
    //    - Hvis href er sat, brug Next.js Link til navigation
    //    - className og props sendes med, så knappen ligner og opfører sig som de andre
    //    - content: viser evt. ikon og tekst
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // Ellers brug almindelig knap
  return (
    <>
      <button className={classes} {...props} onClick={handleClick}>
        {content}
      </button>

      {/* Modal vises kun hvis open er true */}
      {/* Nedenstående er kun styling for Modal boks */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-pink-100 rounded-lg p-8 shadow-lg text-center border-2 border-pink-300">
            <div className="text-4xl mb-2 animate-bounce">💖💘💝💞</div>
            <h2 className="text-2xl font-bold text-pink-700 mb-4">
              Du har sendt kærlighed!
            </h2>
            <p className="mb-4 text-pink-600">
              Nogen blev glad for dit hjerte! <br />
              <span className="text-3xl">🥰😍😘</span>
            </p>
            <button
              className="mt-4 px-4 py-2 bg-pink-200 rounded"
              onClick={() => setOpen(false)}
            >
              Luk
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
