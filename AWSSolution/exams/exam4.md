## Question 31
A company plans to use AWS for all new batch processing workloads. The company's developers use Docker containers for the new batch processing.
The system design must accommodate critical and non-critical batch processing workloads 24/7.
How should a Solutions Architect design this architecture in a cost-efficient manner?

A. Purchase Reserved Instances to run all containers. Use Auto Scaling groups to schedule jobs.
B. Host a container management service on Spot Instances. Use Reserved Instances to run Docker containers.
<mark>C. Use Amazon ECS orchestration and Auto Scaling groups: one with Reserve Instances, one with Spot Instances.</mark>
D. Use Amazon ECS to manage container orchestration. Purchase Reserved Instances to run all batch workloads at the same time.

## Question 32
A company is evaluating Amazon S3 as a data storage solution for their daily analyst reports. The company has implemented stringent requirements concerning the
security of the data at rest. Specifically, the CISO asked for the use of envelope encryption with separate permissions for the use of an envelope key, automated
rotation of the encryption keys, and visibility into when an encryption key was used and by whom.
Which steps should a Solutions Architect take to satisfy the security requirements requested by the CISO?

A. Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with Customer-Provided Keys (SSE-C).
B. Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3).
<mark>C. Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS).</mark>
D. Create an Amazon S3 bucket to store the reports and use Amazon s3 versioning with Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3).

## Question 33
A customer has a production application that frequently overwrites and deletes data, the application requires the most up-to-date version of the data every
time it is requested. Which storage should a Solutions Architect recommend to bet accommodate this use case?

A. Amazon S3
<mark>B. Amazon RDS</mark>
C. Amazon RedShift
D. AWS Storage Gateway

## Question 34
A Solutions Architect is designing a photo application on AWS. Every time a user uploads a photo to Amazon S3, the Architect must insert a new item to a
DynamoDB table.
Which AWS-managed service is the BEST fit to insert the item?

A. Lambda@Edge
<mark>B. AWS Lambda</mark>
C. Amazon API Gateway
D. Amazon EC2 instances

## Question 35
An application relies on messages being sent and received in order. The volume will never exceed more than 300 transactions each second.
Which service should be used?

<mark>A. Amazon SQS</mark>
B. Amazon SNS
C. Amazon ECS
D. AWS STS

## Question 36
A Solutions Architect is designing an application on AWS that uses persistent block storage. Data must be encrypted at rest.
Which solution meets the requirement?

A. Enable SSL on Amazon EC2 instances.
<mark>B. Encrypt Amazon EBS volumes on Amazon EC2 instances.</mark>
C. Enable server-side encryption on Amazon S3.
D. Encrypt Amazon EC2 Instance Storage.

## Question 37
A company is launching a static website using the zone apex (mycompany.com). The company wants to use Amazon Route 53 for DNS.
Which steps should the company perform to implement a scalable and cost-effective solution? (Choose two.)

A. Host the website on an Amazon EC2 instance with ELB and Auto Scaling, and map a Route 53 alias record to the ELB endpoint.
B. Host the website using AWS Elastic Beanstalk, and map a Route 53 alias record to the Beanstalk stack.
C. Host the website on an Amazon EC2 instance, and map a Route 53 alias record to the public IP address of the Amazon EC2 instance.
<mark>D. Serve the website from an Amazon S3 bucket, and map a Route 53 alias record to the website endpoint.</mark>
<mark>E. Create a Route 53 hosted zone, and set the NS records of the domain to use Route 53 name servers.</mark>

## Question 38
A manufacturing company captures data from machines running at customer sites. Currently, thousands of machines send data every 5 minutes, and this is expected
to grow to hundreds of thousands of machines in the near future. The data is logged with the intent to be analyzed in the future as needed.
What is the SIMPLEST method to store this streaming data at scale?

A. Create an Amazon Kinesis Firehouse delivery stream to store the data in Amazon S3.
<mark>B. Create an Auto Scaling group of Amazon EC2 servers behind ELBs to write the data into Amazon RDS.</mark>
C. Create an Amazon SQS queue, and have the machines write to the queue.
D. Create an Amazon EC2 server farm behind an ELB to store the data in Amazon EBS Cold HDD volumes.

## Question 39
A bank is writing new software that is heavily dependent upon the database transactions for write consistency. The application will also occasionally generate
reports on data in the database, and will do joins across multiple tables. The database must automatically scale as the amount of data grows.
Which AWS service should be used to run the database?

A. Amazon S3
<mark>B. Amazon Aurora </mark>
C. Amazon DynamoDB
D. Amazon Redshift

## Question 40
A Solutions Architect is designing a new application that needs to access data in a different AWS account located within the same region.
The data must not be accessed over the Internet.
Which solution will meet these requirements with the LOWEST cost?

A. Add rules to the security groups in each account.
<mark>B. Establish a VPC Peering connection between accounts.</mark>
C. Configure Direct Connect in each account.
D. Add a NAT Gateway to the data account.
