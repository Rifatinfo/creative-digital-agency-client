"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSectionTitle from "../sectionTitle/AnimatedSectionTitle";



interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  budgetRange: string;
  projectDetails: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    budgetRange: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div>
          <AnimatedSectionTitle
          title="Ready to Transform Your Brand?"
          subtitle=" Let&#39;s discuss your project and create something extraordinary
            together"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg md:p-10 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Service Interest and Budget Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="serviceInterest" className="text-gray-700 ">
                    Service Interest *
                  </Label>
                  <Select
                    value={formData.serviceInterest}
                    onValueChange={(value) =>
                      handleSelectChange("serviceInterest", value)
                    }
                    required
                  >
                    <SelectTrigger className="h-12 py-5.5 w-full">
                      <SelectValue placeholder="Branding & Promotion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">
                        Branding & Promotion
                      </SelectItem>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="marketing">
                        Digital Marketing
                      </SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budgetRange" className="text-gray-700">
                    Budget Range
                  </Label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) =>
                      handleSelectChange("budgetRange", value)
                    }
                  >
                    <SelectTrigger className="h-12 py-5.5 w-full">
                      <SelectValue placeholder="$10,000 - $25,000" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10k">Less than $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label htmlFor="projectDetails" className="text-gray-700">
                  Project Details *
                </Label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  className="min-h-[146px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-[#c73450] hover:bg-[#b12e46] text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              {/* Response Time */}
              <p className="text-center text-gray-500 text-sm">
                We&#39;ll get back to you within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[rgba(199,52,80,0.1)] rounded-xl p-3">
                  <Mail className="w-6 h-6 text-[#c73450]" />
                </div>
                <div>
                  <h3 className="mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@socialverb.com</p>
                </div>
              </div>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[rgba(199,52,80,0.1)] rounded-xl p-3">
                  <Phone className="w-6 h-6 text-[#c73450]" />
                </div>
                <div>
                  <h3 className="mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Visit Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[rgba(199,52,80,0.1)] rounded-xl p-3">
                  <MapPin className="w-6 h-6 text-[#c73450]" />
                </div>
                <div>
                  <h3 className="mb-1">Visit Us</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>123 Creative Street</p>
                    <p>Design District</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-[#c73450] to-[#a52d44] rounded-2xl shadow-md p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-xl p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">Business Hours</h3>
                  <div className="text-white/90 space-y-1 text-sm">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Banner */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
              <p className="text-green-800 text-center text-sm">
                ⚡ Average Response Time: 2 Hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
