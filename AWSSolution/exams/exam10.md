## Question 91
Two Auto Scaling applications, Application A and Application B, currently run within a shared set of subnets. A Solutions Architect wants to make sure that
Application A can make requests to Application B, but Application B should be denied from making requests to Application A.
Which is the SIMPLEST solution to achieve this policy?

<mark>A. Using security groups that reference the security groups of the other application</mark>
B. Using security groups that reference the application server's IP addresses
C. Using Network Access Control Lists to allow/deny traffic based on application IP addresses
D. Migrating the applications to separate subnets from each other

## Question 92
Legacy applications currently send messages through a single Amazon EC2 instance, which then routes the messages to the appropriate destinations. The
Amazon EC2 instance is a bottleneck and single point of failure, so the company would like to address these issues.
Which services could address this architectural use case? (Choose two.)

<mark>A. Amazon SNS</mark>
B. AWS STS
<mark>C. Amazon SQS</mark>
D. Amazon Route 53
E. AWS Glue

## Question 93
A Solutions Architect needs to design an architecture for a new, mission-critical batch processing billing application. The application is required to run Monday,
Wednesday, and Friday from 5 AM to 11 AM.
Which is the MOST cost-effective Amazon EC2 pricing model?

A. Amazon EC2 Spot Instances
B. On-Demand Amazon EC2 Instances
C. Scheduled Reserved Instances
D. Dedicated Amazon EC2 Instances

## Question 94
A workload consists of downloading an image from an Amazon S3 bucket, processing the image, and moving it to another Amazon S3 bucket. An Amazon EC2 instance runs a scheduled task every hour to perform the operation.
How should a Solutions Architect redesign the process so that it is highly available?

A. Change the Amazon EC2 instance to compute optimized.
B. Launch a second Amazon EC2 instance to monitor the health of the first.
<mark>C. Trigger a Lambda function when a new object is uploaded.</mark>
D. Initially copy the images to an attached Amazon EBS volume.

## Question 95
An application is running on an Amazon EC2 instance in a private subnet. The application needs to read and write data onto Amazon Kinesis Data Streams, and corporate policy requires that this traffic should not go to the internet.
How can these requirements be met?

A. Configure a NAT gateway in a public subnet and route all traffic to Amazon Kinesis through the NAT gateway.
B. Configure a gateway VPC endpoint for Kinesis and route all traffic to Kinesis through the gateway VPC endpoint.
<mark>C. Configure an interface VPC endpoint for Kinesis and route all traffic to Kinesis through the gateway VPC endpoint.</mark>
D. Configure an AWS Direct Connect private virtual interface for Kinesis and route all traffic to Kinesis through the virtual interface.

## Question 96
A Solutions Architect is building an application that stores object data. Compliance requirements state that the data stored is immutable.
Which service meets these requirements?

A. Amazon S3
<mark>B. Amazon Glacier</mark>
C. Amazon EFS
D. AWS Storage Gateway

## Question 97
A Solutions Architect is defining a shared Amazon S3 bucket where corporate applications will save objects.
How can the Architect ensure that when an application uploads an object to the Amazon S3 bucket, the object is encrypted?

A. Set a CORS configuration.
<mar>B. Set a bucket policy to encrypt all Amazon S3 objects.</mark>
C. Enable default encryption on the bucket.
D. Set permission for users.

## Question 98
An application tier currently hosts two web services on the same set of instances, listening on different ports.
Which AWS service should a Solutions Architect use to route traffic to the service based on the incoming request path?

</mark>A. AWS Application Load Balancer</mark>
B. Amazon CloudFront
C. Amazon Classic Load Balancer
D. Amazon Route 53

## Question 99
A data analytics startup company asks a Solutions Architect to recommend an AWS data store options for indexed data. The data processing engine will generate and input more than 64 TB of processed data every day, with item sizes reaching up to 300 KB. The startup is flexible with data storage and is more interested in a database that requires minimal effort to scale with a growing dataset size.
Which AWS data store service should the Architect recommend?

A. Amazon RDS
B. Amazon Redshift
<mark>C. Amazon DynamoDB</mark>
D. Amazon S3

## Question 100
A Solutions Architect needs to allow developers to have SSH connectivity to web servers. The requirements are as follows:
✑ Limit access to users origination from the corporate network.
✑ Web servers cannot have SSH access directly from the Internet.
✑ Web servers reside in a private subnet.
Which combination of steps must the Architect complete to meet these requirements? (Choose two.)

A. Create a bastion host that authenticates users against the corporate directory.
<mark>B. Create a bastion host with security group rules that only allow traffic from the corporate network.</mark>
C. Attach an IAM role to the bastion host with relevant permissions.
<mark>D. Configure the web servers' security group to allow SSH traffic from a bastion host.</mark>
E. Deny all SSH traffic from the corporate network in the inbound network ACL.
