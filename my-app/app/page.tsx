'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { FaceIcon, GitHubLogoIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
        <Tabs defaultValue="aboutTab" className="w-[390px]">
          <TabsContent value="aboutTab" className="flex flex-col pb-8">
            <div className="flex flex-col items-center space-y-8">
              <div>
                <h1 className="relative z-10 pb-4 font-sans text-lg font-bold text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
                  Welcome!
                </h1>
                <Separator />
              </div>
              <AspectRatio ratio={16 / 8} className="bg-muted">
                <Image
                  src="/3d.jpg"
                  alt="Photo by Philip Oroni"
                  fill
                  className="object-cover pb-4 rounded-md"
                />
              </AspectRatio>
              <div>
                <h1 className="pb-2 text-xs font-medium leading-none ">
                  Powered by Vercel, React, NextJS, Radix & TailwindCSS
                </h1>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="bg-red-600">
                    <a href="https://victortonu.myportfolio.com/home">Adobe Portfolio</a>
                  </Badge>
                  <Badge variant="outline" className="bg-red-500">
                    <a href="https://vtonu.itch.io/">Itch.io Profile</a>
                  </Badge>
                </div>
              </div>
            </div>
          </TabsContent>

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
                  I&apos;m Victor, a creative individual constantly exploring new horizons. Graphic
                  Design is my forte, complemented by a bit of UI/UX. My fascination with AI
                  technology, computers, music &amp; gaming fuels my enthusiasm for innovative work.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="workTab" className="pb-2">
            <Card>
              <CardHeader className="mt-2">
                <CardContent>
                  <div className="text-center">
                    {/*  <a
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
                    </a> */}

                    <a
                      href="https://game138-aceternity-ui.vercel.app/"
                      className="block p-2 mx-4 mb-4 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 1{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>Aceternity UI</p>
                    </a>
                    <a
                      href="https://nuxt-ui-maya.vercel.app/"
                      className="block p-2 mx-4 mb-4 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 2{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>Intro to Maya</p>
                    </a>
                    <a
                      href="https://nuxt-ui-3-d.vercel.app/"
                      className="block p-2 mx-4 mb-4 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 3{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>
                        3D Materials & Textures
                      </p>
                    </a>

                    <a
                      href="https://github.com/vtonu/GraphicDesign_Portfolio"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`mb-4 text-xl font-semibold my-8`}>
                        Project 4{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className={`m-4 max-w-[50ch] text-sm opacity-50`}>Mantine UI Portfolio</p>
                    </a>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
          <div className="flex justify-center">
            <Button size="icon" onClick={toggleTheme}>
              {theme === 'light' ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
            <a href="https://github.com/vtonu">
              <Button size="icon" className="ml-2">
                <GitHubLogoIcon />
              </Button>
            </a>
            {/* <a href="https://victortonu.myportfolio.com/home">
              <Button size="icon" className="ml-2">
                <img src="./adobe.png" alt="Adobe Portfolio" />
              </Button>
            </a>
            <a href="https://vtonu.itch.io/">
              <Button size="icon" className="ml-2">
                <img src="./itch.svg" alt="Itch.io Profile" />
              </Button>
            </a> */}
          </div>
        </Tabs>
      </main>
    </NoSSRThemeProvider>
  );
}
