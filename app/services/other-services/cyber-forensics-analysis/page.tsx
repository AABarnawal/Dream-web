import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function CyberForensicsAnalysis() {
  return (
    <ServiceTemplate
      title="Cyber Forensics Analysis"
      description="Investigate and analyze digital evidence for security incidents and legal purposes."
      whatIs="Cyber Forensics Analysis is the process of collecting, preserving, analyzing, and presenting digital evidence related to cybersecurity incidents or potential criminal activities. It involves the use of specialized techniques and tools to reconstruct events and gather legally admissible evidence."
      services={[
        "Digital evidence collection and preservation",
        "Disk and memory forensics",
        "Network traffic analysis",
        "Malware analysis and reverse engineering",
        "Mobile device forensics",
        "Expert witness testimony and reporting",
      ]}
      benefits={[
        "Thorough investigation of security incidents and data breaches",
        "Legally admissible evidence for potential litigation",
        "Identification of attack vectors and methods",
        "Improved incident response and recovery processes",
        "Support for regulatory compliance and reporting requirements",
        "Enhanced understanding of threats for future prevention",
      ]}
    />
  )
}

