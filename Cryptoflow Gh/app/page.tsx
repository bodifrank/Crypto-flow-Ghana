"use client"

import Link from "next/link"
import { ArrowRight, Zap, Shield, Globe, Wallet, Lock, Users, TrendingUp, Clock, Headphones, CheckCircle2, Star, BarChart3, Gift, DollarSign, Sparkles, Target, Award, Coins, Bot, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  console.log("Enhanced Home page rendered")

  const features = [
    {
      icon: Wallet,
      title: "Multi-Crypto Wallet",
      description: "Store BTC, ETH, USDT and 50+ cryptocurrencies with bank-grade security",
      color: "from-crypto-green to-emerald-400"
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Multi-factor authentication, biometric security, and cold storage protection",
      color: "from-crypto-navy to-blue-600"
    },
    {
      icon: Users,
      title: "Verified Traders",
      description: "Trade with KYC-verified professionals with 99.8% success rate",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "AI-powered market insights with predictive trading signals",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Gift,
      title: "Gift Card Exchange",
      description: "Trade 200+ global gift cards at premium rates with instant settlement",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Stock Predictions",
      description: "AI-assisted stock market predictions with 85% accuracy rate",
      color: "from-green-500 to-teal-500"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Instant Registration",
      description: "Sign up in 30 seconds with SMS/Email/WhatsApp OTP verification",
      icon: Users
    },
    {
      number: "02", 
      title: "Smart Verification",
      description: "AI-powered KYC with facial recognition and document scanning",
      icon: Shield
    },
    {
      number: "03",
      title: "Fund Your Wallet",
      description: "Add money via Mobile Money, Bank Transfer, or crypto deposits",
      icon: Wallet
    },
    {
      number: "04",
      title: "Start Trading",
      description: "Access crypto, stocks, and gift cards with real-time trading",
      icon: TrendingUp
    }
  ]

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users, color: "text-blue-500" },
    { label: "Uptime", value: "99.9%", icon: Shield, color: "text-green-500" },
    { label: "Avg. Trade Time", value: "<30s", icon: Clock, color: "text-purple-500" },
    { label: "Support", value: "24/7", icon: Headphones, color: "text-orange-500" }
  ]

  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Crypto Trader",
      location: "Accra, Ghana",
      content: "CryptoFlow's AI predictions helped me increase my portfolio by 340% in 6 months. The platform is incredibly fast and secure.",
      avatar: "/avatars/kwame.jpg",
      rating: 5
    },
    {
      name: "Fatima Ibrahim",
      role: "Gift Card Trader",
      location: "Lagos, Nigeria", 
      content: "I love the instant gift card trading feature. Made over ₦500,000 in gift card trades last month alone!",
      avatar: "/avatars/fatima.jpg",
      rating: 5
    },
    {
      name: "John Mukasa",
      role: "Stock Investor",
      location: "Kampala, Uganda",
      content: "The stock prediction AI is remarkable. 8 out of 10 predictions are accurate. Best investment I've made.",
      avatar: "/avatars/john.jpg",
      rating: 5
    }
  ]

  const liveFeatures = [
    { icon: Bot, title: "AI Assistant", description: "24/7 AI chatbot support" },
    { icon: Sparkles, title: "Auto Trading", description: "Set & forget crypto trading" },
    { icon: Target, title: "Smart Alerts", description: "Predictive market notifications" },
    { icon: Award, title: "VIP Program", description: "Exclusive premium features" }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section - Enhanced */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-hero-pattern">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-crypto-green/20 rounded-full blur-xl floating-element" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-crypto-navy/20 rounded-full blur-xl floating-element" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl floating-element" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-5xl text-center">
            {/* Trust Badge */}
            <div className="flex justify-center mb-8">
              <Badge className="px-6 py-2 bg-gradient-to-r from-crypto-green/20 to-emerald-500/20 text-crypto-green border-crypto-green/30 text-lg">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Trusted by 50,000+ Users Across Africa
              </Badge>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-crypto-navy dark:text-white mb-8 animate-fade-in-up">
              Africa's Most{" "}
              <span className="bg-gradient-to-r from-crypto-green via-emerald-400 to-crypto-green bg-clip-text text-transparent animate-glow">
                Advanced
              </span>
              <br />
              Crypto Trading Platform
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Trade cryptocurrencies, stocks, and gift cards with AI-powered insights. 
              Join the financial revolution with bank-grade security and lightning-fast transactions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-400">
              <Link href="/register">
                <Button className="crypto-button text-xl px-12 py-6 shadow-crypto-hover">
                  Start Trading Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button className="crypto-button-outline text-xl px-12 py-6">
                  Try Demo Account
                </Button>
              </Link>
            </div>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
              {[
                { icon: Zap, text: "Instant Transactions", color: "text-yellow-500" },
                { icon: Shield, text: "Military-Grade Security", color: "text-green-500" },
                { icon: Globe, text: "Available 24/7/365", color: "text-blue-500" }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center justify-center space-x-4 glass-card p-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-current to-current/70 ${item.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-muted-foreground">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Live Features Banner */}
      <section className="py-12 bg-gradient-to-r from-crypto-navy via-crypto-green to-crypto-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {liveFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <Icon className="h-6 w-6 text-crypto-gold animate-pulse" />
                  <div>
                    <div className="font-semibold">{feature.title}</div>
                    <div className="text-sm opacity-80">{feature.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-crypto-light via-white to-crypto-green/5 dark:from-crypto-dark dark:via-gray-900 dark:to-crypto-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-crypto-green/10 text-crypto-green border-crypto-green/20 text-lg px-6 py-2">
              Premium Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-crypto-navy dark:text-white mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-crypto-green to-emerald-400 bg-clip-text text-transparent">
                Dominate Markets
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced trading tools, AI insights, and premium features designed for serious traders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="crypto-card-premium group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-crypto-navy dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-crypto-navy/10 text-crypto-navy dark:bg-crypto-green/10 dark:text-crypto-green border-crypto-navy/20 dark:border-crypto-green/20 text-lg px-6 py-2">
              Getting Started
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-crypto-navy dark:text-white mb-6">
              Start Trading in{" "}
              <span className="bg-gradient-to-r from-crypto-green to-emerald-400 bg-clip-text text-transparent">
                Under 2 Minutes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined onboarding process gets you trading faster than any other platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-crypto-green to-emerald-400 mx-auto shadow-crypto group-hover:shadow-crypto-hover transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-crypto-navy rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 -right-12 w-24 h-0.5 bg-gradient-to-r from-crypto-green to-crypto-navy" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-crypto-navy dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-crypto-navy via-crypto-green to-crypto-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-md mx-auto mb-8 shadow-glass">
              <span className="text-4xl font-bold">CF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by Thousands Across Africa
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center stats-card">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md mx-auto mb-6">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-3">
                    {stat.value}
                  </div>
                  <div className="text-lg opacity-90">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-crypto-light dark:bg-crypto-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-crypto-green/10 text-crypto-green border-crypto-green/20 text-lg px-6 py-2">
              Success Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-crypto-navy dark:text-white mb-6">
              What Our Users Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="crypto-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-crypto-gold text-crypto-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-crypto-green text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-crypto-navy dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-crypto-navy via-crypto-green to-crypto-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Join thousands of successful traders who've already discovered the power of AI-assisted trading
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <Button className="crypto-button-premium text-xl px-12 py-6">
                <Coins className="mr-3 h-6 w-6" />
                Start Free Trading Account
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-crypto-navy text-xl px-12 py-6">
                <MessageSquare className="mr-3 h-6 w-6" />
                Talk to Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}