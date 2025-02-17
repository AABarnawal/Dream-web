import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function SecureSDLCReview() {
  return (
    <ServiceTemplate
      title="Secure SDLC Review"
      description="Integrate security into your software development lifecycle to build more secure applications from the ground up."
      whatIs="A Secure Software Development Life Cycle (SDLC) Review is a comprehensive assessment of your development processes to ensure security is integrated at every stage, from planning and design to implementation, testing, and maintenance."
      services={[
        "SDLC process analysis and optimization",
        "Security requirements gathering and threat modeling",
        "Secure coding practices review",
        "Security testing integration (SAST, DAST, IAST)",
        "Third-party component security assessment",
        "Continuous integration/continuous deployment (CI/CD) security review",
      ]}
      benefits={[
        "Reduced security vulnerabilities in final products",
        "Cost-effective security implementation",
        "Improved compliance with security standards and regulations",
        "Enhanced developer security awareness",
        "Faster time-to-market with secure applications",
        "Increased customer trust and satisfaction",
      ]}
    />
  )
}

