import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Shield,
  Zap,
  BarChart3,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { FeatureCard } from "../components/cards/FeatureCard.jsx";
import { TestimonialCard } from "../components/cards/TestimonialCard.jsx";
import { StatCard } from "../components/cards/StatCard.jsx";
import { MOCK_TESTIMONIALS } from "../utils/mockData.js";

export function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const features = [
    {
      icon: Search,
      title: "Deep Web Search",
      description:
        "AI-powered search across millions of verified sources to find evidence supporting or debunking claims.",
    },
    {
      icon: Shield,
      title: "Credibility Analysis",
      description:
        "Advanced algorithms analyze source credibility, bias detection, and evidence quality.",
    },
    {
      icon: Zap,
      title: "Instant Verdicts",
      description:
        "Get AI-generated verdicts in seconds with detailed reasoning and confidence scores.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Track verification trends, see statistics, and analyze misinformation patterns.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <div className="px-4 py-2 rounded-full glass border border-accent-cyan/30 flex items-center gap-2 w-fit mx-auto">
              <Sparkles size={16} className="text-accent-cyan" />
              <span className="text-sm font-medium">
                AI-Powered Verification
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
          >
            <motion.span
              variants={itemVariants}
              className="block gradient-text"
            >
              Verify Claims
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block text-dark-100"
            >
              Stop Misinformation
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-dark-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            VeriTrace uses advanced AI to instantly verify claims, find credible
            sources, and provide transparent verdicts. Say goodbye to
            misinformation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              asChild
            >
              <Link
                to="/dashboard"
                className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 flex items-center justify-center gap-2 group hover:shadow-glow-cyan transition-shadow"
              >
                Start Verifying
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold glass border border-accent-cyan/50 hover:bg-dark-800/50 transition-colors hover:border-accent-cyan"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-4 md:gap-8 pt-16 mt-12 border-t border-dark-700/50"
          >
            {[
              { label: "Claims Verified", value: "1.2M+" },
              { label: "Accuracy Rate", value: "94%" },
              { label: "Response Time", value: "<2s" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-4 md:p-6 rounded-lg glass border border-dark-700/50 hover:border-accent-cyan/50 transition-all hover:shadow-glow-cyan"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-dark-400 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Features
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Everything you need to verify claims and combat misinformation
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                number: "1",
                title: "Enter Claim",
                desc: "Input any claim or statement you want to verify",
              },
              {
                number: "2",
                title: "Search Evidence",
                desc: "AI searches millions of credible sources",
              },
              {
                number: "3",
                title: "Analyze Data",
                desc: "Advanced algorithms evaluate credibility and bias",
              },
              {
                number: "4",
                title: "Get Verdict",
                desc: "Instant result with detailed reasoning",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative p-6 rounded-xl glass border border-dark-700/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-cyan">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-dark-400 text-sm">{step.desc}</p>

                {i < 3 && (
                  <motion.div
                    className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronRight className="text-accent-cyan opacity-50" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <StatCard label="Real Claims" value="482K" icon={null} delay={0} />
            <StatCard
              label="Fake Claims"
              value="456K"
              icon={null}
              delay={0.1}
            />
            <StatCard
              label="Misleading Claims"
              value="309K"
              icon={null}
              delay={0.2}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by Professionals
            </h2>
            <p className="text-dark-400 text-lg">
              Journalists, researchers, and organizations rely on VeriTrace
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {MOCK_TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                testimonial={testimonial}
                delay={i * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 blur-3xl"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            Ready to verify?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-dark-300 text-lg mb-10 max-w-2xl mx-auto"
          >
            Start using VeriTrace today and never fall for misinformation again
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            asChild
          >
            <Link
              to="/dashboard"
              className="px-10 py-4 rounded-lg font-semibold bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 inline-flex items-center gap-2 group text-lg hover:shadow-glow-cyan transition-shadow"
            >
              Get Started Free
              <ChevronRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
