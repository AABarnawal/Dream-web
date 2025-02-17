import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function VirtualCISO() {
  return (
    <ServiceTemplate
      title="Virtual CISO"
      description="Get expert guidance and leadership for your cybersecurity strategy without the cost of a full-time CISO."
      whatIs="A Virtual CISO (Chief Information Security Officer) is a service that provides organizations with access to experienced cybersecurity leadership and expertise on a part-time or as-needed basis, offering strategic guidance and oversight for information security programs."
      services={[
        "Development and implementation of cybersecurity strategy",
        "Risk assessment and management",
        "Security policy and procedure development",
        "Compliance management and reporting",
        "Incident response planning and management",
        "Security awareness program development",
        "Vendor risk management oversight",
      ]}
      benefits={[
        "Access to expert cybersecurity leadership at a fraction of the cost of a full-time CISO",
        "Improved alignment of security strategy with business objectives",
        "Enhanced compliance with industry regulations and standards",
        "Objective third-party perspective on security challenges",
        "Flexible and scalable security leadership to meet changing needs",
        "Continuous improvement of the organization's security posture",
      ]}
    />
  )
}

