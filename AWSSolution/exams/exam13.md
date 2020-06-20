## Question 121
A company has a legal requirement to store point-in-time copies of its Amazon RDS PostGreSQL database instance in facilities that are at least 200 miles apart.
Use of which of the following provides the easiest way to comply with this requirement?

A. Cross-region read replica
B. Multiple Availability Zone snapshot copy
C. Multiple Availability Zone read replica
<mark>D. Cross-region snapshot copy</mark>

## Question 122
After reviewing their logs, a startup company noticed large, random spikes in traffic to their web application. The company wants to configure a cost-efficient Auto
Scaling solution to support high availability of the web application.
Which scaling plan should a Solutions Architect recommend to meet the company's needs?

<mark>A. Dynamic</mark>
B. Scheduled
C. Manual
D. Lifecycle

## Question 123
To meet compliance standards, a company must have encrypted archival data storage. Data will be accessed infrequently, with lead times well in advance of when archived data must be recovered. The company requires that the storage be secure, durable, and provided at the lowest price per 1TB of data stored.
What type of storage should be used?

A. Amazon S3
B. Amazon EBS
C. Amazon Glacier
D. Amazon EFS

## Question 124
An online company wants to conduct real-time sentiment analysis about its products from its social media channels using SQL.
Which of the following solutions has the LOWEST cost and operational burden?

A. Set up a streaming data ingestion application on Amazon EC2 and connect it to a Hadoop cluster for data processing. Send the output to Amazon S3 and use Amazon Athena to analyze the data.
<mark>B. Configure the input stream using Amazon Kinesis Data Streams. Use Amazon Kinesis Data Analytics to write SQL queries against the stream.</mark>
C. Configure the input stream using Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to send data to an Amazon Redshift cluster, and then query directly against Amazon Redshift
D. Set up streaming data ingestion application on Amazon EC2 and send the output to Amazon S3 using Kinesis Data Firehose. Use Athena to analyze the data.

## Question 125
An organization must process a stream of large-volume hashtag data in real time and needs to run custom SQL queries on the data to get insights on certain tags.
The organization needs this solution to be elastic and does not want to manage clusters.
Which of the following AWS services meets these requirements?

A. Amazon Elasticsearch Service
B. Amazon Athena
C. Amazon Redshift
<mark>D. Amazon Kinesis Data Analytics</mark>

## Question 126
Which requirements must be met in order for a Solutions Architect to specify that an Amazon EC2 instance should stop rather than terminate when its Spot
Instance is interrupted? (Choose two.)

A. The Spot Instance request type must be one-time.
<mark>B. The Spot Instance request type must be persistent.</mark>
<mark>C. The root volume must be an Amazon EBS volume.</mark>
D. The root volume must be an instance store volume.
E. The launch configuration is changed.

## Question 127
An application hosted on AWS uses object storage for storing internal reports that are accessed daily by the CFO. Currently, these reports are publicly available.
How should a Solutions Architect re-design this architecture to prevent unauthorized access to these reports?

A. Encrypt the files on the client side and store the files on Amazon Glacier, then decrypt the reports on the client side.
B. Move the files to Amazon ElastiCache and provide a username and password for downloading the reports.
C. Specify the use of AWS KMS server-side encryption at the time of an object creation on Amazon S3.
<mark>D. Store the files on Amazon S3 and use the application to generate S3 pre-signed URLs to users.</mark>

## Question 128
A Solutions Architect is designing an application on AWS that will connect to the on-premise data center through a VPN connection. The solution must be able to log network traffic over the VPN.
Which service logs this network traffic?

A. AWS CloudTrail logs
<mark>B. Amazon VPC flow logs</mark>
C. Amazon S3 bucket logs
D. Amazon CloudWatch Logs


## Question 129
A company wants to durably store data in 8 KB chunks. The company will access the data once every few months. However, when the company does access the data, it must be done with as little latency as possible.
Which AWS service should a Solutions Architect recommend if cost is NOT a factor?

<mark>A. Amazon DynamoDB</mark>
B. Amazon EBS Throughput Optimized HDD Volumes
C. Amazon EBS Cold HDD Volumes
D. Amazon ElastiCache

## Question 130
A media company has more than 100TB of data to be stored and retrieved infrequently. However, the company occasionally receives requests for data within an hour. The company needs a low-cost retrieval method to handle the requests.
Which service meets this requirement?

A. Amazon S3 Standard
B. Amazon Glacier standard retrievals
C. Amazon Glacier bulk retrievals
<mark>D. Amazon S3 Standard Infrequent Access</mark>
