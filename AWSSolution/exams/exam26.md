## Question 251
A company processed 10 TB of raw data to generate quarterly reports. Although it is unlikely to be used again, the raw data needs to be preserved for compliance and auditing purposes.
What is the MOST cost-effective way to store the data in AWS?
A. Amazon EBS Cold HDD (sc1)
B. Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
C. Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
<mark>D. Amazon Glacier</mark>

## Question 252
A Solutions Architect needs to design a solution that will allow Website Developers to deploy static web content without managing server infrastructure. All web content must be accessed over HTTPS with a custom domain name. The solution should be scalable as the company continues to grow.
Which of the following will provide the MOST cost-effective solution?

A. Amazon EC2 instance with Amazon EBS
B. AWS Lambda function with Amazon API Gateway
<mark>C. Amazon CloudFront with an Amazon S3 bucket origin</mark>
D. Amazon S3 with a static website

## Question 253 ??
A company is running a series of national TV campaigns. These 30-second advertisements will introduce sudden traffic peaks targeted at a Node.js application.
The company expects traffic to increase from five requests each minute to more than 5,000 requests each minute.
Which AWS service should a Solutions Architect use to ensure traffic surges can be handled?

<mark>A. AWS Lambda</mark>
B. Amazon ElastiCache
C. Size EC2 instances to handle peak load
D. An Auto Scaling group for EC2 instances

## Question 254
An insurance company stores all documents related to annual policies for the duration of the policies. The documents are created once and then stored until they are required, typically at the end of the policy. A document must be capable of being retrieved immediately. The company is now moving their document management to the AWS Cloud.
Which service should a Solutions Architect recommend as a cost-effective solution that meets the company's requirements?

A. Amazon RDS MySQL
<mark>B. Amazon S3 Standard-Infrequent Access</mark>
C. Amazon Glacier
D. Amazon S3 Standard

## Question 255
How can a user track memory usage in an EC2 instance?

A. Call Amazon CloudWatch to retrieve the memory usage metric data that exists for the EC2 instance.
B. Assign an IAM role to the EC2 instance with an IAM policy granting access to the desired metric.
C. Use an instance type that supports memory usage reporting to a metric by default.
<mark>D. Place an agent on the EC2 instance to push memory usage to an Amazon CloudWatch custom metric.</mark>

## Question 256
A Solutions Architect must design a storage solution for incoming billing reports in CSV format. The data does not need to be scanned frequently and is discarded after 30 days.
Which service will be MOST cost-effective in meeting these requirements?

A. Import the logs into an RDS MySQL instance.
B. Use AWS Data Pipeline to import the logs into a DynamoDB table.
<mark>C. Write the files to an S3 bucket and use Amazon Athena to query the data.</mark>
D. Import the logs to an Amazon Redshift cluster

## Question 257
A Solutions Architect needs to deploy an HTTP/HTTPS service on Amazon EC2 instances with support for WebSockets using load balancers.
How can the Architect meet these requirements?

A. Configure a Network Load Balancer.
<mark>B. Configure an Application Load Balancer.</mark>
C. Configure a Classic Load Balancer.
D. Configure a Layer-4 Load Balancer.

## Question 258
A Solution Architect is designing a web application that runs on Amazon EC2 instances behind a load balancer. All data in transit must be encrypted.
Which solutions will meet the encryption requirement? (Select TWO.)

A. Use an Application Load Balancer (ALB) in passthrough mode, then terminate SSL on EC2 instances.
B. Use an Application Load Balancer (ALB) with a TCP listener, then terminate SSL on EC2 instances.
<mark>C. Use a Network Load Balancer (NLB) with a TCP listener, then terminate SSL on EC2 instances.</mark>
<mark>D. Use an Application Load Balancer (ALB) with an HTTPS listener, then install SSL certificates on the ALB and EC2 instances.</mark>
E. Use a Network Load Balancer (NLB) with an HTTPS listener, then install SSL certificates on the NLB and EC2 instances.

## Question 259
A user is designing a new service that receives location updates from 3,600 rental cars every hour. The cars upload their location to an Amazon S3 bucket. Each location must be checked for distance from the original rental location.
Which services will process the updates and automatically scale?

A. Amazon EC2 and Amazon EBS
B. Amazon Kinesis Firehouse and Amazon S3
C. Amazon ECS and Amazon RDS
<mark>D. Amazon S3 events and AWS Lambda</mark>

## Question 260
A company is writing a new service running on Amazon EC2 that must create thumbnail images of thousands of images in a large archive. The system will write scratch data to storage during the process.
Which storage service is best suited for this scenario?

<mark>A. EC2 instance store</mark>
B. Amazon EFS
C. Amazon CloudSearch
D. Amazon EBS Throughput Optimized HDD (st1)
