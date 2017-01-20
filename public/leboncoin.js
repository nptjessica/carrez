//Step 1 - Classified ad real estate definition
{
    "title": "estate leboncoin.fr ad",
    "description":"describe the JSON schema for an estate leboncoin.fr ad",
    "type":"object",
    "proprieties":{
        "lbcURL":{
            "description": "web adress of the estat",
            "type":"string"
        },
        "lbcPrice":{
            "description":"price of the estace",
            "type":"number",
            "minimum":0,
            "exclusiveMinimum": true
        },
        "lbcTown":{
            "description":"town where the estate is located",
            "type": "string"
        }
    },
    "required": ["lbcURL"]
}
