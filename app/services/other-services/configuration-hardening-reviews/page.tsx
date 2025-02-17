import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function ConfigurationHardeningReviews() {
  return (
    <ServiceTemplate
      title="Configuration / Hardening Reviews"
      description="Ensure your systems are configured securely and hardened against potential threats."
      whatIs="Configuration and Hardening Reviews involve a comprehensive assessment of system configurations to identify and remediate security weaknesses, ensuring that all systems are configured according to industry best practices and security standards to minimize potential attack surfaces."
      services={[
        "Operating system hardening assessment",
        "Application and database configuration review",
        "Network device configuration analysis",
        "Cloud service configuration evaluation",
        "Compliance checking against industry benchmarks (CIS, NIST, etc.)",
        "Automated configuration management tool implementation",
      ]}
      benefits={[
        "Reduced attack surface through proper system hardening",
        "Improved system stability and performance",
        "Enhanced compliance with security standards and regulations",
        "Decreased risk of successful cyber attacks",
        "Standardized and consistent security configurations across the organization",
        "Easier maintenance and troubleshooting of systems",
      ]}
    />
  )
}

