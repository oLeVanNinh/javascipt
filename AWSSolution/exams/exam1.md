# Question #1
A Solutions Architect is designing an application that will encrypt all data in an Amazon Redshift cluster.
Which action will encrypt the data at rest?

A. Place the Redshift cluster in a private subnet. **(Just protect in range of network)**
<mark>B. Use the AWS KMS Default Customer master key.</mark>
C. Encrypt the Amazon EBS volumes.
D. Encrypt the data using SSL/TLS.

# Question #2
A website experiences unpredictable traffic. During peak traffic times, the database is unable to keep up with the write request.
Which AWS service will help decouple the web application from the database?

<mark>A. Amazon SQS</mark> **(For decoupling service, SQS, SNS is popular solution)**
B. Amazon EFS
C. Amazon S3
D. AWS Lambda

# Question #3 ??
A legacy application needs to interact with local storage using iSCSI. A team needs to design a reliable storage solution to provision all new storage on AWS.
Which storage solution meets the legacy application requirements?

A. AWS Snowball storage for the legacy application until the application can be re-architected.
B. AWS Storage Gateway in cached mode for the legacy application storage to write data to Amazon S3.
<mark>C. AWS Storage Gateway in stored mode for the legacy application storage to write data to Amazon S3.</mark>
D. An Amazon S3 volume mounted on the legacy application server locally using the File Gateway service.

## Question #4
A Solutions Architect is designing an architecture for a mobile gaming application. The application is expected to be very popular. The Architect needs to prevent the Amazon RDS MySQL database from becoming a bottleneck due to frequently accessed queries.
Which service or feature should the Architect add to prevent a bottleneck?

A. Multi-AZ feature on the RDS MySQL Database **(Won't help)**
B. ELB Classic Load Balancer in front of the web application tier  **(Won't help)**
C. Amazon SQS in front of RDS MySQL Database **(Make for decoupling but not for the bottleneck)**
<mark>D. Amazon ElastiCache in front of the RDS MySQL Database</mark>

## Question #5
A company is launching an application that it expects to be very popular. The company needs a database that can scale with the rest of the application. The schema will change frequently. The application cannot afford any downtime for database changes.
Which AWS service allows the company to achieve these objectives?

A. Amazon Redshift **(Data warehouse)**
<mark>B. Amazon DynamoDB</mark>
C. Amazon RDS MySQL **(Hard to change scheme)**
D. Amazon Aurora

## Question 6 ??
A Solution Architect is designing a disaster recovery solution for a 5 TB Amazon Redshift cluster. The recovery site must be at least 500 miles (805 kilometers) from the live site.
How should the Architect meet these requirements?

A. Use AWS CloudFormation to deploy the cluster in a second region.
B. Take a snapshot of the cluster and copy it to another Availability Zone.
C. Modify the Redshift cluster to span two regions.
D. Enable cross-region snapshots to a different region.

## Question 7
A customer has written an application that uses Amazon S3 exclusively as a data store. The application works well until the customer increases the rate at which the application is updating information. The customer now reports that outdated data occasionally appears when the application accesses objects in Amazon S3.
What could be the problem, given that the application logic is otherwise correct?

A. The application is reading parts of objects from Amazon S3 using a range header.
B. The application is reading objects from Amazon S3 using parallel object requests.
C. The application is updating records by writing new objects with unique keys.
<mark>D. The application is updating records by overwriting existing objects with the same keys.</mark> **(Eventually consistency read after write)**

## Question 8
A Solutions Architect is designing a new social media application. The application must provide a secure method for uploading profile photos. Each user should be able to upload a profile photo into a shared storage location for one week after their profile is created.
Which approach will meet all of these requirements?

A. Use Amazon Kinesis with AWS CloudTrail for auditing the specific times when profile photos are uploaded.
B. Use Amazon EBS volumes with IAM policies restricting user access to specific time periods.
<mark>C. Use Amazon S3 with the default private access policy and generate pre-signed URLs each time a new site profile is created.</mark> **(presign url allows to set expire time)**
D. Use Amazon CloudFront with AWS CloudTrail for auditing the specific times when profile photos are uploaded.

## Question 9
An application requires block storage for file updates. The data is 500 GB and must continuously sustain 100 MiB/s of aggregate read/write operations.
Which storage option is appropriate for this application?

A. Amazon S3
B. Amazon EFS
<mark>C. Amazon EBS</mark>
D. Amazon Glacier

## Question 10
A mobile application serves scientific articles from individual files in an Amazon S3 bucket. Articles older than 30 days are rarely read. Articles older than 60 days no longer need to be available through the application, but the application owner would like to keep them for historical purposes.
Which cost-effective solution BEST meets these requirements?

A. Create a Lambda function to move files older than 30 days to Amazon EBS and move files older than 60 days to Amazon Glacier.
B. Create a Lambda function to move files older than 30 days to Amazon Glacier and move files older than 60 days to Amazon EBS.
<mark>C. Create lifecycle rules to move files older than 30 days to Amazon S3 Standard Infrequent Access and move files older than 60 days to Amazon Glacier.</mark>
D. Create lifecycle rules to move files older than 30 days to Amazon Glacier and move files older than 60 days to Amazon S3 Standard Infrequent Access.
