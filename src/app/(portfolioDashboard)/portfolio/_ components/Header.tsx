'use client'

import { motion, AnimatePresence } from 'motion/react'
import { Search, Menu, Plus, Bell, ArrowLeft, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Logo from '@/components/ui/modules/common/Logo/Logo'


interface HeaderProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    isSidebarOpen: boolean
    setIsSidebarOpen: (open: boolean) => void
    isSearchExpanded: boolean
    setIsSearchExpanded: (expanded: boolean) => void
}

export function Header({
    searchQuery,
    setSearchQuery,
    isSidebarOpen,
    setIsSidebarOpen,
    isSearchExpanded,
    setIsSearchExpanded,
}: HeaderProps) {
    const handleSearchExpand = () => {
        setIsSearchExpanded(true)
    }

    const handleSearchClose = () => {
        setIsSearchExpanded(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 md:h-16">
            <AnimatePresence mode="wait">
                {isSearchExpanded ? (
                    <motion.div
                        key="search-expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 px-3 h-14 sm:hidden"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleSearchClose}
                            className="rounded-full flex-shrink-0"
                        >
                            <ArrowLeft size={20} />
                        </Button>

                        <div className="flex-1">
                            <Input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                                className="w-full rounded-full border-gray-300 focus:border-brand-primary focus:ring-brand-primary"
                            />
                        </div>

                        {searchQuery && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSearchQuery('')}
                                className="rounded-full flex-shrink-0"
                            >
                                <X size={20} />
                            </Button>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="normal-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between px-3 sm:px-4 h-14 "
                    >
                        {/* Left Section */}
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="rounded-full p-4"
                            >
                                <Menu className="w-12 h-12 text-[#a6293e] stroke-[3]" />
                            </Button>

                            <Logo />
                        </div>


                        {/* Center Section - Search */}
                        <div className="flex-1 max-w-xl mx-2 sm:mx-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleSearchExpand}
                                className="sm:hidden rounded-full ml-auto block"
                            >
                                <Search size={20} />
                            </Button>

                            <div className="hidden sm:flex items-center gap-0">
                                <div className="relative flex-1">
                                    <Input
                                        type="text"
                                        placeholder="Search projects..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full rounded-l-full rounded-r-none border-gray-300 py-5 focus:border-[#a6293e] focus:ring-[#a6293e]"
                                    />
                                </div>
                                <Button
                                    variant="ghost"
                                    className="px-6 py-5 bg-gray-50 hover:bg-gray-100 border border-l-0 border-gray-300 rounded-r-full rounded-l-none"
                                >
                                    <Search size={20} className="text-gray-600" />
                                </Button>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ">
                            <Button
                                variant="ghost"
                                className="hidden sm:flex items-center gap-2 rounded-full hover:bg-[#a6293e] hover:text-white"
                            >
                                <Plus size={18} className="sm:w-5 sm:h-5 hover:text-white" />
                                <span className="font-medium hidden md:inline">Sign In</span>
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full relative"
                            >
                                <Bell size={18} className="sm:w-5 sm:h-5" />
                                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#a6293e] rounded-full"></span>
                            </Button>

                            <Button
                                size="icon"
                                className="w-7 h-7 sm:w-9 sm:h-9 bg-[#a6293e] rounded-full"
                            >
                                M
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
