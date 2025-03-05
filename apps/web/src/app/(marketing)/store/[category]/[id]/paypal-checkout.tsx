"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PayPalButton } from "@/components/paypal-button";
import { type Product } from "../../_data/products";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface PayPalCheckoutProps {
  product: Product;
}

export function PayPalCheckout({ product }: PayPalCheckoutProps) {
  const [priceOption, setPriceOption] = useState<'personal' | 'institutional'>('personal');
  
  // These prices are for display only - actual prices are set in PayPal
  const prices = {
    personal: 14.99, // Using the exact price from the PayPal code
    institutional: 150.00, // Using the exact price from the PayPal code
  };

  return (
    <Card className="bg-transparent border-0 shadow-none p-0">
      <CardHeader className="pb-2 px-0">
        <CardTitle className="text-lg">Order Physical DVD</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <RadioGroup 
          defaultValue="personal" 
          className="mb-4"
          onValueChange={(value) => setPriceOption(value as 'personal' | 'institutional')}
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="personal" id="personal" />
            <Label htmlFor="personal" className="font-medium">
              Personal Use: ${prices.personal.toFixed(2)}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="institutional" id="institutional" />
            <Label htmlFor="institutional" className="font-medium">
              Institutional Use: ${prices.institutional.toFixed(2)}
            </Label>
          </div>
        </RadioGroup>
        
        <div className="mt-4">
          <PayPalButton 
            productTitle={`${product.title} (${priceOption === 'personal' ? 'Personal' : 'Institutional'} Use)`}
            option={priceOption}
            compact={true}
          />
        </div>
      </CardContent>
    </Card>
  );
} 