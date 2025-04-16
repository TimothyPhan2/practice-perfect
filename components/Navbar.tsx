"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOut } from "@/lib/actions/auth.action";
import { toast } from "sonner";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = ({ isAuthenticated }: NavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary",
          isActive 
            ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary"
            : "text-muted-foreground"
        )}
      >
        {label}
      </Link>
    );
  };

  const handleSignOut = async () => {
    const result = await signOut();
    if (!result?.success) {
      toast.error(result?.message);
      return;
    }
    toast.success('Signed out successfully!');
    router.push('/');
  };

  const handleSignOutMobile = async () => {
    setIsMobileMenuOpen(false);
    const result = await signOut();
    if (!result?.success) {
      toast.error(result?.message);
      return;
    }
    toast.success('Signed out successfully!');
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="Practice Perfect Logo" 
            width={40} 
            height={40}
            className="object-contain"
          />
          <span className="font-bold text-xl hidden sm:inline-block">Practice Perfect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {isAuthenticated ? (
            // Authenticated Navigation
            <>
              <NavLink href="/dashboard" label="Dashboard" />
              <NavLink href="/interview" label="Interviews" />
              <NavLink href="/profile" label="Profile" />
              <Button size="sm" variant="destructive" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            // Unauthenticated Navigation
            <>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 px-6 border-t space-y-4 bg-background">
          {isAuthenticated ? (
            // Authenticated Mobile Navigation
            <>
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/dashboard" 
                  className={cn(
                    "text-base",
                    pathname === '/dashboard' ? "font-medium text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/interviews" 
                  className={cn(
                    "text-base",
                    pathname === '/interviews' ? "font-medium text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Interviews
                </Link>
                <Link 
                  href="/profile" 
                  className={cn(
                    "text-base",
                    pathname === '/profile' ? "font-medium text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button size="sm" variant="destructive" onClick={handleSignOutMobile}>
                  Sign Out
                </Button>
              </div>
            </>
          ) : (
            // Unauthenticated Mobile Navigation
            <>
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/features" 
                  className={cn(
                    "text-base",
                    pathname === '/features' ? "font-medium text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className={cn(
                    "text-base",
                    pathname === '/pricing' ? "font-medium text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/about" 
                  className={cn(
                    "text-base",
                    pathname === '/about' ? "font-medium text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button variant="outline" asChild className="w-full justify-center">
                    <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                  </Button>
                  <Button asChild className="w-full justify-center">
                    <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
