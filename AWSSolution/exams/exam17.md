## Question 161
A web application running on Amazon EC2 instances writes data synchronously to an Amazon DynamoDB table configured for 60 write capacity units. During normal operation the application writes 50 KB/s to the tale, but can scale up to 500 KB/ s during peak hours. The application is currently throttling errors from the
DynamoDB table during peak hours.
What is the MOST cost-efficient change to support the increased traffic with minimal changes to the application?

A. Use Amazon SQS to manage the write operations to the DynamoDB table.
B. Change DynamoDB table configuration to 600 write capacity units.
C. Increase the number of Amazon EC2 instances to support the traffic.
<mark>D. Configure Amazon DynamoDB Auto Scaling to handle the extra demand.</mark>

## Question 162
One company wants to share the contents of their Amazon S3 bucket with another company. Security requirements mandate that only the other company's AWS accounts have access to the contents of the Amazon S3 bucket.
Which Amazon S3 feature will allow secure access to the Amazon S3 bucket?

<mark>A. Bucket policy</mark>
B. Object tagging
C. CORS configuration
D. Lifecycle policy

## Question 163
A Solutions Architect is designing a service that must have four Amazon EC2 instances running between 8 AM and 6 PM daily. The service requires one EC2 instance outside of those hours.
What is the MOST cost-effective way to provide enough compute?

A. Use one Amazon EC2 Reserved Instance and use an Auto Scaling group to add and remove EC2 instances based on CPU utilization.
B. Use one Amazon EC2 On-Demand instance and use an Auto Scaling group to add and remove EC2 instances based on CPU utilization.
C. Use one Amazon EC2 On-Demand instance and use an Auto Scaling Group scheduled action to add three EC2 Spot instances at 7:30 AM and remove three instances at 6:10 PM.
<mark>D. Use one Amazon EC2 Reserved Instance and use an Auto Scaling Group scheduled action to add three EC2 On-Demand instances at 7:30 AM and remove three instances at 6:10 PM. </mark>

## Questiom 164
A company plans to use an Amazon VPC to deploy a web application consisting of an elastic load balancer, a fleet of web and application servers, and an
Amazon RDS MySQL database that should not be accessible from the Internet. The proposed design must be highly available and distributed over two Availability
Zones.
What would be the MOST appropriate VPC design for this specific use case?

A. Two public subnets for the elastic load balancer, two public subnets for the web servers, and two public subnets for Amazon RDS.
B. One public subnet for the elastic load balancer, two private subnets for the web servers, and two private subnets for Amazon RDS.
C. One public subnet for the elastic load balancer, one public subnet for the web servers, and one private subnet for the database.
<mark>D. Two public subnets for the elastic load balancer, two private subnets for the web servers, and two private subnets for RDS.</mark>

## Question 165
A workload in an Amazon VPC consists of a single web server launched from a custom AMI. Session state is stored in a database.
How should the Solutions Architect modify this workload to be both highly available and scalable?

A. Create a launch configuration with a desired capacity of two web servers across multiple Availability Zones. Create an Auto Scaling group with the AMI ID of the web server image. Use Amazon Route 53 latency-based routing to balance traffic across the Auto Scaling group.
B. Create a launch configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple regions. Use an Application Load Balancer (ALB) to balance traffic across the Auto Scaling group.
<mark>C. Create a launch configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple Availability Zones. Use an ALB to balance traffic across the Auto Scaling group.</mark>
D. Create a launch configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple Availability Zones. Use Amazon Route 53 weighted routing to balance traffic across the Auto Scaling group.

## Question 166
A Solutions Architect is developing a new web application on AWS. The services must scale to support an increasing load. The Architect wants to focus on software development and deploying new features rather than provisioning or managing servers.
Which AWS service is appropriate?

A. Auto Scaling
<mark>B. Elastic Beanstalk</mark>
C. EC2 Container Service
D. CloudFormation

## Question 167
A company wants to migrate a three-tier web application to AWS. The company wants to control the placement of the instances and have visibility into underlying sockets and cores for licensing purposes.
Which compute model should a Solutions Architect choose to accomplish this task?

A. EC2 Reserved Instances
B. EC2 Spot Instances
<mark>C. EC2 Dedicated Hosts</mark>
D. EC2 Placement Groups

## Question 168
An application runs on multiple Amazon EC2 instances. Each running instance of the application must have access to a shared file system.
Where should the data be stored?

A. Amazon S3
B. Amazon DynamoDB
<mark>C. Amazon EFS</mark>
D. Amazon EBS

## Question 169
A Solutions Architect is designing a microservice to process records from Amazon Kinesis Streams. The metadata must be stored in Amazon DynamoDB. The microservice must be capable of concurrently processing 10,000 records daily as they arrive in the Kinesis stream.
The MOST scalable way to design the microservice is:

A. As an AWS Lambda function.
B. As a process on an Amazon EC2 instance.
<mark>C. As a Docker container running on Amazon ECS.</mark>
D. As a Docker container on an EC2 instance.


## Question 170
A university is running an internal web application on AWS that students can access from the university network to check their exam results. The web application runs on Amazon EC2 instances and pulls results from an Amazon DynamoDB table. Auto Scaling is currently configured to add a new web server when CPU is greater than 80% for 5 minutes. DynamoDB is configured to increase both read and write capacity units by five when utilization is greater than 80%. Exam results are released at 9:00 a.m. each Monday, and 80% of students, attempt to access their unique result within the first 30 minutes. Despite Auto Scaling being enabled, students are complaining of slow response times and errors when they view the site. There are no performance complaints after 9:30 a.m. on Monday.
Which recommendation should a Solutions Architect make to improve performance in a cost-effective manner?

A. Scale out the EC2 instances to ensure that the environment scales up and down based on the highest load.
B. Implement Amazon DynamoDB Accelerator to improve database performance and remove the need to scale the read/write units.
<mark>C. Use a scheduled job to scale out EC2 before 9:00 a.m. on Monday and to scale down after 9:30 a.m.</mark>
D. Use Amazon CloudFront to cache web request and reduce the load on EC2 and DynamoDB.
