from flask import request, jsonify, current_app as app

@app.route('/hello', methods = ['POST'])
def hello():
    data = request.get_json()
    print(data)
    return jsonify({'msg': 'hello'})
