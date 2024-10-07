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
        <Tabs defaultValue="homeTab" className="w-[490px] pt-8">
          <TabsList className="w-full p-8">
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
            <h1 className="relative z-10 pt-20 pb-8 font-sans font-bold text-center text-transparent text-7xl bg-clip-text bg-gradient-to-b from-purple-100 to-neutral-700">
              Welcome!
            </h1>
            <p className="flex items-center justify-center text-sm text-center">
              On this website you&apos;ll find a collection of my work, ranging from Graphic Design
              to UI/UX and 3D projects. Feel free to explore and reach out if you have any questions
              or inquiries. Don&apos;t forget to check out my GitHub for more projects.
            </p>
            <div className="px-2 pt-2 text-center">
              <AspectRatio ratio={4 / 3}>
                <Image src="/purpleBackground.jpg" alt="Home Banner" fill className="rounded-lg" />
              </AspectRatio>
              <br></br>
              <br></br>
              Thanks for stopping by!
            </div>

            {/* Home Tab Footer */}
            <div className="fixed inset-x-0 bottom-0 flex flex-col items-center">
              <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] h-[50px]">
                <h1 className="p-2 text-xs font-medium">
                  Powered by Vercel, React, NextJS, Radix UI & TailwindCSS
                </h1>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="aboutTab" className="pt-2">
            <Card className="pt-2">
              <CardHeader>
                <CardDescription className="flex items-center justify-center text-center">
                  Hey, I&apos;m Victor, a creative individual constantly exploring new horizons.
                  Graphic Design is my forte, complemented by a bit of UI/UX. My fascination with AI
                  technology, computers, music &amp; gaming fuels my enthusiasm for innovative work.
                  Don&apos;t forget to check out my GitHub for more projects.
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="px-2 pt-2 text-center">
              <AspectRatio ratio={4 / 3}>
                <Image src="/purpleBackground.jpg" alt="Home Banner" fill className="rounded-lg" />
              </AspectRatio>
              <br></br>
              <br></br>
              Thanks for stopping by!
            </div>

            {/* About Tab Footer */}
            <div className="fixed inset-x-0 bottom-0 flex flex-col items-center">
              <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] h-[50px]">
                <h1 className="p-2 text-xs font-medium">
                  Powered by Vercel, React, NextJS, Radix UI & TailwindCSS
                </h1>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="workTab" className="pt-2 ">
            <div className="pb-4">
              <AspectRatio ratio={16 / 2}>
                <Image
                  src="/greenBackground.jpg"
                  alt="Typography Rhythms"
                  fill
                  className="rounded-md"
                />
              </AspectRatio>
            </div>
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
                      href="https://github.com/vtonu/ShadCN_UI"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      {/* <h2 className={`text-xl font-semibold my-2`}>React</h2> */}

                      <p className={` max-w-[100ch] text-sm opacity-60 pb-2`}>
                        Personal portfolio website using React, shadcn/ui, NextJS, Radix UI &
                        TailwindCSS (v2.1)
                      </p>
                      {/* <AspectRatio ratio={16 / 9}>
                        <Image
                          src="/3d.jpg"
                          alt="Photo by Victor Tonu"
                          fill
                          className="rounded-md"
                        />
                      </AspectRatio> */}
                    </a>
                    {/* <div className="pt-0">
                      <Badge variant="outline" className="ml-2 bg-green-500">
                        <a href="https://shad-cn-ui.vercel.app/">More Info</a>
                      </Badge>
                    </div> */}
                    <div className="pt-0">
                      <Badge variant="outline" className="ml-2 bg-slate-400">
                        <a href="https://github.com/vtonu/ShadCN_UI">More Info</a>
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
                        🔵 Minimal Mantine Project using React, NextJS, Tabler Icons v0.5
                      </p>
                    </a>
                    <div className="pt-0">
                      <Badge variant="outline" className="ml-2 bg-sky-400">
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
                        🚀 NextJS Project using React, TailwindCSS, Framer Motion - GAME138 Final
                        (v1.0)
                      </p>
                    </a>
                    <div className="pt-0">
                      <Badge variant="outline" className="ml-2 bg-green-400">
                        <a href="https://game138-aceternity-ui.vercel.app/">More Info</a>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardHeader>
                  <div className="text-center">
                    <a
                      href="https://github.com/vtonu/meter-electric"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      {/* <h2 className={`text-xl font-semibold my-2`}>Aceternity UI</h2> */}

                      <p className={` max-w-[100ch] text-sm opacity-60 pb-2`}>
                        ⚡ Meter Electric Landing Page - Shadcn, NextJS, TypeScript, TailwindCSS
                        (v1.3)
                      </p>
                    </a>
                    <div className="pt-0">
                      <Badge variant="outline" className="ml-2 bg-blue-400">
                        <a href="https://github.com/vtonu/meter-electric">More Info</a>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardHeader>
                  <div className="pb-10 text-center">
                    {' '}
                    {/* pb-10 basically gap for the last element of this tab so the footer can breathe (causes browser scroll, just a bit) */}
                    <a
                      href="https://meterelectric-new.vercel.app/"
                      className="block p-2 mx-4 mb-2 transition-colors border rounded-lg opacity-75 pb group hover:bg-zinc-100/5 hover:ring-zinc-600"
                      target="_blank"
                      rel="noopener noreferrer">
                      {/* <h2 className={`text-xl font-semibold my-2`}>Aceternity UI</h2> */}

                      <p className={` max-w-[100ch] text-sm opacity-60 pb-2`}>
                        🌲 Minimal landing page using React, Vite, HMR, TailwindCSS, ESLint template
                        (ME v1.8)
                      </p>
                    </a>
                    <div className="pt-0">
                      <Badge variant="outline" className="ml-2 bg-blue-400">
                        <a href="https://meterelectric-new.vercel.app/">More Info</a>
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
                        A horror game prototype in Unity, from my last game class at LWTech. I
                        handled the UI/UX design, focusing on the overall aesthetic.
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
                    {/* <div className="pt-0">
                      <Badge variant="outline" className="ml-2 bg-red-500">
                        <a href="https://jarednovy.itch.io/mystery-meat">More Info</a>
                      </Badge>
                    </div> */}
                  </div>
                </CardHeader>
              </TabsContent>
              <TabsContent value="3dworkTab" className="pt-0">
                <CardHeader>
                  <div className="block p-2 mx-2 text-center border rounded-lg opacity-75">
                    <p className={` max-w-[100ch] text-sm opacity-60 `}>
                      A combination of 3D stuff from other classes I took at LWTech, such as Intro
                      to Maya, 3D Environment or ZBrush.
                    </p>
                  </div>
                </CardHeader>
                <div className="flex flex-col items-center">
                  <CarouselOrientation />
                </div>
              </TabsContent>
            </Tabs>

            {/* Work Tab Footer */}
            <div className="fixed inset-x-0 bottom-0 flex flex-col items-center">
              <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] h-[50px]">
                <h1 className="p-2 text-xs font-medium">
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
