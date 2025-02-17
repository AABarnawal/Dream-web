import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function PhishingCampaign() {
  return (
    <ServiceTemplate
      title="Phishing Campaign"
      description="Test your organization's resilience against phishing attacks and improve employee awareness."
      whatIs="A Phishing Campaign is a simulated phishing attack conducted with the permission of an organization to assess and improve its employees' ability to recognize and respond to phishing attempts, ultimately enhancing the organization's overall security posture."
      services={[
        "Customized phishing email creation",
        "Multi-vector phishing simulations (email, SMS, voice)",
        "Employee response tracking and analysis",
        "Real-time education for employees who fall for simulated attacks",
        "Detailed reporting on campaign results and trends",
        "Recommendations for improving security awareness training",
      ]}
      benefits={[
        "Increased employee awareness of phishing threats",
        "Identification of vulnerable individuals or departments",
        "Improved ability to detect and report real phishing attempts",
        "Reduced risk of successful phishing attacks",
        "Measurable improvements in security awareness over time",
        "Enhanced overall organizational resilience against social engineering",
      ]}
    />
  )
}

