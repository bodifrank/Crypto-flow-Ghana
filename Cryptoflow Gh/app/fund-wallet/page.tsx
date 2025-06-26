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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { 
  Wallet, 
  Smartphone, 
  CreditCard, 
  Banknote,
  Plus,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap,
  DollarSign,
  Lock,
  QrCode,
  Copy,
  Eye,
  EyeOff
} from "lucide-react"

export default function FundWalletPage() {
  const [selectedMethod, setSelectedMethod] = useState("")
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedBank, setSelectedBank] = useState("")
  const [amount, setAmount] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [pin, setPin] = useState("")
  const [showPin, setShowPin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPinDialog, setShowPinDialog] = useState(false)
  const { toast } = useToast()

  console.log("Fund Wallet page rendered", { selectedMethod, amount })

  const fundingMethods = [
    {
      id: "momo",
      name: "Mobile Money",
      icon: Smartphone,
      description: "Instant funding via mobile money",
      fee: "1.5%",
      minAmount: 10,
      maxAmount: 10000,
      processingTime: "Instant",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: CreditCard,
      description: "Direct bank account transfer",
      fee: "Free",
      minAmount: 50,
      maxAmount: 50000,
      processingTime: "2-5 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "card",
      name: "Debit/Credit Card",
      icon: CreditCard,
      description: "International cards accepted",
      fee: "2.9%",
      minAmount: 20,
      maxAmount: 5000,
      processingTime: "Instant",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "crypto",
      name: "Crypto Deposit",
      icon: Banknote,
      description: "Deposit with existing crypto",
      fee: "0.5%",
      minAmount: 25,
      maxAmount: 100000,
      processingTime: "1-3 confirmations",
      color: "from-orange-500 to-red-500"
    }
  ]

  const momoProviders = [
    { id: "mtn", name: "MTN Mobile Money", icon: "📱", color: "#FFD700" },
    { id: "vodafone", name: "Vodafone Cash", icon: "📱", color: "#E60000" },
    { id: "airteltigo", name: "AirtelTigo Money", icon: "📱", color: "#00A0E9" }
  ]

  const ghanaianBanks = [
    { id: "gcb", name: "GCB Bank", code: "030100" },
    { id: "zenith", name: "Zenith Bank", code: "120001" },
    { id: "stanbic", name: "Stanbic Bank", code: "190100" },
    { id: "standard-chartered", name: "Standard Chartered", code: "020100" },
    { id: "fidelity", name: "Fidelity Bank", code: "240100" },
    { id: "access", name: "Access Bank", code: "280100" },
    { id: "ecobank", name: "Ecobank Ghana", code: "130100" },
    { id: "uba", name: "UBA Ghana", code: "200100" },
    { id: "absa", name: "Absa Bank Ghana", code: "030200" },
    { id: "cal", name: "CAL Bank", code: "340100" }
  ]

  const internationalBanks = [
    { id: "chase", name: "JPMorgan Chase (USA)", country: "🇺🇸" },
    { id: "hsbc", name: "HSBC (UK)", country: "🇬🇧" },
    { id: "deutsche", name: "Deutsche Bank (Germany)", country: "🇩🇪" },
    { id: "credit-suisse", name: "Credit Suisse (Switzerland)", country: "🇨🇭" },
    { id: "barclays", name: "Barclays (UK)", country: "🇬🇧" },
    { id: "wells-fargo", name: "Wells Fargo (USA)", country: "🇺🇸" }
  ]

  const selectedMethodData = fundingMethods.find(m => m.id === selectedMethod)

  const calculateFee = () => {
    if (!selectedMethodData || !amount) return 0
    if (selectedMethodData.fee === "Free") return 0
    const feeRate = parseFloat(selectedMethodData.fee.replace('%', '')) / 100
    return parseFloat(amount) * feeRate
  }

  const getTotalAmount = () => {
    const amountNum = parseFloat(amount) || 0
    const fee = calculateFee()
    return amountNum + fee
  }

  const handleFundWallet = async () => {
    console.log("Funding wallet:", { selectedMethod, amount, selectedProvider, selectedBank })
    
    if (!selectedMethod || !amount) {
      toast({
        title: "Missing Information",
        description: "Please select a funding method and enter amount",
        variant: "destructive"
      })
      return
    }

    if (selectedMethod === "momo" && !selectedProvider) {
      toast({
        title: "Missing Provider",
        description: "Please select your mobile money provider",
        variant: "destructive"
      })
      return
    }

    if (selectedMethod === "bank" && !selectedBank) {
      toast({
        title: "Missing Bank",
        description: "Please select your bank",
        variant: "destructive"
      })
      return
    }

    // For mobile money and card payments, show PIN dialog
    if (selectedMethod === "momo" || selectedMethod === "card") {
      setShowPinDialog(true)
      return
    }

    // Process other payment methods
    processPayment()
  }

  const processPayment = async () => {
    setIsLoading(true)
    
    setTimeout(() => {
      toast({
        title: "Funding Successful!",
        description: `Your wallet has been funded with GH₵ ${amount}`,
      })
      
      console.log("Wallet funded successfully")
      setIsLoading(false)
      setShowPinDialog(false)
      // Reset form
      setAmount("")
      setSelectedMethod("")
      setSelectedProvider("")
      setSelectedBank("")
      setPin("")
    }, 3000)
  }

  const handlePinSubmit = () => {
    if (!pin || pin.length < 4) {
      toast({
        title: "Invalid PIN",
        description: "Please enter your 4-digit PIN",
        variant: "destructive"
      })
      return
    }
    
    console.log("PIN submitted:", pin)
    processPayment()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-crypto-light dark:bg-crypto-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-crypto-navy dark:text-white mb-2">
                Fund Your Wallet
              </h1>
              <p className="text-muted-foreground">
                Add money to your wallet using multiple secure payment methods
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Payment Method Selection */}
                <Card className="crypto-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Wallet className="h-5 w-5 text-crypto-green" />
                      <span>Choose Payment Method</span>
                    </CardTitle>
                    <CardDescription>
                      Select how you want to fund your wallet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {fundingMethods.map((method) => {
                        const Icon = method.icon
                        return (
                          <div
                            key={method.id}
                            className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                              selectedMethod === method.id
                                ? 'border-crypto-green bg-crypto-green/10'
                                : 'border-border hover:border-crypto-green/50'
                            }`}
                            onClick={() => setSelectedMethod(method.id)}
                          >
                            <div className="flex items-start space-x-4">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-crypto-navy dark:text-white mb-1">
                                  {method.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {method.description}
                                </p>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Fee:</span>
                                    <Badge variant={method.fee === "Free" ? "default" : "secondary"}>
                                      {method.fee}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Time:</span>
                                    <span className="font-medium">{method.processingTime}</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Limit:</span>
                                    <span className="font-medium">
                                      GH₵ {method.minAmount}-{method.maxAmount.toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Provider/Bank Selection */}
                {selectedMethod === "momo" && (
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle>Select Mobile Money Provider</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {momoProviders.map((provider) => (
                          <div
                            key={provider.id}
                            className={`p-4 border rounded-xl cursor-pointer transition-all text-center ${
                              selectedProvider === provider.id
                                ? 'border-crypto-green bg-crypto-green/10'
                                : 'border-border hover:border-crypto-green/50'
                            }`}
                            onClick={() => setSelectedProvider(provider.id)}
                          >
                            <div className="text-3xl mb-2">{provider.icon}</div>
                            <div className="font-medium">{provider.name}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {selectedMethod === "bank" && (
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle>Select Your Bank</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="ghana" className="space-y-4">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="ghana">🇬🇭 Ghanaian Banks</TabsTrigger>
                          <TabsTrigger value="international">🌍 International Banks</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="ghana">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {ghanaianBanks.map((bank) => (
                              <div
                                key={bank.id}
                                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                                  selectedBank === bank.id
                                    ? 'border-crypto-green bg-crypto-green/10'
                                    : 'border-border hover:border-crypto-green/50'
                                }`}
                                onClick={() => setSelectedBank(bank.id)}
                              >
                                <div className="font-medium">{bank.name}</div>
                                <div className="text-sm text-muted-foreground">Code: {bank.code}</div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="international">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {internationalBanks.map((bank) => (
                              <div
                                key={bank.id}
                                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                                  selectedBank === bank.id
                                    ? 'border-crypto-green bg-crypto-green/10'
                                    : 'border-border hover:border-crypto-green/50'
                                }`}
                                onClick={() => setSelectedBank(bank.id)}
                              >
                                <div className="font-medium flex items-center space-x-2">
                                  <span>{bank.country}</span>
                                  <span>{bank.name}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                )}

                {/* Amount Input */}
                {selectedMethod && (
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle>Enter Amount</CardTitle>
                      <CardDescription>
                        {selectedMethodData && (
                          <span>
                            Minimum: GH₵ {selectedMethodData.minAmount} • 
                            Maximum: GH₵ {selectedMethodData.maxAmount.toLocaleString()}
                          </span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="amount">Amount (GHS)</Label>
                        <div className="relative mt-1">
                          <Input
                            id="amount"
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-12"
                          />
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                            GH₵
                          </span>
                        </div>
                      </div>

                      {/* Quick Amount Buttons */}
                      <div className="flex flex-wrap gap-2">
                        {[50, 100, 200, 500, 1000, 2000].map((quickAmount) => (
                          <Button
                            key={quickAmount}
                            variant="outline"
                            size="sm"
                            onClick={() => setAmount(quickAmount.toString())}
                          >
                            GH₵ {quickAmount}
                          </Button>
                        ))}
                      </div>

                      {selectedMethod === "bank" && (
                        <div>
                          <Label htmlFor="accountNumber">Account Number</Label>
                          <Input
                            id="accountNumber"
                            placeholder="Enter your account number"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      )}

                      <Button
                        onClick={handleFundWallet}
                        disabled={isLoading || !amount}
                        className="w-full crypto-button"
                      >
                        {isLoading ? "Processing..." : "Fund Wallet"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Transaction Summary */}
                {selectedMethod && amount && (
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Transaction Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Payment Method:</span>
                        <span className="font-medium">{selectedMethodData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="font-medium">GH₵ {parseFloat(amount).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fee:</span>
                        <span className="font-medium">
                          {selectedMethodData?.fee === "Free" ? "Free" : `GH₵ ${calculateFee().toFixed(2)}`}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-crypto-green">GH₵ {getTotalAmount().toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Processing Time: {selectedMethodData?.processingTime}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Security Notice */}
                <Card className="crypto-card border-crypto-green/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-crypto-green mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-crypto-green mb-2">Secure Payments</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 256-bit SSL encryption</li>
                          <li>• PCI DSS compliant</li>
                          <li>• Real-time fraud detection</li>
                          <li>• 100% secure transactions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card className="crypto-card">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our support team is available 24/7 to assist you
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PIN Dialog */}
      <Dialog open={showPinDialog} onOpenChange={setShowPinDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-crypto-green" />
              <span>Enter Your PIN</span>
            </DialogTitle>
            <DialogDescription>
              Please enter your {selectedMethod === "momo" ? "Mobile Money" : "Card"} PIN to complete the transaction
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="pin">PIN</Label>
              <div className="relative mt-1">
                <Input
                  id="pin"
                  type={showPin ? "text" : "password"}
                  placeholder="Enter 4-digit PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  maxLength={4}
                  className="text-center text-lg tracking-widest"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPin(!showPin)}
                >
                  {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="bg-crypto-green/10 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-crypto-green" />
                <span className="text-crypto-green font-medium">
                  Your PIN is encrypted and secure
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowPinDialog(false)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handlePinSubmit} 
                disabled={isLoading || pin.length < 4}
                className="flex-1 crypto-button"
              >
                {isLoading ? "Processing..." : "Confirm Payment"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}