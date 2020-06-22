## Question 211 ??
A Solutions Architect must design an Amazon DynamoDB table to store data about customer activities. The data is used to analyze recent customer behavior, so data that is less than a week old is heavily accessed and older data is accessed infrequently. Data that is more than one month old never needs to be referenced by the application, but needs to be archived for year-end analytics.
What is the MOST cost-efficient way to meet these requirements? (Choose two.)

A. Use DynamoDB time-to-live settings to expire items after a certain time period.
B. Provision a higher write capacity unit to minimize the number of partitions.
C. Create separate tables for each week's data with higher throughput for the current week.
D. Pre-process data to consolidate multiple records to minimize write operations.
E. Export the old table data from DynamoDB to Amazon S3 using AWS Data Pipeline, and delete the old table.

## Question 212
A Solutions Architect is concerned that the current security group rules for a database tier are too permissive and may permit requests that should be restricted.
Below are the current security group permissions for the database tier:
✑ Protocol: TCP
✑ Port Range: 1433 (MS SQL)
✑ Source: ALL
Currently, the only identified resource that needs to connect to the databases is the application tier consisting of an Auto Scaling group of EC2 instances.
What changes can be made to this security group that would offer the users LEAST privilege?

A. Change the source to -1 to remove source IP addresses previously unseen.
B. Change the source to the VPC CIDR block.
C. Change the source to the application instances IDs.
<matk>D. Change the source to the security group ID attached to the application instances.</mark>

## Question 213
A large media site has multiple applications in Amazon ECS. A Solutions Architect needs to use content metadata and route traffic to specific services.
What is the MOST efficient method to perform this task?

A. Use an AWS Classic Load Balancer with a host-based routing option to route traffic to the correct service.
B. Use the AWS CLI to update Amazon Route 53 hosted zone to route traffic as services get updated.
<mark>C. Use an AWS Application Load Balancer with host-based routing option to route traffic to the correct service.</mark>
D. Use Amazon CloudFront to manage and route traffic to the correct service.

## Question 214
A Solutions Architect must build a secure document ""storage platform that allows clients to access data stored on Amazon S3. Documents must be readily available for the first 15 days. After that, documents need not be readily available, and storage costs should be reduced as much as possible.
Which of the following approaches will satisfy these requirements?

A. Create a lifecycle rule to transition the documents from the STANDARD storage class to the STANDARD_IA storage class after 15 days, and then to the GLACIER storage class after an additional 15 days.
B. Create a lifecycle rule to transition the documents from the STANDARD storage class to the GLACIER storage class after 30 days.
C. Create a lifecycle rule to transition documents from the STANDARD storage class to the STANDARD_IA storage class after 30 days and then to the GLACIER storage class after an additional 30 days.
<mark>D. Create a lifecycle rule to transition the documents from the STANDARD storage class to the GLACIER storage class after 15 days.</mark>

## Question 215
A Solutions Architect needs to configure scaling policies based on Amazon CloudWatch metrics for an Auto Scaling group. The application running on the instances is memory intensive.
How can the Architect meet this requirement?

A. Enable detailed monitoring on the Amazon EC2 instances.
<mark>B. Publish custom metrics to CloudWatch from the application.</mark>
C. Configuration lifecycle policies for the Amazon EC2 instances.
D. Set up high-resolution alarms for the Auto Scaling group

## Question 216
A customer has a service based out of Oregon, U.S. and Paris, France. The application is storing data in an S3 bucket located in Oregon, and that data is updated frequently. The Paris office is experiencing slow response times when retrieving objects.
What should a Solutions Architect do to resolve the slow response times for the Paris office?

A. Set up an S3 bucket based in Paris, and enable cross-region replication from the Oregon bucket to the Paris bucket.
B. Create an Application Load Balancer that load balances data retrieval between the Oregon S3 bucket and a new Paris S3 bucket.
<mark>C. Create an Amazon CloudFront distribution with the bucket located in Oregon as the origin and set the Maximum Time to Live (TTL) for cache behavior to 0.</mark>
D. Set up an S3 bucket based in Paris, and enable a lifecycle management rule to transition data from the Oregon bucket to the Paris bucket.

## Question 217
A company uses AWS Elastic Beanstalk to deploy a web application running on c4.large instances. Users are reporting high latency and failed requests. Further investigation reveals that the EC2 instances are running at or near 100% CPU utilization.
What should a Solutions Architect do to address the performance issues?

A. Use time-based scaling to scale the number of instances based on periods of high load.
<mark>B. Modify the scaling triggers in Elastic Beanstalk to use the CPUUtilization metric.</mark>
C. Swap the c4.large instances with the m4.large instance type.
D. Create an additional Auto Scaling group, and configure Amazon EBS to use both Auto Scaling groups to increase the scaling capacity.

## Question 218
A Solutions Architect is working on a PCI-compliant architecture that needs to call an external service provider's API. The external provider requires IP whitelisting to verify the calling party.
How should the Solutions Architect provide the external party with the IP addresses for whitelisting?

A. Use an API Gateway in proxy mode, and provide the API Gateway's IP address to the external service provider.
B. Associate a public elastic network interface to a published stage/endpoint in API Gateway, exposing the AWS Lambda function, and provide the IP address for the public network interface to the external party to whitelist.
<mark>C. Deploy the Lambda function in private subnets and route outbound traffic through a NAT gateway. Provide the NAT gateway's Elastic IP address to the external service provider.</mark>
D. Provide the external party the allocated AWS IP address range for Lambda functions, and send change notifications by using a subscription to the AmazonIpSpaceChanged SNS topic.

## Question 219
A Solutions Architect is designing a shared file system for a company. Multiple users will be accessing it at any given time. Different teams will have their own directories, and the company wants to secure files so that users can access only files owned by their team.
How should the Solutions Architect design this?

<mark>A. Use Amazon EFS and control permissions by using file-level permissions.</mark>
B. Use Amazon S3 and control permissions by using ACLs.
C. Use Amazon EFS and control permissions by using security groups.
D. Use AWS Storage Gateway and control permissions by using AWS Identity and Access Management (IAM)

## Question 220
A company requires operating system permission on a relational database server.
What should a Solutions Architect suggest as a configuration for a highly available database architecture?

<mark>A. Multiple EC2 instances in a database replication configuration that uses two Availability Zones.</mark>
B. A standalone Amazon EC2 instance with a selected database installed.
C. Amazon RDS in a Multi-AZ configuration with Provisioned IOPS.
D. Multiple EC2 instances in a replication configuration that uses two placement groups.
