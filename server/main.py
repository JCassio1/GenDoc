from flask import Flask, jsonify
import pika
import json

app = Flask(__name__)

def connect_to_rabbitmq():
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()
    channel.queue_declare(queue='generated_documents', durable=False)
    return connection, channel

@app.route('/api/mock-data', methods=['GET'])
def get_mock_data():
    mock_data = {
        "users": [
            {"id": 1, "name": "Alice", "email": "alice@example.com"},
            {"id": 2, "name": "Bob", "email": "bob@example.com"},
            {"id": 3, "name": "Charlie", "email": "charlie@example.com"}
        ],
        "products": [
            {"id": 101, "name": "Laptop", "price": 999.99},
            {"id": 102, "name": "Smartphone", "price": 599.99},
            {"id": 103, "name": "Headphones", "price": 149.99}
        ]
    }
    return jsonify(mock_data), 200

@app.route('/api/send-to-queue', methods=['GET'])
def send_to_queue():
    text = {
        "doc_id": "iPhone",
        "text": "This is the newest iPhone"
    }
    
    try:
        connection, channel = connect_to_rabbitmq()
        channel.basic_publish(
            exchange='',
            routing_key='generated_documents',
            body=json.dumps(text)
        )
        channel.close()
        connection.close()
        return jsonify({"message": "Document sent to queue"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


