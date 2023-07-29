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
    setTheme(theme === 'light' ? 'dark' : 'light');
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
        <TabsContent value="workTab">
          <Card>
            <CardHeader>
              <CardContent className="space-y-2">
                <div className="grid gap-4 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                  <a
                    href="https://victortonu.myportfolio.com/"
                    className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
                    href="https://github.com/g00dnlght"
                    className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </Tabs>
    </main>
  );
}
