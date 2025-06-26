"use client"

import Link from "next/link"
import { Moon, Menu, X, TrendingUp, Users, Globe, Wallet, ChevronDown, Bell } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [currency, setCurrency] = useState("GHS")
  const [onlineTraders] = useState(12)

  console.log("Enhanced Header rendered, current theme:", theme, "currency:", currency)

  const navigation = [
    { 
      name: "Trading", 
      href: "/trading",
      description: "Buy & Sell Crypto",
      icon: TrendingUp 
    },
    { 
      name: "Markets", 
      href: "/rates",
      description: "Live Rates & Charts",
      icon: Globe 
    },
    { 
      name: "Gift Cards", 
      href: "/gift-cards",
      description: "Trade Gift Cards",
      icon: Wallet 
    },
    { 
      name: "Stocks", 
      href: "/stocks",
      description: "Stock Predictions",
      icon: TrendingUp 
    },
    { 
      name: "Traders", 
      href: "/traders",
      description: "Verified Traders",
      icon: Users 
    }
  ]

  const userNavigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Wallet", href: "/wallet" },
    { name: "Transactions", href: "/transactions" },
    { name: "Settings", href: "/settings" },
    { name: "Support", href: "/support" }
  ]

  const toggleTheme = () => {
    console.log("Toggling theme from", theme, "to", theme === "dark" ? "light" : "dark")
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const currencyRates = {
    GHS: { symbol: "GH₵", rate: 1 },
    USD: { symbol: "$", rate: 0.095 },
    NGN: { symbol: "₦", rate: 142.86 }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl crypto-gradient shadow-crypto group-hover:shadow-crypto-hover transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl">CF</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold bg-gradient-to-r from-crypto-navy to-crypto-green bg-clip-text text-transparent">
                Crypto Flow
              </span>
              <div className="text-xs text-muted-foreground -mt-1">
                Africa's #1 Crypto Platform
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="nav-link flex items-center space-x-2 px-4 py-2 h-auto">
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 glass-card border-crypto-green/20">
                    <DropdownMenuItem asChild>
                      <Link href={item.href} className="flex items-center space-x-3 p-3">
                        <Icon className="h-4 w-4 text-crypto-green" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            })}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Live Traders Badge */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {onlineTraders} Traders Online
              </span>
            </div>

            {/* Currency Switcher */}
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-20 h-10 border-crypto-green/20 focus:border-crypto-green">
                <SelectValue>
                  <span className="font-medium">{currency}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="glass-card border-crypto-green/20">
                {Object.entries(currencyRates).map(([code, data]) => (
                  <SelectItem key={code} value={code}>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{data.symbol}</span>
                      <span>{code}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-crypto-green transition-colors"
            >
              <Moon className="h-5 w-5" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* User Menu - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" className="nav-link">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="crypto-button text-sm px-6 py-2">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] glass-card border-crypto-green/20">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 pb-6 border-b border-crypto-green/20">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl crypto-gradient">
                      <span className="text-white font-bold text-lg">CF</span>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-crypto-navy dark:text-crypto-green">
                        Crypto Flow
                      </span>
                      <div className="text-xs text-muted-foreground">
                        Africa's #1 Platform
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <div className="space-y-3">
                    {navigation.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-crypto-green hover:bg-crypto-green/10 transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="h-5 w-5" />
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>

                  {/* Mobile User Navigation */}
                  <div className="border-t border-crypto-green/20 pt-6 space-y-3">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-crypto-green hover:bg-crypto-green/10 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="space-y-3 pt-6 border-t border-crypto-green/20">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full crypto-button-outline">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full crypto-button">
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  {/* Mobile Live Traders */}
                  <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {onlineTraders} Verified Traders Online
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}