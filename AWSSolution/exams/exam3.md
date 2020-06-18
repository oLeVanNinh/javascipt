## Question 21
A Solution Architect is designing an application that uses Amazon EBS volumes. The volumes must be backed up to a different region.
How should the Architect meet this requirement?

A. Create EBS snapshots directly from one region to another.
B. Move the data to an Amazon S3 bucket and enable cross-region replication.
<mark>C. Create EBS snapshots and then copy them to the desired region.</mark>
D. Use a script to copy data from the current Amazon EBS volume to the destination Amazon EBS volume.

## Question 22
A company is using an Amazon S3 bucket located in us-west-2 to serve videos to their customers. Their customers are located all around the world and the videos are
requested a lot during peak hours. Customers in Europe complain about experiencing slow downloaded speeds, and during peak hours, customers in all locations report
experiencing HTTP 500 errors. What can a Solutions Architect do to address these issues?

A. Place an elastic load balancer in front of the Amazon S3 bucket to distribute the load during peak hours.
<mark>B. Cache the web content with Amazon CloudFront and use all Edge locations for content delivery.</mark>
C. Replicate the bucket in eu-west-1 and use an Amazon Route 53 failover routing policy to determine which bucket it should serve the request to.
D. Use an Amazon Route 53 weighted routing policy for the CloudFront domain name to distribute the GET request between CloudFront and the Amazon S3 bucket directly.

## Question 23
Question #23Topic 1
A Solutions Architect is designing a solution that includes a managed VPN connection.
To monitor whether the VPN connection is up or down, the Architect should use:

A. an external service to ping the VPN endpoint from outside the VPC.
B. AWS CloudTrail to monitor the endpoint.
<mark>C. the CloudWatch TunnelState Metric.</mark>
D. an AWS Lambda function that parses the VPN connection logs.

## Question 24
A social networking portal experiences latency and throughput issues due to an increased number of users. Application servers use very large
datasets from an Amazon RDS database, which creates a performance bottleneck on the database.
Which AWS service should be used to improve performance?

A. Auto Scaling
B. Amazon SQS
<mark>C. Amazon ElastiCache</mark> **(Due to bottleneck is RDS, it is most appropreate answer)**
D. ELB Application Load Balance

## Question 25
A Solutions Architect is designing network architecture for an application that has compliance requirements. The application will be hosted on Amazon
EC2 instances in a private subnet and will be using Amazon S3 for storing data. The compliance requirements mandate that the data cannot traverse the public Internet.
What is the MOST secure way to satisfy this requirement?

A. Use a NAT Instance.
B. Use a NAT Gateway.
<mark>C. Use a VPC endpoint.</mark>
D. Use a Virtual Private Gateway.


## Question 26
Developers are creating a new online transaction processing (OLTP) application for a small database that is very read-write intensive. A single table in the database
is updated continuously throughout the day, and the developers want to ensure that the database performance is consistent.
Which Amazon EBS storage option will achieve the MOST consistent performance to help maintain application performance?

<mark>A. Provisioned IOPS SSD</mark>
B. General Purpose SSD
C. Cold HDD
D. Throughput Optimized HDD

## Question 27
A Solutions Architect is designing a log-processing solution that requires storage that supports up to 500 MB/s throughput. The data is sequentially accessed
by an Amazon EC2 instance. Which Amazon storage type satisfies these requirements?

A. EBS Provisioned IOPS SSD (io1)
B. EBS General Purpose SSD (gp2)
<mark>C. EBS Throughput Optimized HDD (st1)</mark>
D. EBS Cold HDD (sc1)

## Question 28
A company's development team plans to create an Amazon S3 bucket that contains millions of images. The team wants to maximize the read performance of Amazon S3.
Which naming scheme should the company use?

<mark>A. Add a date as the prefix.</mark>
B. Add a sequential id as the suffix.
C. Add a hexadecimal hash as the suffix.
D. Add a hexadecimal hash as the prefix.

## Question 29
A Solutions Architect needs to design a solution that will enable a security team to detect, review, and perform root cause analysis of security incidents
that occur in a cloud environment. The Architect must provide a centralized view of all API events for current and future AWS regions.
How should the Architect accomplish this task?

A. Enable AWS CloudTrail logging in each individual region. Repeat this for all future regions.
B. Enable Amazon CloudWatch logs for all AWS services across all regions and aggregate them in a single Amazon S3 bucket.
C. Enable AWS Trusted Advisor security checks and report all security incidents for all regions.
<mark>D. Enable AWS CloudTrail by creating a new trail and apply the trail to all regions.</mark>


## Question 30
A company has a legacy application using a proprietary file system and plans to migrate the application to AWS.
Which storage service should the company use?

A. Amazon DynamoDB
B. Amazon S3
<mark>C. Amazon EBS</mark>
D. Amazon EFS
