'use client'
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Kiểm tra vị trí cuộn để hiển thị/ẩn nút
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    exit={{
                        opacity: 0,
                        y: 10,
                        transition: {
                            duration: 1
                        }
                    }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            y: [0, -10, 0],
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }
                        }}

                        className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90
                        dark:bg-accent dark:hover:bg-accent/90"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="text-xl" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop; 