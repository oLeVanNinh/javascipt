## 1. CloudTrail
An event is a record of an action that a pricipal performs against an AWS resource. CloudTrail logs read and write actions, giving detaild record including the
action, resource affected, region, who performed the action, and when.
CloudTrail logs both API and non-API actions. Non-API actions include logging into console, API actions include launching instance, creating bucket, VPC.
CloudTrail classifies events into management events and data events.

### 1.1 Management Events
Including operations that a principal executes against an AWS resource. It grouped into write-only and read-only events.
Write-only events also include logging into the management console as the root or IAM user, but it doesn't log unseccessful root logins.

### 1.2 Data Events
Data event track two types of data plane operations that rend to be high volume: S3 object-level activity and Lambda function executions.

### 1.3 Event History
CloudTrail logs 90 days of management events and stores them in a viewable, searchable and downloadeable database called the event history

### 1.4 Trails
To store more than 90 days of event history or customize the types of events CloudTrail, we need to create a Trail. Trail is a configuration record specified events and
delivers them as CloudTrail log files to S3 bucket. The log entry represents a single action against a resource and includes detailed information about the action
including that following:
+ **eventTime**: dat and time of action, default sorted by timestamp
+ **userIdentity**: detailed information about principal that initiated the request.
+ **eventSource**: global endpoint of the service against which the action was taken
+ **awsRegion**: the regions the resource is located in, for global, it is always us-east-1
+ **sourceIPAdress**: the IP address of the requester

## 2.CloudWatch
### 2.1 Metrics
CloudWatch organizes metrics into namespaces, metrics from AWS services are stored in namespaces and use the format AWS/service to classify.
A metric functions as a variable and contains a time-ordered set of data points. Each data-point cointains a timestamp, value, and optionally a unit of measure.
Each metric is uniquely defined by a namespace, a name and optionally a dimension. A dimension is a name-value paire that distinguishes metrics with the same name
and namespace from other one.

### 2.2. Basic and Detailed Monitoring
+ Basic monitoring sends metrics to CloudWatch every 5 minutes. How data point is send to CW is depended on the hypervisor.
+ Detail monitoring send metrics to CW every minute

### 2.3 Expiration
Metrics cannot be delete in CW, it automatically expire depends on its resolution
+ High-resolution store in 3 hours, after that it aggregated into a single data point at one-minute resolution
+ After 15 days, 5 data points store at one-minute resolution are aggregated into a single data point stored at five-minute resolution
+ After 63 days, 12 data point are aggregated into 1 hours
+ After 15 month, 1 hour data point is destroyed

### 2.4 Graphing Metrics
CW can perform statistical analysis on data points over a period of time and graph the results as a time series:
+ **Sum**: total of all data pointsin a period
+ **Minimum**
+ **Maximum**
+ **Average**
+ **Sample Count**: the number of data points in a period
+ **Percentile**: the data point of the specified percentile

### 2.5 Metrics Math
CW lets u perform mathematical functions against metrics and graph them as a new time series. Statistical function return a scalar value, not a time series, so they can't be
graphed, so it must combined with the **METRICS** function

### 2.6 CloudWatch Logs
#### Log Streams and Log Groups
CW logs stores log events that are records of the activity recorded by an application or AWS resource, the log event must contain a timestamp and UTF-8 encoded event message
+ CW Logs stores log events from the same source in a log stream, a log stream can manually delete
+ CW organizes log stream into log groups, a stream must be exist in only one log group.

#### Metric Filter
CW allow create metric filter to extract data from log in a log group to create CW metrics. Metric filter apply to log groups and can create metric filter after creating log group

### 2.7 Alarm
#### Threshold
The threshold is the value the data point to monitor must meet or cross to indicate some thing wrong. Threshold is defined by specifying a value and a condition
#### Alarm State
+ ALARM: the data points have cross and remained past a defined threshold for a period of time
+ OK: is lower than threshold in a period of time
+ INSUFFICIENT_DATA: data points have not collected enough to evaluate

#### Data Points to Alarm and Evaluation Period
The period of time a data point to monitor must remain crossing the threshold to trigger an alarm state change depends on the data points to alarm. In case we want
to trigger alarm if a data point to monitor crosses the threshold periodically but doesn't remain pass it, we can set an evaluation period that's equal or greater than the data
points to alarm

### Missing Data
CW offers the following 4 options for how to evaluates periods with missing data:
+ As missing: remove the missing data and just evaluate what is present
+ Not breaching: data is treated as not breaching
+ Breaching: data is terated as breaching
+ Ignore: alarm doesn't change state til it receives the number of consecutive data points specified in the data points to alarm
