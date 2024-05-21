from flask import request, jsonify, current_app as app
from app import nlp

@app.route('/query', methods = ['POST'])
def hello():
    data = request.get_json()
    print(data['text'])
    sql_query =nlp.convert_to_sql(data['text'])
    return jsonify({ 'sql': sql_query })
