//Step 2 - Estimation from Meilleurs agents
{
    "title": "estimation meilleursagents.com",
    "description":"describe the JSON schema to compute the square meter estimation for the estate leboncoin.fr ad",
    "type":"object",
    "proprieties":{
        "maURL":{
            "description": "web adress of the estate",
            "type":"string"
        },
        "maPrice":{
            "description":"price of the estate",
            "type":"number",
            "minimum":0,
            "exclusiveMinimum": true
        },
        "maTown":{
            "description":"town where the estate is located",
            "type": "string"
        },
    }
    "required": ["maURL"]
}