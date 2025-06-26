"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  console.log("Register page rendered", formData)

  const handleInputChange = (field: string, value: string) => {
    console.log(`Field ${field} changed to:`, value)
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration form submitted:", formData)
    
    setIsLoading(true)
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.country || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error", 
        description: "Passwords do not match",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }

    // Simulate registration process
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "OTP verification link sent to your email. Please verify to continue.",
      })
      console.log("Registration successful, redirecting to verification...")
      setIsLoading(false)
      // In real app, redirect to OTP verification
      window.location.href = "/verify-otp"
    }, 2000)
  }

  const countries = [
    "Ghana", "Nigeria", "Kenya", "South Africa", "Uganda", "Tanzania", "Rwanda", "Senegal", "Other"
  ]

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
                  Create Your Account
                </CardTitle>
                <CardDescription>
                  Join thousands of users trading crypto securely
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-crypto-green" />
                    <span>Your data is encrypted and secure</span>
                  </div>

                  <Button
                    type="submit"
                    className="w-full crypto-button"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>

                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-crypto-green hover:underline">
                        Sign in here
                      </Link>
                    </span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-crypto-green" />
                      <span>By registering, you agree to our Terms of Service and Privacy Policy</span>
                    </div>
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