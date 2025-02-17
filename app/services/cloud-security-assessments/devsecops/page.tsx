import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function DevSecOps() {
  return (
    <ServiceTemplate
      title="DevSecOps"
      description="Integrate security practices into your DevOps processes for enhanced application security."
      whatIs="DevSecOps is an approach that integrates security practices within the DevOps process, ensuring that security is a shared responsibility throughout the entire IT lifecycle, from initial design through integration, testing, deployment, and software delivery."
      services={[
        "DevSecOps strategy development and implementation",
        "Secure coding practices and training",
        "Automated security testing integration in CI/CD pipelines",
        "Infrastructure as Code (IaC) security assessment",
        "Container and microservices security",
        "Continuous security monitoring and feedback loops",
      ]}
      benefits={[
        "Improved security posture through early and continuous security integration",
        "Faster and more secure application delivery",
        "Reduced costs associated with fixing security issues late in development",
        "Enhanced collaboration between development, operations, and security teams",
        "Increased compliance with security standards throughout the SDLC",
        "Better visibility and control over security in fast-paced development environments",
      ]}
    />
  )
}

