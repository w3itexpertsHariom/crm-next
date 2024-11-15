
// import { ThemeContext } from "@/context/ThemeContext";

import MainHome from "./(dashboard)/home/page";

export default function Home() {
  return (
    <div>
      {/* <ThemeContext> */}      
        <main>        
          <MainHome />
        </main>            
      {/* </ThemeContext> */}
      
    </div>
  );
}