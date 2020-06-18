## Question 51
A Solutions Architect is designing a solution for a media company that will stream large amounts of data from an Amazon EC2 instance. The data streams
are typically large and sequential, and must be able to support up to 500 MB/s.
Which storage type will meet the performance requirements of this application?

A. EBS Provisioned IOPS SSD
B. EBS General Purpose SSD
C. EBS Cold HDD
<mark>D. EBS Throughput Optimized HDD</mark>

## Question 52 ??
A legacy application running in premises requires a Solutions Architect to be able to open a firewall to allow access to several Amazon S3 buckets.
The Architect has a VPN connection to AWS in place.
How should the Architect meet this requirement?

A. Create an IAM role that allows access from the corporate network to Amazon S3.
B. Configure a proxy on Amazon EC2 and use an Amazon S3 VPC endpoint.
C. Use Amazon API Gateway to do IP whitelisting.
D. Configure IP whitelisting on the customer's gateway.

## Question 53
A Solutions Architect is designing a database solution that must support a high rate of random disk reads and writes. It must provide consistent performance,
and requires long-term persistence.
Which storage solution BEST meets these requirements?

<mark>A. An Amazon EBS Provisioned IOPS volume</mark>
B. An Amazon EBS General Purpose volume
C. An Amazon EBS Magnetic volume
D. An Amazon EC2 Instance Store

## Question 54
A Solutions Architect is designing solution with AWS Lambda where different environments require different database passwords.
What should the Architect do to accomplish this in a secure and scalable way

A. Create a Lambda function for each individual environment.
B. Use Amazon DynamoDB to store environmental variables.
<mark>C. Use encrypted AWS Lambda environmental variables.</mark>
D. Implement a dedicated Lambda function for distributing variables.

## Question 55
A news organization plans to migrate their 20 TB video archive to AWS. The files are rarely accessed, but when they are, a request is made in advance and a 3 to
5-hour retrieval time frame is acceptable. However, when there is a breaking news story, the editors require access to archived footage within minutes.
Which storage solution meets the needs of this organization while providing the LOWEST cost of storage?

A. Store the archive in Amazon S3 Reduced Redundancy Storage.
B. Store the archive in Amazon Glacier and use standard retrieval for all content.
<mark>C. Store the archive in Amazon Glacier and pay the additional charge for expedited retrieval when needed.</mark>
D. Store the archive in Amazon S3 with a lifecycle policy to move this to S3 Infrequent Access after 30 days.

## Question 56
A Solutions Architect is building a multi-tier website. The web servers will be in a public subnet, and the database servers will be in a private subnet.
Only the web servers can be accessed from the Internet. The database servers must have Internet access for software updates.
Which solution meets the requirements?

A. Assign Elastic IP addresses to the database instances.
B. Allow Internet traffic on the private subnet through the network ACL.
<mark>C. Use a NAT Gateway.</mark>
D. Use an egress-only Internet Gateway.

## Question 57
A Solutions Architect is designing a Lambda function that calls an API to list all running Amazon RDS instances.
How should the request be authorized?

A. Create an IAM access and secret key, and store it in the Lambda function.
<mark>B. Create an IAM role to the Lambda function with permissions to list all Amazon RDS instances.</mark>
C. Create an IAM role to Amazon RDS with permissions to list all Amazon RDS instances.
D. Create an IAM access and secret key, and store it in an encrypted RDS database.


## Question 58
A Solutions Architect is building an application on AWS that will require 20,000 IOPS on a particular volume to support a media event. Once the event ends, the
IOPS need is no longer required. The marketing team asks the Architect to build the platform to optimize storage without incurring downtime.
How should the Architect design the platform to meet these requirements?

A. Change the Amazon EC2 instant types.
<mark>B. Change the EBS volume type to Provisioned IOPS.</mark>
C. Stop the Amazon EC2 instance and provision IOPS for the EBS volume.
D. Enable an API Gateway to change the endpoints for the Amazon EC2 instances.

## Question 59
A Solutions Architect is building a new feature using a Lambda to create metadata when a user uploads a picture to Amazon S3. All metadata must be indexed.
Which AWS service should the Architect use to store this metadata?

A. Amazon S3
<mark>B. Amazon DynamoDB</mark>
C. Amazon Kinesis
D. Amazon EFC

## Question 60
An interactive, dynamic website runs on Amazon EC2 instances in a single subnet behind an ELB Classic Load Balancer.
Which design changes will make the site more highly available?

<mark>A. Move some Amazon EC2 instances to a subnet in a different way.</mark>
B. Move the website to Amazon S3.
C. Change the ELB to an Application Load Balancer.
D. Move some Amazon EC2 instances to a subnet in the same Availability Zone.
