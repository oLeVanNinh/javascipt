## Question 81
A company hosts a two-tier application that consists of a publicly accessible web server that communicates with a private database.\
Only HTTPS port 443 traffic to the web server must be allowed from the Internet.
Which of the following options will achieve these requirements? (Choose two.)

<mark>A. Security group rule that allows inbound Internet traffic for port 443.</mark>
B. Security group rule that denies all inbound Internet traffic except port 443.
<mark>C. Network ACL rule that allows port 443 inbound and all ports outbound for Internet traffic.</mark>
D. Security group rule that allows Internet traffic for port 443 in both inbound and outbound.
E. Network ACL rule that allows port 443 for both inbound and outbound for all Internet traffic.

## Question 82
A Solutions Architect is designing an Amazon VPC. Applications in the VPC must have private connectivity to Amazon DynamoDB in the same AWS Region.
The design should route DynamoDB traffic through:

A. VPC peering connection.
B. NAT gateway
<mark>C. VPC endpoint</mark>
D. AWS Direct Connect

## Question 83 ??
A Solutions Architect is architecting a workload that requires a performant object-based storage system that must be shared with multiple Amazon EC2 instances.
Which AWS service meets this requirement?

A. Amazon EFS
B. Amazon S3
C. Amazon EBS
D. Amazon ElastiCache

## Question 84
A Solutions Architect is developing a solution for sharing files in an organization. The solution must allow multiple users to access the storage service at once from different virtual machines and scale automatically. It must also support file-level locking.
Which storage service meets the requirements of this use case?

A. Amazon S3
<mark>B. Amazon EFS</mark>
C. Amazon EBS
D. Cached Volumes

## Question 85
A company runs a legacy application with a single-tier architecture on an Amazon EC2 instance. Disk I/O is low, with occasional small spikes during business hours. The company requires the instance to be stopped from 8 PM to 8 AM daily.
Which storage option is MOST appropriate for this workload?

A. Amazon EC2 instance storage
<mark>B. Amazon EBS General Purpose SSD (gp2) storage</mark>
C. Amazon S3
D. Amazon EBS Provision IOPS SSD (io1) storage

## Question 86
As part of securing an API layer built on Amazon API gateway, a Solutions Architect has to authorize users who are currently authenticated by an existing identity provider. The users must be denied access for a period of one hour after three unsuccessful attempts.
How can the Solutions Architect meet these requirements?

A. Use AWS IAM authorization and add least-privileged permissions to each respective IAM role.
<mark>B. Use an API Gateway custom authorizer to invoke an AWS Lambda function to validate each user's identity.</mark>
C. Use Amazon Cognito user pools to provide built-in user management.
D. Use Amazon Cognito user pools to integrate with external identity providers.

## Question 87
An organization runs an online media site, hosted on-premises. An employee posted a product review that contained videos and pictures. The review went viral and the organization needs to handle the resulting spike in website traffic.
What action would provide an immediate solution?

A. Redesign the website to use Amazon API Gateway, and use AWS Lambda to deliver content.
B. Add server instances using Amazon EC2 and use Amazon Route 53 with a failover routing policy.
<mark>C. Serve the images and videos via an Amazon CloudFront distribution created using the news site as the origin.</mark>
D. Use Amazon ElasticCache for Redis for caching and reducing the load requests from the origin.

## Question 88
A client notices that their engineers often make mistakes when creating Amazon SQS queues for their backend system.
Which action should a Solutions Architect recommend to improve this process?

A. Use the AWS CLI to create queues using AWS IAM Access Keys.
B. Write a script to create the Amazon SQS queue using AWS Lambda.
C. Use AWS Elastic Beanstalk to automatically create the Amazon SQS queues.
<mark>D. Use AWS CloudFormation Templates to manage the Amazon SQS queue creation.</mark>

## Question 89
A development team is building an application with front-end and backend application tiers. Each tier consists of Amazon EC2 instances behind an ELB Classic
Load Balancer. The instances run in Auto Scaling groups across multiple Availability Zones. The network team has allocated the 10.0.0.0/24 address space for this application. Only the front-end load balancer should be exposed to the Internet. There are concerns about the limited size of the address space and the ability of each tier to scale.
What should the VPC subnet design be in each Availability Zone?

A. One public subnet for the load balancer tier, one public subnet for the front-end tier, and one private subnet for the backend tier.
B. One shared public subnet for all tiers of the application.
<mark>C. One public subnet for the load balancer tier and one shared private subnet for the application tiers.</mark>
D. One shared private subnet for all tiers of the application.


## Question 90
A Solutions Architect must select the storage type for a big data application that requires very high sequential I/O. The data must persist if the instance is stopped.
Which of the following storage types will provide the best fit at the LOWEST cost for the application?

A. An Amazon EC2 instance store local SSD volume.
B. An Amazon EBS provisioned IOPS SSD volume.
C. An Amazon EBS throughput optimized HDD volume.
<mark>D. An Amazon EBS general purpose SSD volume</mark>
