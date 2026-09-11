import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white border-t border-gray-100 pt-10 pb-8 mt-16 sm:mt-20'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="hidden md:grid md:grid-cols-5 gap-8 pb-10 border-b border-gray-100">
                    <div className="md:col-span-2 space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-bold text-xs shadow-md">
                                DS
                            </div>
                            <span className="font-extrabold text-xl text-gray-900">
                                Dev
                                <span className="brand-gradient-text">Stack</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
                            Curated tools, technologies, and resources for developers building modern, scalable software.
                        </p>
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-600 pt-1">
                            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                            <span>•</span>
                            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                            <span>•</span>
                            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-3">
                            Product
                        </h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#home" className="hover:text-gray-900">Home</a></li>
                            <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
                            <li><a href="#project" className="hover:text-gray-900">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-3">
                            Company
                        </h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#about" className="hover:text-gray-900">About</a></li>
                            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-3">Legal</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>



                <div className="md:hidden flex flex-col items-center text-center space-y-4 pb-8 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-bold text-xs shadow-md">
                            DS
                        </div>
                        <span className="font-extrabold text-xl tracking-tight text-gray-900">
                            Dev<span className="brand-gradient-text">Stack</span>
                        </span>
                    </div>

                    <p className="text-gray-500 text-xs sm:text-sm max-w-xs leading-relaxed">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>

                    <div className="flex items-center justify-center gap-3 text-xs font-medium text-gray-600 pt-1">
                        <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                        <span className="text-gray-300">•</span>
                        <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                        <span className="text-gray-300">•</span>
                        <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                    </div>
                </div>


                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;