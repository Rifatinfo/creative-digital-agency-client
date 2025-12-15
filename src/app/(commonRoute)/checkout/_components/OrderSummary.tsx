
import { ShieldCheck } from 'lucide-react'

export function OrderSummary() {
    const isValid = true;
    return (
        <div className="sticky top-8">
            <div className="bg-white border border-[#2C2C2C]/10 p-8 shadow-sm">
                <h3 className="text-xl font-serif text-[#2C2C2C] mb-6">
                    Order Summary
                </h3>

                <div className="space-y-4 mb-8 border-b border-[#2C2C2C]/10 pb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-[#2C2C2C]/50 mb-1">
                                Service
                            </p>
                            <p className="font-medium text-[#2C2C2C]">Essential</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-[#2C2C2C]/50 mb-1">
                                Plan
                            </p>
                            <p className="font-medium text-[#2C2C2C]">tierName</p>
                        </div>
                        <p className="font-serif text-xl text-[#c73450]">
                            4365 tk
                            <span className="text-sm text-[#2C2C2C]/50 font-sans">/mo</span>
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-[#2C2C2C]/50 mb-4">
                        Included Features
                    </p>
                    {/* <ul className="space-y-3">
                        {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3 text-sm text-[#2C2C2C]/70"
                        >
                            <Check className="w-4 h-4 text-[#c73450] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                        ))}
                    </ul> */}
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center text-lg font-medium text-[#2C2C2C]">
                        <span>Total Due</span>
                        <span>{"7776 tk"}</span>
                    </div>

                    <button
                        className={`w-full py-4 px-6 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${isValid === true ? 'bg-[#c73450] text-white hover:bg-[#a02a40] shadow-lg hover:shadow-xl' : 'bg-[#2C2C2C]/10 text-[#2C2C2C]/40 cursor-not-allowed'}`}
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Proceed to Payment
                    </button>

                    <p className="text-xs text-center text-[#2C2C2C]/40">
                        Secure SSL encrypted payment
                    </p>
                </div>
            </div>
        </div>
    )
}
