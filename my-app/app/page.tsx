'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

const NoSSRThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider), {
  ssr: false,
});

export default function TabsDemo() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme('dark');
  }, [setTheme]); // Add 'setTheme' to the dependency array

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <NoSSRThemeProvider>
      <main className="flex items-center justify-center min-h-screen">
        <Tabs defaultValue="aboutTab" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="aboutTab" className="rounded-lg">
              ABOUT ME
            </TabsTrigger>
            <TabsTrigger value="workTab" className="rounded-lg">
              WORK
            </TabsTrigger>
          </TabsList>
          <TabsContent value="aboutTab" className="pb-2">
            <Card>
              <CardHeader>
                {/* <Button size="sm">
                  <CardTitle>ABOUT ME</CardTitle>
                </Button> */}
                <CardDescription>
                  I&apos;m Victor, a creative UI designer constantly exploring new horizons. Graphic
                  Design is my forte, complemented by a bit of UX. My fascination with AI
                  technology, computers, music &amp; gaming fuels my enthusiasm for innovative work.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="workTab" className="pb-2">
            <Card>
              <CardHeader className="mt-4">
                <CardContent>
                  <div className="text-center ">
                    <a
                      href="https://github.com/vtonu"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 1{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>GitHub Profile</p>
                    </a>

                    <a
                      href="https://victortonu.myportfolio.com/"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 2{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>
                        Graphic Design Portfolio
                      </p>
                    </a>

                    <a
                      href="https://nuxt-ui-maya.vercel.app/"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 3{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>Intro to Maya.</p>
                    </a>

                    <a
                      href="https://nuxt-ui-3-d.vercel.app/"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 3{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>
                        3D Materials & Textures.
                      </p>
                    </a>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
          <Button size="icon" onClick={toggleTheme}>
            {theme === 'light' ? (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </Tabs>
      </main>
    </NoSSRThemeProvider>
  );
}
