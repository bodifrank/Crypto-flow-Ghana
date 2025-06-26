"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Shield, RefreshCw, MessageSquare, Mail, Smartphone } from "lucide-react"

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<"email" | "sms" | "whatsapp">("email")
  const { toast } = useToast()

  console.log("OTP verification page rendered, current OTP:", otp)

  const handleOTPSubmit = async () => {
    console.log("OTP submitted:", otp)
    
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit verification code",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    
    // Simulate OTP verification
    setTimeout(() => {
      if (otp === "123456") {
        toast({
          title: "Verification Successful!",
          description: "Your account has been verified. You can now access your dashboard.",
        })
        console.log("OTP verified successfully, redirecting to dashboard...")
        window.location.href = "/dashboard"
      } else {
        toast({
          title: "Invalid OTP",
          description: "The verification code you entered is incorrect. Please try again.",
          variant: "destructive"
        })
      }
      setIsLoading(false)
    }, 2000)
  }

  const handleResendOTP = async (method: "email" | "sms" | "whatsapp") => {
    console.log("Resending OTP via:", method)
    setResendLoading(true)
    setSelectedMethod(method)
    
    setTimeout(() => {
      toast({
        title: "OTP Sent!",
        description: `A new verification code has been sent via ${method}.`,
      })
      setResendLoading(false)
    }, 1500)
  }

  const methods = [
    { key: "email" as const, label: "Email", icon: Mail, description: "cryptoflow***@gmail.com" },
    { key: "sms" as const, label: "SMS", icon: Smartphone, description: "***-***-1234" },
    { key: "whatsapp" as const, label: "WhatsApp", icon: MessageSquare, description: "***-***-1234" }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-crypto-light dark:bg-crypto-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            {/* Back Button */}
            <Link href="/register" className="inline-flex items-center text-sm text-muted-foreground hover:text-crypto-green mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Registration
            </Link>

            <Card className="crypto-card">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full crypto-gradient mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-crypto-navy dark:text-white">
                  Verify Your Account
                </CardTitle>
                <CardDescription>
                  Enter the 6-digit verification code sent to your {selectedMethod}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* OTP Input */}
                <div className="text-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => {
                      console.log("OTP input changed:", value)
                      setOtp(value)
                    }}
                    className="justify-center"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                {/* Verify Button */}
                <Button
                  onClick={handleOTPSubmit}
                  className="w-full crypto-button"
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? "Verifying..." : "Verify Account"}
                </Button>

                {/* Resend Options */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Didn't receive the code? Resend via:
                  </p>
                  
                  <div className="grid gap-2">
                    {methods.map((method) => {
                      const Icon = method.icon
                      return (
                        <Button
                          key={method.key}
                          variant="outline"
                          onClick={() => handleResendOTP(method.key)}
                          disabled={resendLoading}
                          className="flex items-center justify-between p-4 h-auto"
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className="h-4 w-4 text-crypto-green" />
                            <div className="text-left">
                              <div className="font-medium">{method.label}</div>
                              <div className="text-xs text-muted-foreground">{method.description}</div>
                            </div>
                          </div>
                          {resendLoading && selectedMethod === method.key ? (
                            <RefreshCw className="h-4 w-4 animate-spin" />
                          ) : (
                            <span className="text-sm text-crypto-green">Resend</span>
                          )}
                        </Button>
                      )
                    })}
                  </div>
                </div>

                {/* Security Note */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4 text-crypto-green" />
                    <span>This verification ensures the security of your account</span>
                  </div>
                </div>

                {/* Demo Note */}
                <div className="bg-crypto-green/10 border border-crypto-green/20 rounded-lg p-3">
                  <p className="text-xs text-crypto-green text-center">
                    <strong>Demo:</strong> Use code "123456" to verify
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}