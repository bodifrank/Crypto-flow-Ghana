"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Wallet, CreditCard, Smartphone, Calculator, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function BuyPage() {
  const [selectedCrypto, setSelectedCrypto] = useState("")
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cryptoAmount, setCryptoAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  console.log("Buy page rendered", { selectedCrypto, amount, paymentMethod })

  const cryptos = [
    { symbol: "BTC", name: "Bitcoin", rate: 50000, icon: "₿" },
    { symbol: "ETH", name: "Ethereum", rate: 3500, icon: "Ξ" },
    { symbol: "USDT", name: "Tether", rate: 1.00, icon: "₮" },
    { symbol: "BNB", name: "Binance Coin", rate: 650, icon: "BNB" },
    { symbol: "ADA", name: "Cardano", rate: 0.70, icon: "₳" }
  ]

  const paymentMethods = [
    { 
      id: "momo", 
      name: "Mobile Money", 
      icon: Smartphone, 
      description: "MTN, Vodafone, AirtelTigo",
      fee: "1%"
    },
    { 
      id: "bank", 
      name: "Bank Transfer", 
      icon: CreditCard, 
      description: "All major banks supported",
      fee: "Free"
    },
    { 
      id: "wallet", 
      name: "Wallet Balance", 
      icon: Wallet, 
      description: "Use your GHS wallet balance",
      fee: "Free"
    }
  ]

  const selectedCryptoData = cryptos.find(c => c.symbol === selectedCrypto)

  const calculateCrypto = (ghsAmount: string) => {
    if (!selectedCryptoData || !ghsAmount) return ""
    const ghs = parseFloat(ghsAmount)
    const usdAmount = ghs / 10.5 // Convert GHS to USD (1 USD = 10.5 GHS)
    const cryptoAmount = usdAmount / selectedCryptoData.rate
    return cryptoAmount.toFixed(8)
  }

  const handleAmountChange = (value: string) => {
    console.log("Amount changed:", value)
    setAmount(value)
    setCryptoAmount(calculateCrypto(value))
  }

  const handlePurchase = async () => {
    console.log("Purchase initiated:", { selectedCrypto, amount, paymentMethod, cryptoAmount })
    
    if (!selectedCrypto || !amount || !paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    
    // Simulate purchase process
    setTimeout(() => {
      toast({
        title: "Purchase Order Created!",
        description: `Your order to buy ${cryptoAmount} ${selectedCrypto} has been submitted. You will receive payment instructions shortly.`,
      })
      
      console.log("Purchase successful, redirecting...")
      // In real app, redirect to payment confirmation
      window.location.href = "/payment-confirmation"
      setIsLoading(false)
    }, 2000)
  }

  const totalFee = selectedCryptoData && amount ? 
    (paymentMethod === "momo" ? parseFloat(amount) * 0.01 : 0) : 0
  const totalAmount = amount ? parseFloat(amount) + totalFee : 0

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-crypto-light dark:bg-crypto-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-crypto-navy dark:text-white mb-2">
                Buy Cryptocurrency
              </h1>
              <p className="text-muted-foreground">
                Purchase crypto securely with multiple payment options
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Purchase Form */}
              <div className="lg:col-span-2">
                <Card className="crypto-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calculator className="h-5 w-5 text-crypto-green" />
                      <span>Purchase Details</span>
                    </CardTitle>
                    <CardDescription>
                      Select cryptocurrency and enter purchase amount
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Crypto Selection */}
                    <div>
                      <Label htmlFor="crypto">Select Cryptocurrency *</Label>
                      <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose crypto to buy" />
                        </SelectTrigger>
                        <SelectContent>
                          {cryptos.map((crypto) => (
                            <SelectItem key={crypto.symbol} value={crypto.symbol}>
                              <div className="flex items-center space-x-2">
                                <span className="font-bold">{crypto.icon}</span>
                                <span>{crypto.name} ({crypto.symbol})</span>
                                <Badge variant="secondary">${crypto.rate.toLocaleString()}</Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Amount Input */}
                    <div>
                      <Label htmlFor="amount">Amount in GHS *</Label>
                      <div className="relative mt-1">
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter amount in GHS"
                          value={amount}
                          onChange={(e) => handleAmountChange(e.target.value)}
                          className="pl-12"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          GH₵
                        </span>
                      </div>
                      {selectedCrypto && cryptoAmount && (
                        <div className="mt-2 p-3 bg-crypto-green/10 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">You will receive:</span>
                            <span className="font-bold text-crypto-green">
                              {cryptoAmount} {selectedCrypto}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Payment Method */}
                    <div>
                      <Label>Payment Method *</Label>
                      <div className="grid gap-3 mt-2">
                        {paymentMethods.map((method) => {
                          const Icon = method.icon
                          return (
                            <div
                              key={method.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                                paymentMethod === method.id
                                  ? 'border-crypto-green bg-crypto-green/10'
                                  : 'border-border hover:border-crypto-green/50'
                              }`}
                              onClick={() => setPaymentMethod(method.id)}
                            >
                              <div className="flex items-center space-x-3">
                                <Icon className="h-5 w-5 text-crypto-green" />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium">{method.name}</span>
                                    <Badge variant={method.fee === "Free" ? "default" : "secondary"}>
                                      {method.fee}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{method.description}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Purchase Button */}
                    <Button
                      onClick={handlePurchase}
                      disabled={isLoading || !selectedCrypto || !amount || !paymentMethod}
                      className="w-full crypto-button text-lg py-6"
                    >
                      {isLoading ? "Processing..." : "Continue to Payment"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="crypto-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedCryptoData && amount ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Cryptocurrency:</span>
                          <span className="font-medium">{selectedCryptoData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rate (USD):</span>
                          <span className="font-medium">${selectedCryptoData.rate.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="font-medium">GH₵ {parseFloat(amount).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Crypto Amount:</span>
                          <span className="font-medium">{cryptoAmount} {selectedCrypto}</span>
                        </div>
                        {totalFee > 0 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Processing Fee:</span>
                            <span className="font-medium">GH₵ {totalFee.toFixed(2)}</span>
                          </div>
                        )}
                        <Separator />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-crypto-green">GH₵ {totalAmount.toLocaleString()}</span>
                        </div>
                      </>
                    ) : (
                      <p className="text-muted-foreground text-sm">
                        Select cryptocurrency and enter amount to see order summary
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Security Notice */}
                <Card className="crypto-card border-crypto-green/20">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-crypto-green mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-crypto-green mb-2">Secure Transaction</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Admin verification required</li>
                          <li>• Crypto sent after payment confirmation</li>
                          <li>• 24/7 customer support</li>
                          <li>• Refund guarantee</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Important Note */}
                <Card className="crypto-card border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-orange-500 mb-2">Important Note</h4>
                        <p className="text-sm text-muted-foreground">
                          After payment, please wait for admin confirmation before expecting crypto delivery. 
                          This usually takes 5-15 minutes during business hours.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rates">View Current Rates</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/wallet">Check Wallet Balance</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}