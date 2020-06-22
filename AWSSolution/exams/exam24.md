## Question 231
A company is moving to AWS. Management has identified a set of approved AWS services that meet all deployment requirements. The company would like to restrict access to all other unapproved services to which employees would have access.
Which solution meets these requirements with the LEAST amount of operational overhead?

A. Configure the AWS Trusted Advisor service utilization compliance report. Subscribe to Amazon SNS notifications from Trusted Advisor. Create a custom AWS Lambda function that can automatically remediate the use of unauthorized services.
B. Use AWS Config to evaluate the configuration settings of AWS resources. Subscribe to Amazon SNS notifications from AWS Config. Create a custom AWS Lambda function that can automatically remediate the use of unauthorized services.
<mark>C. Configure AWS Organizations. Create an organizational unit (OU) and place all AWS accounts into the OU. Apply a service control policy (SCP) to the OU that denies the use of certain services.</mark>
D. Create a custom AWS IAM policy. Deploy the policy to each account using AWS CloudFormation StackSets. Include deny statements in the policy to restrict the use of certain services. Attach the policies to all IAM users in each account.

## Question 232 ??
A customer is running a critical payroll system in a production environment in one data center and a disaster recovery (DR) environment in another. The application includes load-balanced web servers and failover for the MySQL database. The customer's DR process is manual and error-phone. For this reason, management has asked IT to migrate the application to AWS and make it highly available so that IT no longer has to manually fail over the environment.
How should a Solutions Architect migrate the system to AWS?

A. Migrate the production and DR environments to different Availability Zones within the same region. Let AWS manage failover between the environments.
B. Migrate the production and DR environments to different regions. Let AWS manage failover between the environments.
C. Migrate the production environment to a single Availability Zone, and set up instance recovery for Amazon EC2. Decommission the DR environment because it is no longer needed.
<mark> D. Migrate the production environment to span multiple Availability Zones, using Elastic Load Balancing and Multi-AZ Amazon RDS. Decommission the DR environment because it is no longer needed. </mark>

## Question 233
A company is creating a web application that will run on an Amazon EC2 instance. The application on the instance needs access to an Amazon DynamoDB table for storage.
What should be done to meet these requirements?

A. Create another AWS account root user with permissions to the DynamoDB table.
<mark>B. Create an IAM role and assign the role to the EC2 instance with permissions to the DynamoDB table.</mark>
C. Create an identity provider and assign the identity provider to the EC2 instance with permissions to the DynamoDB table.
D. Create identity federation with permissions to the DynamoDB table.

## Question 234
A company is creating a web application that allows customers to view photos in their web browsers. The website is hosted in us-east-1 on Amazon EC2 instances behind an Application Load Balancer. Users will be located in many places around the world.
Which solution should provide all users with the fastest photo viewing experience?

A. Implement an AWS Auto Scaling group for the web server instances behind the Application Load Balancer.
<mark>B. Enable Amazon CloudFront for the website and specify the Application Load Balancer as the origin.</mark>
C. Move the photos into an Amazon S3 bucket and enable static website hosting.
D. Enable Amazon ElastiCache in the web server subnet.

## Question 235
A Solutions Architect is designing a highly available web application on AWS. The data served on the website is dynamic and is pulled from Amazon DynamoDB.
All users are geographically close to one another.
How can the Solutions Architect make the application highly available?

A. Host the website data on Amazon S3 and set permissions to enable public read-only access for users.
B. Host the web server data on Amazon CloudFront and update the objects in the Cloudfront distribution when they change.
<mark>C. Host the application on EC2 instances across multiple Availability Zones. Use an Auto Scaling group coupled with an Application Load Balancer.</mark>
D. Host the application on EC2 instances in a single Availability Zone. Replicate the EC2 instances to a separate region, and use an Application Load Balancer for high availability.

## Question 236
A company is migrating on-premises databases to AWS. The company's backend application produces a large amount of database queries for reporting purposes, and the company wants to offload some of those reads to Read Replica, allowing the primary database to continue performing efficiently.
Which AWS database platforms will accomplish this? (Select TWO.)

A. Amazon RDS for Oracle
<mark>B. Amazon RDS for PostgreSQL</mark>
<mark>C. Amazon RDS for MariaDB</mark>
D. Amazon DynamoDB
E. Amazon RDS for Microsoft SQL Server

## Question 237
Question #237Topic 1
An application launched on Amazon EC2 instances needs to publish personally identifiable information (PII) about customers using Amazon SNS. The application is launched in private subnets within an Amazon VPC.
Which is the MOST secure way to allow the application to access service endpoints in the same region?

A. Use an internet gateway.
<mark>B. Use AWS PrivateLink.</mark>
C. Use a NAT gateway.
D. Use a proxy instance.

## Quesetion 238 ??
A data-processing application runs on an i3.large EC2 instance with a single 100 GB EBS gp2 volume. The application stores temporary data in a small database
(less than 30 GB) located on the EBS root volume. The application is struggling to process the data fast enough, and a Solutions Architect has determined that the
I/O speed of the temporary database is the bottleneck.
What is the MOST cost-efficient way to improve the database response times?

A. Enable EBS optimization on the instance and keep the temporary files on the existing volume.
B. Put the temporary database on a new 50-GB EBS gp2 volume.
<mark>C. Move the temporary database onto instance storage.</mark>
D. Put the temporary database on a new 50-GB EBS io1 volume with a 3-K IOPS provision.

## Question 239
An application stores data in an Amazon RDS PostgreSQL Multi-AZ database instance. The ratio of read requests to write requests is about 2 to 1. Recent increases in traffic are causing very high latency.
How can this problem be corrected?

A. Create a similar RDS PostgreSQL instance and direct all traffic to it.
B. Use the secondary instance of the Multiple Availability Zone for read traffic only.
C. Create a read replica and send half of all traffic to it.
<mark>D. Create a read replica and send all read traffic to it.</mark>


## Question 240
A Solutions Architect is designing a system that will store Personally Identifiable Information (PII) in an Amazon S3 bucket. Due to compliance and regulatory requirements, both the master keys and unencrypted data should never be sent to AWS.
What Amazon S3 encryption technique should the Architect choose?

A. Amazon S3 client-side encryption with an AWS KMS-managed customer master key (CMK)
B. Amazon S3 server-side encryption with an AWS KMS-managed key
<mark>C. Amazon S3 client-side encryption with a client-side master key</mark>
D. Amazon S3 server-side encryption with a customer-provided key
