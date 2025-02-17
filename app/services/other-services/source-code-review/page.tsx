import ServiceTemplate from "@/app/components/ServiceTemplate"

export default function SourceCodeReview() {
  return (
    <ServiceTemplate
      title="Source Code Review"
      description="Identify security vulnerabilities and coding issues through comprehensive source code analysis."
      whatIs="Source Code Review, also known as Static Application Security Testing (SAST), is a systematic examination of an application's source code to identify security vulnerabilities, coding errors, and adherence to coding standards before the application is deployed."
      services={[
        "Manual code review by security experts",
        "Automated static code analysis",
        "Identification of security vulnerabilities and weaknesses",
        "Assessment of coding best practices and standards compliance",
        "Third-party library and component analysis",
        "Detailed reporting with remediation recommendations",
      ]}
      benefits={[
        "Early detection of security vulnerabilities in the development cycle",
        "Reduced cost of fixing security issues compared to post-deployment",
        "Improved overall code quality and maintainability",
        "Enhanced compliance with secure coding standards",
        "Increased developer awareness of secure coding practices",
        "Comprehensive security posture improvement for applications",
      ]}
    />
  )
}

