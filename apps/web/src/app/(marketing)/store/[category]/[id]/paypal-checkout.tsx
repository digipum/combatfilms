"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { Product } from "../../_data/products";

interface PayPalCheckoutProps {
  product: Product;
}

export function PayPalCheckout({ product }: PayPalCheckoutProps) {
  const [priceOption, setPriceOption] = useState<'personal' | 'institutional'>('personal');
  
  // Use product prices if available, otherwise use defaults
  const prices = {
    personal: product.personalPrice || product.price || 14.99,
    institutional: product.institutionalPrice || 150.00,
  };

  // PayPal button IDs for different products
  const getPayPalButtonId = () => {
    // These would be replaced with actual button IDs for each product
    switch(product.id) {
      case 'doc-unfortunate-brothers':
        return 'WBLWULPAP3X52';
      case 'doc-global-car':
        return 'NUBVF75PSTTRU';
      default:
        return 'WBLWULPAP3X52'; // Default fallback ID
    }
  };

  // Handle email inquiry
  const handleEmailInquiry = () => {
    const subject = encodeURIComponent(`Inquiry about ${product.title}`);
    const body = encodeURIComponent(`I'm interested in purchasing ${product.title} for ${priceOption === 'personal' ? 'personal' : 'institutional'} use. Please provide more information.`);
    window.location.href = `mailto:sales@combatfilms.com?subject=${subject}&body=${body}`;
  };
  
  return (
    <Card className="bg-transparent border-0 shadow-none p-0">
      <CardHeader className="pb-2 px-0">
        <CardTitle className="text-lg">Order Physical DVD</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-4">
          <RadioGroup
            value={priceOption}
            onValueChange={(value) => setPriceOption(value as 'personal' | 'institutional')}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="personal" id="personal" />
              <Label htmlFor="personal">Personal Use (${prices.personal.toFixed(2)})</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="institutional" id="institutional" />
              <Label htmlFor="institutional">Institutional Use (${prices.institutional.toFixed(2)})</Label>
            </div>
          </RadioGroup>

          {/* Product notes if available */}
          {product.notes && (
            <p className="text-sm text-muted-foreground">{product.notes}</p>
          )}

          {/* PayPal Form */}
          <div>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="w-fit">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value={getPayPalButtonId()} />
              <input type="hidden" name="on0" value="Institutional/Personal"/>
              <select 
                name="os0" 
                className="hidden"
                value={priceOption === 'personal' ? 'Personal' : 'Institutional'}
                onChange={(e) => setPriceOption(e.target.value === 'Personal' ? 'personal' : 'institutional')}
              >
                <option value="Institutional">Institutional ${prices.institutional.toFixed(2)} USD</option>
                <option value="Personal">Personal ${prices.personal.toFixed(2)} USD</option>
              </select>
              <input type="hidden" name="currency_code" value="USD" />
              <input 
                type="image" 
                src="/paypal-checkout-button.png" 
                name="submit" 
                alt="PayPal Checkout - The safer, easier way to pay online!" 
                className="cursor-pointer border-0 w-auto h-10"
              />
            </form>
  
            <div className="my-4 border-t border-gray-200 dark:border-gray-800"></div>
             
            <button
              onClick={handleEmailInquiry}
              className="w-fit inline-flex items-center justify-center px-4 py-2 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground font-medium transition-colors"
            >
              Email Inquiry
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 