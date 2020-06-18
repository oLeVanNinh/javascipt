# Alalytics Serivce
## Athena
+ is an interactive query service utilizes schema
+ allow run ad-hoc SQL from a range of source
+ billed only for the compute used and existing storage costs
+ is serverless products

## Elastic MapReduce
+ is tool allow to perform analysis large data
+ based on Apache Hadoop
+ delivering as a managed cluster using EC2 instances
+ include Master Node and Core Node, data is stored in S3, u can using SSH with Master Node

## Kinesis and Firehose

is a scalable and resilient streaming service, designed to ingest large amounts of data from producers.

**Stream**: is service provided by Kinesis used to collect, proccess, analyze large amount of data, it can be access from internet or inside VPC, it include storage store data
upto 24 hour and can retain to 7 days with additional charge
**Kinesis Shard**: are added to allow them to scale. A stream is starts with at least 1 shard allows 1 MiB of ingestion and 2 MiB of consumption, it can be added or
removed from streams.
**Kinesis Data Record**: entity written to and read from Kinesis, a data record can be up to 1 MB size

## Redshift
is a petabyte-scale data warehoursing solution. It's a column-based database designed for analytical workloads
Data can load from S3 and unloaded to S3. Redshift architect include: leard node and compute node.
