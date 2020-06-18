## Question 11
An organization is currently hosting a large amount of frequently accessed data consisting of key-value pairs and semi-structured documents in their data center.
They are planning to move this data to AWS.
Which of one of the following services MOST effectively meets their needs?

A. Amazon Redshift
B. Amazon RDS
<mark>C. Amazon DynamoDB</mark>
D. Amazon Aurora

## Question 12
A Lambda function must execute a query against an Amazon RDS database in a private subnet.
Which steps are required to allow the Lambda function to access the Amazon RDS database? (Select two.)

A. Create a VPC Endpoint for Amazon RDS. **(There is no end point for RDS)**
<mark>B. Create the Lambda function within the Amazon RDS VPC.</mark>
C. Change the ingress rules of Lambda security group, allowing the Amazon RDS security group.
<mark>D. Change the ingress rules of the Amazon RDS security group, allowing the Lambda security group.</mark>
E. Add an Internet Gateway (IGW) to the VPC, route the private subnet to the IGW.

## Question 13
A Solutions Architect needs to build a resilient data warehouse using Amazon Redshift. The Architect needs to rebuild the Redshift cluster in another region.
Which approach can the Architect take to address this requirement?

<mark>A. Modify the Redshift cluster and configure cross-region snapshots to the other region.</mark>
B. Modify the Redshift cluster to take snapshots of the Amazon EBS volumes each day, sharing those snapshots with the other region.
C. Modify the Redshift cluster and configure the backup and specify the Amazon S3 bucket in the other region.
D. Modify the Redshift cluster to use AWS Snowball in export mode with data delivered to the other region.

## Question 14 ??
A popular e-commerce application runs on AWS. The application encounters performance issues. The database is unable to handle the amount of queries and load during peak times.
The database is running on the RDS Aurora engine on the largest instance size available.
What should an administrator do to improve performance?

A. Convert the database to Amazon Redshift.
B. Create a CloudFront distribution.
C. Convert the database to use EBS Provisioned IOPS.
<mark>D. Create one or more read replicas.</mark>

## Question 15
A Solutions Architect is designing the architecture for a new three-tier web-based e-commerce site that must be available 24/7. Requests are expected to range from 100 to 10,000 each minute. Usage can vary depending on time of day, holidays, and promotions. The design should be able to handle these volumes, with the ability to handle higher volumes if necessary.
How should the Architect design the architecture to ensure the web tier is cost-optimized and can handle the expected traffic? (Select two.)

<mark>A. Launch Amazon EC2 instances in an Auto Scaling group behind an ELB.</mark>
B. Store all static files in a multi-AZ Amazon Aurora database.
<mark>C. Create an CloudFront distribution pointing to static content in Amazon S3.</mark>
D. Use Amazon Route 53 to route traffic to the correct region.
E. Use Amazon S3 multi-part uploads to improve upload times.

## Question 16
A Solution Architect is designing a three-tier web application. The Architect wants to restrict access to the database tier to accept traffic from the application servers only. However, these application servers are in an Auto Scaling group and may vary in quantity. How should the Architect configure the database servers to meet the requirements?

A. Configure the database security group to allow database traffic from the application server IP addresses.
<mark>B. Configure the database security group to allow database traffic from the application server security group.</mark>
C. Configure the database subnet network ACL to deny all inbound non-database traffic from the application-tier subnet.
D. Configure the database subnet network ACL to allow inbound database traffic from the application-tier subnet.

## Question 17 ??
An Internet-facing multi-tier web application must be highly available. An ELB Classic Load Balancer is deployed in front of the web tier. Amazon EC2 instances at the web application tier are deployed evenly across two Availability Zones. The database is deployed using RDS Multi-AZ. A NAT instance is launched for Amazon
EC2 instances and database resources to access the Internet. These instances are not assigned with public IP addresses.
Which component poses a potential single point of failure in this architecture?

A. Amazon EC2
<mark>B. NAT instance</mark>
C. ELB Classic Load Balancer
D. Amazon RDS

## Question 18
A call center application consists of a three-tier application using Auto Scaling groups to automatically scale resources as needed. Users report that every morning at 9:00 AM the system becomes very slow for about 15 minutes. A Solution Architect determines that a large percentage of the call center staff starts work at 9:00
AM, so Auto Scaling does not have enough time to scale out to meet demand.
How can the Architect fix the problem?

A. Change the Auto Scaling group's scale out event to scale based on network utilization.
<mark>B. Create an Auto Scaling scheduled action to scale out the necessary resources at 8:30 AM every morning.</mark>
C. Use Reserved Instances to ensure the system has reserved the right amount of capacity for the scale-up events.
D. Permanently keep a steady state of instances that is needed at 9:00 AM to guarantee available resources, but leverage Spot Instances.

## Question 19
An e-commerce application is hosted in AWS. The last time a new product was launched, the application experienced a performance issue due to an enormous spike in traffic.
Management decided that capacity must be doubled the week after the product is launched.
Which is the MOST efficient way for management to ensure that capacity requirements are met?

A. Add a Step Scaling policy. **(In this case we know specific size)**
B. Add a Dynamic Scaling policy. **(There is no dynamic scaling policy)**
<mark>C. Add a Scheduled Scaling action.</mark>
D. Add Amazon EC2 Spot Instances.

## Question 20
A customer owns a simple API for their website that receives about 1,000 requests each day and has an average response time of 50 ms. It is currently hosted on one c4.large instance.
Which changes to the architecture will provide high availability at the LOWEST cost?

A. Create an Auto Scaling group with a minimum of one instance and a maximum of two instances, then use an Application Load Balancer to balance the traffic.
<mark>B. Recreate the API using Amazon API Gateway and use AWS Lambda as the service backend.</mark>
C. Create an Auto Scaling group with a maximum of two instances, then use an Application Load Balancer to balance the traffic.
D. Recreate the API using Amazon API Gateway and integrate the new API with the existing backend service.
