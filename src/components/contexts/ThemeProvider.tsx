import { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, Theme } from './ThemeContext';

export const ThemeProvider = ({children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const savedTheme = localStorage.getItem('app-theme') as Theme;
        const activeTheme = savedTheme || systemTheme;
        setTheme(activeTheme);
        document.documentElement.classList.add(`theme-${activeTheme}`);
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.remove(`theme-${theme}`);
        document.documentElement.classList.add(`theme-${newTheme}`);
        localStorage.setItem('app-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};