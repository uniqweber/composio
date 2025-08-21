import React from 'react'

export default function EnterprisePricing() {
  return (
      <div className="border border-black/20 p-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
              <div className="w-80 flex-shrink-0">
                  <h3 className="text-lg font-roobert text-gray-900">†† Enterprise Pricing</h3>
              </div>
              <div className="flex-1">
                  <p className="text-sm text-gray-600 font-roobert font-light">
                      All usage-based pricing available with volume discounts and custom rates. Contact us for pricing.
                  </p>
              </div>
          </div>
      </div>
  );
}
