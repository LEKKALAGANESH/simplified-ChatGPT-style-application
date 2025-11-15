import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [dark, setDark] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        <div className="hidden md:block">
          <Sidebar isMobile={false} />
        </div>

        {mobileSidebarOpen && (
          <div className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMobileSidebarOpen(false)} />
        )}

        <div className={`fixed top-0 left-0 z-50 h-full bg-gray-50 dark:bg-gray-800 border-r dark:border-gray-700 transition-transform md:hidden
          ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <Sidebar isMobile={true} onClose={() => setMobileSidebarOpen(false)} />
        </div>

        <div className="flex-1 flex flex-col w-full">

          <header className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center md:pl-4">

            <button
              className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700"
              onClick={() => setMobileSidebarOpen(true)}
            >
              ☰
            </button>

            <h1 className="text-lg font-semibold">Chat App</h1>
            <ThemeToggle dark={dark} setDark={setDark} />
          </header>

          <main className="flex-1 overflow-auto p-2 sm:p-4">
            <Routes>
              <Route path="/" element={<div className="p-4">Start a new chat from sidebar</div>} />
              <Route path="/chat/:sessionId" element={<ChatWindow />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
