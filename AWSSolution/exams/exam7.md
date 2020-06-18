## Question 61
A Solutions Architect is designing a web application that is running on an Amazon EC2 instance. The application stores data in DynamoDB.
The Architect needs to secure access to the DynamoDB table.
What combination of steps does AWS recommend to achieve secure authorization? (Select two.)

A. Store an access key on the Amazon EC2 instance with rights to the Dynamo DB table.
B. Attach an IAM user to the Amazon EC2 instance.
<mark>C. Create an IAM role with permissions to write to the DynamoDB table.</mark>
<mark>D. Attach an IAM role to the Amazon EC2 instance.</mark>
E. Attach an IAM policy to the Amazon EC2 instance.

## Question 62 ??
A Solutions Architect is about to deploy an API on multiple EC2 instances in an Auto Scaling group behind an ELB. The support team has the following operational requirements:
1 They get an alert when the requests per second go over 50,000
2 They get an alert when latency goes over 5 seconds
3 They can validate how many times a day users call the API requesting highly-sensitive data
Which combination of steps does the Architect need to take to satisfy these operational requirements? (Select two.)

A. Ensure that CloudTrail is enabled.
B. Create a custom CloudWatch metric to monitor the API for data access.
C. Configure CloudWatch alarms for any metrics the support team requires.
D. Ensure that detailed monitoring for the EC2 instances is enabled.
E. Create an application to export and save CloudWatch metrics for longer term trending analysis.

## Question 63
A Solutions Architect is designing a highly-available website that is served by multiple web servers hosted outside of AWS. If an instance becomes unresponsive,
the Architect needs to remove it from the rotation.
What is the MOST efficient way to fulfill this requirement?

A. Use Amazon CloudWatch to monitor utilization.
B. Use Amazon API Gateway to monitor availability.
C. Use an Amazon Elastic Load Balancer.
<mark>D. Use Amazon Route 53 health checks.</mark>

## Question 64
A company hosts a popular web application. The web application connects to a database running in a private VPC subnet. The web servers must be accessible only
to customers on an SSL connection. The RDS MySQL database server must be accessible only from the web servers.
How should the Architect design a solution to meet the requirements without impacting running applications?

A. Create a network ACL on the web server's subnet, and allow HTTPS inbound and MySQL outbound. Place both database and web servers on the same subnet.
<mark>B. Open an HTTPS port on the security group for web servers and set the source to 0.0.0.0/0. Open the MySQL port on the database security group and attach it to the MySQL instance. Set the source to Web Server Security Group.</mark>
C. Create a network ACL on the web server's subnet, and allow HTTPS inbound, and specify the source as 0.0.0.0/0. Create a network ACL on a database subnet, allow MySQL port inbound for web servers, and deny all outbound traffic.
D. Open the MySQL port on the security group for web servers and set the source to 0.0.0.0/0. Open the HTTPS port on the database security group and attach it to the MySQL instance. Set the source to Web Server Security Group.

## Question 65
Which service should an organization use if it requires an easily managed and scalable platform to host its web application running on Nginx?

A. AWS Lambda
B. Auto Scaling
C. AWS Elastic Beanstalk
D. Elastic Load Balancing
