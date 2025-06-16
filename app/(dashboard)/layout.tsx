"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  RocketIcon,
  Home,
  Search,
  MessageSquare,
  Calendar,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Discover", href: "/discover", icon: Search },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Network", href: "/network", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  useEffect(() => {
    const photo = localStorage.getItem("userPhoto");
    if (photo) setPhotoURL(photo);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("userRole");
    auth.signOut(); // sign out from Firebase
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
        <div className="flex flex-1 flex-col bg-card px-2 py-4">
          <div className="flex items-center space-x-2 px-4 py-2">
            <RocketIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Startup Connect</span>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors ${isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <div className="px-4 py-2">
            <Button
              variant="outline"
              className="w-full justify-start space-x-2"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-72">
        <main className="py-6 px-6">
          {/* Top right avatar */}
          {photoURL && (
            <div className="flex justify-end mb-4">
              <img
                src={photoURL}
                alt="User Avatar"
                className="h-10 w-10 rounded-full border border-gray-300"
              />
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
