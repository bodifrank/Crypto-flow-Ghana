"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Shield, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  console.log("Login page rendered", formData)

  const handleInputChange = (field: string, value: string | boolean) => {
    console.log(`Field ${field} changed to:`, value)
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login form submitted:", formData)
    
    setIsLoading(true)
    
    // Validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }

    // Simulate login process
    setTimeout(() => {
      // Check if email is verified (simulation)
      if (formData.email.includes("unverified")) {
        toast({
          title: "Email Not Verified",
          description: "Please verify your email before logging in.",
          variant: "destructive"
        })
      } else {
        toast({
          title: "Login Successful!",
          description: "Welcome back to Crypto Flow",
        })
        console.log("Login successful, redirecting to dashboard...")
        // In real app, redirect to dashboard
        window.location.href = "/dashboard"
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-crypto-light dark:bg-crypto-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-crypto-green mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <Card className="crypto-card">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full crypto-gradient mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">CF</span>
                </div>
                <CardTitle className="text-2xl font-bold text-crypto-navy dark:text-white">
                  Welcome Back
                </CardTitle>
                <CardDescription>
                  Sign in to your Crypto Flow account
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                      />
                      <Label htmlFor="rememberMe" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-crypto-green hover:underline">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-crypto-green" />
                    <span>Your login is secured with encryption</span>
                  </div>

                  <Button
                    type="submit"
                    className="w-full crypto-button"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>

                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link href="/register" className="text-crypto-green hover:underline">
                        Create one here
                      </Link>
                    </span>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xs text-muted-foreground text-center">
                      Having trouble logging in? Contact our support team at{" "}
                      <span className="text-crypto-green">cryptoflowgh@gmail.com</span>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}