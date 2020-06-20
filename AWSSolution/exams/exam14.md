## Question 131
An on-premises database is experiencing significant performance problems when running SQL queries. With 10 users, the lookups are performing as expected.
As the number of users increases, the lookups take three times longer than expected to return values to an application.
Which action should a Solutions Architect take to maintain performance as the user count increases?

A. Use Amazon SQS.
B. Deploy Multi-AZ RDS MySQL
<mark>C. Configure Amazon RDS with additional read replicas.</mark>
D. Migrate from MySQL to RDS Microsoft SQL Server.

## Question 132
A team has an application that detects new objects being uploaded into an Amazon S3 bucket. The uploads trigger a Lambda function to write object metadata into an Amazon DynamoDB table and RDS PostgreSQL database.
Which action should the team take to ensure high availability?

A. Enable cross-region replication in the Amazon S3 bucket.
B. Create a Lambda function for each Availability Zone the application is deployed in.
<mark>C. Enable multi-AZ on the RDS PostgreSQL database.</mark>
D. Create a DynamoDB stream for the DynamoDB table.

## Question 133
A media company must store 10 TB of audio recordings. Retrieval happens infrequently and requestors agree on an 8-hour turnaround time.
What is the MOST cost-effective solution to store the files?

A. Amazon S3 Standard "" Infrequent Access (Standard "" IA)
B. EBS Throughput Optimized HDD (st1)
C. EBS Cold HDD (sc1)
<mark>D. Amazon Glacier</mark>

## Question 134
A company wants to improve the performance of their web application after receiving customer complaints. An analysis concluded that the same complex database queries were causing increased latency.
What should a Solutions Architect recommend to improve the application's performance?

A. Migrate the database to MySQL.
B. Use Amazon RedShift to analyze the queries.
<mark>C. Integrate Amazon ElastiCache into the application.</mark>
D. Use a Lambda-triggered request to the backend database.

## Question 135
Which tool analyzes account resources and provides a detailed inventory of changes over time?

<mark>A. AWS Config</mark>
B. AWS CloudFormation
C. Amazon CloudWatch
D. AWS Service Catalog

## Question 136
A Solutions Architect is designing a solution that will include a database in Amazon RDS. Corporate security policy mandates that the database, its logs, and its backups are all encrypted.

Which is the MOST efficient option to fulfill the security policy using Amazon RDS?
A. Launch an Amazon RDS instance with encryption enabled. Enable encryption for logs and backups.
B. Launch an Amazon RDS instance. Enable encryption for database, logs and backups.
<mark>C. Launch an Amazon RDS instance with encryption enabled. Logs and backups are automatically encrypted.</mark>
D. Launch an Amazon RDS instance. Enable encryption for backups. Encrypt logs with a database-engine feature.

## Question 137
A Solutions Architect is designing a public-facing web application for employees to upload images to their social media account. The application consists of multiple Amazon EC2 instances behind an elastic load balancer, an Amazon S3 bucket where uploaded images are stored, and an Amazon DynamoDB table for storing image metadata.
Which AWS service can the Architect use to automate the process of updating metadata in the DynamoDB table upon image upload?

A. Amazon CloudWatch
B. AWS CloudFormation
<mark>C. AWS Lambda</mark>
D. Amazon SQS

## Question 138
A company's policy requires that all data stored in Amazon S3 is encrypted. The company wants to use the option with the least overhead and does not want to manage any encryption keys.
Which of the following options will meet the company's requirements?

A. AWS CloudHSM
B. AWS Trusted Advisor
<mark>C. Server Side Encryption (SSE-S3)</mark>
D. Server Side Encryption (SSE-KMS)

## Question 139
A company has gigabytes of web log files stored in an Amazon S3 bucket. A Solutions Architect wants to copy those files into Amazon Redshift for analysis. The company's security policy mandates that data is encrypted at rest both in the Amazon Redshift cluster and the Amazon S3 bucket.
Which process will fulfill the security requirements?

A. Enable server-side encryption on the Amazon S3 bucket. Launch an unencrypted Amazon Redshift cluster. Copy the data into the Amazon Redshift cluster.
B. Enable server-side encryption on the Amazon S3 bucket. Copy data from the Amazon S3 bucket into an unencrypted Redshift cluster. Enable encryption on the cluster.
C. Launch an encrypted Amazon Redshift cluster. Copy the data from the Amazon S3 bucket into the Amazon Redshift cluster. Copy data back to the Amazon S3 bucket in encrypted form.
<mark>D. Enable server-side encryption on the Amazon S3 bucket. Launch an encrypted Amazon Redshift cluster. Copy the data into the Amazon Redshift cluster.</mark>

## Question 140
An application runs on Amazon EC2 instances in an Auto Scaling group. When instances are terminated, the Systems Operations team cannot determine the route cause, because the logs reside on the terminated instances and are lost.
How can the root cause be determined?

A. Use ephemeral volumes to store the log files.
B. Use a scheduled Amazon CloudWatch Event to take regular Amazon EBS snapshots.
<mark>C. Use an Amazon CloudWatch agent to push the logs to Amazon CloudWatch Logs.</mark>
D. Use AWS CloudTrail to pull the logs from the Amazon EC2 instances.
