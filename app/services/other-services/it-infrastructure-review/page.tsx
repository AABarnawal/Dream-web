import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function ITInfrastructureReview() {
  return (
    <ServiceTemplate
      title="IT Infrastructure Review"
      description="Evaluate and improve the security of your entire IT infrastructure."
      whatIs="An IT Infrastructure Review is a comprehensive assessment of an organization's entire IT environment, including hardware, software, networks, and processes, to identify vulnerabilities, assess risks, and ensure the overall security and efficiency of the IT ecosystem."
      services={[
        "Network architecture and segmentation review",
        "Server and endpoint security assessment",
        "Cloud infrastructure evaluation",
        "Software and application inventory analysis",
        "Patch management process review",
        "Disaster recovery and business continuity planning assessment",
      ]}
      benefits={[
        "Comprehensive view of the organization's IT security posture",
        "Identification of vulnerabilities across the entire IT infrastructure",
        "Improved alignment of IT infrastructure with business objectives",
        "Enhanced operational efficiency and reduced downtime",
        "Better resource allocation for IT security investments",
        "Increased resilience against cyber threats and operational disruptions",
      ]}
    />
  )
}

