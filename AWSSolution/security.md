## 1.Identity and Access Management
#### Protect AWS credentials
An entity can take action on a resource as a *principal*. A principal can include following:
+ Root user: has unrestrice access to AWS, avoid using for routine administrate tasks, enable MFA
+ IAM user: enable MFA, applying password policy: password length, complexity, expiration, prevent password reuse
+ IAM role

### Fine-Grained Authorization
A fundametal concept in information security is principle of least privilege, just give IAM principles permissions to only the resource they need. IAM principals have no permision by default, IAM users and roles derive their permission from IAM policies. A IAM policy include:
+ **Effect**: allow or deny
+ **Action**: action can be performed on resource
+ **Resource**: action requier resource, is anything in AWS can consider as a resource
+ **Condition**: specify condition that must be met for the permission to be granted
+ **Principal**: who can perform this ation on this resource, except IAM group - it is considered as a priciple, inline policy does need, almost apply for resource policy

### AWS Managed Policies
AWS provides hundreds of perpackaged polices, these cover a variety of permissions commonly required by common roles and is updated periodically to include new services

### Customer Managed Polices
Is stand-alone policy that customer create and can attach to pricipals. IAM doesn't overwrite existing policy but creates new version an maintains the last five versions
so customer can revert if needed

### Inline Policies
Is a set of permissions that embedded in an IAM principal or group, it exist independently and is a part of the principal itself. It is useful when u want to ensure
a policy is not inadvertently attached to the wrong principal


### Permissions Boundaries
Is a policy set to an principal to limit permission can give to that principal

### Roles
Is a IAM principal that doesn't have a password an access key, it can has permissions policies and permissions boundary associated with. An IAM user or AWS resource can
assume a role and inherit the permissions associated with that role

### Instance Profiles
A role contains a trust policy that specifies which AWS resource may assume that role.
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {
      "Service": "ec2.amazonaws.com"
    },
    "Action": "sts:AssumeRole"
  }]
}
```
When create a role that grants EC2 access to assume it, IAM automatically creates an instance profile with the same name of the role, by associate instance profile
with an instance, the instance is able to acquire temporary credentials an access key, a secret key and a session token using STS

### Enforcing Service-Level Protection
Some service allow to define resource-based policies to controll identity can access to resource:
+ S3 bucket policy allows control access to objects or entire buckets
+ KMS requires defines a key policy to specify the administrators and users of the key
+ SNS has resource policy to control who can publish messages or subscribe a topic
+ SQS can control who can send and receive message from the queue

## 2. Detective Controls
### CloudTrail
Consider infomation to logs:
+ Management events, data events or both
+ Read-only, write-only or both
+ All resource or specific ones
+ All regions or just specific regions

### Cloudwatch logs
+ CloudTrail Logs
+ VPC fFlow Logs: inluce information about traffic ingressing or egressing a VPC. Flow logs include network interface, source and destination IP, port, protocols,
package and byte count
+ RDS logs
+ Route 53 DNS Queries
+ Lambda

### Auditing Resource Configurations with AWS Config
It can alert when a resource configure in AWS account changes, it can compare resource configuration against a baseline and alert when the configuration deviate from it
To compare resource configuration against a desired baseline, u can implement AWS  rules, AWS rules let you define configuration states that are abnormal or suspicious so
that you can focus on analyzing. The configuration changes can be show in timeline.

### Amazon GuardDuty
AWS GuardDuty analyzes VPC flow logs, CloudTrail mangaement event logs and Routes 53 DNS query logs, looking for known malicious IP addresses, domain names and potentailly malicious
activity. When GuarDuty detects a potential security problem, it creates finding, which is a notification that details the questionable activity. GuardDuty displays the finding in the
console and also delivers the finding to CloudWatch events that can configure an SNS notification to send an alert or take action in response to such an event. The type of finding is flowwing:
+ Backdoor: EC2 instance has been compromised by malware that can be used to send spam or participate in DDoS. This is triggered when instance communicates on TCP port 25
or when it resolves the domain name of a known command-and-control server used to coordinate DDoS attacks
+ Behavior: EC2 is communication on a protocol and port that it normally doesn't or sending an abnormally large amount of traffic to an external host.
+ Crytocurrency: EC2 is exibiting network activity indicating that it's operating at a Bitcoin node.
+ Pentest : system running Kali ussed for penetrationtesting, is makeing API calls agains AWS resources
+ ResourceConsumption: IAM user has launced an EC2 instance despite having no history of doing so
+ Stealth: password policy was weakened, CloudTrail logging was disabled or modified, or CloudTrail logs were deleted

### AmazonInspector
Is an agent-based service that looks for vulnerabilities on EC2 instances. It runs an assessment on the instance and analyzes its network, filesystem, and process activity to determines
whether any threats or vulnerabilities exist by comparing the collected data against one or more rules package. There are five rules packages:
+ Common Vulnerabilities and Exposures are common vulnerabilities found in publicly released software included bouth comercial and open source software for Linux and Window
+ Center for Internet Security Benchmarks include securiry best practices for Linux and Windowns operating system configuration
+ Security Best Practices: are a subset of the Center for Internet Security Benchnarks, providing a handful of rules against Linux instances only.
+ Runtime Behavior Analysis: detects the use of insecure client and server protocols, listening TCP port, inappropriate file permissions and ownership on Linux
+ Network Reachability: detect network configurations that make resources in your VPC vulnerable.

## 3.Protecting Network Boundaries
### Network Access Control Lists and Security Groups
Traffic is allow in a subnet is defined by ALC. Security Group is used for granular control traffic to individual resources such as instance, ALB,

### AWS Web Application FireWall
WAF monitor HTTP and HTTPs request to an ALB or CloudFront to protect application from common exploits that could result in a denial or unauthorized access to application
+ allows inspect application traffic for sign of malicioues activity: SQL injection, cross-site script attack, ...
+ block traffic based on source IP address pattern or geographic location.

### AWS Shield
+ Shield Standard defends against common layer 3 and 4 DDoS attacks and is automatically activated for all AWS
+ Shield Advanced includes protection against layer 7 attacks. To obtain layer 7 attackit must have an elastic IP address.
