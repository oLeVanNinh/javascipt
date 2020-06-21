## Question 141
A Solutions Architect is designing a customer order processing application that will likely have high usage spikes.
What should the Architect do to ensure that customer orders are not lost before being written to an Amazon RDS database? (Choose two.)

A. Use Amazon CloudFront to deliver the application front end.
B. Use Elastic Load Balancing with a round-robin routing algorithm.
<mark>C. Have the orders written into an Amazon SQS queue.</mark>
<mark>D. Scale the number of processing nodes based on pending order volume.</mark>
E. Have a standby Amazon RDS instance in a separate Availability Zone.

## Question 142
Employees from several companies use an application once a year during a specific 30-day period. The periods are different for each company. Traffic to the application spikes during these 30-day periods.
How can the application be designed to handle these traffic spikes?

A. Use an Amazon Route 53 latency routing policy to route traffic to an Amazon EC2 instance with the least lag time.
B. Use Amazon S3 to cache static elements of the website requests.
<mark>C. Use an Auto Scaling group to scale the number of EC2 instances to match the site traffic.</mark>
D. Use Amazon Cloud Front to serve static assets to decrease the load on the EC2 instances.

## Question 143
A restaurant reservation application needs the ability to maintain a waiting list. When a customer tries to reserve a table, and none are available, the customer must be put on the waiting list, and the application must notify the customer when a table becomes free.
What service should the Solutions Architect recommend to ensure that the system respects the order in which the customer requests are put onto the waiting list?

A. Amazon SNS
B. AWS Lambda with sequential dispatch
<mark>C. A FIFO queue in Amazon SQS</mark>
D. A standard queue in Amazon SQS

## Question 144
A Solutions Architect is designing a solution for a dynamic website, "example.com," that is deployed in two regions: Tokyo, Japan and Sydney, Australia. The
Architect wants to ensure that users located in Australia are directed to the website deployed in the Sydney region and users located in Japan are redirected to the website in the Tokyo region when they browse to "example.com".
Which service should the Architect use to achieve this goal with the LEAST administrative effort?

A. Amazon CloudFront with geolocation routing
<mark>B. Amazon Route 53</mark>
C. Application Load Balancer
D. Network Load Balancer deployed across multiple regions

## Question 145 **
Question #145Topic 1
A company has a popular multi-player mobile game hosted in its on-premises datacenter. The current infrastructure can no longer keep up with demand and the company is considering a move to the cloud.
Which solution should a Solutions Architect recommend as the MOST scalable and cost-effective solution to meet these needs?

A. Amazon EC2 and an Application Load Balancer
B. Amazon S3 and Amazon CloudFront
C. Amazon EC2 and Amazon Elastic Transcoder
<mark>D. AWS Lambda and Amazon API Gateway</mark>

## Question 146
A company has instances in private subnets that require outbound access to the internet.
This requires:

A. Assigning a public IP address to the instance.
<mark>B. Updating the route table associated with the subnet to point internet traffic through a NAT gateway.</mark>
C. Updating the security group associated with the subnet to allow ingress on 0.0.0.0/0.
D. Routing traffic from the instance through a VPC endpoint that has internet access.

## Question 148
An organization runs an online voting system for a television program. During broadcasts, hundreds of thousands of votes are submitted within minutes and sent to a front-end fleet of auto-scaled Amazon EC2 instances. The EC2 instances push the votes to an RDBMS database. The database is unable to keep up with the front-end connection requests.
What is the MOST efficient and cost-effective way of ensuring that votes are processed in a timely manner?

<mark>A. Each front-end node should send votes to an Amazon SQS queue. Provision worker instances to read the SQS queue and process the message information into RDBMS database.</mark>
B. As the load on the database increases, horizontally-scale the RDBMS database with additional memory-optimized instances. When voting has ended, scale down the additional instances.
C. Re-provision the RDBMS database with larger, memory-optimized instances. When voting ends, re-provision the back-end database with smaller instances.
D. Send votes from each front-end node to Amazon DynamoDB. Provision worker instances to process the votes in DynamoDB into the RDBMS database.

## Question 149
An application publishes Amazon SNS messages in response to several events. An AWS Lambda function subscribes to these messages. Occasionally the function will fail while processing a message, so the original event message must be preserved for root cause analysis.
What architecture will meet these requirements without changing the workflow?

A. Subscribe an Amazon SQS queue to the Amazon SNS topic and trigger the Lambda function from the queue.
B. Configure Lambda to write failures to an SQS Dead Letter Queue.
<mark>C. Configure a Dead Letter Queue for the Amazon SNS topic.</mark>
D. Configure the Amazon SNS topic to invoke the Lambda function synchronously.

## Question 150 **
An application uses an Amazon RDS MySQL cluster for the database layer. Database growth requires periodic resizing of the instance. Currently, administrators check the available disk space manually once a week.
How can this process be improved?

A. Use the largest instance type for the database.
B. Use AWS CloudTrail to monitor storage capacity.
C. Use Amazon CloudWatch to monitor storage capacity.
<mark>D. Use Auto Scaling to increase storage size</mark  >
