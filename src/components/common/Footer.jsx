import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative mt-20 bg-dark-950 border-t border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold gradient-text mb-4">VeriTrace</h3>
            <p className="text-dark-400 text-sm leading-relaxed">
              AI-powered platform for verifying claims and detecting
              misinformation in real-time.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>
                <a
                  href="/"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Verification
                </a>
              </li>
              <li>
                <a
                  href="/chatbot"
                  className="hover:text-accent-cyan transition-colors"
                >
                  AI Assistant
                </a>
              </li>
              <li>
                <a
                  href="/analytics"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>
                <a
                  href="#"
                  className="hover:text-accent-cyan transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-lg glass hover:border-accent-cyan transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} className="text-dark-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-dark-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-400">
          <p>&copy; {currentYear} VeriTrace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-cyan transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
