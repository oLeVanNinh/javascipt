## Question 111
A Solutions Architect is deploying a new production MySQL database on AWS. It is critical that the database is highly available.
What should the Architect do to achieve this goal with Amazon RDS?

A. Create a read replica of the primary database and deploy it in a different AWS Region.
<mark>B. Enable multi-AZ to create a standby database in a different Availability Zone.</mark>
C. Enable multi-AZ to create a standby database in a different AWS Region.
D. Create a read replica of the primary database and deploy it in a different Availability Zone.

## Question 112

An organization designs a mobile application for their customers to upload photos to a site. The application needs a secure login with MFA. The organization wants to limit the initial build time and maintenance of the solution.
Which solution should a Solutions Architect recommend to meet the requirements?

<mark>A. Use Amazon Cognito Identity with SMS-based MFA.</mark>
B. Edit AWS IAM policies to require MFA for all users.
C. Federate IAM against corporate AD that requires MFA.
D. Use Amazon API Gateway and require SSE for photos.

## Question 113
A Solutions Architect is designing a solution to monitor weather changes by the minute. The frontend application is hosted on Amazon EC2 instances. The backend must be scalable to a virtually unlimited size, and data retrieval must occur with minimal latency.
Which AWS service should the Architect use to store the data and achieve these requirements?

<mark>A. Amazon S3</mark>
B. Amazon DynamoDB
C. Amazon RDS
D. Amazon EBS

## Question 114
A company hosts a website on premises. The website has a mix of static and dynamic content, but users experience latency when loading static files.
Which AWS service can help reduce latency?

<mark>A. Amazon CloudFront with on-premises servers as the origin</mark>
B. ELB Application Load Balancer
C. Amazon Route 53 latency-based routing
D. Amazon EFS to store and server static files

## Question 115
A company wants to analyze all of its sales information aggregated over the last 12 months. The company expects there to be over 10TB of data from multiple sources.
What service should be used?

A. Amazon DynamoDB
B. Amazon Aurora MySQL
C. Amazon RDS MySQL
<mark>D. Amazon Redshift</mark>

## Question 116
A media company has deployed a multi-tier architecture on AWS. Web servers are deployed in two Availability Zones using an Auto Scaling group with a default
Auto Scaling termination policy. The web servers' Auto Scaling group currently has 15 instances running.
Which instance will be terminated first during a scale-in operation?

A. The instance with the oldest launch configuration.
<mark>B. The instance in the Availability Zone that has most instances.</mark>
C. The instance closest to the next billing hour.
D. The oldest instance in the group.

## Question 117
A retail company has sensors placed in its physical retail stores. The sensors send messages over HTTP when customers interact with in-store product displays.
A Solutions Architect needs to implement a system for processing those sensor messages; the results must be available for the Data Analysis team.
Which architecture should be used to meet these requirements?

<mark>A. Implement an Amazon API Gateway to server as the HTTP endpoint. Have the API Gateway trigger an AWS Lambda function to process the messages, and save the results to an Amazon DynamoDB table.</mark>
B. Create an Amazon EC2 instance to server as the HTTP endpoint and to process the messages. Save the results to Amazon S3 for the Data Analysis team to download.
C. Use Amazon Route 53 to direct incoming sensor messages to a Lambda function to process the message and save the results to a Amazon DynamoDB table.
D. Use AWS Direct Connect to connect sensors to DynamoDB so that data can be written directly to a DynamoDB table where it can be accessed by the Data Analysis team.

## Question 118
A client is migrating a legacy web application to the AWS Cloud. The current system uses an Oracle database as a relational database management system solution. Backups occur every night, and the data is stored on-premises. The Solutions Architect must automate the backups and identity a storage solution while keeping costs low.
Which AWS service will meet these requirements?

<mark>A. Amazon RDS</mark>
B. Amazon RedShift
C. Amazon DynamoDB Accelerator
D. Amazon ElastiCache

## Question 119
A company has an Amazon RDS database backing its production website. The Sales team needs to run queries against the database to track training program effectiveness. Queries against the production database cannot impact performance, and the solution must be easy to maintain.
How can these requirements be met?

A. Use an Amazon Redshift database. Copy the product database into Redshift and allow the team to query it.
<mark>B. Use an Amazon RDS read replica of the production database and allow the team to query against it.</mark>
C. Use multiple Amazon EC2 instances running replicas of the production database, placed behind a load balancer.
D. Use an Amazon DynamoDB table to store a copy of the data.

## Question 120
A company must collect temperature data from thousands of remote weather devices. The company must also store this data in a data warehouse to run aggregations and visualizations.
Which services will meet these requirements? (Choose two.)

<mark>A. Amazon Kinesis Data Firehouse</mark>
B. Amazon SQS
<mark>C. Amazon Redshift</mark>
D. Amazon SNS
E. Amazon DynamoDB
