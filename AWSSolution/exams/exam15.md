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
C. A FIFO queue in Amazon SQS
D. A standard queue in Amazon SQS
