"use client"

import Description from "@/components/Description/Index"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Up to 10 projects", "5GB storage", "Community support", "Basic analytics", "Deploy to web"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For growing teams",
    features: [
      "Unlimited projects",
      "1TB storage",
      "Priority email support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large-scale apps",
    features: [
      "Everything in Professional",
      "Dedicated support",
      "Security audits",
      "SLA guarantee",
      "Custom integrations",
      "Unlimited everything",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingBlock() {
  return (
    <section className="py-20 border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <Description
            visible={true}
            showBadge={true}
            badgeLabel='Pricing Plans'
            badgeType='highlight'
            clientsText='Choose the plan that fits your needs'
        />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 mt-28">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl transition-all duration-300 ${
                tier.highlighted
                  ? "md:scale-105 md:shadow-2xl bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-secondary"
                  : "bg-muted/80 border border-border hover:border-secondary/50 hover:shadow-lg"
              }`}
            >
              {/* Recommended Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                    <code> Recommended </code>
                  </div>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Tier Name */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`rounded-full mb-8 w-full font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                      </div>
                      <p className="text-base text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Additional Info */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
              View detailed comparison →
            </a>
            <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
              See all features →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
