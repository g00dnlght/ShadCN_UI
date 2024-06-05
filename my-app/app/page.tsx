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
      <main className="flex justify-center min-h-screen">
        <Tabs defaultValue="homeTab" className="w-[490px] p-5">
          <TabsList className="w-full">
            {/* <Separator /> */}
            <TabsTrigger value="homeTab" className="rounded-lg">
              HOME
            </TabsTrigger>
            <TabsTrigger value="aboutTab" className="rounded-lg">
              ABOUT
            </TabsTrigger>
            <TabsTrigger value="workTab" className="rounded-lg">
              WORK
              <Badge variant="outline" className="ml-2 bg-red-500">
                <a href="https://victortonu.myportfolio.com/home">Adobe Portfolio</a>
              </Badge>
            </TabsTrigger>
            {/* <Separator /> */}
          </TabsList>

          <TabsContent value="homeTab" className="pt-2">
            <Separator />
            <div>
              <h1 className="relative z-10 pt-20 pb-20 font-sans text-lg font-bold text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
                Welcome!
              </h1>
            </div>
            <AspectRatio ratio={16 / 9} className=" bg-muted">
              <Image src="/3d.jpg" alt="Photo by Philip Oroni" fill className="pb-2 rounded-md" />
            </AspectRatio>
            <div className="fixed inset-x-0 flex flex-col items-center gap-2 bottom-5">
              <div className="flex justify-center gap-2 pt-2">
                <Button size="icon" onClick={toggleTheme}>
                  {theme === 'light' ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  )}
                </Button>
                <a href="https://github.com/vtonu">
                  <Button size="icon">
                    <GitHubLogoIcon />
                  </Button>
                </a>
              </div>
              <Separator />
              <div>
                <h1 className="pb-2 text-xs font-medium leading-none ">
                  Powered by Vercel, React, NextJS, Radix UI & TailwindCSS
                </h1>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="aboutTab" className="pt-2">
            <Card className="pt-2">
              <CardHeader>
                <CardDescription className="flex items-center justify-center text-center">
                  I&apos;m Victor, a creative individual constantly exploring new horizons. Graphic
                  Design is my forte, complemented by a bit of UI/UX. My fascination with AI
                  technology, computers, music &amp; gaming fuels my enthusiasm for innovative work.
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="fixed inset-x-0 flex flex-col items-center gap-2 bottom-5">
              <div className="flex justify-center gap-2 pt-2">
                <Button size="icon" onClick={toggleTheme}>
                  {theme === 'light' ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  )}
                </Button>
                <a href="https://github.com/vtonu">
                  <Button size="icon">
                    <GitHubLogoIcon />
                  </Button>
                </a>
              </div>
              <Separator />
              <div>
                <h1 className="pb-2 text-xs font-medium leading-none ">
                  Powered by Vercel, React, NextJS, Radix UI & TailwindCSS
                </h1>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="workTab" className="pt-2">
            <Card>
              <CardHeader>
                <CardContent>
                  <div className="text-center">
                    <a
                      href="https://github.com/vtonu/GraphicDesign_Portfolio"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`text-xl font-semibold my-8`}>Project 1</h2>
                      <p className={` max-w-[50ch] text-sm opacity-50`}>Mantine UI Portfolio</p>
                    </a>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
            <div className="fixed inset-x-0 flex flex-col items-center gap-2 bottom-5">
              <div className="flex justify-center gap-2 pt-2">
                <Button size="icon" onClick={toggleTheme}>
                  {theme === 'light' ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  )}
                </Button>
                <a href="https://github.com/vtonu">
                  <Button size="icon">
                    <GitHubLogoIcon />
                  </Button>
                </a>
              </div>
              <Separator />
              <div>
                <h1 className="pb-2 text-xs font-medium leading-none ">
                  Powered by Vercel, React, NextJS, Radix UI & TailwindCSS
                </h1>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </NoSSRThemeProvider>
  );
}
