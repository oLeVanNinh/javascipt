## Quuestion 101
A Solutions Architect needs to use AWS to implement pilot light disaster recovery for a three-tier web application hosted in an on-premises datacenter.
Which solution allows rapid provision of working, fully-scaled production environment?

<mark>A. Continuously replicate the production database server to Amazon RDS. Use AWS CloudFormation to deploy the application and any additional servers if necessary. </mark>
B. Continuously replicate the production database server to Amazon RDS. Create one application load balancer and register on-premises servers. Configure ELB Application Load Balancer to automatically deploy Amazon EC2 instances for application and additional servers if the on-premises application is down.
C. Use a scheduled Lambda function to replicate the production database to AWS. Use Amazon Route 53 health checks to deploy the application automatically to Amazon S3 if production is unhealthy.
D. Use a scheduled Lambda function to replicate the production database to AWS. Register on-premises servers to an Auto Scaling group and deploy the application and additional servers if production is unavailable.

## Question 102
A Solutions Architect notices slower response times from an application. The CloudWatch metrics on the MySQL RDS indicate Read IOPS are high and fluctuate significantly when the database is under load.
How should the database environment be re-designed to resolve the IOPS fluctuation?

A. Change the RDS instance type to get more RAM.
<mark>B. Change the storage type to Provisioned IOPS.</mark>
C. Scale the web server tier horizontally.
D. Split the DB layer into separate RDS instances.


## Question 103
A Solutions Architect is designing a solution that can monitor memory and disk space utilization of all Amazon EC2 instances running Amazon Linux and
Windows.
Which solution meets this requirement?

A. Default Amazon CloudWatch metrics.
<mark>B. Custom Amazon CloudWatch metrics.</mark>
C. Amazon Inspector resource monitoring.
D. Default monitoring of Amazon EC2 instances.


## Question 104
A Solutions Architect is creating a new relational database. The Compliance team will use the database, and mandates that data content must be stored across three different Availability Zones.
Which of the following options should the Architect Use?

<mark>A. Amazon Aurora</mark>
B. Amazon RDS MySQL with Multi-AZ enabled
C. Amazon DynamoDB
D. Amazon ElastiCache


## Question 105
A company needs to quickly ensure that all files created in an Amazon S3 bucket in us-east-1 are also available in another bucket in ap-southeast-2.
Which option represents the SIMPLIEST way to implement this design?

A. Add an S3 lifecycle rule to move any files from the bucket in us-east-1 to the bucket in ap-southeast-2.
B. Create a Lambda function to be triggered for every new file in us-east-1 that copies the file to the bucket in ap-southeast-2.
C. Use SNS to notify the bucket in ap-southeast-2 to create a file whenever the file is created in the bucket in us-east-1.
<mark>D. Enable versioning and configure cross-region replication from the bucket in us-east-1 to the bucket in ap-southeast-2.</mark>

## Question 106
An organization has a long-running image processing application that runs on Spot Instances that will be terminated when interrupted. A highly available workload must be designed to respond to Spot Instance interruption notices. The solution must include a two-minute warning when there is not enough capacity.
How can these requirements be met?

<mark>A. Use Amazon CloudWatch Events to invoke an AWS Lambda function that can launch On-Demand Instances.</mark>
B. Regularly store data from the application on Amazon DynamoDB. Increase the maximum number of instances in the AWS Auto Scaling group.
C. Manually place a bid for additional Spot Instances at a higher price in the same AWS Region and Availability Zone.
D. Ensure that the Amazon Machine Image associated with the application has the latest configurations for the launch configuration.

## Question 107
A company has an Amazon RDS-managed online transaction processing system that has very heavy read and write. The Solutions Architect notices throughput issues with the system.
How can the responsiveness of the primary database be improved?

A. Use asynchronous replication for standby to maximize throughput during peak demand.
<mark>B. Offload SELECT queries that can tolerate stale data to READ replica.</mark>
C. Offload SELECT and UPDATE queries to READ replica.
D. Offload SELECT query that needs the most current data to READ replica.

## Question 108
A company is designing a failover strategy in Amazon Route 53 for its resources between two AWS Regions. The company must have the ability to route a user's traffic to the region with least latency, and if both regions are healthy, Route 53 should route traffic to resources in both regions.
Which strategy should the Solutions Architect recommend?

<mark>A. Configure active-active failover using Route 53 latency DNS records.</mark>
B. Configure active-passive failover using Route 53 latency DNS records.
C. Configure active-active failover using Route 53 failover DNS records.
D. Configure active-passive failover using Route 53 failover DNS records.

## Question 109
A company is developing several critical long-running applications hosted on Docker.
How should a Solutions Architect design a solution to meet the scalability and orchestration requirements on AWS?

<mark>A. Use Amazon ECS and Service Auto Scaling.</mark>
B. Use Spot Instances for orchestration and for scaling containers on existing Amazon EC2 instances.
C. Use AWS OpsWorks to launch containers in new Amazon EC2 instances.
D. Use Auto Scaling groups to launch containers on existing Amazon EC2 instances.


## Question 110
A Solutions Architect is developing a new web application on AWS. The Architect expects the application to become very popular, so the application must scale to support the load. The Architect wants to focus on software development and deploying new features without provisioning or managing instances.
What solution is appropriate?

<mark>A. Amazon API Gateway and AWS Lambda</mark>
B. Elastic Load Balancing with Auto Scaling groups and Amazon EC2
C. Amazon API Gateway and Amazon EC2
D. Amazon CloudFront and AWS Lambda
