import React from "react";
import { motion } from "framer-motion";
import "./index.css"; 

const FooterBar = () => {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="footer"
        >
            <motion.div 
                className="footer-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >

                <motion.p 
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    &copy; {new Date().getFullYear()}Beedata. All rights reserved.
                </motion.p>
            </motion.div>
        </motion.footer>
    );
};

export default FooterBar;
