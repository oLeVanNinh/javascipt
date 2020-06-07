# Dynamo DB

## 1. Introduction to DynamoDB
Dynamo DB is an fully managed NoSQL database service provided by AWS that provides:
+ Fast and consistent performance
+ High scalable architecture
+ Flexible structure, support keyvalue and document data model

DynamoDB is best suited to big data, advertisement technologies, gaming, mobile applications, time-series data, IoT and other appliation where heavy write performance, reduced latency and dynamic schema are required

## 2. DynamoDB components
There are basically three component of a DynamoDB table: tables, items, and attributes:
+ **Table**: is an entity where DynamoDB stores data. A table consists of a set of data
+ **Item**: a table consists of multiple items. An item consists of group of attributes
+ **Attributes**: an item in the tables consists of multiple attributes. An attributes is the basic data element of an item, it consists key and value. For example:

```json
# Item 1
{
  "name": "Zed",
  "age": 20
}

# Item 2:
{
  "name": "Thresh"
  "age": 23,
  "address": {
    "city": "HN",
    "state": "VN"
  }
}
```
#### Primary key
While creating a DynamoDB table, you need to specify the table name and the primary key of the table. It is mandatory to define a primary key, a primary key is a mechanism
to uniquely identify each item in a table. A primary key does allow two items with the same key value in a table. There are two types of primary keys:
+ **Partition key**: this is a simple primary key that composed of a single attribute named a partition key. The partition key value is used as an input to internal hash functions,
which determines in which partition the data is stored. This is also reason the partition key is also called the hash key. No two items in a table can have the same partition key
+ **Partition key and sort key**: the partition key and sort key are composed of two attributes, they are called composite primary key. Just like parition key, the composite key also
uses the parition key as an input to an internal hash function. This hash function determines the place  of an item in a partion. All items with the same partition key are stored together
and is stored by sort key value. It is possible for two items have the same partition key but they must have different sort key value. The sort key is also called range key

```json
{
  "department_id": "VEU123", # Partition key
  "employee_id": "B1234",  # Sort key
  "employee_name": "Cloud"
}
```

#### Secondary indexes

DynamoDB allows to create secondary indexes on a table. This is alternative way to improves flexibility when querying the data. There are two types of secondary indexes:

+ **Global Secondary Index (GSI)**: consists of a partition key and a sort key, which have to be different than primary keys defined on the table
+ **Local Secondary Index (LSI)**: uses the same partition key as the table but uses the different sort key. LSI must create when create table

DynamoDB allows to create 20 GSI and 5 LSI on a table:
+ Every index is associated with a tabled which is called  the base table
+ DynamoDB automatically maintains the indexes. Whenever data is added, updated or deleted from the base table, DynamoDB adds, updates or deletes the corresponding item in the
related indexes

## 3. DynamoDB consistency and throughput
DynamoDB is reginal service, when a table is created, it automatically replicated in 3 AZs. After writing data to a DynamoDB table, you get 200 HTTP status code, it indicates that
the data has safely updated to all replicated copies in different AZs. AWS provides 2 types of read consitency models:
+ **Eventually consisten reads**: the data is read from non-leader node, the result you may get might not reflect any recently completed by write operations. Since the data is stored in multiple AZs,
it take few second to synchronize the data in multiple location, if repeat the read operation after a while, it returns the lastest copy of the data.
+ **Strong consistent reads**: the data is read from the leader node, this operation always return the response with the most up-to-date data

By default, DynamoDB uses eventually consisten reads. If you need to use strong constent reads, you need to specify this while creating table. Read operations such as
*GetItem*, *Query*, and *Scan* provide a *ConsitentRead* parameter, DynamoDB uses strongly consisten reads when this parameter is set to true

DynamoDB provides the Auto Scaling feature for automatically scaling the read and the write capacity of a table, however, if you don't use, you need to manually handle the
throughput requiement for your table. The read and write capacity is measured by the read and write capacity units

#### Read capacity units
DynamoDB processes the read operations based on the type of read consistency used. With one read capacity unit DynamoDB can process one strongly consistent read per second or
two eventual consistent reads per second. Using one read capacity unit, DynamoDB can process an item of up to 4 KB size, if the item size is more than 4 KB, it requires an additional read capacity to process it.
The size of item and consistency model determine the total number of read capacity units required:
+ 1 read capacity unit = 1 strong consistent read
+ 1 read capacity unit = 2 eventual consistent read
+ 1 item with size upto 4 KB with strong consistent read = 1 read capacity unit, if the size if larger it require additional read capacity unit
+ 1 item with size upto 8 KB with eventually consistent read = 1 read capacity unit, if the size if larger it require additional read capacity unit
#### Write capacity units
Write operation is different than read, there is just one write operation mode is strong consistency. DynamoDB can process one write percond and write an item of a maximum
of 1 KB with 1 write capacity units, if the size of the item is greater than 1 KB, it requires addtional write capacity units. For short:
+ 1 write capacity unit = 1 write operation of an item up to 1 KB
+ If item size is grater than 1 KB, it require additional write capacity units
+ If item size is less than 1 KB, it still requires 1 write capcity uit

#### Caculate table throughput
If you create table with initial 5 read capacity units and 5 write capacity units then:
+ It can perform a strongly consistent read up to 20 KB per second = *5 read capacity units x 4 KB*
+ It can perform an eventually constent read up to 40 KB per second = *5 read capacity units x 8 KB*
+ it can write 5 KB per second = *5 write capacity x 1 KB*


## 4. DynomoDB best practices
+ Create a primary key that spans multiple partitions. Choose the primary key that has more distinct values.
+ Store metadata in DynamoDB and large BLOBs in Amazon S3
+ By default, *Scan* reads the entire table with all items and consumes more throughput. Use *Query* instead of *Scan*
+ Create LSI for frequently queried attributes on the table apart from primary key attributes to improve query performance
+ Plan carefully before create LSI because they only can defined at the time of creating a table, and later they can not delete
