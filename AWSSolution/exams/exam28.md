## Question 271
A company wants to create an application that will transmit protected health information (PHI) to thousands of service consumers in different AWS accounts. The application servers will sit in private VPC subnets. The routing for the application must be fault tolerant.
What should be done to meet these requirements?

<mark>A. Create a VPC endpoint service and grant permissions to specific service consumers to create a connection.</mark>
B. Create a virtual private gateway connection between each pair of service provider VPCs and service consumer VPCs.
C. Create an internal Application Load Balancer in the service provider VPC and put application servers behind it.
D. Create a proxy server in the service provider VPC to route requests from service consumers to the application servers.

## Question 272
A company hosts a website using Amazon API Gateway on the front end. Recently, there has been heavy traffic on the website and the company wants to control access by allowing authenticated traffic only.
How should the company limit access to authenticated users only? (Select TWO.)

<mark>A. Allow users that are authenticated through Amazon Cognito.</mark>
B. Limit traffic through API Gateway.
C. Allow X.509 certificates to authenticate traffic.
D. Deploy AWS KMS to identify users.
<mark>E. Assign permissions in AWS IAM to allow users.</mark>

## Question 273
A company needs to use AWS resources to expand capacity for a website hosted in an on-premises data center. The AWS resources will include load balancers,
Auto Scaling, and Amazon EC2 instances that will access an on-premises database. Network connectivity has been established, but no traffic is going to the AWS environment.
How should Amazon Route 53 be configured to distribute load to the AWS environment? (Select TWO.)

<mark>A. Set up a weighted routing policy, distributing the workload between the load balancer and the on-premises environment.</mark>
B. Set up an A record to point the DNS name to the IP address of the load balancer.
C. Create multiple A records for the EC2 instances.
D. Set up a geolocation routing policy to distribute the workload between the load balancer and the on-premises environment.
<mark>E. Set up a routing policy for failover using the on-premises environment as primary and the load balancer as secondary.</mark>

## Question 274
Users submit requests to a service that takes several minutes to process. A Solutions Architect needs to ensure that these requests are processed at least once, and that the service has the ability to handle large increases in the number of requests.
How should these requirements be met?

<mark>A. Put the requests into an Amazon SQS queue and configure Amazon EC2 instances to poll the queue</mark>
B. Publish the message to an Amazon SNS topic that an Amazon EC2 subscriber can receive and process
C. Save the requests to an Amazon DynamoDB table with a DynamoDB stream that triggers an Amazon EC2 Spot Instance
D. Use Amazon S3 to store the requests and configure an event notification to have Amazon EC2 instances process the new object

## Question 275
A Solutions Architect is designing an Amazon VPC that requires access to a remote API server using IPv6. Resources within the VPC should not be accessed directly from the Internet.
How should this be achieved?

A. Use a NAT gateway and deny public access using security groups
<mark>B. Attach an egress-only internet gateway and update the routing tables</mark>
C. Use a NAT gateway and update the routing tables
D. Attach an internet gateway and deny public access using security groups

## Question 276
When designing an Amazon SQS message-processing solution, messages in the queue must be processed before the maximum retention time has elapsed.
Which actions will meet this requirement? (Choose two.)

A. Use AWS STS to process the messages
B. Use Amazon EBS-optimized Amazon EC2 instances to process the messages
<mark>C. Use Amazon EC2 instances in an Auto Scaling group with scaling triggered based on the queue length</mark>
<mark>D. Increase the SQS queue attribute for the message retention period</mark>
E. Convert the SQS queue to a first-in first-out (FIFO) queue

## Question 277
A company deployed a three-tier web application on Amazon EBS backed Amazon EC2 instances for the web and application tiers, and Amazon RDS for the database tier. The company is concerned about loss of data in the web and application tiers.
What is the MOST efficient way to prevent data loss?

A. Create an Amazon EFS file system and run a shell script to copy the data
B. Create an Amazon EBS snapshot using an Amazon CloudWatch Events rule
C. Create an Amazon S3 snapshot policy to back up the Amazon EBS volumes
<mark>D. Create a snapshot lifecycle policy that takes periodic snapshots of the Amazon EBS volumes</mark>

## Question 278
A company is using Amazon S3 for backups from an on-premises environment. Regulatory requirements state that data must be retained for at least 7 years. The data is infrequently accessed for 35 days, but needs to be instantly available. After 35 days, the data is rarely accessed.
Which combination of actions will provide the MOST cost-effective solution? (Choose two)

<mark>A. Change the backup so the data goes to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) directly</mark>
B. Create an S3 lifecycle policy that moves the data to the GLACIER storage class after 7 years
C. Change the backup so the data goes to Amazon Glacier directly
D. Create an S3 lifecycle policy that moves the data to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 35 days
<mark>E. Creates an S3 lifecycle policy that moves the data to the GLACIER storage class after 35 days</mark>

## Question 279
A Solutions Architect is building an online shopping application where users will be able to browse items, add items to a cart, and purchase the items. Images of items will be stored in Amazon S3 buckets organized by item category. When an item is no longer available for purchase, the item image will be deleted from the
S3 bucket.
Occasionally, during testing, item images deleted from the S3 bucket are still visible to some users.
What is a flaw in this design approach?

A. Defining S3 buckets by item may cause partition distribution errors, which will impact performance.
<mark>B. Amazon S3 DELETE requests are eventually consistent, which may cause other users to view items that have already been purchased</mark>
C. Amazon S3 DELETE requests apply a lock to the S3 bucket during the operation, causing other users to be blocked
D. Using Amazon S3 for persistence exposes the application to a single point of failure

## Question 280
A Solution Architect is creating a serverless web application that must access mapping data in hundreds of data files, each containing approximately 30 KB of data. The storage required is expected to grow to hundreds of terabytes.
Which storage solution is most cost-effective, yet still meets the requirements for this use case?
A. Amazon EFS
B. Amazon EBS Cold HDD (sc1)
<mark>C. Amazon S3 Standard</mark>
D. Amazon DynamoDB
