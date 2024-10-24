import previewImage from "@/app/preview.png";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

import Head from "next/head";

export const metadata = {
  title: "Quick Tab Search - Effortlessly Navigate Your Browser Tabs",
  description:
    "Quick Tab Search is a powerful Chrome extension for efficient tab management. Search and switch between tabs instantly with keyboard shortcuts.",
  openGraph: {
    title: "Quick Tab Search - Effortlessly Navigate Your Browser Tabs",
    description:
      "Quick Tab Search is a powerful Chrome extension for efficient tab management. Search and switch between tabs instantly with keyboard shortcuts.",
    images: [
      {
        url: "https://quicktabsearch.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quick Tab Search Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Tab Search - Effortlessly Navigate Your Browser Tabs",
    description:
      "Quick Tab Search is a powerful Chrome extension for efficient tab management. Search and switch between tabs instantly with keyboard shortcuts.",
    images: ["https://quicktabsearch.vercel.app/x-image.jpg"],
    creator: "@lokeshkavisth",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://quicktabsearch.vercel.app/" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <nav className="bg-background border-b">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Search className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">QuickTabSearch</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/lokeshkavisth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/lokeshkavisth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>
        </nav>

        <div className="flex-grow container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">Quick Tab Search</h1>
            <p className="text-xl text-muted-foreground">
              Effortlessly navigate your browser tabs
            </p>
          </header>

          <div className="mb-12 relative w-full aspect-video">
            <Image
              src={previewImage}
              alt="Quick Tab Search Extension in action"
              layout="fill"
              loading="lazy"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          <main>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>About Quick Tab Search</CardTitle>
                <CardDescription>
                  A powerful Chrome extension for efficient tab management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Quick Tab Search is a Chrome extension that allows you to
                  quickly search and switch between your open tabs. With
                  keyboard shortcuts and a user-friendly interface, it&apos;s
                  never been easier to manage your browsing sessions.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={"https://quicktabsearch.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default" })}
                >
                  Install Extension
                </Link>
              </CardFooter>
            </Card>

            <Tabs defaultValue="features" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="usage">How to Use</TabsTrigger>
              </TabsList>
              <TabsContent value="features">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Instant tab search</li>
                      <li>Keyboard navigation</li>
                      <li>Dark mode support</li>
                      <li>Favicon display for easy identification</li>
                      <li>Responsive and intuitive UI</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="usage">
                <Card>
                  <CardHeader>
                    <CardTitle>How to Use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Click the extension icon or use the keyboard shortcut
                        (Ctrl+Shift+F / Cmd+Shift+F) to open the search popup
                      </li>
                      <li>Start typing to search for tabs by title or URL</li>
                      <li>Use arrow keys to navigate through the results</li>
                      <li>Press Enter to switch to the selected tab</li>
                      <li>
                        Click the theme toggle to switch between light and dark
                        modes
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>

        <footer className="bg-background border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p className="mb-4">
              &copy; {new Date().getFullYear()} Quick Tab Search. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
