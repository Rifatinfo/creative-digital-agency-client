'use client'


export function PortfolioStats() {
  return (
    <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-xl">
      <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm text-gray-600">
        Portfolio Stats
      </h4>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Total Projects</span>
          <span className="font-bold text-brand-primary">500+</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Featured</span>
          <span className="font-bold text-brand-primary">45</span>
        </div>
      </div>
    </div>
  )
}
