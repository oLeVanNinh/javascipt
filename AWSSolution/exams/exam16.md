## Question 151
A customer owns a MySQL database that is accessed by various clients who expect, at most, 100 ms latency on requests. Once a record is stored in the database, it rarely changed. Clients only access one record at a time.
Database access has been increasing exponentially due to increased client demand. The resultant load will soon exceed the capacity of the most expensive hardware available for purchase. The customer wants to migrate to AWS, and is willing to change database systems.
Which service would alleviate the database load issue and offer virtually unlimited scalability for the future?

A. Amazon RDS
<mark>B. Amazon DynamoDB</mark>
C. Amazon Redshift
D. AWS Data Pipeline

## Question 152
A business team requires a structured storage solution to store all of a company's historical sales data. Currently there are 4 TB of data, which will grow to hundreds of terabytes within a few years. The team must be able to regularly run queries against the data using current business intelligence tools. Fast performance is required despite the dataset growth.
Which solution should the company use?

<mark>A. Amazon Redshift</mark>
B. Amazon Aurora
C. Amazon DynamoDB
D. Amazon S3

## Question 153
A prediction process requires access to a trained model that is stored in an Amazon S3 bucket. The process takes a few seconds to process an image and make a prediction. The process is not overly resource-intensive, does not require any specialized hardware, and takes less than 512 MB of memory to run.
What would be the MOST effective compute solution for this use case?

A. Amazon ECS
B. Amazon EC2 Spot instances
<mark>C. AWS Lambda functions</mark>
D. AWS Elastic Beanstalk

## Question 154
Question #154Topic 1
An application that runs on an Amazon EC2 instance must make secure calls to Amazon S3 buckets.
Which steps can a Solutions Architect take to ensure that the calls are made without exposing credentials?

A. Generate an access key ID and a secret key, and assign an IAM role with least privilege.
B. Create an IAM policy granting access to all services and assign it to the Amazon EC2 instance profile.
C. Create an IAM role granting least privilege and assign it to the Amazon EC2 instance profile.
D. Generate temporary access keys to grant users temporary access to the Amazon EC2 instance.

## Question 155
A Solutions Architect needs to design a centralized logging solution for a group of web applications running on Amazon EC2 instances. The solution requires minimal development effort due to budget constraints.
Which of the following should the Architect recommend?

A. Create a crontab job script in each instance to push the logs regularly to Amazon S3.
<mark>B. Install and configure Amazon CloudWatch Logs agent in the Amazon EC2 instances.</mark>
C. Enable Amazon CloudWatch Events in the AWS Management Console.
D. Enable AWS CloudTrail to map all API calls invoked by the applications.

## Question 156
A company is using Amazon S3 as its local repository for weekly analysis reports. One of the company-wide requirements is to secure data at rest using encryption. The company chose Amazon S3 server-side encryption. The company wants to know how the object is decrypted when a GET request is issued.
Which of the following answers this question?

A. The user needs to place a PUT request to decrypt the object.
B. The user needs to decrypt the object using a private key.
<mark>C. Amazon S3 manages encryption and decryption automatically.</mark>
D. Amazon S3 provides a server-side key for decrypting the object.

## Question 157
A company is looking for a fully-managed solution to store its players' state information for a rapidly growing game. The application runs on multiple Amazon EC2 nodes, which can scale according to the incoming traffic. The request can be routed to any of the nodes, therefore, the state information must be stored in a centralized database. The players' state information needs to be read with strong consistency and needs conditional updates for any changes.
Which service would be MOST cost-effective, and scale seamlessly?

A. Amazon S3
<mark>B. Amazon DynamoDB</mark>
C. Amazon RDS
D. Amazon Redshift

## Question 158
An application is running on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability
Zones. Four instances are required to handle a predictable traffic load. The Solutions Architect wants to ensure that the operation is fault-tolerant up to the loss of one Availability Zone.
Which is the MOST cost-efficient way to meet these requirements?

<mark>A. Deploy two instances in each of three Availability Zones.</mark>
B. Deploy two instances in each of two Availability Zones.
C. Deploy four instances in each of two Availability Zones.
D. Deploy one instance in each of three Availability Zones.

## Question 159
A Solutions Architect is designing a three-tier web application that includes an Auto Scaling group of Amazon EC2 instances running behind an ELB Classic Load
Balancer. The security team requires that all web servers must be accessible only through the Load Balancer, and that none of the web servers are directly accessible from the Internet.
How should the Architect meet these requirements?

A. Use a Load Balancer installed on an Amazon EC2 instance.
B. Configure the web servers' security group to deny traffic from the public Internet.
C. Create an Amazon CloudFront distribution in front of the ELB Classic Load Balancer.
<mark>D. Configure the web tier security group to allow only traffic from the ELB Classic Load Balancer.</mark>

## Question 160
A Solutions Architect is designing a web application that will be hosted on Amazon EC2 instances in a public subnet. The web application uses a MySQL database in a private subnet. The database should be accessible to database administrators.
Which of the following options should the Architect recommend? (Choose two.)

<mark>A. Create a bastion host in a public subnet, and use the bastion host to connect to the database.</mark>
B. Log in to the web servers in the public subnet to connect to the database.
C. Perform DB maintenance after using SSH to connect to the NAT Gateway in a public subnet.
<mark>D. Create an IPSec VPN tunnel between the customer site and the VPC, and use the VPN tunnel to connect to the database.</mark>
E. Attach an Elastic IP address to the database.
