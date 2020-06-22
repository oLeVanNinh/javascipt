## Question 201
A Solutions Architect is trying to bring a data warehouse workload to an Amazon EC2 instance. The data will reside in Amazon EBS volumes and full
table scans will be executed frequently.
What type of Amazon EBS volume would be most suitable in this scenario?

<mark>A. Throughput Optimized HDD (st1)</mark>
B. Provisioned IOPS SSD (io1)
C. General Purpose SSD (gp2)
D. Cold HDD (sc1)

## Question 202
A Solutions Architect has a three-tier web application that serves customers worldwide. Analysis reveals that product images take more time to load than expected.
Which action will improve the image load time?

A. Store product images on Amazon EBS-optimized storage volumes
B. Store product images in an Amazon S3 bucket
<mark>C. Use an Amazon CloudFront distribution for product images</mark>
D. Use an Auto Scaling group to add instances for product images

## Question 203
A gaming application is heavily dependent on caching and uses Amazon ElastiCache for Redis. The application performance was recently degraded due
to failure of the cache node.
What should a Solutions Architect recommend to minimize performance degradation in the future?

A. Migrate from ElastiCache to Amazon RDS
B. Configure automatic backup to save cache data
<mark>C. Configure ElastiCache Multi-AZ with automatic failover</mark>
D. Use Auto Scaling to provision cache nodes based on CPU usage

## Question 204 **
A client has set up an Auto Scaling group associated with a load balancer. The client has noticed that instances launched by the Auto Scaling group are reported unhealthy as the result of an Elastic Load Balancing (ELB) health check, but these unhealthy instances are not being terminated.
What can a Solutions Architect do to ensure that the instances marked unhealthy will be terminated and replaced?

A. Increase the value for the health check interval set on the ELB load balancer.
<mark>B. Change the thresholds set on the Auto Scaling group health check.</mark>
C. Change the health check type to ELB for the Auto Scaling group.
D. Change the health check set on the ELB load balancer to use TCP rather than HTTP checks.

## Question 205
A Solutions Architect must review an application deployed on EC2 instances that currently stores multiple 5-GB files on attached instance store volumes. The company recently experienced a significant data loss after stopping and starting their instances and wants to prevent the data loss from happening again. The solution should minimize performance impact and the number of code changes required.
What should the Solutions Architect recommend?

A. Store the application data in Amazon S3
<mark>B. Store the application data in an EBS volume</mark>
C. Store the application data in Amazon ElastiCache
D. Store the application data in Amazon DynamoDB

## Question 206
An organization is deploying Amazon ElastiCache for Redis and requires password protection to improve their data security posture.
Which solution should a Solutions Architect recommend?

<mark>A. Redis Auth</mark>
B. AWS Single Sign-On
C. IAM database authentication
D. VPC security group for Redis

## Question 207
A Solutions Architect is designing a solution to send Amazon CloudWatch Alarm notifications to a group of users on a smartphone mobile application.
What are the key steps to this solution? (Choose two.)

<mark>A. Configure the CloudWatch Alarm to send the notification to an Amazon SNS topic whenever there is an alarm.</mark>
B. Configure the CloudWatch Alarm to send the notification to a mobile phone number whenever there is an alarm.
C. Configure the CloudWatch Alarm to send the notification to the email addresses whenever there is an alarm.
<mark>D. Create the platform endpoints for mobile devices and subscribe the SNS topic with platform endpoints.</mark>
E. Subscribe the SNS topic with an Amazon SQS queue, and poll the messages continuously from the queue. Use each mobile platform's libraries to send the message to the mobile application.

## Question 208
A company uses Amazon S3 for storing a variety of files. A Solutions Architect needs to design a feature that will allow users to instantly restore any deleted files within 30 days of deletion.
Which is the MOST cost-efficient solution?

A. Create lifecycle policies that move the objects to Amazon Glacier and delete them after 30 days.
B. Enable cross-region replication. Empty the replica bucket every 30 days using an AWS Lambda function.
<mark>C. Enable versioning and create a lifecycle policy to remove expired versions after 30 days.</mark>
D. Enable versioning and MFA Delete. Using a Lambda function, remove MFA delete from objects more than 30 days old.

## Question 209
An application running on Amazon EC2 has been experiencing performance issues when accessing an Amazon RDS for Oracle database. The database has been provisioned correctly for average workloads, but there are several usage spikes each day that have saturated the database, causing the application to time out. The application is write-heavy, updating information more often than reading information. A Solutions Architect has been asked to review the application design.
What should the Solutions Architect recommend to improve performance?

A. Put an Amazon ElastiCache cluster in front of the database and use lazy loading to limit database access during peak periods.
B. Put an Amazon Elasticsearch domain in front of the database and use a Write-Through cache to reduce database access during peak periods.
C. Configure an Amazon RDS Auto Scaling group to automatically scale the RDS instance during load spikes.
<mark>D. Change the Amazon RDS instance storage type from General Purpose SSD to provisioned IOPS SSD.</mark>

## Question 210
During performance testing of an application, the Amazon RDS database caused a performance bottleneck.
What steps can be taken to improve the database performance? (Choose two.)

A. Change the RDS database instance to multiple Availability Zones.
<mark>B. Scale up to a larger RDS instance type.</mark>
<mar>C. Redirect read queries to RDS read replicas.</mark>
D. Scale out using an Auto Scaling group for RDS.
E. Use RDS in a separate AWS Region.
