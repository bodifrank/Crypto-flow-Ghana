"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CreditCard, 
  TrendingUp, 
  Wallet, 
  Eye, 
  BookmarkPlus, 
  Bell, 
  Palette, 
  ShoppingCart,
  DollarSign,
  Gift,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Settings,
  Plus,
  RefreshCw,
  Star,
  Bot,
  Zap,
  Shield,
  Target,
  Award,
  Coins,
  PieChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Globe,
  MessageSquare,
  Download,
  Upload,
  History,
  Calculator,
  Smartphone,
  Banknote,
  CreditCard as BankIcon
} from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [currency, setCurrency] = useState("GHS")
  console.log("Enhanced Dashboard page rendered, currency:", currency)

  // Enhanced dashboard tiles with more features
  const dashboardTiles = [
    {
      title: "Buy Crypto",
      description: "Purchase 50+ cryptocurrencies instantly",
      icon: ShoppingCart,
      href: "/buy",
      color: "from-emerald-500 to-green-600",
      stats: "50+ Coins",
      trending: "+12%",
      featured: true
    },
    {
      title: "Sell Crypto",
      description: "Convert crypto to cash in seconds",
      icon: DollarSign,
      href: "/sell", 
      color: "from-blue-500 to-blue-600",
      stats: "Instant Payout",
      trending: "24/7",
      featured: true
    },
    {
      title: "Gift Cards",
      description: "Trade 200+ global gift cards",
      icon: Gift,
      href: "/gift-cards",
      color: "from-purple-500 to-purple-600",
      stats: "200+ Cards",
      trending: "+8%"
    },
    {
      title: "Stock Trading",
      description: "AI-powered stock predictions",
      icon: BarChart3,
      href: "/stocks",
      color: "from-orange-500 to-red-500",
      stats: "85% Accuracy",
      trending: "+15%",
      featured: true
    },
    {
      title: "My Wallet",
      description: "Multi-currency wallet management",
      icon: Wallet,
      href: "/wallet",
      color: "from-crypto-green to-emerald-500",
      stats: "Multi-crypto",
      trending: "Secure"
    },
    {
      title: "Live Rates",
      description: "Real-time market analytics",
      icon: Eye,
      href: "/rates",
      color: "from-indigo-500 to-blue-500",
      stats: "Live Data",
      trending: "Real-time"
    },
    {
      title: "Crypto Swap",
      description: "Exchange crypto instantly",
      icon: RefreshCw,
      href: "/swap",
      color: "from-teal-500 to-cyan-500",
      stats: "0% Fees",
      trending: "New!",
      isNew: true
    },
    {
      title: "Savings",
      description: "Earn up to 15% APY",
      icon: PieChart,
      href: "/savings",
      color: "from-yellow-500 to-orange-500",
      stats: "15% APY",
      trending: "+3%"
    },
    {
      title: "AI Assistant",
      description: "24/7 trading bot support",
      icon: Bot,
      href: "/ai-assistant",
      color: "from-pink-500 to-rose-500",
      stats: "24/7 Active",
      trending: "AI",
      isNew: true
    },
    {
      title: "Beneficiaries",
      description: "Saved payment methods",
      icon: BookmarkPlus,
      href: "/beneficiaries",
      color: "from-gray-500 to-gray-600",
      stats: "Quick Access",
      trending: "Saved"
    },
    {
      title: "Notifications", 
      description: "Trading alerts & updates",
      icon: Bell,
      href: "/notifications",
      color: "from-red-500 to-pink-500",
      stats: "5 New",
      trending: "Alert"
    },
    {
      title: "Settings",
      description: "Account & security settings",
      icon: Settings,
      href: "/settings",
      color: "from-slate-500 to-gray-600",
      stats: "Security",
      trending: "Safe"
    }
  ]

  // Enhanced wallet balance with more currencies
  const walletBalance = {
    totalUSD: 12450.75,
    totalGHS: 130780.88,
    totalNGN: 18675000,
    assets: [
      { symbol: "BTC", name: "Bitcoin", amount: "0.25", usdValue: 10125.50, change: 2.5, icon: "₿" },
      { symbol: "ETH", name: "Ethereum", amount: "3.2", usdValue: 1875.25, change: -1.2, icon: "Ξ" },
      { symbol: "USDT", name: "Tether", amount: "450.00", usdValue: 450.00, change: 0.1, icon: "₮" },
      { symbol: "GHS", name: "Ghana Cedis", amount: "5250.50", usdValue: 500.05, change: 0, icon: "₵" }
    ]
  }

  // Recent activity with more detail
  const recentActivity = [
    {
      type: "buy",
      crypto: "BTC",
      amount: "0.05",
      value: currency === "GHS" ? "GHS 5,250" : currency === "USD" ? "$500" : "₦750,000",
      status: "completed",
      time: "2 mins ago",
      txId: "TX123456789"
    },
    {
      type: "sell", 
      crypto: "ETH",
      amount: "1.5",
      value: currency === "GHS" ? "GHS 7,350" : currency === "USD" ? "$700" : "₦1,050,000",
      status: "pending",
      time: "15 mins ago",
      txId: "TX987654321"
    },
    {
      type: "gift_card",
      crypto: "Amazon",
      amount: "$100",
      value: currency === "GHS" ? "GHS 945" : currency === "USD" ? "$90" : "₦135,000",
      status: "completed",
      time: "1 hour ago",
      txId: "GC456789123"
    },
    {
      type: "stock",
      crypto: "AAPL",
      amount: "10 shares",
      value: currency === "GHS" ? "GHS 2,100" : currency === "USD" ? "$200" : "₦300,000",
      status: "profit",
      time: "3 hours ago",
      txId: "ST789123456"
    }
  ]

  // Quick action buttons
  const quickActions = [
    { icon: Plus, label: "Fund Wallet", href: "/fund-wallet", color: "from-green-500 to-emerald-500" },
    { icon: Download, label: "Withdraw", href: "/withdraw", color: "from-blue-500 to-cyan-500" },
    { icon: RefreshCw, label: "Swap", href: "/swap", color: "from-purple-500 to-pink-500" },
    { icon: Upload, label: "Send", href: "/send", color: "from-orange-500 to-red-500" }
  ]

  // Performance metrics
  const performanceMetrics = [
    { label: "Portfolio Growth", value: "+24.5%", period: "30 days", color: "text-green-500", icon: TrendingUp },
    { label: "Total Trades", value: "147", period: "This month", color: "text-blue-500", icon: BarChart3 },
    { label: "Success Rate", value: "94.2%", period: "All time", color: "text-emerald-500", icon: Target },
    { label: "Referral Earnings", value: "$45.50", period: "Available", color: "text-purple-500", icon: Award }
  ]

  // Live traders online
  const liveTraders = [
    { name: "Kwame A.", rating: 4.9, trades: 1250, status: "online", specialty: "BTC/ETH" },
    { name: "Sarah M.", rating: 4.8, trades: 890, status: "online", specialty: "Gift Cards" },
    { name: "John D.", rating: 5.0, trades: 2100, status: "busy", specialty: "Stocks" },
    { name: "Fatima I.", rating: 4.7, trades: 670, status: "online", specialty: "USDT" }
  ]

  const currencySymbols = {
    GHS: "GH₵",
    USD: "$", 
    NGN: "₦"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-gradient-to-br from-crypto-light via-white to-crypto-green/5 dark:from-crypto-dark dark:via-gray-900 dark:to-crypto-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section - Enhanced */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16 ring-4 ring-crypto-green/20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-crypto-green to-emerald-500 text-white text-lg font-bold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-crypto-navy dark:text-white">
                    Welcome back, John Doe
                  </h1>
                  <p className="text-muted-foreground flex items-center space-x-2">
                    <span>Ready to dominate the markets today?</span>
                    <Badge className="bg-crypto-green/10 text-crypto-green border-crypto-green/20">
                      <div className="w-2 h-2 bg-crypto-green rounded-full mr-2 animate-pulse"></div>
                      Premium Trader
                    </Badge>
                  </p>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center space-x-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <Link key={index} href={action.href}>
                      <Button className={`bg-gradient-to-r ${action.color} text-white hover:scale-105 transition-all duration-300 shadow-lg`}>
                        <Icon className="h-4 w-4 mr-2" />
                        {action.label}
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <div className="xl:col-span-3 space-y-8">
              {/* Portfolio Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="crypto-card-premium lg:col-span-2">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center space-x-2">
                        <Wallet className="h-6 w-6 text-crypto-green" />
                        <span>Portfolio Overview</span>
                      </span>
                      <div className="flex items-center space-x-2">
                        <select 
                          value={currency} 
                          onChange={(e) => setCurrency(e.target.value)}
                          className="bg-transparent border border-crypto-green/30 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-crypto-green"
                        >
                          <option value="GHS">GHS</option>
                          <option value="USD">USD</option>
                          <option value="NGN">NGN</option>
                        </select>
                        <Button size="sm" variant="ghost">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-crypto-navy dark:text-white mb-2">
                        {currencySymbols[currency as keyof typeof currencySymbols]}{" "}
                        {currency === "GHS" ? walletBalance.totalGHS.toLocaleString() :
                         currency === "USD" ? walletBalance.totalUSD.toLocaleString() :
                         walletBalance.totalNGN.toLocaleString()}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-emerald-500 font-medium">+24.5%</span>
                        <span className="text-muted-foreground">from last month</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {walletBalance.assets.map((asset, index) => (
                        <div key={index} className="bg-crypto-green/5 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-crypto-green">{asset.icon}</span>
                              <span className="font-medium">{asset.symbol}</span>
                            </div>
                            <div className={`text-sm font-medium ${
                              asset.change > 0 ? 'text-emerald-500' : 
                              asset.change < 0 ? 'text-red-500' : 'text-muted-foreground'
                            }`}>
                              {asset.change > 0 ? '+' : ''}{asset.change}%
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground mb-1">{asset.amount} {asset.symbol}</div>
                          <div className="font-semibold">${asset.usdValue.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="crypto-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {performanceMetrics.map((metric, index) => {
                      const Icon = metric.icon
                      return (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-current to-current/70 ${metric.color} flex items-center justify-center`}>
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{metric.label}</div>
                              <div className="text-xs text-muted-foreground">{metric.period}</div>
                            </div>
                          </div>
                          <div className={`font-bold ${metric.color}`}>{metric.value}</div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* Dashboard Tiles - Enhanced */}
              <Card className="crypto-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-crypto-green" />
                    <span>Trading Hub</span>
                  </CardTitle>
                  <CardDescription>Access all platform features and tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {dashboardTiles.map((tile, index) => {
                      const Icon = tile.icon
                      return (
                        <Link key={index} href={tile.href}>
                          <Card className="dashboard-tile border-2 hover:border-crypto-green/30 group">
                            <CardContent className="p-4">
                              <div className="flex flex-col space-y-3">
                                <div className="flex items-center justify-between">
                                  <div className={`dashboard-tile-icon bg-gradient-to-br ${tile.color} group-hover:scale-110`}>
                                    <Icon className="h-6 w-6" />
                                  </div>
                                  {tile.featured && (
                                    <Badge className="bg-crypto-gold/20 text-crypto-gold border-crypto-gold/30 text-xs">
                                      HOT
                                    </Badge>
                                  )}
                                  {tile.isNew && (
                                    <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 text-xs">
                                      NEW
                                    </Badge>
                                  )}
                                </div>
                                <div>
                                  <h3 className="font-bold text-crypto-navy dark:text-white mb-1">
                                    {tile.title}
                                  </h3>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {tile.description}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <Badge variant="secondary" className="text-xs">
                                      {tile.stats}
                                    </Badge>
                                    <span className="text-xs font-medium text-crypto-green">
                                      {tile.trending}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="crypto-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <History className="h-5 w-5 text-crypto-green" />
                      <span>Recent Activity</span>
                    </span>
                    <Link href="/transactions">
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-crypto-green/5 rounded-xl hover:bg-crypto-green/10 transition-colors">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                        activity.type === 'buy' ? 'bg-emerald-500' : 
                        activity.type === 'sell' ? 'bg-blue-500' : 
                        activity.type === 'gift_card' ? 'bg-purple-500' : 'bg-orange-500'
                      }`}>
                        {activity.type === 'buy' ? <ArrowDownRight className="h-5 w-5 text-white" /> :
                         activity.type === 'sell' ? <ArrowUpRight className="h-5 w-5 text-white" /> :
                         activity.type === 'gift_card' ? <Gift className="h-5 w-5 text-white" /> :
                         <BarChart3 className="h-5 w-5 text-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{activity.crypto}</span>
                          <span className="text-sm text-muted-foreground">{activity.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{activity.amount}</span>
                          <Badge 
                            variant={
                              activity.status === 'completed' ? 'default' : 
                              activity.status === 'profit' ? 'default' : 'secondary'
                            } 
                            className={
                              activity.status === 'completed' ? 'bg-emerald-500/20 text-emerald-600' :
                              activity.status === 'profit' ? 'bg-green-500/20 text-green-600' :
                              'bg-yellow-500/20 text-yellow-600'
                            }
                          >
                            {activity.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold text-crypto-green">{activity.value}</div>
                          <div className="text-xs text-muted-foreground">{activity.txId}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Live Traders */}
              <Card className="crypto-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Users className="h-5 w-5 text-crypto-green" />
                    <span>Live Traders</span>
                    <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
                      {liveTraders.filter(t => t.status === 'online').length} Online
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {liveTraders.map((trader, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-crypto-green/5 rounded-lg hover:bg-crypto-green/10 transition-colors cursor-pointer">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-crypto-green text-white text-sm">
                            {trader.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          trader.status === 'online' ? 'bg-green-500' : 
                          trader.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm truncate">{trader.name}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-crypto-gold text-crypto-gold" />
                            <span className="text-xs">{trader.rating}</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{trader.specialty}</div>
                        <div className="text-xs text-muted-foreground">{trader.trades} trades</div>
                      </div>
                    </div>
                  ))}
                  <Link href="/traders">
                    <Button variant="outline" className="w-full" size="sm">
                      View All Traders
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Market Alerts */}
              <Card className="crypto-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-crypto-green" />
                    <span>Market Alerts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">BTC Rising</div>
                        <div className="text-xs text-muted-foreground">Up 5.2% in last hour</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <Target className="h-4 w-4 text-blue-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Trade Goal Reached</div>
                        <div className="text-xs text-muted-foreground">Weekly target: 100%</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <Gift className="h-4 w-4 text-purple-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">New Gift Cards</div>
                        <div className="text-xs text-muted-foreground">Steam cards available</div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <Bell className="mr-2 h-4 w-4" />
                    Manage Alerts
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="crypto-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/become-trader">
                    <Button variant="ghost" className="w-full justify-start hover:bg-crypto-green/10 hover:text-crypto-green">
                      <Users className="mr-3 h-4 w-4" />
                      Become a Trader
                    </Button>
                  </Link>
                  <Link href="/referral">
                    <Button variant="ghost" className="w-full justify-start hover:bg-crypto-green/10 hover:text-crypto-green">
                      <Award className="mr-3 h-4 w-4" />
                      Referral Program
                    </Button>
                  </Link>
                  <Link href="/ai-assistant">
                    <Button variant="ghost" className="w-full justify-start hover:bg-crypto-green/10 hover:text-crypto-green">
                      <Bot className="mr-3 h-4 w-4" />
                      AI Trading Assistant
                    </Button>
                  </Link>
                  <Link href="/support">
                    <Button variant="ghost" className="w-full justify-start hover:bg-crypto-green/10 hover:text-crypto-green">
                      <MessageSquare className="mr-3 h-4 w-4" />
                      24/7 Support
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button variant="ghost" className="w-full justify-start hover:bg-crypto-green/10 hover:text-crypto-green">
                      <Settings className="mr-3 h-4 w-4" />
                      Account Settings
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* VIP Upgrade */}
              <Card className="crypto-card-premium border-crypto-gold/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-crypto-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-crypto-navy dark:text-white mb-2">
                    Upgrade to VIP
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get access to premium features, lower fees, and priority support
                  </p>
                  <Button className="crypto-button-premium w-full">
                    Upgrade Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}