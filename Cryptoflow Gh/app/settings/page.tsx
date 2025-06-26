"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { 
  User, 
  Shield, 
  Bell, 
  Smartphone, 
  Globe, 
  Palette, 
  CreditCard,
  Key,
  Eye,
  EyeOff,
  Upload,
  Download,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Fingerprint,
  QrCode,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Languages,
  DollarSign
} from "lucide-react"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [biometricEnabled, setBiometricEnabled] = useState(true)
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    trading: true,
    security: true,
    marketing: false
  })
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedCurrency, setSelectedCurrency] = useState("GHS")
  const { toast } = useToast()

  console.log("Settings page rendered")

  const handleSaveProfile = async () => {
    setIsLoading(true)
    console.log("Saving profile changes...")
    
    setTimeout(() => {
      toast({
        title: "Profile Updated!",
        description: "Your profile information has been saved successfully.",
      })
      setIsLoading(false)
    }, 1500)
  }

  const handleSecuritySave = async () => {
    setIsLoading(true)
    console.log("Saving security settings...")
    
    setTimeout(() => {
      toast({
        title: "Security Settings Updated!",
        description: "Your security preferences have been saved.",
      })
      setIsLoading(false)
    }, 1500)
  }

  const handleEnable2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled)
    toast({
      title: twoFactorEnabled ? "2FA Disabled" : "2FA Enabled",
      description: twoFactorEnabled 
        ? "Two-factor authentication has been disabled." 
        : "Two-factor authentication has been enabled for extra security.",
    })
  }

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "Please contact support to delete your account.",
      variant: "destructive"
    })
  }

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "tw", name: "Twi", flag: "🇬🇭" },
    { code: "yo", name: "Yoruba", flag: "🇳🇬" },
    { code: "ha", name: "Hausa", flag: "🇳🇬" },
    { code: "sw", name: "Swahili", flag: "🇰🇪" }
  ]

  const currencies = [
    { code: "GHS", name: "Ghana Cedis", symbol: "GH₵" },
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
    { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
    { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
    { code: "ZAR", name: "South African Rand", symbol: "R" }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-crypto-light dark:bg-crypto-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-crypto-navy dark:text-white mb-2">
                Account Settings
              </h1>
              <p className="text-muted-foreground">
                Manage your account preferences, security settings, and personal information
              </p>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="profile" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Preferences</span>
                </TabsTrigger>
                <TabsTrigger value="account" className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Account</span>
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <div className="grid gap-6">
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <User className="h-5 w-5 text-crypto-green" />
                        <span>Personal Information</span>
                      </CardTitle>
                      <CardDescription>
                        Update your personal details and profile picture
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Profile Picture */}
                      <div className="flex items-center space-x-6">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="/placeholder-avatar.jpg" />
                          <AvatarFallback className="bg-crypto-green text-white text-2xl">JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <Button variant="outline" className="flex items-center space-x-2">
                            <Upload className="h-4 w-4" />
                            <span>Upload Photo</span>
                          </Button>
                          <Button variant="outline" className="flex items-center space-x-2">
                            <Camera className="h-4 w-4" />
                            <span>Take Photo</span>
                          </Button>
                          <p className="text-sm text-muted-foreground">
                            JPG, PNG max 5MB
                          </p>
                        </div>
                      </div>

                      <Separator />

                      {/* Personal Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative mt-1">
                            <Input id="email" type="email" defaultValue="john.doe@email.com" />
                            <Badge className="absolute right-2 top-2 bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
                              Verified
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative mt-1">
                            <Input id="phone" defaultValue="+233 24 123 4567" />
                            <Badge className="absolute right-2 top-2 bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
                              Verified
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="dateOfBirth">Date of Birth</Label>
                          <Input id="dateOfBirth" type="date" defaultValue="1990-01-15" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Select defaultValue="ghana">
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ghana">🇬🇭 Ghana</SelectItem>
                              <SelectItem value="nigeria">🇳🇬 Nigeria</SelectItem>
                              <SelectItem value="kenya">🇰🇪 Kenya</SelectItem>
                              <SelectItem value="south-africa">🇿🇦 South Africa</SelectItem>
                              <SelectItem value="uganda">🇺🇬 Uganda</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" defaultValue="123 Independence Avenue, Accra" className="mt-1" />
                        </div>
                      </div>

                      <Button onClick={handleSaveProfile} disabled={isLoading} className="crypto-button">
                        {isLoading ? "Saving..." : "Save Profile"}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security">
                <div className="grid gap-6">
                  {/* Password */}
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Key className="h-5 w-5 text-crypto-green" />
                        <span>Password & Authentication</span>
                      </CardTitle>
                      <CardDescription>
                        Manage your password and authentication methods
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <div className="relative mt-1">
                            <Input 
                              id="currentPassword" 
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter current password"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" placeholder="Enter new password" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <Input id="confirmPassword" type="password" placeholder="Confirm new password" className="mt-1" />
                        </div>
                      </div>

                      <Separator />

                      {/* Two-Factor Authentication */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-crypto-green/20 rounded-lg flex items-center justify-center">
                              <Lock className="h-5 w-5 text-crypto-green" />
                            </div>
                            <div>
                              <div className="font-medium">Two-Factor Authentication</div>
                              <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                            </div>
                          </div>
                          <Switch checked={twoFactorEnabled} onCheckedChange={handleEnable2FA} />
                        </div>

                        {twoFactorEnabled && (
                          <div className="bg-crypto-green/10 p-4 rounded-lg space-y-3">
                            <div className="flex items-center space-x-2">
                              <QrCode className="h-4 w-4 text-crypto-green" />
                              <span className="text-sm font-medium">Scan QR Code with Authenticator App</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Use Google Authenticator, Authy, or similar apps
                            </div>
                            <Button size="sm" variant="outline">
                              View QR Code
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Biometric Authentication */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-crypto-green/20 rounded-lg flex items-center justify-center">
                            <Fingerprint className="h-5 w-5 text-crypto-green" />
                          </div>
                          <div>
                            <div className="font-medium">Biometric Authentication</div>
                            <div className="text-sm text-muted-foreground">Use fingerprint or face unlock</div>
                          </div>
                        </div>
                        <Switch checked={biometricEnabled} onCheckedChange={setBiometricEnabled} />
                      </div>

                      <Button onClick={handleSecuritySave} disabled={isLoading} className="crypto-button">
                        {isLoading ? "Saving..." : "Update Security"}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Active Sessions */}
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle>Active Sessions</CardTitle>
                      <CardDescription>Manage devices that are currently logged in</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { device: "iPhone 14 Pro", location: "Accra, Ghana", current: true, lastActive: "Active now" },
                        { device: "MacBook Pro", location: "Accra, Ghana", current: false, lastActive: "2 hours ago" },
                        { device: "Chrome Browser", location: "Lagos, Nigeria", current: false, lastActive: "1 day ago" }
                      ].map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-crypto-green/5 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Smartphone className="h-5 w-5 text-crypto-green" />
                            <div>
                              <div className="font-medium flex items-center space-x-2">
                                <span>{session.device}</span>
                                {session.current && (
                                  <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
                                    Current
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {session.location} • {session.lastActive}
                              </div>
                            </div>
                          </div>
                          {!session.current && (
                            <Button variant="outline" size="sm">
                              Revoke
                            </Button>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card className="crypto-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-crypto-green" />
                      <span>Notification Preferences</span>
                    </CardTitle>
                    <CardDescription>
                      Choose how you want to receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Notification Channels */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Notification Channels</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'email', icon: Mail, label: 'Email Notifications', description: 'Receive updates via email' },
                          { key: 'sms', icon: Phone, label: 'SMS Notifications', description: 'Receive alerts via SMS' },
                          { key: 'push', icon: Bell, label: 'Push Notifications', description: 'Browser and app notifications' }
                        ].map((channel) => {
                          const Icon = channel.icon
                          return (
                            <div key={channel.key} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-crypto-green/20 rounded-lg flex items-center justify-center">
                                  <Icon className="h-5 w-5 text-crypto-green" />
                                </div>
                                <div>
                                  <div className="font-medium">{channel.label}</div>
                                  <div className="text-sm text-muted-foreground">{channel.description}</div>
                                </div>
                              </div>
                              <Switch 
                                checked={notifications[channel.key as keyof typeof notifications]} 
                                onCheckedChange={(checked) => 
                                  setNotifications(prev => ({ ...prev, [channel.key]: checked }))
                                }
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <Separator />

                    {/* Notification Types */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Notification Types</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'trading', label: 'Trading Alerts', description: 'Price changes, trade confirmations' },
                          { key: 'security', label: 'Security Alerts', description: 'Login attempts, security updates' },
                          { key: 'marketing', label: 'Marketing Updates', description: 'Promotions, new features' }
                        ].map((type) => (
                          <div key={type.key} className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-sm text-muted-foreground">{type.description}</div>
                            </div>
                            <Switch 
                              checked={notifications[type.key as keyof typeof notifications]} 
                              onCheckedChange={(checked) => 
                                setNotifications(prev => ({ ...prev, [type.key]: checked }))
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="crypto-button">
                      Save Notification Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences">
                <div className="grid gap-6">
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Globe className="h-5 w-5 text-crypto-green" />
                        <span>Language & Region</span>
                      </CardTitle>
                      <CardDescription>
                        Set your preferred language and currency
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="language">Language</Label>
                          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {languages.map((lang) => (
                                <SelectItem key={lang.code} value={lang.code}>
                                  <div className="flex items-center space-x-2">
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="currency">Default Currency</Label>
                          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {currencies.map((currency) => (
                                <SelectItem key={currency.code} value={currency.code}>
                                  <div className="flex items-center space-x-2">
                                    <span>{currency.symbol}</span>
                                    <span>{currency.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="crypto-button">
                        Save Preferences
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Account Tab */}
              <TabsContent value="account">
                <div className="grid gap-6">
                  {/* Data Export */}
                  <Card className="crypto-card">
                    <CardHeader>
                      <CardTitle>Data & Privacy</CardTitle>
                      <CardDescription>
                        Download your data or delete your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-crypto-green/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Download className="h-5 w-5 text-crypto-green" />
                          <div>
                            <div className="font-medium">Export Data</div>
                            <div className="text-sm text-muted-foreground">Download all your account data</div>
                          </div>
                        </div>
                        <Button variant="outline">
                          Download
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-center space-x-3">
                          <Trash2 className="h-5 w-5 text-red-500" />
                          <div>
                            <div className="font-medium text-red-600 dark:text-red-400">Delete Account</div>
                            <div className="text-sm text-red-500">Permanently delete your account and data</div>
                          </div>
                        </div>
                        <Button variant="destructive" onClick={handleDeleteAccount}>
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}