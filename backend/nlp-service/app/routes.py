from flask import request, jsonify, current_app as app

@app.route('/query', methods = ['POST'])
def hello():
    data = request.get_json()
    print(data)
    print(data['text'])
    return jsonify({'sql': data['text']})
