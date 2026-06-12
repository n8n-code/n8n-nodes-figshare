import type { INodeProperties } from 'n8n-workflow';

export const otherDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					]
				}
			},
			"options": [
				{
					"name": "Private Account",
					"value": "Private Account",
					"action": "Private Account information",
					"description": "Account information for token/personal token",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account"
						}
					}
				},
				{
					"name": "Private Funding Search",
					"value": "Private Funding Search",
					"action": "Search Funding",
					"description": "Search for fundings",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/funding/search"
						}
					}
				},
				{
					"name": "Private Licenses List",
					"value": "Private Licenses List",
					"action": "Private Account Licenses",
					"description": "This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/licenses"
						}
					}
				},
				{
					"name": "Categories List",
					"value": "Categories List",
					"action": "Public Categories",
					"description": "Returns a list of public categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/categories"
						}
					}
				},
				{
					"name": "File Download",
					"value": "File Download",
					"action": "Public File Download",
					"description": "Starts the download of a file",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/file/download/{{$parameter[\"file_id\"]}}"
						}
					}
				},
				{
					"name": "Item Types List",
					"value": "Item Types List",
					"action": "Item Types",
					"description": "Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/item_types"
						}
					}
				},
				{
					"name": "Licenses List",
					"value": "Licenses List",
					"action": "Public Licenses",
					"description": "Returns a list of public licenses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/licenses"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Private Account"
					]
				}
			}
		},
		{
			"displayName": "POST /account/funding/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Private Funding Search"
					]
				}
			}
		},
		{
			"displayName": "Search For",
			"name": "search_for",
			"type": "string",
			"default": "",
			"description": "Search term",
			"routing": {
				"send": {
					"property": "search_for",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Private Funding Search"
					]
				}
			}
		},
		{
			"displayName": "GET /account/licenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Private Licenses List"
					]
				}
			}
		},
		{
			"displayName": "GET /categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Categories List"
					]
				}
			}
		},
		{
			"displayName": "GET /file/download/{file_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"File Download"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "file_id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"File Download"
					]
				}
			}
		},
		{
			"displayName": "GET /item_types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Item Types List"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"description": "Identifier of the group for which the item types are requested",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Item Types List"
					]
				}
			}
		},
		{
			"displayName": "GET /licenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other"
					],
					"operation": [
						"Licenses List"
					]
				}
			}
		},
];
