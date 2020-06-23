## Question 241
A Security team reviewed their company's VPC Flow Logs and found that traffic is being directed to the internet. The application in the VPC uses Amazon EC2 instances for compute and Amazon S3 for storage. The company's goal is to eliminate internet access and allow the application to continue to function.
What change should be made in the VPC before updating the route table?

A. Create a NAT gateway for Amazon S3 access
<mark>B. Create a VPC endpoint for Amazon S3 access</mark>
C. Create a VPC endpoint for Amazon EC2 access
D. Create a NAT gateway for Amazon EC2 access

## Question 242
A company is deploying a reporting application on Amazon EC2. The application is expected to generate 1,000 documents every hour and each document will be
800 MB. The company is concerned about strong data consistency and file locking, as various applications hosted on other EC2 instances will process the report documents in parallel when they become available.
What storage solution will meet these requirements with the LEAST amount of administrative overhead?

<mark>A. Amazon EFS</mark>
B. Amazon S3
C. Amazon ElastiCache
D. Amazon EBS

## Question 243
A Solutions Architect is building a WordPress-based web application hosted on AWS using Amazon EC2. This application serves as a blog for an international internet security company. The application must be geographically redundant and scalable. It must separate the public Amazon EC2 web servers from the private
Amazon RDS database, it must be highly available, and it must support dynamic port routing.
Which combination of AWS services or capabilities will meet these requirements?

A. AWS Auto Scaling with a Classic Load Balancer, and AWS CloudTrail
<mark>B. Amazon Route 53, Auto Scaling with an Application Load Balancer, and Amazon CloudFront</mark>
C. A VPC, a NAT gateway and Auto Scaling with a Network Load Balancer
D. CloudFront, Route 53, and Auto Scaling with a Classic Load Balancer

## Question 244
An e-commerce application places orders in an Amazon SQS queue. When a message is received, Amazon EC2 worker instances process the request.
The EC2 instances are in an Auto Scaling group.
How should the architecture be designed to scale up and down with the LEAST amount of operational overhead?

A. Use an Amazon CloudWatch alarm on the EC2 CPU to scale the Auto Scaling group up and down.
B. Use an EC2 Auto Scaling health check for messages processed on the EC2 instances to scale up and down.
<mark>C. Use an Amazon CloudWatch alarm based on the number of visible messages to scale the Auto Scaling group up or down.</mark>
D. Use an Amazon CloudWatch alarm based on the CPU to scale the Auto Scaling group up or down.

## Question 245
A customer is migrating to AWS and requires applications to access Network File System shares without code changes. Data is critical and accessed frequently.
Which storage solution should a Solutions Architect recommend to maximize availability and durability?

A. Amazon EBS
B. Amazon S3
C. AWS Storage Gateway for files
<mark>D. Amazon EFS</mark>

## Question 246
A company has many applications on Amazon EC2 instances running in Auto Scaling groups. Company policies require that data on the attached Amazon EBS volume must be retained.
Which actions will meet this requirement without impacting performance?

A. Enable Termination Protection on the Amazon EC2 instances.
<mark>B. Disable DeleteOnTermination for the Amazon EBS volumes.</mark>
C. Use Amazon EC2 user data to set up a synchronization job for root volume data.
D. Change the auto scaling Health Check to point to a source on the root volume.

## Question 247
A company wants to expand its web services from us-east-1 into ap-southeast-1. The company stores a large amount of static content on its website, and recently received complaints about slow loading speeds and the website timing out.
What should be done to meet the expansion goal while also addressing the latency and timeout issues?

A. Store the static content in Amazon S3 and enable S3 Transfer Acceleration.
B. Store the static content in an Amazon EBS volume in the ap-southeast-1 region and provision larger Amazon EC2 instances for the website.
C. Use an Amazon Route 53 simple routing policy to distribute cached content across three regions.
<mark>D. Use Amazon S3 to store the static content and configure an Amazon CloudFront distribution.</mark>

## Question 248
An application is scanning an Amazon DynamoDB table that was created with default settings. The application occasionally reads stale data when it queries the table.
How can this issue be corrected?

A. Increase the provisioned read capacity of the table.
B. Enable AutoScaling on the DynamoDB table.
<mark>C. Update the application to use strongly consistent reads.</mark>
D. Re-create the DynamoDB table with eventual consistency disabled.

## Question 249
A company is setting up a new website for online sales. The company will have a web tier and a database tier. The web tier consists of load-balanced, auto-scaled
Amazon EC2 instances in multiple Availability Zones (AZs). The database tier is an Amazon RDS Multi-AZ deployment. The EC2 instances must connect securely to the database.
How should the resources be launched?
A. EC2 instances: public subnet RDS database instances: public subnet Load balancer: public subnet
B. EC2 instances: public subnet RDS database instances: private subnet Load balancer: private subnet
C. EC2 instances: private subnet RDS database instances: public subnet Load balancer: public subnet
<mark>D. EC2 instances: private subnet RDS database instances: private subnet Load balancer: public subnet</mark>

## Question 250
A customer set up an Amazon VPC with one private subnet and one public subnet with a NAT gateway. The VPC will contain a group of Amazon EC2 instances.
All instances will configure themselves at startup by downloading a bootstrap script from an Amazon S3 bucket with a policy that only allows access from the customer's Amazon EC2 instances and then deploys an application through GIT. A Solutions Architect has been asked to design a solution that provides the highest level of security regarding network connectivity to the Amazon EC2 instances.
How should the Architect design the infrastructure?

A. Place the Amazon EC2 instances in the public subnet, with no EIPs; route outgoing traffic through the internet gateway.
B. Place the Amazon EC2 instances in a public subnet, and assign EIPs; route outgoing traffic through the NAT gateway.
C. Place the Amazon EC2 instances in a private subnet, and assign EIPs; route outgoing traffic through the internet gateway.
<mark>D. Place the Amazon EC2 instances in a private subnet, with no EIPs; route outgoing traffic through the NAT gateway</mark>
