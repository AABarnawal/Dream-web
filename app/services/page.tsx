"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ServiceCategory } from "../components/ServiceCategory"

const serviceCategories = [
  {
    title: "Governance, Risk & Compliance",
    services: [
      {
        title: "ISO 27001 Compliance - Audit and Implementation",
        link: "/services/governance-risk-compliance/iso-27001-compliance",
      },
      {
        title: "Compliance with Standards, Laws, and Regulations",
        link: "/services/governance-risk-compliance/standards-laws-regulations",
      },
      {
        title: "RBI Compliance Audit - Information Systems (IS) Audits",
        link: "/services/governance-risk-compliance/rbi-is-audits",
      },
      {
        title: "RBI Compliance Audit - Electronic Data Processing (EDP)",
        link: "/services/governance-risk-compliance/rbi-edp-audits",
      },
      {
        title: "RBI Compliance Audit - SAR for Data Localization Audit",
        link: "/services/governance-risk-compliance/rbi-sar-data-localization",
      },
      { title: "UIDAI Compliance - AUA / KUA Audit", link: "/services/governance-risk-compliance/uidai-aua-kua-audit" },
      {
        title: "UIDAI Compliance - Sub-AUA / Sub-KUA Audit",
        link: "/services/governance-risk-compliance/uidai-sub-aua-sub-kua-audit",
      },
      { title: "UIDAI Compliance - ASA Audit", link: "/services/governance-risk-compliance/uidai-asa-audit" },
      {
        title: "Third Party Risk Management (TPRM)",
        link: "/services/governance-risk-compliance/third-party-risk-management",
      },
      { title: "PCI Compliance", link: "/services/governance-risk-compliance/pci-compliance" },
    ],
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    services: [
      { title: "Web Application", link: "/services/vulnerability-assessment-penetration-testing/web-application" },
      {
        title: "Mobile Application",
        link: "/services/vulnerability-assessment-penetration-testing/mobile-application",
      },
      { title: "Network & Wireless", link: "/services/vulnerability-assessment-penetration-testing/network-wireless" },
      {
        title: "API and Web Services",
        link: "/services/vulnerability-assessment-penetration-testing/api-web-services",
      },
      {
        title: "Internet of Things (IoT) Penetration Testing",
        link: "/services/vulnerability-assessment-penetration-testing/iot-penetration-testing",
      },
      {
        title: "ICS/SCADA Security Assessment",
        link: "/services/vulnerability-assessment-penetration-testing/ics-scada-security-assessment",
      },
    ],
  },
  {
    title: "Cloud Security Assessments",
    services: [
      { title: "Cloud Security Assessment", link: "/services/cloud-security-assessments/cloud-security-assessment" },
      {
        title: "Identity & Access Management",
        link: "/services/cloud-security-assessments/identity-access-management",
      },
      {
        title: "Container Security Assessment",
        link: "/services/cloud-security-assessments/container-security-assessment",
      },
      { title: "Docker Security Assessment", link: "/services/cloud-security-assessments/docker-security-assessment" },
      {
        title: "Kubernetes Security Assessment",
        link: "/services/cloud-security-assessments/kubernetes-security-assessment",
      },
      {
        title: "Data & Information Protection",
        link: "/services/cloud-security-assessments/data-information-protection",
      },
      { title: "DevSecOps", link: "/services/cloud-security-assessments/devsecops" },
    ],
  },
  {
    title: "Other Services",
    services: [
      { title: "Secure SDLC Review", link: "/services/other-services/secure-sdlc-review" },
      { title: "Source Code Review", link: "/services/other-services/source-code-review" },
      { title: "Red Teaming", link: "/services/other-services/red-teaming" },
      { title: "Database Review", link: "/services/other-services/database-review" },
      { title: "IT Infrastructure Review", link: "/services/other-services/it-infrastructure-review" },
      { title: "Phishing Campaign", link: "/services/other-services/phishing-campaign" },
      { title: "Virtual CISO", link: "/services/other-services/virtual-ciso" },
      { title: "Configuration / Hardening Reviews", link: "/services/other-services/configuration-hardening-reviews" },
      { title: "Firewall Configuration Review", link: "/services/other-services/firewall-configuration-review" },
      { title: "Cyber Forensics Analysis", link: "/services/other-services/cyber-forensics-analysis" },
    ],
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of cybersecurity and IT solutions designed to protect your digital assets
            and optimize your infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <ServiceCategory {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

