from flask import Flask
from celery import Celery
import time
from flask import jsonify
from flask import Response
from celery.result import AsyncResult
from celery import shared_task
import requests
from flask import request
from flask import abort
from flask import json

app = Flask(__name__)    
broker_url = 'amqp://admin:admin@169.61.62.89:31290'          # Broker URL for RabbitMQ task queue
app.config['CELERY_RESULT_BACKEND'] = 'amqp://admin:admin@169.61.62.89:31290'
app.config['CELERY_BROKER_URL'] = 'amqp://admin:admin@169.61.62.89:31290'
celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'],backend = app.config['CELERY_RESULT_BACKEND'])
celery.conf.update(app.config)

@celery.task(bind=True)
def email_task(self,toEmail,src,dest):
    requests.post('http://169.61.62.89:30199/email', data = {'toemail':toEmail,'src':src,'dest':dest})
    return "succuss"
@app.route('/postEmail', methods=['POST'])
def email(id=None):
    if not request.json or not 'toemail' in request.json:
        abort(400)
    if not request.json or not 'src' in request.json:
        abort(400)
    if not request.json or not 'dest' in request.json:
        abort(400)
    toEmail = request.json['toemail']
    src = request.json['src']
    dest = request.json['dest']
    a = email_task.delay(toEmail,src,dest)
    b = a.task_id
    res = celery.AsyncResult(b)
    data = {'result':'success'}
    js = json.dumps(data)

    return Response(
        js,
        mimetype='application/json',
        status=200
    )
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=4000)