## Question171
As part of a migration strategy, a Solutions Architect needs to analyze workloads that can be optimized for performance and cost. The Solutions Architect has identified a stateless application that serves static content as a potential candidate to move to the cloud. The Solutions Architect has the flexibility to choose an identity solution between Facebook, Twitter, and Amazon.
Which AWS solution offers flexibility and ease of use, and the LEAST operational overhead for this migration?

A. Use AWS Identity and Access Management (IAM) for managing identities, and migrate the application to run on Amazon S3, Amazon API Gateway, and AWS Lambda.
B. Use a third-party solution for managing identities, and migrate the application to run on Amazon S3, EC2 Spot Instances, and Amazon EC2.
<mark>C. Use Amazon Cognito for managing identities, and migrate the application to run on Amazon S3, Amazon API Gateway, and AWS Lambda.</mark>
D. Use Amazon Cognito for managing identities, and migrate the application to run on Amazon S3, EC2 Spot Instances, and Amazon EC2.

## Question 172
A company needs to capture all client connection information from its Application Load Balancer every five minutes. This data will be used to analyze traffic patterns and troubleshoot the application.
How can a Solutions Architect meet this requirement?

A. Enable AWS CloudTrail for the Application Load Balancer.
<mark>B. Enable Access Logs on the Application Load Balancer.</mark>
C. Install CloudWatch Agent on the Application Load Balancer.
D. Enable CloudWatch metrics on the Application Load Balancer.

## Question 173
Question #173Topic 1
An application runs on EC2 instances behind an Elastic Load Balancing Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. The application provides a RESTful interface with both synchronous and asynchronous operations. The asynchronous operations require up to 5 minutes to complete. Although the application must remain available at all times, after business hours, the traffic going to the application is greatly reduced and often results in the Auto Scaling group running the minimum number of On-Demand Instances.
What should the Solutions Architect recommend to optimize the cost of the environment after business hours?

A. Change the Availability Zones in which the instances were created to another Availability Zone in the same region with a lower cost.
B. Replace all On-Demand Instances with Spot Instances in the Auto Scaling group.
<mark>C. Purchase Reserved Instances for the minimum number of Auto Scaling instances.</mark>
D. Reduce the number of minimum instances to 0. New requests to the Application Load Balancer create new instances.

## Question 174
A Solutions Architect is designing a web application for document sharing. The users will upload documents that are then made available to other users.
There will be tens of thousands of these documents.
What is the MOST cost-effective storage solution?

A. Amazon EFS
<mark>B. Amazon S3</mark>
C. Amazon Glacier
D. Amazon EBS

## Question 175 ** ??
A Solutions Architect was tasked with reviewing several templates that build VPCs and ensuring that they meet specific security requirements. After reviewing the templates, the Architect realizes that all of the templates are missing important security best practices.
What should the Architect do to implement security best practices in an efficient manner?

A. Use VPC peering to enforce network consistency
B. Restrict users from deploying an AWS CloudFormation template
<mark>C. Provide the teams a nested AWS CloudFormation template that builds the VPC correctly</mark>
D. Create AWS Identity and Access Management (IAM) policies that enforce the corporate VPC architecture standards

## Question 176
A Solutions Architect has been given the following requirements for a company's VPC:
✑ The solution is a two-tiered application with a web tier and a database tier.
✑ All web traffic to the environment must be directed from the Internet to an Application Load Balancer.
✑ The web servers and the databases should not obtain public IP addresses or be directly accessible from the public Internet.
✑ Because of security requirements, databases may not share a route table or subnet with any other service.
✑ The environment must be highly available within the same VPC for all services.
What is the minimum number of subnets that the Solutions Architect will need based on these requirements and best practices?

A. 2
B. 3
C. 4
<mark>D. 6</mark>

## Question 177
An application currently stores objects in Amazon S3-Standard. The application accesses new objects frequently for one week. After one week, they are accessed occasionally for analysis batch jobs. A Solutions Architect has been asked to reduce storage costs for the application while allowing immediate access for batch jobs.
How can costs be reduced without reducing data durability?

A. Create a lifecycle policy that moves Amazon S3 data to Amazon S3 One Zone-Infrequent Access storage after 7 days. After 30 days, move the data to Amazon Glacier.
B. Keep the data on Amazon S3, and create a lifecycle policy to move S3 data to Amazon Glacier after 7 days.
C. Move all Amazon S3 data to S3 Standard-Infrequent Access storage, and create a lifecycle policy to move the data to Amazon Glacier after 7 days.
<mark>D. Keep the data on Amazon S3, then create a lifecycle policy to move the data to S3 Standard-Infrequent Access storage after 7 days.</mark>

## Question 178
A company is building a critical ingestion service on AWS that will receive 1,000 incoming events per second. The events must be processed in order, and no events may be lost. Multiple applications will need to process each event. The company will expose the service as RESTful calls through an API Gateway.
What should a Solutions Architect use to receive the events based on these requirements?

<mark>A. Amazon Kinesis Data Stream</mark>
B. Amazon DynamoDB
C. Amazon SQS
D. Amazon SNS

## Question 179
An AWS Lambda function requires access to an Amazon RDS for SQL Server instance. It is against company policy to store passwords in Lambda functions.
How can a Solutions Architect enable the Lambda function to retrieve the database password without violating company policy?

A. Add an IAM policy for IAM database access to the Lambda execution role.
B. Store a one-way hash of the password in the Lambda function.
C. Have the Lambda function use the AWS Systems Manager Parameter Store.
D. Connect to the Amazon RDS for SQL Server instance by using a role assigned to the Lambda function.


## Question 180
A company has two different types of reporting needs on their 200-GB data warehouse:
✑ Data scientists run a small number of concurrent ad hoc SQL queries that can take several minutes each to run.
✑ Display screens throughout the company run many fast SQL queries to populate dashboards.
Which design would meet these requirements with the LEAST cost?

A. Replicate relevant data between Amazon Redshift and Amazon DynamoDB. Data scientists use Redshift. Dashboards use DynamoDB.
B. Configure auto-replication between Amazon Redshift and Amazon RDS. Data scientists use Redshift. Dashboards use RDS.
<mark>C. Use Amazon Redshift for both requirements, with separate query queues configured in workload management.</mark>
D. Use Amazon Redshift for Data Scientists. Run automated dashboard queries against Redshift and store the results in Amazon ElastiCache. Dashboards query ElastiCache.
