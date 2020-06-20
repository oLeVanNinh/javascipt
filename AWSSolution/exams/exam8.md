## Question 71
A company has an application that stores sensitive data. The company is required by government regulations to store multiple copies of its data.
What would be the MOST resilient and cost-effective option to meet this requirement?

A. Amazon EFS
B. Amazon RDS
C. AWS Storage Gateway
<mark>D. Amazon S3</mark>

## Question 72
A company is using AWS Key Management Service (AWS KMS) to secure their Amazon RDS databases. An auditor has recommended that the company log
all use of their AWS KMS keys.
What is the SIMPLEST solution?

A. Associate AWS KMS metrics with Amazon CloudWatch.
<mark>B. Use AWS CloudTrail to log AWS KMS key usage.</mark>
C. Deploy a monitoring agent on the RDS instances.
D. Poll AWS KMS periodically with a scheduled job.

## Question 73
A Solutions Architect is designing a stateful web application that will run for one year (24/7) and then be decommissioned. Load on this platform will be constant, using a number of r4.8xlarge instances. Key drivers for this system include high availability, but elasticity is not required.
What is the MOST cost-effective way to purchase compute for this platform?

A. Scheduled Reserved Instances
B. Convertible Reserved Instances
<mark>C. Standard Reserved Instances</mark>
D. Spot Instances

## Question 74
A media company asked a Solutions Architect to design a highly available storage solution to serve as a centralized document store for their Amazon EC2 instances. The storage solution needs to be POSIX-compliant, scale dynamically, and be able to serve up to 100 concurrent EC2 instances.
Which solution meets these requirements?

A. Create an Amazon S3 bucket and store all of the documents in this bucket.
B. Create an Amazon EBS volume and allow multiple users to mount that volume to their EC2 instance(s).
C. Use Amazon Glacier to store all of the documents.
<mark>D. Create an Amazon Elastic File System (Amazon EFS) to store and share the documents.</mark>

## Question 75
A Solution Architect has a two-tier application with a single Amazon EC2 instance web server and Amazon RDS MySQL Multi-AZ DB instances. The Architect is re-architecting the application for high availability by adding instances in a second Availability Zone.
Which additional services will improve the availability of the application? (Choose two.)

<mark>A. Auto Scaling group</mark>
B. AWS CloudTrail
<mark>C. ELB Classic Load Balancer</mark>
D. Amazon DynamoDB
E. Amazon ElastiCache

## Question 76
A company is migrating its data center to AWS. As part of this migration, there is a three-tier web application that has strict data-at-rest
encryption requirements.
The customer deploys this application on Amazon EC2 using Amazon EBS, and now must provide encryption at-rest.
How can this requirement be met without changing the application?

A. Use AWS Key Management Service and move the encrypted data to Amazon S3.
B. Use an application-specific encryption API with AWS server-side encryption.
<mark>C. Use encrypted EBS storage volumes with AWS-managed keys.</mark>
D. Use third-party tools to encrypt the EBS data volumes with Key Management Service Bring Your Own Keys.

## Question 77
A Solutions Architect is developing software on AWS that requires access to multiple AWS services, including an Amazon EC2 instance. This is a security sensitive application, and AWS credentials such as Access Key ID and Secret Access Key need to be protected and cannot be exposed anywhere in the system.
What security measure would satisfy these requirements?

A. Store the AWS Access Key ID/Secret Access Key combination in software comments.
B. Assign an IAM user to the Amazon EC2 instance.
<mark>C. Assign an IAM role to the Amazon EC2 instance.</mark>
D. Enable multi-factor authentication for the AWS root account.

## Question 78
An AWS workload in a VPC is running a legacy database on an Amazon EC2 instance. Data is stored on a 200GB Amazon EBS (gp2) volume. At peak load times, logs show excessive wait time.
What solution should be implemented to improve database performance using persistent storage?

A. Migrate the data on the Amazon EBS volume to an SSD-backed volume.
B. Change the EC2 instance type to one with EC2 instance store volumes.
<mark>C. Migrate the data on the EBS volume to provisioned IOPS SSD (io1).</mark>
D. Change the EC2 instance type to one with burstable performance.

## Question 79
A company's website receives 50,000 requests each second, and the company wants to use multiple applications to analyze the navigation patterns
of the users on their website so that the experience can be personalized.
What can a Solutions Architect use to collect page clicks for the website and process them sequentially for each user?

<mark>A. Amazon Kinesis Stream</mark>
B. Amazon SQS standard queue
C. Amazon SQS FIFO queue
D. AWS CloudTrail trail

## Question 80
A company wants to migrate a highly transactional database to AWS. Requirements state that the database has more than 6 TB of data and
will grow exponentially.
Which solution should a Solutions Architect recommend?

<mark>A. Amazon Aurora</mark>
B. Amazon Redshift
C. Amazon DynamoDB
D. Amazon RDS MySQL
