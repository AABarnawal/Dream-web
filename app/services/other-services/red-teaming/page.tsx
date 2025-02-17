import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function RedTeaming() {
  return (
    <ServiceTemplate
      title="Red Teaming"
      description="Simulate real-world cyber attacks to test your organization's detection and response capabilities."
      whatIs="Red Teaming is an advanced form of security assessment that simulates a real-world attack on an organization's people, processes, and technology to test its detection and response capabilities, identify weaknesses, and improve overall security posture."
      services={[
        "Customized attack scenario development",
        "Multi-vector attack simulations (technical, physical, social engineering)",
        "Objective-based penetration testing",
        "Evasion technique testing against security controls",
        "Assessment of blue team detection and response capabilities",
        "Detailed reporting with strategic recommendations",
      ]}
      benefits={[
        "Realistic assessment of organization's security posture",
        "Identification of complex, multi-stage attack paths",
        "Improved incident detection and response capabilities",
        "Enhanced security awareness across the organization",
        "Validation of existing security investments and controls",
        "Strategic insights for long-term security improvements",
      ]}
    />
  )
}

