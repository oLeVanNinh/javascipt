## Question 191
A customer is looking for a storage archival solution for 1,000 TB of data. The customer requires that the solution be durable and data be available within a few hours of requesting it, but not exceeding a day. The solution should be as cost-effective as possible. To meet security compliance policies, data must be encrypted at rest. The customer expects they will need to fetch the data two times in a year.
Which storage solution should a Solutions Architect recommend to meet these requirements?

A. Copy data to Amazon S3 buckets by using server-side encryption. Move data to Amazon S3 to reduce redundancy storage (RRS).
B. Copy data to encrypted Amazon EBS volumes, then store data into Amazon S3.
C. Copy each object into a separate Amazon Glacier vault, and let Amazon Glacier take care of encryption.
<mark>D. Copy data to Amazon S3 with server-side encryption. Configure lifecycle management policies to move data to Amazon Glacier after 0 days.</mark>

## Question 192
A web application runs on 10 EC2 instances launched from a single customer Amazon Machine Image (AMI). The EC2 instances are behind an Internet
Application Load Balancer. Amazon Route 53 provides DNS for the application.
How should a Solutions Architect automate recovery when a web server instance stops replying to request?

<mark>A. Launch the instances in an Auto Scaling group with an Elastic Load Balancing health check.</mark>
B. Launch instances in multiple Availability Zones and set the load balancer to Multi-AZ.
C. Add CloudWatch alarm actions for each instance to restart if the Status Check (Any) fails.
D. Add Route 53 records for each instance with an instance health check.

## Question 193
A company has a Node.js application running on Amazon EC2 that currently retrieves data for customers from a DynamoDB table. The company is seeing many repeat queries for the same items, and the number of queries is continuing to increase as the application gains popularity.
What solution will reduce the number of read capacity units (RCUs) required while minimizing the amount of refactoring that must be done to the application?

A. Use Amazon ElastiCache to provide a caching layer
B. Use a Lambda function to make concurrent requests for caching
<mark>C. Use Amazon DynamoDB Accelerator (DAX) to provide a caching layer</mark>
D. Obtain Reserved Capacity for Amazon DynamoDB to manage the increased number of queries

## Question 194
A company has an application that accesses a MySQL database installed on a single EC2 instance. The instance recently experienced a fault and brought down the entire application for several hours. The company wants to address the issue but is concerned about spending too much time modifying application code or managing the legacy application.
What should the Solutions Architect recommend to remove this single point of failure with the FEWEST changes to the application code and the LEAST amount of administrative effort?

A. Implement a caching layer by using Amazon ElastiCache to store query results of frequently accessed information.
B. Deploy a second EC2 instance with MySQL installed, and configure replication between this instance and the existing MySQL instance.
<mark>C. Migrate the database to an RDS MySQL Multi-AZ DB instance, and point the application servers to the new RDS instance.</mark>
D. Create a DynamoDB table to use as a cache layer, and update the application to query data from Amazon DynamoDB before querying MySQL.

## Question 195
A team is launching a marketing campaign and the peak database read activity in Amazon Aurora for MySQL is expected to increase. A Solutions Architect decides to add two Read Replicas to the cluster.
How should the Solutions Architect ensure that the connections for read activities are load balanced?

<mark>A. Reader endpoint for Amazon Aurora</mark>
B. Cluster endpoint for Amazon Aurora
C. Primary DB instance endpoint for Amazon Aurora
D. Replica DB instances endpoint for Aurora

## Question 196
A company plans to migrate a website to AWS to use a serverless architecture. The website contains both static and dynamic content and is accessed by users across the world. The website should maintain sessions for returning users to improve the user experience.
Which service should a Solutions Architect use for a cost-efficient solution with the LOWEST latency?

A. Amazon S3, AWS Lambda, Amazon API Gateway, and Amazon DynamoDB
B. Amazon CloudFront, AWS Lambda, API Gateway, and Amazon RDS
C. Amazon CloudFront, Elastic Load Balancing, Amazon EC2, and Amazon RDS
<mark>D. Amazon S3, Amazon CloudFront, AWS Lambda, Amazon API Gateway, and Amazon DynamoDB.</mark>

## Question 197
A Solutions Architect is helping a customer migrate an application to AWS. The application is composed of a fleet of Linux servers that currently use a shared file system to read and write data. One of the goals of moving this application to AWS is to increase the reliability of the storage tier.
What solution would increase reliability while minimizing the operational overhead of managing this infrastructure?

A. Create an EBS volume and mount it to all the servers.
<mark>B. Create an EFS file system and mount it to all the servers.</mark>
C. Create an S3 bucket that can be accessed through an S3 VPC Endpoint.
D. Create two EC2 instances in separate Availability Zones that act as file servers.

## Question 198
A Solution Architect is designing a two-tier application for maximum security, with a web tier running on EC2 instances and the data stored in an RDS DB instance.
The web tier should accept user access only through HTTPS connections (port 443) from the Internet, and the data must be encrypted in transit to and from the database.
What combination of steps will MOST securely meet the stated requirements? (Choose two.)

<mark>A. Create a security group for the web tier instances that allows inbound traffic only over port 443.</mark>
B. Enforce Transparent Data Encryption (TDE) on the RDS database.
C. Create a network ACL that allows inbound traffic only over port 443.
<mark>D. Configure the web servers to communicate with RDS by using SSL, and issue certificates to the web tier EC2 instances.</mark>
E. Create a customer master key in AWS KMS and apply it to encrypt the RDS instance.

## Question 199
A credit card processing application, hosted on an on-premises server, needs to communicate directly with a database hosted on an Amazon EC2 instance running in a private subnet of a VPC. Compliance requirements state that end-to-end communication should be encrypted.
Which solution will ensure that this requirement is met?

A. Use HTTPS for traffic over VPC peering between the VPC and the on-premises datacenter.
B. Use HTTPS for traffic over the Internet between the on-premises server and the Amazon EC2 instance.
<mark>C. Use HTTPS for traffic over a VPN connection between the VPC and the on-premises datacenter.</mark>
D. Use HTTPS for traffic over gateway VPC endpoints that have been configured for the Amazon EC2 instance.

## Question 200
A company has asked a Solutions Architect to ensure that data is protected during data transfer to and from Amazon S3.
Use of which service will protect the data in transit?

A. AWS KMS
<mark>B. HTTPS</mark>
C. SFTP
D. FTPS
