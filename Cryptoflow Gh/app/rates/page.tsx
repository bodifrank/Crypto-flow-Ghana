"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { TrendingUp, TrendingDown, RefreshCw, Bitcoin, DollarSign, Gift } from "lucide-react"
import Link from "next/link"

export default function RatesPage() {
  const [isGHS, setIsGHS] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  console.log("Rates page rendered, showing currency:", isGHS ? "GHS" : "USD")

  // Mock crypto rates (reduced by 10% as specified)
  const cryptoRates = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      icon: "₿",
      buyPrice: isGHS ? 522500 : 49762,
      sellPrice: isGHS ? 525000 : 50000,
      change: 2.5,
      volume: "1.2M"
    },
    {
      symbol: "ETH", 
      name: "Ethereum",
      icon: "Ξ",
      buyPrice: isGHS ? 36750 : 3500,
      sellPrice: isGHS ? 36890 : 3513,
      change: -1.8,
      volume: "856K"
    },
    {
      symbol: "USDT",
      name: "Tether",
      icon: "₮",
      buyPrice: isGHS ? 10.45 : 0.995,
      sellPrice: isGHS ? 10.50 : 1.00,
      change: 0.1,
      volume: "2.8M"
    },
    {
      symbol: "BNB",
      name: "Binance Coin", 
      icon: "BNB",
      buyPrice: isGHS ? 6825 : 650,
      sellPrice: isGHS ? 6880 : 655,
      change: 3.2,
      volume: "425K"
    },
    {
      symbol: "ADA",
      name: "Cardano",
      icon: "₳",
      buyPrice: isGHS ? 7.35 : 0.70,
      sellPrice: isGHS ? 7.40 : 0.705,
      change: -0.5,
      volume: "312K"
    },
    {
      symbol: "XRP",
      name: "Ripple",
      icon: "XRP",
      buyPrice: isGHS ? 5.25 : 0.50,
      sellPrice: isGHS ? 5.30 : 0.505,
      change: 1.2,
      volume: "680K"
    }
  ]

  // Mock gift card rates
  const giftCardRates = [
    {
      name: "Amazon",
      country: "USA",
      buyRate: isGHS ? 8.50 : 0.81,
      sellRate: isGHS ? 9.45 : 0.90,
      flag: "🇺🇸"
    },
    {
      name: "iTunes",
      country: "USA", 
      buyRate: isGHS ? 8.00 : 0.76,
      sellRate: isGHS ? 8.95 : 0.85,
      flag: "🇺🇸"
    },
    {
      name: "Google Play",
      country: "USA",
      buyRate: isGHS ? 7.50 : 0.71,
      sellRate: isGHS ? 8.40 : 0.80,
      flag: "🇺🇸"
    },
    {
      name: "Steam",
      country: "USA",
      buyRate: isGHS ? 8.20 : 0.78,
      sellRate: isGHS ? 9.20 : 0.88,
      flag: "🇺🇸"
    },
    {
      name: "Visa",
      country: "USA",
      buyRate: isGHS ? 9.00 : 0.86,
      sellRate: isGHS ? 9.95 : 0.95,
      flag: "🇺🇸"
    }
  ]

  const handleRefresh = () => {
    console.log("Refreshing rates...")
    setRefreshing(true)
    setTimeout(() => {
      setLastUpdate(new Date())
      setRefreshing(false)
    }, 1500)
  }

  const formatPrice = (price: number) => {
    if (isGHS) {
      return `GH₵ ${price.toLocaleString()}`
    }
    return `$ ${price.toFixed(3)}`
  }

  const formatRate = (rate: number) => {
    if (isGHS) {
      return `GH₵ ${rate.toFixed(2)}`
    }
    return `$ ${rate.toFixed(3)}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-crypto-light dark:bg-crypto-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-crypto-navy dark:text-white mb-2">
                  Current Market Rates
                </h1>
                <p className="text-muted-foreground">
                  Live cryptocurrency and gift card rates updated every minute
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="currency-toggle" className="text-sm">USD</Label>
                  <Switch
                    id="currency-toggle"
                    checked={isGHS}
                    onCheckedChange={setIsGHS}
                  />
                  <Label htmlFor="currency-toggle" className="text-sm">GHS</Label>
                </div>
                
                <Button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mt-4">
              <Badge variant="secondary">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </Badge>
              <Badge className="bg-crypto-green/10 text-crypto-green border-crypto-green/20">
                Our rates are 10% better than market average
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="crypto" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="crypto" className="flex items-center space-x-2">
                <Bitcoin className="h-4 w-4" />
                <span>Cryptocurrency</span>
              </TabsTrigger>
              <TabsTrigger value="giftcards" className="flex items-center space-x-2">
                <Gift className="h-4 w-4" />
                <span>Gift Cards</span>
              </TabsTrigger>
            </TabsList>

            {/* Cryptocurrency Rates */}
            <TabsContent value="crypto" className="space-y-4">
              <div className="grid gap-4">
                {cryptoRates.map((crypto, index) => (
                  <Card key={index} className="crypto-card hover:scale-[1.02] transition-transform">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-crypto-green/10">
                            <span className="text-lg font-bold text-crypto-green">{crypto.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-crypto-navy dark:text-white">
                              {crypto.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">{crypto.symbol}</span>
                              <Badge variant={crypto.change >= 0 ? "default" : "destructive"} className="text-xs">
                                {crypto.change >= 0 ? (
                                  <TrendingUp className="h-3 w-3 mr-1" />
                                ) : (
                                  <TrendingDown className="h-3 w-3 mr-1" />
                                )}
                                {Math.abs(crypto.change)}%
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right space-y-2">
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground mb-1">Buy</div>
                              <div className="text-lg font-bold text-emerald-600">
                                {formatPrice(crypto.buyPrice)}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground mb-1">Sell</div>
                              <div className="text-lg font-bold text-blue-600">
                                {formatPrice(crypto.sellPrice)}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Vol: {crypto.volume}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                          <Link href="/buy">Buy {crypto.symbol}</Link>
                        </Button>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                          <Link href="/sell">Sell {crypto.symbol}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Gift Cards Rates */}
            <TabsContent value="giftcards" className="space-y-4">
              <div className="grid gap-4">
                {giftCardRates.map((card, index) => (
                  <Card key={index} className="crypto-card hover:scale-[1.02] transition-transform">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900">
                            <span className="text-2xl">{card.flag}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-crypto-navy dark:text-white">
                              {card.name} Gift Card
                            </h3>
                            <span className="text-sm text-muted-foreground">{card.country}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground mb-1">Buy Rate</div>
                              <div className="text-lg font-bold text-emerald-600">
                                {formatRate(card.buyRate)}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground mb-1">Sell Rate</div>
                              <div className="text-lg font-bold text-blue-600">
                                {formatRate(card.sellRate)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                          <Link href="/gift-cards">Buy Card</Link>
                        </Button>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                          <Link href="/gift-cards">Sell Card</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="crypto-card mt-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-crypto-navy dark:text-white mb-4">
                Ready to Start Trading?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of users who trust Crypto Flow for secure and profitable trading
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="crypto-button" asChild>
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}