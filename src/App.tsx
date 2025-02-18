import { useEffect, useState } from 'react'
// import './App.css'
import WindowFrame from './Components/WindowFrame'

function App() {
  const [theme, set_theme] = useState<'dark' | 'light'>('light');

  const changeTheme = () => {
    document.documentElement.classList.toggle('dark');
    set_theme((prev: 'dark' | 'light') => (prev === 'dark' ? 'light' : 'dark'));

  }
  useEffect(() => {
    console.log(document.documentElement.classList);
    const theme = document.documentElement.classList.contains('dark') ? "dark" : "light";
    console.log(theme);
  });

  return (
  <>
    <WindowFrame/>
    <div className="min-h-[calc(100vh-60px)] bg-white dark:bg-zinc-950 text-zinc-bg-slate-950 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Tailwind Dark Mode</h1>
        <button
          onClick={changeTheme}
          className="px-4 py-2 bg-blue-500 dark:bg-yellow-500 text-white dark:text-black rounded"
        >

           toggle {theme=='dark' ? 'light' : 'dark'} mode
        </button>
        <br/>
        <br/>
        <br/>

      </div>
    </div>
  </>
  )
}

export default App
