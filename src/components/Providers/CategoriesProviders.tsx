// "use client";

// import React, { createContext, useContext, useState, ReactNode } from "react";

// type Theme = "light" | "dark";

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// const categoriesContext = createContext<ThemeContextType | undefined>(
//   undefined
// );

// export const ThemeProvider = ({ children, data }: { children: ReactNode,data }) => {
//   const [theme, setTheme] = useState<Theme>("light");

//   return (
//     <categoriesContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </categoriesContext.Provider>
//   );
// };

// export const useCategories = () => {
//   const context = useContext(categoriesContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
