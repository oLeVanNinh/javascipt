## Question 261
A company's Amazon RDS MySQL DB instance may be rebooted for maintenance and to apply patches. This database is critical and potential user disruption must be minimized.
What should the Solution Architect do in this scenario?

A. Set up an RDS MySQL cluster
B. Create an RDS MySQL Read Replica.
<mark>C. Set RDS MySQL to Multi-AZ.</mark>
D. Create an Amazon EC2 instance MySQL cluster.

## Question 262
A retail company operates an e-commerce environment that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an
Amazon EC2 Auto Scaling group. Images are hosted in an Amazon S3 bucket using a custom domain name.
During a flash sale with 10,000 simultaneous users, some images on the website are not loading.
What should be done to resolve the performance issue?

A. Move the images to the EC2 instances in the Auto Scaling group.
B. Enable Transfer Acceleration for the S3 bucket.
<mark>C. Configure an Amazon CloudFront distribution with the S3 bucket as the origin.</mark>
D. Increase the number of minimum, desired, and maximum EC2 instances in the Auto Scaling group.

## Question 263
A solutions Architect is designing a new workload where an AWS Lambda function will access an Amazon DynamoDB table.
What is the MOST secure means of granting the Lambda function access to the DynamoDB table?

<mark>A. Create an identity and access management (IAM) role with the necessary permissions to access the DynamoDB table, and assign the role to the Lambda function.</mark>
B. Create a DynamoDB user name and password and give them to the Developer to use in the Lambda function.
C. Create an identity and access management (IAM) user, and create access and secret keys for the user. Give the user the necessary permissions to access the DynamoDB table. Have the Developer use these keys to access the resources.
D. Create an identity and access management (IAM) role allowing access from AWS Lambda and assign the role to the DynamoDB table.

## Question 264
A web application runs on Amazon EC2 instances behind an ELB Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple
Availability Zones. Every night, the Auto Scaling group doubles in size. Traffic analysis shows that users in a particular region are requesting the same static content stored locally on the EC2 instances.
How can a Solutions Architect reduces the need to scale and improve application performance for the users?

A. Re-deploy the application in a new VPC that is closer to the users making the requests.
<mark>B. Create an Amazon CloudFront distribution for the site and redirect user traffic to the distribution.</mark>
C. Store the contents on Amazon EFS instead of the EC2 root volume.
D. Implement Amazon Redshift to create a repository of the content closer to the users.

## Question 265
A Solutions Architect is designing an application that will run on Amazon ECS behind an Application Load Balancer (ALB). For security reasons, the Amazon EC2 host instances for the ECS cluster are in a private subnet.
What should be done to ensure that the incoming traffic to the host instances is from the ALB only?

A. Create network ACL rules for the private subnet to allow incoming traffic on ports 32768 through 61000 from the IP address of the ALB only.
B. Update the EC2 cluster security group to allow incoming access from the IP address of the ALB only.
<mark>C. Modify the security group used by the EC2 cluster to allow incoming traffic from the security group used by the ALB only.</mark>
D. Enable AWS WAF on the ALB and enable the ECS rule.

## Question 266
A company wants to improve latency by hosting images within a public Amazon S3 bucket fronted by an Amazon CloudFront distribution. The company wants to restrict access to the S3 bucket to include the CloudFront distribution only, while also allowing CloudFront to continue proper functionality.
What should be done after making the bucket private to restrict access with the LEAST operational overhead?

A. Create a CloudFront origin access identity and create a security group that allows access from CloudFront.
<mark>B. Create a CloudFront origin access identity and update the bucket policy to grant access to it.</mark>
C. Create a bucket policy restricting all access to the bucket to include CloudFront IPs only.
D. Enable the CloudFront option to restrict viewer access and update the bucket policy to allow the distribution.

## Question 267
A Solutions Architect is designing a new architecture that will use an Amazon EC2 Auto Scaling group.
Which of the following factors determine the health check grace period? (Select TWO.)

A. How frequently the Auto Scaling group scales up or down.
B. How many Amazon CloudWatch alarms are configured for status checks.
<mark>C. How much of the application code is embedded in the AMI.</mark>
D. How long it takes for the Auto Scaling group to detect a failure.
<mark>E. How long the bootstrap script takes to run.</mark>

## Question 268
A company plans to deploy a new application in AWS that reads and writes information to a database. The company wants to deploy the application in two different AWS Regions in an active-active configuration. The databases need to replicate to keep information in sync.
What should be used to meet these requirements?

A. Amazon Athena with Amazon S3 cross-region replication
B. AWS Database Migration Service with change data capture
<mark>C. Amazon DynamoDB with global tables</mark>
D. Amazon RDS for PostgreSQL with a cross-region Read Replica

## Question 269
A company is developing a data lake solution in Amazon S3 to analyze large-scale datasets. The solution makes infrequent SQL queries only. In addition, the company wants to minimize infrastructure costs.
Which AWS service should be used to meet these requirements?

<mark>A. Amazon Athena</mark>
B. Amazon Redshift Spectrum
C. Amazon RDS for PostgreSQL
D. Amazon Aurora

## Question 270
A company needs to store data for 5 years. The company will need to have immediate and highly available access to the data at any point in time, but will not require frequent access.
What lifecycle action should be taked to meet the requirements while reducing costs?

<mark>A. Transition objects from Amazon S3 Standard to Amazon S3 Standard-Infrequent Access (S3 Standard-IA)</mark>
B. Transition objects to expire after 5 years.
C. Transition objects from Amazon S3 Standard to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
D. Transition objects from Amazon S3 Standard to the GLACIER storage class.
