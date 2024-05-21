from nltk import pos_tag
from nltk.tokenize import word_tokenize, RegexpTokenizer

table_columns = [ "name", "email", "checkInTime", "checkOutTime" ]

# To check for plural    
normalizatoin_map = {
    "names": "name",
    "emails": "email",
    "checkInTimes": "checkInTime",
    "checkOutTimes": "checkOutTime",
    }

def get_field_for_word(word):
    if word in normalizatoin_map:
        return normalizatoin_map[word]
    else:
        return word
    
    
def is_noun(tag):
    if tag in ["NN", "NNS", "NNP", "NNPS"]:
        return True
    else:
        return False
    
def convert_to_sql(natural_langauge_query):
    tokenizer = RegexpTokenizer(r'\b[\w.-]+?@\w+?\.\w+?\b|\w+')
    tokens = tokenizer.tokenize(natural_langauge_query.lower())
    tagged = pos_tag(tokens)
        
    select_clause = "SELECT *"
    where_clauses = []
    from_clause = "FROM \"Employee\""
    selected_fileds = []
    
    for i, (word, tag) in enumerate(tagged):
        word = get_field_for_word(word)
        if word in table_columns:
            selected_fileds.append(word)
                
        if word == "between":
            start_time = tokens[i+1]
            end_time = tokens[i+3]
            where_clause = f"WHERE checkInTime >= '{start_time}' AND checkOutTime <= '{end_time}'"
    
    if selected_fileds:
        select_clause = f"SELECT {', '.join(set(selected_fileds))}"
        
    where_clause = ""
    if where_clauses:
        where_clause = "WHERE " + " AND ".join(where_clauses)
            
    sql_query = f"{select_clause} {from_clause} {where_clause}"
    return sql_query
