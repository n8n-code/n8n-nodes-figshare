import type { INodeProperties } from 'n8n-workflow';

export const projectsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					]
				}
			},
			"options": [
				{
					"name": "Private Projects List",
					"value": "Private Projects List",
					"action": "Private Projects",
					"description": "List private projects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects"
						}
					}
				},
				{
					"name": "Private Project Create",
					"value": "Private Project Create",
					"action": "Create project",
					"description": "Create a new project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/projects"
						}
					}
				},
				{
					"name": "Private Projects Search",
					"value": "Private Projects Search",
					"action": "Private Projects search",
					"description": "Search inside the private projects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/projects/search"
						}
					}
				},
				{
					"name": "Private Project Delete",
					"value": "Private Project Delete",
					"action": "Delete project",
					"description": "A project can be deleted only if: - it is not public - it does not have public articles.\n\nWhen an individual project is deleted, all the articles are moved to my data of each owner.\n\nWhen a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Details",
					"value": "Private Project Details",
					"action": "View project details",
					"description": "View a private project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Update",
					"value": "Private Project Update",
					"action": "Update project",
					"description": "Updating an project by passing body parameters; request can also be made with the PATCH method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Articles List",
					"value": "Private Project Articles List",
					"action": "List project articles",
					"description": "List project articles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/articles"
						}
					}
				},
				{
					"name": "Private Project Articles Create",
					"value": "Private Project Articles Create",
					"action": "Create project article",
					"description": "Create a new Article and associate it with this project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/articles"
						}
					}
				},
				{
					"name": "Private Project Article Delete",
					"value": "Private Project Article Delete",
					"action": "Delete project article",
					"description": "Delete project article",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/articles/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Article Details",
					"value": "Private Project Article Details",
					"action": "Project article details",
					"description": "Project article details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/articles/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Article Files",
					"value": "Private Project Article Files",
					"action": "Project article list files",
					"description": "List article files",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/articles/{{$parameter[\"article_id\"]}}/files"
						}
					}
				},
				{
					"name": "Private Project Article File",
					"value": "Private Project Article File",
					"action": "Project article file details",
					"description": "Project article file details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/articles/{{$parameter[\"article_id\"]}}/files/{{$parameter[\"file_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Collaborators List",
					"value": "Private Project Collaborators List",
					"action": "List project collaborators",
					"description": "List Project collaborators and invited users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/collaborators"
						}
					}
				},
				{
					"name": "Private Project Collaborators Invite",
					"value": "Private Project Collaborators Invite",
					"action": "Invite project collaborators",
					"description": "Invite users to collaborate on project or view the project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/collaborators"
						}
					}
				},
				{
					"name": "Private Project Collaborator Delete",
					"value": "Private Project Collaborator Delete",
					"action": "Remove project collaborator",
					"description": "Remove project collaborator",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/collaborators/{{$parameter[\"user_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Leave",
					"value": "Private Project Leave",
					"action": "Private Project Leave",
					"description": "Please note: project's owner cannot leave the project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/leave"
						}
					}
				},
				{
					"name": "Private Project Notes List",
					"value": "Private Project Notes List",
					"action": "List project notes",
					"description": "List project notes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/notes"
						}
					}
				},
				{
					"name": "Private Project Notes Create",
					"value": "Private Project Notes Create",
					"action": "Create project note",
					"description": "Create a new project note",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/notes"
						}
					}
				},
				{
					"name": "Private Project Note Delete",
					"value": "Private Project Note Delete",
					"action": "Delete project note",
					"description": "Delete project note",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/notes/{{$parameter[\"note_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Note",
					"value": "Private Project Note",
					"action": "Project note details",
					"description": "Project note details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/notes/{{$parameter[\"note_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Note Update",
					"value": "Private Project Note Update",
					"action": "Update project note",
					"description": "Update project note",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/notes/{{$parameter[\"note_id\"]}}"
						}
					}
				},
				{
					"name": "Private Project Publish",
					"value": "Private Project Publish",
					"action": "Private Project Publish",
					"description": "Publish a project. Possible after all items inside it are public",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/projects/{{$parameter[\"project_id\"]}}/publish"
						}
					}
				},
				{
					"name": "Projects List",
					"value": "Projects List",
					"action": "Public Projects",
					"description": "Returns a list of public projects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects"
						}
					}
				},
				{
					"name": "Projects Search",
					"value": "Projects Search",
					"action": "Public Projects Search",
					"description": "Returns a list of public articles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/search"
						}
					}
				},
				{
					"name": "Project Details",
					"value": "Project Details",
					"action": "Public Project",
					"description": "View a project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"project_id\"]}}"
						}
					}
				},
				{
					"name": "Project Articles",
					"value": "Project Articles",
					"action": "Public Project Articles",
					"description": "List articles in project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"project_id\"]}}/articles"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Projects List"
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
						"Projects"
					],
					"operation": [
						"Private Projects List"
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
						"Projects"
					],
					"operation": [
						"Private Projects List"
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
						"Projects"
					],
					"operation": [
						"Private Projects List"
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
						"Projects"
					],
					"operation": [
						"Private Projects List"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "The field by which to order.",
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
						"Projects"
					],
					"operation": [
						"Private Projects List"
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
						"Projects"
					],
					"operation": [
						"Private Projects List"
					]
				}
			}
		},
		{
			"displayName": "Storage",
			"name": "storage",
			"description": "only return collections from this institution",
			"default": "group",
			"type": "options",
			"options": [
				{
					"name": "Group",
					"value": "group"
				},
				{
					"name": "Individual",
					"value": "individual"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "storage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Projects List"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"description": "Any combination of owner, collaborator, viewer separated by comma. Examples: \"owner\" or \"owner,collaborator\".",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roles",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Projects List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{\n  \"defined_key\": \"value for it\"\n}",
			"description": "List of key, values pairs to be associated with the project",
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
						"Projects"
					],
					"operation": [
						"Private Project Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Create"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "project description",
			"description": "Project description",
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
						"Projects"
					],
					"operation": [
						"Private Project Create"
					]
				}
			}
		},
		{
			"displayName": "Funding",
			"name": "funding",
			"type": "string",
			"default": "",
			"description": "Grant number or organization(s) that funded this project. Up to 2000 characters permitted.",
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
						"Projects"
					],
					"operation": [
						"Private Project Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Create"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"type": "number",
			"default": 0,
			"description": "Only if project type is group.",
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
						"Projects"
					],
					"operation": [
						"Private Project Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "project title",
			"description": "The title for this project - mandatory. 3 - 1000 characters.",
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
						"Projects"
					],
					"operation": [
						"Private Project Create"
					]
				}
			}
		},
		{
			"displayName": "POST /account/projects/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Projects Search"
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
						"Projects"
					],
					"operation": [
						"Private Projects Search"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/projects/{project_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/projects/{project_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{\n  \"defined_key\": \"value for it\"\n}",
			"description": "List of key, values pairs to be associated with the project",
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
						"Projects"
					],
					"operation": [
						"Private Project Update"
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
						"Projects"
					],
					"operation": [
						"Private Project Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "project description",
			"description": "Project description",
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
						"Projects"
					],
					"operation": [
						"Private Project Update"
					]
				}
			}
		},
		{
			"displayName": "Funding",
			"name": "funding",
			"type": "string",
			"default": "",
			"description": "Grant number or organization(s) that funded this project. Up to 2000 characters permitted.",
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
						"Projects"
					],
					"operation": [
						"Private Project Update"
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
						"Projects"
					],
					"operation": [
						"Private Project Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "project title",
			"description": "The title for this project - mandatory. 3 - 1000 characters.",
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
						"Projects"
					],
					"operation": [
						"Private Project Update"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Articles List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/projects/{project_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "Authors",
			"name": "authors",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"John Doe\"\n  },\n  {\n    \"id\": 1000008\n  }\n]",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  1,\n  10,\n  11\n]",
			"description": "List of category ids to be associated with the article(e.g [1, 23, 33, 66])",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{\n  \"defined_key\": \"value for it\"\n}",
			"description": "List of key, values pairs to be associated with the article",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "Defined Type",
			"name": "defined_type",
			"type": "string",
			"default": "media",
			"description": "<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>",
			"routing": {
				"send": {
					"property": "defined_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Test description of article",
			"description": "The article description. In a publisher case, usually this is the remote article description",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "keywords",
			"type": "json",
			"default": "[\n  \"tag1\",\n  \"tag2\"\n]",
			"description": "List of tags to be associated with the article. Tags can be used instead",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"type": "number",
			"default": 1,
			"description": "License id for this article.",
			"routing": {
				"send": {
					"property": "license",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "References",
			"name": "references",
			"type": "json",
			"default": "[\n  \"http://figshare.com\",\n  \"http://api.figshare.com\"\n]",
			"description": "List of links to be associated with the article (e.g [\"http://link1\", \"http://link2\", \"http://link3\"])",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"tag1\",\n  \"tag2\"\n]",
			"description": "List of tags to be associated with the article. Keywords can be used instead",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "Test article title",
			"description": "Title of article",
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
						"Projects"
					],
					"operation": [
						"Private Project Articles Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/projects/{project_id}/articles/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}/articles/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article Details"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}/articles/{article_id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article Files"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"required": true,
			"description": "Project unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article Files"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Project Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article Files"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}/articles/{article_id}/files/{file_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article File"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"required": true,
			"description": "Project unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article File"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Project Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article File"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "file_id",
			"required": true,
			"description": "File unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Article File"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}/collaborators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborators List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/projects/{project_id}/collaborators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborators Invite"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "hey",
			"description": "Text sent when inviting the user to the project",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborators Invite"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "user@domain.com",
			"description": "Collaborator email",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborators Invite"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role Name",
			"name": "role_name",
			"type": "options",
			"default": "viewer",
			"description": "Role of the the collaborator inside the project",
			"options": [
				{
					"name": "Viewer",
					"value": "viewer"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "role_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborators Invite"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"type": "number",
			"default": 100008,
			"description": "User id of the collaborator",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborators Invite"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/projects/{project_id}/collaborators/{user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborator Delete"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"required": true,
			"description": "Project unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborator Delete"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "User unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Collaborator Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /account/projects/{project_id}/leave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Leave"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"required": true,
			"description": "Project unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Leave"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Notes List"
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
						"Projects"
					],
					"operation": [
						"Private Project Notes List"
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
						"Projects"
					],
					"operation": [
						"Private Project Notes List"
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
						"Projects"
					],
					"operation": [
						"Private Project Notes List"
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
						"Projects"
					],
					"operation": [
						"Private Project Notes List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/projects/{project_id}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Notes Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "note to remember",
			"description": "Text of the note",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Notes Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/projects/{project_id}/notes/{note_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Note Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/projects/{project_id}/notes/{note_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Note"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/projects/{project_id}/notes/{note_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Note Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "note to remember",
			"description": "Text of the note",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Note Update"
					]
				}
			}
		},
		{
			"displayName": "POST /account/projects/{project_id}/publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Publish"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"required": true,
			"description": "Project unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Private Project Publish"
					]
				}
			}
		},
		{
			"displayName": "GET /projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
					]
				}
			}
		},
		{
			"displayName": "Published Since",
			"name": "published_since",
			"description": "Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD",
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
						"Projects"
					],
					"operation": [
						"Projects List"
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
						"Projects"
					],
					"operation": [
						"Projects List"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Projects Search"
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
						"Projects"
					],
					"operation": [
						"Projects Search"
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
						"Projects"
					],
					"operation": [
						"Projects Search"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{project_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Project Details"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"required": true,
			"description": "Project Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Project Details"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{project_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Project Articles"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"required": true,
			"description": "Project Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Projects"
					],
					"operation": [
						"Project Articles"
					]
				}
			}
		},
];
