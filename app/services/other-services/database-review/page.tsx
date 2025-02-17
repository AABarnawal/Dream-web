import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function DatabaseReview() {
  return (
    <ServiceTemplate
      title="Database Review"
      description="Assess and enhance the security of your database systems to protect sensitive data."
      whatIs="A Database Review is a comprehensive assessment of database systems, focusing on security configurations, access controls, data protection mechanisms, and overall database management practices to identify vulnerabilities and ensure the protection of sensitive data."
      services={[
        "Database configuration and hardening assessment",
        "Access control and authentication review",
        "Data encryption evaluation",
        "Backup and recovery process assessment",
        "Database activity monitoring review",
        "Compliance check for database security standards",
      ]}
      benefits={[
        "Identification of database-specific vulnerabilities and misconfigurations",
        "Enhanced protection of sensitive data stored in databases",
        "Improved compliance with data protection regulations",
        "Reduced risk of data breaches and unauthorized access",
        "Optimized database performance and security",
        "Increased confidence in database management practices",
      ]}
    />
  )
}

