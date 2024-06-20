'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as React from 'react';
import { Car, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { FaceIcon, GitHubLogoIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CarouselOrientation } from './carouselCard';
import { AlertDemo } from './alertCard';

// Dynamic import of the ThemeProvider component from next-themes
const NoSSRThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider), {
  ssr: false,
});

export default function TabsDemo() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme('light'); // Set the theme to 'light' on initial render
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
            <TabsTrigger value="homeTab" className="rounded-lg">
              HOME
            </TabsTrigger>
            <TabsTrigger value="aboutTab" className="rounded-lg">
              ABOUT
            </TabsTrigger>
            <TabsTrigger value="workTab" className="rounded-lg">
              WORK
              {/* <Badge variant="outline" className="ml-2 bg-red-500">
                <a href="https://victortonu.myportfolio.com/home">Adobe Portfolio</a>
              </Badge> */}
            </TabsTrigger>
            <Button size="sm" onClick={toggleTheme} className="ml-2 mr-2">
              {theme === 'light' ? (
                <Moon className="h-[1rem] w-[1rem]" />
              ) : (
                <Sun className="h-[1rem] w-[1rem]" />
              )}
            </Button>
            <a href="https://github.com/vtonu">
              <Button size="sm">
                <GitHubLogoIcon />
              </Button>
            </a>
          </TabsList>

          <TabsContent value="homeTab" className="pt-2">
            <AlertDemo />
            <h1 className="relative z-10 pt-20 pb-10 font-sans text-lg font-bold text-center text-transparent md:text-7xl sm:text-lg bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
              Welcome!
            </h1>
            <div className="pt-2">
              <AspectRatio ratio={16 / 9}>
                <Image src="/3d.jpg" alt="Photo by Philip Oroni" fill className="rounded-md" />
              </AspectRatio>
            </div>
            {/* <div className="pt-2">
              <Separator />
            </div> */}
            <div className="fixed inset-x-0 flex flex-col items-center gap-2 bottom-5">
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
              <Separator />
              <div>
                <h1 className="pb-2 text-xs font-medium leading-none ">
                  Powered by Vercel, React, NextJS, Radix UI & TailwindCSS
                </h1>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="workTab" className="pt-2 ">
            <Tabs defaultValue="webDesignTab">
              <TabsList className="w-full">
                <TabsTrigger value="webDesignTab" className="rounded-lg">
                  WEB DESIGN
                </TabsTrigger>
                <TabsTrigger value="uiuxTab" className="rounded-lg">
                  UI/UX
                </TabsTrigger>
                <TabsTrigger value="3dworkTab" className="rounded-lg">
                  3D WORK
                </TabsTrigger>
              </TabsList>
              <TabsContent value="webDesignTab">
                <CardHeader>
                  <div className="text-center">
                    <a
                      href="https://shad-cn-ui.vercel.app/"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      {/* <h2 className={`text-xl font-semibold my-2`}>React</h2> */}

                      <p className={` max-w-[100ch] text-sm opacity-60 pb-2`}>
                        Personal portfolio project using React, NextJS, Radix UI, TailwindCSS &
                        shadcn/ui (v1.7)
                      </p>
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src="/3d.jpg"
                          alt="Photo by Victor Tonu"
                          fill
                          className="rounded-md"
                        />
                      </AspectRatio>
                    </a>
                    <div className="pt-2">
                      <Badge variant="outline" className="ml-2 bg-green-500">
                        <a href="https://shad-cn-ui.vercel.app/">More Info</a>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardHeader>
                  <div className="text-center">
                    <a
                      href="https://github.com/vtonu/GraphicDesign_Portfolio"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      {/* <h2 className={`text-xl font-semibold my-2`}>Mantine UI</h2> */}

                      <p className={` max-w-[100ch] text-sm opacity-60`}>
                        Minimal Mantine UI Project using React, NextJS and Tabler Icons (v0.5)
                      </p>
                      <AspectRatio ratio={16 / 8}>
                        <Image
                          src="/mantine.png"
                          alt="Photo by Victor Tonu"
                          fill
                          className="rounded-md"
                        />
                      </AspectRatio>
                    </a>
                    <div className="pt-2">
                      <Badge variant="outline" className="ml-2 bg-green-500">
                        <a href="https://github.com/vtonu/GraphicDesign_Portfolio">More Info</a>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardHeader>
                  <div className="text-center">
                    <a
                      href="https://game138-aceternity-ui.vercel.app/"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      {/* <h2 className={`text-xl font-semibold my-2`}>Aceternity UI</h2> */}

                      <p className={` max-w-[100ch] text-sm opacity-60 pb-2`}>
                        NextJS Project using React, TailwindCSS, Framer Motion - GAME138 Final
                        (v0.9)
                      </p>
                      <AspectRatio ratio={16 / 12}>
                        <Image
                          src="/aceternity.jpg"
                          alt="Photo by Victor Tonu"
                          fill
                          className="rounded-md"
                        />
                      </AspectRatio>
                    </a>
                    <div className="pt-2">
                      <Badge variant="outline" className="ml-2 bg-green-500">
                        <a href="https://game138-aceternity-ui.vercel.app/">More Info</a>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </TabsContent>
              <TabsContent value="uiuxTab">
                <CardHeader>
                  <div className="text-center">
                    <a
                      href="https://jarednovy.itch.io/mystery-meat"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      <h2 className={`text-xl font-semibold my-2`}>Mystery Meat</h2>
                      <p className={` max-w-[100ch] text-sm opacity-60 pb-2`}>
                        A horror-style game prototype in Unity for my last class project at LWTech.
                        I handled the UI/UX design, focusing on the overall aesthetic.
                      </p>
                      <AspectRatio ratio={16 / 12}>
                        <Image
                          src="/uiux.jpg"
                          alt="Photo by Victor Tonu UI UX"
                          fill
                          className="rounded-md"
                        />
                      </AspectRatio>
                    </a>
                    <div className="pt-2">
                      <Badge variant="outline" className="ml-2 bg-red-500">
                        <a href="https://jarednovy.itch.io/mystery-meat">More Info</a>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </TabsContent>
              <TabsContent value="3dworkTab" className="pt-8">
                <div className="flex flex-col items-center pt-8">
                  <CarouselOrientation />
                </div>
              </TabsContent>
            </Tabs>

            <div className="fixed inset-x-0 flex flex-col items-center gap-2 bottom-5">
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
