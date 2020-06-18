## Question 41
A Solutions Architect is designing a mobile application that will capture receipt images to track expenses. The Architect wants to store the images
on Amazon S3. However, uploading images through the web server will create too much traffic.
What is the MOST efficient method to store images from a mobile application on Amazon S3?

<mark>A. Upload directly to S3 using a pre-signed URL.</mark>
B. Upload to a second bucket, and have a Lambda event copy the image to the primary bucket.
C. Upload to a separate Auto Scaling group of servers behind an ELB Classic Load Balancer, and have them write to the Amazon S3 bucket.
D. Expand the web server fleet with Spot Instances to provide the resources to handle the images.

## Question 42
A company requires that the source, destination, and protocol of all IP packets be recorded when traversing a private subnet.
What is the MOST secure and reliable method of accomplishing this goal.

<mark>A. Create VPC flow logs on the subnet.</mark>
B. Enable source destination check on private Amazon EC2 instances.
C. Enable AWS CloudTrail logging and specify an Amazon S3 bucket for storing log files.
D. Create an Amazon CloudWatch log to capture packet information.

## Question 43
A Solutions Architect has a multi-layer application running in Amazon VPC. The application has an ELB Classic Load Balancer as the front end in a public subnet,
and an Amazon EC2-based reverse proxy that performs content-based routing to two backend Amazon EC2 instances hosted in a private subnet. The Architect sees
tremendous traffic growth and is concerned that the reverse proxy and current backend set up will be insufficient.
Which actions should the Architect take to achieve a cost-effective solution that ensures the application automatically scales to meet traffic demand? (Select two.)

A. Replace the Amazon EC2 reverse proxy with an ELB internal Classic Load Balancer.
<mark>B. Add Auto Scaling to the Amazon EC2 backend fleet.</mark>
C. Add Auto Scaling to the Amazon EC2 reverse proxy layer.
D. Use t2 burstable instance types for the backend fleet.
<mark>E. Replace both the frontend and reverse proxy layers with an ELB Application Load Balancer.</mark>

## Question 44
A company is launching a marketing campaign on their website tomorrow and expects a significant increase in traffic. The website is designed as a multi-tiered
web architecture, and the increase in traffic could potentially overwhelm the current design.
What should a Solutions Architect do to minimize the effects from a potential failure in one or more of the tiers?

A. Migrate the database to Amazon RDS.
B. Set up DNS failover to a statistic website.
<mark>C. Use Auto Scaling to keep up with the demand. </mark>
D. Use both a SQL and a NoSQL database in the design.

## Question 45
A web application experiences high compute costs due to serving a high amount of static web content.
How should the web server architecture be designed to be the MOST cost-efficient?

A. Create an Auto Scaling group to scale out based on average CPU usage.
<mark>B. Create an Amazon CloudFront distribution to pull static content from an Amazon S3 bucket.</mark>
C. Leverage Reserved Instances to add additional capacity at a significantly lower price.
D. Create a multi-region deployment using an Amazon Route 53 geolocation routing policy.

## Question 46
A Solutions Architect plans to migrate NAT instances to NAT gateway. The Architect has NAT instances with scripts to manage high availability.
What is the MOST efficient method to achieve similar high availability with NAT gateway?

A. Remove source/destination check on NAT instances.
<mark>B. Launch a NAT gateway in each Availability Zone.</mark>
C. Use a mix of NAT instances and NAT gateway.
D. Add an ELB Application Load Balancer in front of NAT gateway.

## Question 47
A Solutions Architect is designing a solution to store a large quantity of event data in Amazon S3. The Architect anticipates that the workload will
consistently exceed 100 requests each second.
What should the Architect do in Amazon S3 to optimize performance?

A. Randomize a key name prefix.
B. Store the event data in separate buckets.
C. Randomize the key name suffix.
<mark>D. Use Amazon S3 Transfer Acceleration.</mark>

## Question 48 ??
A user is testing a new service that receives location updates from 3,600 rental cars every hour.
Which service will collect data and automatically scale to accommodate production workload?

A. Amazon EC2
B. Amazon Kinesis Firehose
C. Amazon EBS
D. Amazon API Gateway

## Question 49
A Solutions Architect is designing a web application. The web and application tiers need to access the Internet, but they cannot be accessed from the Internet.
Which of the following steps is required?

A. Attach an Elastic IP address to each Amazon EC2 instance and add a route from the private subnet to the public subnet.
<mark>B. Launch a NAT gateway in the public subnet and add a route to it from the private subnet.</mark>
C. Launch Amazon EC2 instances in the public subnet and change the security group to allow outbound traffic on port 80.
D. Launch a NAT gateway in the private subnet and deploy a NAT instance in the private subnet.

## Question 50
An application stack includes an Elastic Load Balancer in a public subnet, a fleet of Amazon EC2 instances in an Auto Scaling group, and an Amazon RDS
MySQL cluster. Users connect to the application from the Internet. The application servers and database must be secure.
How should a Solutions Architect perform this task?

A. Create a private subnet for the Amazon EC2 instances and a public subnet for the Amazon RDS cluster.
<mark>B. Create a private subnet for the Amazon EC2 instances and a private subnet for the Amazon RDS cluster.</mark>
C. Create a public subnet for the Amazon EC2 instances and a private subnet for the Amazon RDS cluster.
D. Create a public subnet for the Amazon EC2 instances and a public subnet for the Amazon RDS cluster.
