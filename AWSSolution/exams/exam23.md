## Question 221
An application has a web tier that runs on EC2 instances in a public subnet. The application tier instances run in private subnets across two Availability Zones. All traffic is IPv4 only, and each subnet has its own custom route table.
A new feature requires that application tier instances can call an external service over the Internet; however, they must still not be accessible to Internet traffic.
What should be done to allow the application servers to connect to the Internet, maintain high availability, and minimize administrative overhead?

A. Add an Amazon egress-only internet gateway to each private subnet. Alter each private subnet's route table to include a route from 0.0.0.0/0 to the egress-only internal gateway in the same Availability Zone.
<mark>B. Add an Amazon NAT Gateway to each public subnet. Alter each private subnet's route table to include a route from 0.0.0.0/0 to the NAT Gateway in the same Availability Zone.</mark>
C. Add an Amazon NAT instance to one of the public subnets Alter each private subnet's route table to include a route from 0.0.0.0/0 to the Internet gateway in the VPC.
D. Add an Amazon NAT Gateway to each private subnet. Alter each private subnet's route table to include a route from 0.0.0.0/0 to the NAT Gateway in the other Availability Zone.

## Question 222
An application uses an Amazon SQS queue as a transport mechanism to deliver data to a group of EC2 instances for processing. The application owner wants to add a mechanism to archive the incoming data without modifying application code on the EC2 instances.
How can this application be re-architected to archive the data without modifying the processing instances?

A. Trigger a Lambda function by using Amazon CloudWatch Events to retrieve messages from the SQS queue and archive to Amazon S3.
<mark>B. Use an Amazon SNS topic to fan out the data to the SQS queue in addition to a Lambda function that records the data to an S3 bucket.</mark>
C. Set up an Amazon Kinesis Data Stream so that multiple instances can receive data. Add a separate EC2 instance that is configured to archive all data it receives.
D. Write the data to an S3 bucket, and use an SQS queue for S3 event notifications to tell the instances where to retrieve the data.

## Question 223 ??
A Solutions Architect must select the most cost-efficient architecture for a service that responds to web requests. These web requests are small and query a
DynamoDB table. The request rate ranges from zero to several hundred each second, without any predictable patterns.
What is the MOST cost-efficient architecture for this service?

A. Network Load Balancer/Amazon EC2
B. Application Load Balancer/Amazon ECS
<mark>C. API Gateway/AWS Lambda </mark>
D. AWS Elastic Beanstalk/AWS Lambda

## Question 224
A company has a web application running in a Docker container that connects to a MySQL server in an on-premises data center. The deployment and maintenance of this application are becoming time-consuming and slowing down new feature releases. The company wants to migrate the application to AWS and use services that helps facilitate infrastructure management and deployment.
Which architectures should the company consider on AWS? (Choose two.)

<mark>A. Amazon ECS for the web application, and an Amazon RDS for MySQL for the database.</mark>
B. AWS Elastic Beanstalk Docker Multi-container either for the web application or database.
<mark>C. AWS Elastic Beanstalk Docker Single Container for the web application, and an Amazon RDS for MySQL for the database.</mark>
D. AWS CloudFormation with Lambda Custom Resources without VPC for the web application, and an Amazon RDS for MySQL database.
E. AWS CloudFormation with Lambda Custom Resources running in a VPC for the web application, and an Amazon RDS for MySQL database.

## Question 225
A Solutions Architect has designed a VPC that meets all necessary security requirements for their organization. Any applications deployed in the organization must use this VPC design.
How can project teams deploy, manage, and delete VPCs that meet this design with the LEAST administrative effort?

<mark>A. Deploy an AWS CloudFormation template that defines components of the VPC.</mark>
B. Run a script that uses the AWS Command Line Interface to deploy the VPC.
C. Clone the existing authorized VPC for each new project.
D. Use AWS Elastic Beanstalk to deploy both the VPC and the application.

## Question 226
What conditions could cause a Multi-AZ Amazon RDS failover to occur? (Choose two.)

A. The RDS instance is stopped manually
B. A replica of the RDS instance is created in a different region
<mark>C. An Availability Zone becomes unavailable</mark>
D. Another master user is created
<mark>E. A failure of the primary database instance</mark>

## Question 228
A Solutions Architect has five web servers serving requests for a domain.
Which of the following Amazon Route 53 routing policies can distribute traffic randomly among all healthy web servers?

A. Simple
B. Failover
C. Weighted
<mark>D. Multivalue Answer</mark>

##  Question 229
A web server will be provisioned on two Amazon EC2 instances with an Application Load Balancer.
Which of the following configurations will allow traffic on HTTP and HTTPS when configuring a security group to apply to each of these servers?

A. Allow all inbound traffic, with explicit denies on non-HTTP and non-HTTPS ports.
<mark>B. Allow incoming traffic to HTTP and HTTPS ports.</mark>
C. Allow incoming traffic to HTTP and HTTPS ports, with explicit denies to all other ports.
D. Deny all traffic to non-HTTP and non-HTTPS ports

## Question 230
A company wants to run a static website served through Amazon CloudFront.
What is an advantage of storing the website content in an S3 bucket instead of an EBS volume?

A. S3 buckets are replicated globally, allowing for large scalability. EBS volumes are replicated only within a region.
<mark>B. S3 is an origin for CloudFront. EBS volumes would need EC2 instances behind an Elastic Load Balancing load balancer to be an origin.</mark>
C. S3 buckets can be encrypted, allowing for secure storage of the web files. EBS volumes cannot be encrypted.
D. S3 buckets support object-level read throttling, preventing abuse. EBS volumes do not provide object-level throttling.
