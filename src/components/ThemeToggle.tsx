import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Toggling theme from', theme, 'to', theme === 'dark' ? 'light' : 'dark');
    toggleTheme();
    
    // Force immediate style application
    setTimeout(() => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      console.log('Current data-theme:', currentTheme);
      
      if (currentTheme === 'light') {
        document.body.style.backgroundColor = 'hsl(0 0% 98%)';
        document.body.style.color = 'hsl(240 10% 3.9%)';
        console.log('Forced light theme styles applied');
      } else {
        document.body.style.backgroundColor = 'hsl(0 0% 0%)';
        document.body.style.color = 'hsl(210 40% 98%)';
        console.log('Forced dark theme styles applied');
      }
    }, 100);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className="relative h-10 w-10 p-0 rounded-full border-border/20 hover:bg-background/10 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative flex items-center justify-center">
        <Sun
          className={`h-4 w-4 transition-all duration-300 ${
            theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          }`}
        />
        <Moon
          className={`absolute h-4 w-4 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`}
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
