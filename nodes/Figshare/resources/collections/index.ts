import type { INodeProperties } from 'n8n-workflow';

export const collectionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					]
				}
			},
			"options": [
				{
					"name": "Private Collections List",
					"value": "Private Collections List",
					"action": "Private Collections List",
					"description": "List private collections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/collections"
						}
					}
				},
				{
					"name": "Private Collection Create",
					"value": "Private Collection Create",
					"action": "Create collection",
					"description": "Create a new Collection by sending collection information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections"
						}
					}
				},
				{
					"name": "Private Collections Search",
					"value": "Private Collections Search",
					"action": "Private Collections Search",
					"description": "Returns a list of private Collections",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/search"
						}
					}
				},
				{
					"name": "Private Collection Delete",
					"value": "Private Collection Delete",
					"action": "Delete collection",
					"description": "Delete n collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Details",
					"value": "Private Collection Details",
					"action": "Collection details",
					"description": "View a collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Update",
					"value": "Private Collection Update",
					"action": "Update collection",
					"description": "Update collection details; request can also be made with the PATCH method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Articles List",
					"value": "Private Collection Articles List",
					"action": "List collection articles",
					"description": "List collection articles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/articles"
						}
					}
				},
				{
					"name": "Private Collection Articles Add",
					"value": "Private Collection Articles Add",
					"action": "Add collection articles",
					"description": "Associate new articles with the collection. This will add new articles to the list of already associated articles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/articles"
						}
					}
				},
				{
					"name": "Private Collection Articles Replace",
					"value": "Private Collection Articles Replace",
					"action": "Replace collection articles",
					"description": "Associate new articles with the collection. This will remove all already associated articles and add these new ones",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/articles"
						}
					}
				},
				{
					"name": "Private Collection Article Delete",
					"value": "Private Collection Article Delete",
					"action": "Delete collection article",
					"description": "De-associate article from collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/articles/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Authors List",
					"value": "Private Collection Authors List",
					"action": "List collection authors",
					"description": "List collection authors",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/authors"
						}
					}
				},
				{
					"name": "Private Collection Authors Add",
					"value": "Private Collection Authors Add",
					"action": "Add collection authors",
					"description": "Associate new authors with the collection. This will add new authors to the list of already associated authors",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/authors"
						}
					}
				},
				{
					"name": "Private Collection Authors Replace",
					"value": "Private Collection Authors Replace",
					"action": "Replace collection authors",
					"description": "Associate new authors with the collection. This will remove all already associated authors and add these new ones",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/authors"
						}
					}
				},
				{
					"name": "Private Collection Author Delete",
					"value": "Private Collection Author Delete",
					"action": "Delete collection author",
					"description": "Delete collection author",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/authors/{{$parameter[\"author_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Categories List",
					"value": "Private Collection Categories List",
					"action": "List collection categories",
					"description": "List collection categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/categories"
						}
					}
				},
				{
					"name": "Private Collection Categories Add",
					"value": "Private Collection Categories Add",
					"action": "Add collection categories",
					"description": "Associate new categories with the collection. This will add new categories to the list of already associated categories",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/categories"
						}
					}
				},
				{
					"name": "Private Collection Categories Replace",
					"value": "Private Collection Categories Replace",
					"action": "Replace collection categories",
					"description": "Associate new categories with the collection. This will remove all already associated categories and add these new ones",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/categories"
						}
					}
				},
				{
					"name": "Private Collection Category Delete",
					"value": "Private Collection Category Delete",
					"action": "Delete collection category",
					"description": "De-associate category from collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/categories/{{$parameter[\"category_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Private Links List",
					"value": "Private Collection Private Links List",
					"action": "List collection private links",
					"description": "List article private links",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/private_links"
						}
					}
				},
				{
					"name": "Private Collection Private Link Create",
					"value": "Private Collection Private Link Create",
					"action": "Create collection private link",
					"description": "Create new private link",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/private_links"
						}
					}
				},
				{
					"name": "Private Collection Private Link Delete",
					"value": "Private Collection Private Link Delete",
					"action": "Disable private link",
					"description": "Disable/delete private link for this collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/private_links/{{$parameter[\"link_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Private Link Update",
					"value": "Private Collection Private Link Update",
					"action": "Update collection private link",
					"description": "Update existing private link for this collection",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/private_links/{{$parameter[\"link_id\"]}}"
						}
					}
				},
				{
					"name": "Private Collection Publish",
					"value": "Private Collection Publish",
					"action": "Private Collection Publish",
					"description": "When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/publish"
						}
					}
				},
				{
					"name": "Private Collection Reserve Doi",
					"value": "Private Collection Reserve Doi",
					"action": "Private Collection Reserve DOI",
					"description": "Reserve DOI for collection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/reserve_doi"
						}
					}
				},
				{
					"name": "Private Collection Reserve Handle",
					"value": "Private Collection Reserve Handle",
					"action": "Private Collection Reserve Handle",
					"description": "Reserve Handle for collection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/reserve_handle"
						}
					}
				},
				{
					"name": "Private Collection Resource",
					"value": "Private Collection Resource",
					"action": "Private Collection Resource",
					"description": "Edit collection resource data.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/collections/{{$parameter[\"collection_id\"]}}/resource"
						}
					}
				},
				{
					"name": "Collections List",
					"value": "Collections List",
					"action": "Public Collections",
					"description": "Returns a list of public collections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collections"
						}
					}
				},
				{
					"name": "Collections Search",
					"value": "Collections Search",
					"action": "Public Collections Search",
					"description": "Returns a list of public collections",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/collections/search"
						}
					}
				},
				{
					"name": "Collection Details",
					"value": "Collection Details",
					"action": "Collection details",
					"description": "View a collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collections/{{$parameter[\"collection_id\"]}}"
						}
					}
				},
				{
					"name": "Collection Articles",
					"value": "Collection Articles",
					"action": "Public Collection Articles",
					"description": "Returns a list of public collection articles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collections/{{$parameter[\"collection_id\"]}}/articles"
						}
					}
				},
				{
					"name": "Collection Versions",
					"value": "Collection Versions",
					"action": "Collection Versions list",
					"description": "Returns a list of public collection Versions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collections/{{$parameter[\"collection_id\"]}}/versions"
						}
					}
				},
				{
					"name": "Collection Version Details",
					"value": "Collection Version Details",
					"action": "Collection Version details",
					"description": "View details for a certain version of a collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collections/{{$parameter[\"collection_id\"]}}/versions/{{$parameter[\"version_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections List"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number. Used for pagination with page_size",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections List"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of results included on a page. Used for pagination with page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results included on a page. Used for pagination with query",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections List"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "The field by which to order. Default varies by endpoint/resource.",
			"default": "published_date",
			"type": "options",
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
					"name": "Cites",
					"value": "cites"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections List"
					]
				}
			}
		},
		{
			"displayName": "Order Direction",
			"name": "order_direction",
			"default": "desc",
			"type": "options",
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
					"type": "query",
					"property": "order_direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Articles",
			"name": "articles",
			"type": "json",
			"default": "[\n  2000001,\n  2000005\n]",
			"description": "List of articles to be associated with the collection",
			"routing": {
				"send": {
					"property": "articles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Authors",
			"name": "authors",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"John Doe\"\n  },\n  {\n    \"id\": 20005\n  }\n]",
			"description": "List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.",
			"routing": {
				"send": {
					"property": "authors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  1,\n  10,\n  11\n]",
			"description": "List of category ids to be associated with the collection(e.g [1, 23, 33, 66])",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Categories By Source ID",
			"name": "categories_by_source_id",
			"type": "json",
			"default": "[\n  \"300204\",\n  \"400207\"\n]",
			"description": "List of category source ids to be associated with the collection, supersedes the categories property",
			"routing": {
				"send": {
					"property": "categories_by_source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{\n  \"defined_key\": \"value for it\"\n}",
			"description": "List of key, values pairs to be associated with the collection",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields List",
			"name": "custom_fields_list",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"key\",\n    \"value\": \"value\"\n  }\n]",
			"description": "List of custom fields values, supersedes custom_fields parameter",
			"routing": {
				"send": {
					"property": "custom_fields_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Test description of article",
			"description": "The collection description. In a publisher case, usually this is the remote collection description",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Doi",
			"name": "doi",
			"type": "string",
			"default": "",
			"description": "Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.",
			"routing": {
				"send": {
					"property": "doi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Funding",
			"name": "funding",
			"type": "string",
			"default": "",
			"description": "Grant number or funding authority",
			"routing": {
				"send": {
					"property": "funding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Funding List",
			"name": "funding_list",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Funding creation / update items",
			"routing": {
				"send": {
					"property": "funding_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups",
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
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Handle",
			"name": "handle",
			"type": "string",
			"default": "",
			"description": "Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.",
			"routing": {
				"send": {
					"property": "handle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "keywords",
			"type": "json",
			"default": "[\n  \"tag1\",\n  \"tag2\"\n]",
			"description": "List of tags to be associated with the collection. Tags can be used instead",
			"routing": {
				"send": {
					"property": "keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "References",
			"name": "references",
			"type": "json",
			"default": "[\n  \"http://figshare.com\",\n  \"http://api.figshare.com\"\n]",
			"description": "List of links to be associated with the collection (e.g [\"http://link1\", \"http://link2\", \"http://link3\"])",
			"routing": {
				"send": {
					"property": "references",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Resource Doi",
			"name": "resource_doi",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article DOI.",
			"routing": {
				"send": {
					"property": "resource_doi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resource_id",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article id",
			"routing": {
				"send": {
					"property": "resource_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Resource Link",
			"name": "resource_link",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article link",
			"routing": {
				"send": {
					"property": "resource_link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Resource Title",
			"name": "resource_title",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article title.",
			"routing": {
				"send": {
					"property": "resource_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Resource Version",
			"name": "resource_version",
			"type": "number",
			"default": 0,
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article version",
			"routing": {
				"send": {
					"property": "resource_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"tag1\",\n  \"tag2\"\n]",
			"description": "List of tags to be associated with the collection. Keywords can be used instead",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "Timeline",
			"name": "timeline",
			"type": "json",
			"default": "{\n  \"firstOnline\": \"2015-12-31\",\n  \"publisherAcceptance\": \"2015-12-31\",\n  \"publisherPublication\": \"2015-12-31\"\n}",
			"routing": {
				"send": {
					"property": "timeline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "Test collection title",
			"description": "Title of collection",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Create"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections Search"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resource_id",
			"type": "string",
			"default": "1407024",
			"description": "only return collections with this resource_id",
			"routing": {
				"send": {
					"property": "resource_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collections Search"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/collections/{collection_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/collections/{collection_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/collections/{collection_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Articles",
			"name": "articles",
			"type": "json",
			"default": "[\n  2000001,\n  2000005\n]",
			"description": "List of articles to be associated with the collection",
			"routing": {
				"send": {
					"property": "articles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Authors",
			"name": "authors",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"John Doe\"\n  },\n  {\n    \"id\": 20005\n  }\n]",
			"description": "List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.",
			"routing": {
				"send": {
					"property": "authors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  1,\n  10,\n  11\n]",
			"description": "List of category ids to be associated with the collection (e.g [1, 23, 33, 66])",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Categories By Source ID",
			"name": "categories_by_source_id",
			"type": "json",
			"default": "[\n  \"300204\",\n  \"400207\"\n]",
			"description": "List of category source ids to be associated with the article, supersedes the categories property",
			"routing": {
				"send": {
					"property": "categories_by_source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{\n  \"defined_key\": \"value for it\"\n}",
			"description": "List of key, values pairs to be associated with the collection",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields List",
			"name": "custom_fields_list",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"key\",\n    \"value\": \"value\"\n  }\n]",
			"description": "List of custom fields values, supersedes custom_fields parameter",
			"routing": {
				"send": {
					"property": "custom_fields_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Test description of collection",
			"description": "The collection description. In a publisher case, usually this is the remote collection description",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Doi",
			"name": "doi",
			"type": "string",
			"default": "",
			"description": "Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.",
			"routing": {
				"send": {
					"property": "doi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Funding",
			"name": "funding",
			"type": "string",
			"default": "",
			"description": "Grant number or funding authority",
			"routing": {
				"send": {
					"property": "funding",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Funding List",
			"name": "funding_list",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Funding creation / update items",
			"routing": {
				"send": {
					"property": "funding_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups",
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
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Handle",
			"name": "handle",
			"type": "string",
			"default": "",
			"description": "Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.",
			"routing": {
				"send": {
					"property": "handle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "keywords",
			"type": "json",
			"default": "[\n  \"tag1\",\n  \"tag2\"\n]",
			"description": "List of tags to be associated with the collection. Tags can be used instead",
			"routing": {
				"send": {
					"property": "keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "References",
			"name": "references",
			"type": "json",
			"default": "[\n  \"http://figshare.com\",\n  \"http://api.figshare.com\"\n]",
			"description": "List of links to be associated with the collection (e.g [\"http://link1\", \"http://link2\", \"http://link3\"])",
			"routing": {
				"send": {
					"property": "references",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Doi",
			"name": "resource_doi",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article DOI.",
			"routing": {
				"send": {
					"property": "resource_doi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resource_id",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article id",
			"routing": {
				"send": {
					"property": "resource_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Link",
			"name": "resource_link",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article link",
			"routing": {
				"send": {
					"property": "resource_link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Title",
			"name": "resource_title",
			"type": "string",
			"default": "",
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article title.",
			"routing": {
				"send": {
					"property": "resource_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Version",
			"name": "resource_version",
			"type": "number",
			"default": 0,
			"description": "Not applicable to regular users. In a publisher case, this is the publisher article version",
			"routing": {
				"send": {
					"property": "resource_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"tag1\",\n  \"tag2\"\n]",
			"description": "List of tags to be associated with the collection. Keywords can be used instead",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Timeline",
			"name": "timeline",
			"type": "json",
			"default": "{\n  \"firstOnline\": \"2015-12-31\",\n  \"publisherAcceptance\": \"2015-12-31\",\n  \"publisherPublication\": \"2015-12-31\"\n}",
			"routing": {
				"send": {
					"property": "timeline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "Test collection title",
			"description": "Title of collection",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Update"
					]
				}
			}
		},
		{
			"displayName": "GET /account/collections/{collection_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles List"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number. Used for pagination with page_size",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles List"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of results included on a page. Used for pagination with page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results included on a page. Used for pagination with query",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Articles",
			"name": "articles",
			"type": "json",
			"default": "[\n  2000003,\n  2000004\n]",
			"description": "List of article ids",
			"routing": {
				"send": {
					"property": "articles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles Add"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/collections/{collection_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles Replace"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Articles",
			"name": "articles",
			"type": "json",
			"default": "[\n  2000003,\n  2000004\n]",
			"description": "List of article ids",
			"routing": {
				"send": {
					"property": "articles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Articles Replace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/collections/{collection_id}/articles/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Article Delete"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Article Delete"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Collection article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Article Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/collections/{collection_id}/authors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Authors List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/authors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Authors Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Authors",
			"name": "authors",
			"type": "json",
			"default": "[\n  {\n    \"id\": 12121\n  },\n  {\n    \"id\": 34345\n  },\n  {\n    \"name\": \"John Doe\"\n  }\n]",
			"description": "List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.",
			"routing": {
				"send": {
					"property": "authors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Authors Add"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/collections/{collection_id}/authors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Authors Replace"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Authors",
			"name": "authors",
			"type": "json",
			"default": "[\n  {\n    \"id\": 12121\n  },\n  {\n    \"id\": 34345\n  },\n  {\n    \"name\": \"John Doe\"\n  }\n]",
			"description": "List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.",
			"routing": {
				"send": {
					"property": "authors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Authors Replace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/collections/{collection_id}/authors/{author_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Author Delete"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Author Delete"
					]
				}
			}
		},
		{
			"displayName": "Author ID",
			"name": "author_id",
			"required": true,
			"description": "Collection Author unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Author Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/collections/{collection_id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Categories List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Categories Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  1,\n  10,\n  11\n]",
			"description": "List of category ids",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Categories Add"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/collections/{collection_id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Categories Replace"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  1,\n  10,\n  11\n]",
			"description": "List of category ids",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Categories Replace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/collections/{collection_id}/categories/{category_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Category Delete"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Category Delete"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "category_id",
			"required": true,
			"description": "Collection category unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Category Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/collections/{collection_id}/private_links",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Links List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/private_links",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Link Create"
					]
				}
			}
		},
		{
			"displayName": "Expires Date",
			"name": "expires_date",
			"type": "string",
			"default": "2018-02-22 22:22:22",
			"description": "Date when this private link should expire - optional. By default private links expire in 365 days.",
			"routing": {
				"send": {
					"property": "expires_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Link Create"
					]
				}
			}
		},
		{
			"displayName": "Read Only",
			"name": "read_only",
			"type": "boolean",
			"default": true,
			"description": "Optional, default true. Set to false to give private link users editing rights for this collection.",
			"routing": {
				"send": {
					"property": "read_only",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Link Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/collections/{collection_id}/private_links/{link_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Link Delete"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/collections/{collection_id}/private_links/{link_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Link Update"
					]
				}
			}
		},
		{
			"displayName": "Expires Date",
			"name": "expires_date",
			"type": "string",
			"default": "2018-02-22 22:22:22",
			"description": "Date when this private link should expire - optional. By default private links expire in 365 days.",
			"routing": {
				"send": {
					"property": "expires_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Link Update"
					]
				}
			}
		},
		{
			"displayName": "Read Only",
			"name": "read_only",
			"type": "boolean",
			"default": true,
			"description": "Optional, default true. Set to false to give private link users editing rights for this collection.",
			"routing": {
				"send": {
					"property": "read_only",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Private Link Update"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Publish"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/reserve_doi",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Reserve Doi"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Reserve Doi"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/reserve_handle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Reserve Handle"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Reserve Handle"
					]
				}
			}
		},
		{
			"displayName": "POST /account/collections/{collection_id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "Doi",
			"name": "doi",
			"type": "string",
			"default": "",
			"description": "DOI of resource item",
			"routing": {
				"send": {
					"property": "doi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "aaaa23512",
			"description": "ID of resource item",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "https://docs.figshare.com",
			"description": "Link of resource item",
			"routing": {
				"send": {
					"property": "link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "frozen",
			"description": "Status of resource item",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "Test title",
			"description": "Title of resource item",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "number",
			"default": 1,
			"description": "Version of resource item",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Private Collection Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "X Cursor",
			"name": "X-Cursor",
			"description": "Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-Cursor": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number. Used for pagination with page_size",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of results included on a page. Used for pagination with page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results included on a page. Used for pagination with query",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "The field by which to order. Default varies by endpoint/resource.",
			"default": "published_date",
			"type": "options",
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
					"name": "Cites",
					"value": "cites"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Order Direction",
			"name": "order_direction",
			"default": "desc",
			"type": "options",
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
					"type": "query",
					"property": "order_direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Institution",
			"name": "institution",
			"description": "only return collections from this institution",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "institution",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Published Since",
			"name": "published_since",
			"description": "Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "published_since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Modified Since",
			"name": "modified_since",
			"description": "Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "modified_since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"description": "only return collections from this group",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Resource Doi",
			"name": "resource_doi",
			"description": "only return collections with this resource_doi",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resource_doi",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Doi",
			"name": "doi",
			"description": "only return collections with this doi",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "doi",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "Handle",
			"name": "handle",
			"description": "only return collections with this handle",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "handle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections List"
					]
				}
			}
		},
		{
			"displayName": "POST /collections/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections Search"
					]
				}
			}
		},
		{
			"displayName": "X Cursor",
			"name": "X-Cursor",
			"description": "Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-Cursor": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections Search"
					]
				}
			}
		},
		{
			"displayName": "Doi",
			"name": "doi",
			"type": "string",
			"default": "10.6084/m9.figshare.1407024",
			"description": "Only return collections with this doi",
			"routing": {
				"send": {
					"property": "doi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections Search"
					]
				}
			}
		},
		{
			"displayName": "Handle",
			"name": "handle",
			"type": "string",
			"default": "10084/figshare.1407024",
			"description": "Only return collections with this handle",
			"routing": {
				"send": {
					"property": "handle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections Search"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"type": "options",
			"default": "published_date",
			"description": "The field by which to order.",
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
						"Collections"
					],
					"operation": [
						"Collections Search"
					]
				}
			}
		},
		{
			"displayName": "Resource Doi",
			"name": "resource_doi",
			"type": "string",
			"default": "10.6084/m9.figshare.1407024",
			"description": "Only return collections with this resource_doi",
			"routing": {
				"send": {
					"property": "resource_doi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collections Search"
					]
				}
			}
		},
		{
			"displayName": "GET /collections/{collection_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Details"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Details"
					]
				}
			}
		},
		{
			"displayName": "GET /collections/{collection_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Articles"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Articles"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number. Used for pagination with page_size",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Articles"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of results included on a page. Used for pagination with page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Articles"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results included on a page. Used for pagination with query",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Articles"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Where to start the listing(the offset of the first result). Used for pagination with limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Articles"
					]
				}
			}
		},
		{
			"displayName": "GET /collections/{collection_id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Versions"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /collections/{collection_id}/versions/{version_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Version Details"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "Collection Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Version Details"
					]
				}
			}
		},
		{
			"displayName": "Version ID",
			"name": "version_id",
			"required": true,
			"description": "Version Number",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Collection Version Details"
					]
				}
			}
		},
];
