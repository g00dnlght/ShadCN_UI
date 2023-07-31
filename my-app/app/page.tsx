'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function TabsDemo() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="aboutTab" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="aboutTab" className="rounded-lg">
            ABOUT
          </TabsTrigger>
          <TabsTrigger value="workTab" className="rounded-lg">
            WORK
          </TabsTrigger>
        </TabsList>
        <TabsContent value="aboutTab" className="pb-2">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription>Test text goes here.</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="workTab" className="pb-2">
          <Card>
            <CardHeader>
              <CardContent className="">
                <div className="text-center border rounded-lg">
                  <a
                    href="https://victortonu.myportfolio.com/"
                    className="px-2 py-4 border rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Project 1{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      Graphic Design Portfolio
                    </p>
                  </a>

                  <a
                    href="https://github.com/vtonu"
                    className="px-5 py-4 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      Project 2{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                      GitHub Profile
                    </p>
                  </a>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </TabsContent>
        <Button
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </Tabs>
    </main>
  );
}
