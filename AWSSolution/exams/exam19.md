## Question 181
A company has an application that uses Amazon CloudFront for content that is hosted on an Amazon S3 bucket. After an unexpected refresh, the users are still
seeing old content.
Which step should the Solutions Architect take to ensure that new content is displayed?

A. Perform a cache refresh on the CloudFront distribution that is serving the content.
<mark>B. Perform an invalidation on the CloudFront distribution that is serving the content.</mark>
C. Create a new cache behavior path with the updated content.
D. Change the TTL value for removing the old objects.

## Question 182
A company expects its user base to increase five times over one year. Its application is hosted in one region and uses an Amazon RDS MySQL database, an ELB
Application Load Balancer, and Amazon ECS to host the website and its microservices.
Which design changes should a Solutions Architect recommend to support the expected growth? (Choose two.)

<mark>A. Move static files from ECS to Amazon S3</mark>
B. Use an Amazon Route 53 geolocation routing policy
C. Scale the environment based on real-time AWS CloudTrail logs
D. Create a dedicated Elastic Load Balancer for each microservice
<mark>E. Create RDS read replicas and change the application to use these replicas</mark>

## Question 183
A company is rolling out a new web service, but is unsure how many customers the service will attract. However, the company is unwilling to accept any downtime.
What could a Solutions Architect recommend to the company in order to keep track of customers' current session data?

A. Amazon EC2
B. Amazon RDS
C. AWS CloudTrail
<mark>D. Amazon DynamoDB</mark>

## Question 184
A web application is running on Amazon EC2 instances behind an Elastic Load Balancing Application Load Balancer (ALB). The EC2 instances should receive no traffic, except for web requests to the application.
Based on these requirements, what security group rules should be put on the Amazon EC2 instances?

<mark>A. An inbound rule allowing traffic from the security group attached to the ALB</mark>
B. An inbound rule allowing traffic from the network ACLs attached to the ALB
C. An outbound rule allowing traffic to the security group attached to the ALB
D. An outbound rule blocking all traffic to the Internet

## Question 185
A Solutions Architect must migrate a monolithic on-premises application to AWS. It is a web application with a load balancer, web server, application server, and relational database. The key requirement driving the migration is that the application should perform better and be more elastic.
Which of the following architectures would meet these requirements?

A. Re-host the application on Amazon EC2 with lift and shift of existing application code. Configure an Elastic Load Balancing load balancer to handle incoming requests. Use Amazon CloudWatch alarms to receive notification of scaling issues. Increase and decrease the size of the Amazon EC2 instances using AWS CLI or AWS Management Console as required.
B. Re-architect the application as a three-tier application. Move the database to Amazon RDS. Use read replicas and Amazon ElastiCache with RDS for better performance. Use an Application Load Balancer to forward incoming requests to web and application servers running on-premises.
<mark>C. Re-platform the application as a three-tier application. Use Elastic Load Balancing for incoming requests. Use EC2 for web and application tiers. Use RDS at the database tier. Use CloudWatch alarms and Auto Scaling for horizontal scaling at the web tier.</mark>
D. Re-architect the application as Service Oriented Architecture (SOA). Run database and application servers on-premises. Run web-facing EC2 servers. Use an Enterprise Service Bus to handle communications between different parts of the application running on-premises and in the cloud.

## Question 186
A company has asked the Solutions Architect to modify its AWS-hosted internal application to allow for load balancing. The customer requests always come from the company domain (example.net). The company requires that incoming HTTP and HTTPS traffic is routed based on the path element of the URL in the request.
Which implementation can satisfy all requirements?

A. Configure a Network Load Balancer with listeners for appropriate path patterns for the target groups.
B. Configure an Application Load Balancer with host-based routing based on the domain field in the HTTP header.
C. Configure a Network Load Balancer and enable cross-zone load balancing to ensure that all EC2 instances are used.
<mark>D. Configure an Application Load Balancer with listeners for appropriate path patterns for the target group.</mark>

## Question 187
A Solutions Architect is asked to improve the fault tolerance of an existing Python application. The web application places 1-MB images is an S3 bucket. The application then uses a single t2.large instance to transform the image to include a watermark with the company's brand before writing the image back to the S3 bucket.
What should the Solutions Architect recommend to increase the fault tolerance of the solution?

A. Convert the code to a Lambda function triggered by scheduled Amazon CloudWatch Events.
B. Increase the instance size to m4.xlarge and configure Enhanced Networking.
<mark>. Convert the code to a Lambda function triggered by Amazon S3 events.</mark>
D. Create an Amazon SQS queue to send the images to the t2.large instance.

## Question 188
A Solutions Architect has been asked to deliver video content stored on Amazon S3 to specific users from Amazon CloudFront while restricting access by unauthorized users.
How can the Architect implement a solution to meet these requirements?

A. Configure CloudFront to use signed-URLs to access Amazon S3.
<mark>B. Store the videos as private objects in Amazon S3, and let CloudFront serve the objects by using only Origin Access Identity (OAI).</mark>
C. Use Amazon S3 static website as the origin of CloudFront, and configure CloudFront to deliver the videos by generating a signed URL for users.
D. Use OAI for CloudFront to access private S3 objects and select the Restrict Viewer Access option in CloudFront cache behavior to use signed URLs

## Question 189
A Solutions Architect needs to deploy a node.js-based web application that is highly available and scales automatically. The Marketing team needs to roll back on application releases quickly, and they need to have an operational dashboard. The Marketing team does not want to manage deployment of OS patches to the
Linux servers.
Use of which AWS service will satisfy these requirements?

A. Amazon EC2
B. Amazon API Gateway
<mark>C. AWS Elastic Beanstalk</mark>
D. Amazon EC2 Container Service

## Question 190
A company has a website running on Amazon EC2. The application DNS name points to an Elastic IP address associated with the EC2 instance. In the event of an attack on the website coming from a specific IP address, the company wants a way to block the offending IP address.
Which tool or service should a Solutions Architect recommend to block the IP address?

A. Security groups
<mark>B. Network ACL</mark>
C. AWS WAF
D. AWS Shield
