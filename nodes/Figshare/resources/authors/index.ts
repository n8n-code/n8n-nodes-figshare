import type { INodeProperties } from 'n8n-workflow';

export const authorsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					]
				}
			},
			"options": [
				{
					"name": "Private Authors Search",
					"value": "Private Authors Search",
					"action": "Search Authors",
					"description": "Search for authors",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/authors/search"
						}
					}
				},
				{
					"name": "Private Author Details",
					"value": "Private Author Details",
					"action": "Author details",
					"description": "View author details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/authors/{{$parameter[\"author_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /account/authors/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "Return only authors in this group or subgroups of the group",
			"routing": {
				"send": {
					"property": "group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Institution ID",
			"name": "institution_id",
			"type": "number",
			"default": 1,
			"description": "Return only authors associated to this institution",
			"routing": {
				"send": {
					"property": "institution_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Return only active authors if True",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "is_public",
			"type": "boolean",
			"default": true,
			"description": "Return only authors that have published items if True",
			"routing": {
				"send": {
					"property": "is_public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"type": "number",
			"default": 10,
			"description": "Number of results included on a page. Used for pagination with query",
			"routing": {
				"send": {
					"property": "limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"type": "number",
			"default": 0,
			"description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
			"routing": {
				"send": {
					"property": "offset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Orcid",
			"name": "orcid",
			"type": "string",
			"default": "",
			"description": "Orcid of author",
			"routing": {
				"send": {
					"property": "orcid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"type": "options",
			"default": "published_date",
			"description": "The field by which to order. Default varies by endpoint/resource.",
			"options": [
				{
					"name": "Published Date",
					"value": "published_date"
				},
				{
					"name": "Modified Date",
					"value": "modified_date"
				},
				{
					"name": "Views",
					"value": "views"
				},
				{
					"name": "Shares",
					"value": "shares"
				},
				{
					"name": "Downloads",
					"value": "downloads"
				},
				{
					"name": "Cites",
					"value": "cites"
				}
			],
			"routing": {
				"send": {
					"property": "order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Order Direction",
			"name": "order_direction",
			"type": "options",
			"default": "desc",
			"description": "Direction of ordering",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"property": "order_direction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"type": "number",
			"default": 1,
			"description": "Page number. Used for pagination with page_size",
			"routing": {
				"send": {
					"property": "page",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"type": "number",
			"default": 10,
			"description": "The number of results included on a page. Used for pagination with page",
			"routing": {
				"send": {
					"property": "page_size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "Search For",
			"name": "search_for",
			"type": "string",
			"default": "figshare",
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
						"Authors"
					],
					"operation": [
						"Private Authors Search"
					]
				}
			}
		},
		{
			"displayName": "GET /account/authors/{author_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authors"
					],
					"operation": [
						"Private Author Details"
					]
				}
			}
		},
];
