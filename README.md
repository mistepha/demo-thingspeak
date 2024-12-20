# Demo ThingSpeak MQTT API

## Project Structure
### Apps

* **api** - REST API / WebSocket Gateway 
* **app** - React app showing data in table
* **generator** - A generator that publishes data to Kafka (~every 10 seconds)
* **service-kafka** - Service reading data from Kafka and calling the REST API to save data to the database
* **service-mqtt** - Service reading data from a ThingSpeak channel using MQTT and publishing the data to Kafka (~every 5 minutes)


## Setup
### Starting with CMD
Run the following commands:
```
# start Kafka
docker compose up -d kafka

# create topic
docker exec --workdir /opt/kafka/bin/ -it kafka ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic demo-topic

# start API, app and services
docker compose up -d
```

### Sarting with Taskfile

Run the following command (needs [go-task](https://taskfile.dev/))
```
task start
```

After the setup the app can be accessed on [http://localhost:4200](http://localhost:4200)


## Issues

* ThingSpeak API does not provide access to public channels without registering a device
* ThingSpeak public channels do not reliably send data when subscribing to a channel via MQTT
