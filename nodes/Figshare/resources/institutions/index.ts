import type { INodeProperties } from 'n8n-workflow';

export const institutionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					]
				}
			},
			"options": [
				{
					"name": "Private Categories List",
					"value": "Private Categories List",
					"action": "Private Account Categories",
					"description": "List institution categories (including parent Categories)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/categories"
						}
					}
				},
				{
					"name": "Private Institution Details",
					"value": "Private Institution Details",
					"action": "Private Account Institutions",
					"description": "Account institution details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution"
						}
					}
				},
				{
					"name": "Private Institution Accounts List",
					"value": "Private Institution Accounts List",
					"action": "Private Account Institution Accounts",
					"description": "Returns the accounts for which the account has administrative privileges (assigned and inherited).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/accounts"
						}
					}
				},
				{
					"name": "Private Institution Accounts Create",
					"value": "Private Institution Accounts Create",
					"action": "Create new Institution Account",
					"description": "Create a new Account by sending account information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/institution/accounts"
						}
					}
				},
				{
					"name": "Private Institution Accounts Search",
					"value": "Private Institution Accounts Search",
					"action": "Private Account Institution Accounts Search",
					"description": "Returns the accounts for which the account has administrative privileges (assigned and inherited).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/institution/accounts/search"
						}
					}
				},
				{
					"name": "Private Institution Accounts Update",
					"value": "Private Institution Accounts Update",
					"action": "Update Institution Account",
					"description": "Update Institution Account",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/institution/accounts/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Private Institution Articles",
					"value": "Private Institution Articles",
					"action": "Private Institution Articles",
					"description": "Get Articles from own institution. User must be administrator of the institution",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/articles"
						}
					}
				},
				{
					"name": "Custom Fields List",
					"value": "Custom Fields List",
					"action": "Private account institution group custom fields",
					"description": "Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/custom_fields"
						}
					}
				},
				{
					"name": "Custom Fields Upload",
					"value": "Custom Fields Upload",
					"action": "Custom fields values files upload",
					"description": "Uploads a CSV containing values for a specific custom field of type <b>dropdown_large_list</b>. More details in the <a href=\"#custom_fields\">Custom Fields section</a>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/institution/custom_fields/{{$parameter[\"custom_field_id\"]}}/items/upload"
						}
					}
				},
				{
					"name": "Private Institution Embargo Options Details",
					"value": "Private Institution Embargo Options Details",
					"action": "Private Account Institution embargo options",
					"description": "Account institution embargo options details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/embargo_options"
						}
					}
				},
				{
					"name": "Private Institution Groups List",
					"value": "Private Institution Groups List",
					"action": "Private Account Institution Groups",
					"description": "Returns the groups for which the account has administrative privileges (assigned and inherited).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/groups"
						}
					}
				},
				{
					"name": "Private Group Embargo Options Details",
					"value": "Private Group Embargo Options Details",
					"action": "Private Account Institution Group Embargo Options",
					"description": "Account institution group embargo options details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/groups/{{$parameter[\"group_id\"]}}/embargo_options"
						}
					}
				},
				{
					"name": "Account Institution Curation",
					"value": "Account Institution Curation",
					"action": "Institution Curation Review",
					"description": "Retrieve a certain curation review by its ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/review/{{$parameter[\"curation_id\"]}}"
						}
					}
				},
				{
					"name": "Account Institution Curation Comments",
					"value": "Account Institution Curation Comments",
					"action": "Institution Curation Review Comments",
					"description": "Retrieve a certain curation review's comments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/review/{{$parameter[\"curation_id\"]}}/comments"
						}
					}
				},
				{
					"name": "POST Account Institution Review Comments",
					"value": "POST Account Institution Review Comments",
					"action": "POST Institution Curation Review Comment",
					"description": "Add a new comment to the review.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/institution/review/{{$parameter[\"curation_id\"]}}/comments"
						}
					}
				},
				{
					"name": "Account Institution Curations",
					"value": "Account Institution Curations",
					"action": "Institution Curation Reviews",
					"description": "Retrieve a list of curation reviews for this institution",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/reviews"
						}
					}
				},
				{
					"name": "Private Institution Roles List",
					"value": "Private Institution Roles List",
					"action": "Private Account Institution Roles",
					"description": "Returns the roles available for groups and the institution group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/roles"
						}
					}
				},
				{
					"name": "Private Institution Account Group Roles",
					"value": "Private Institution Account Group Roles",
					"action": "List Institution Account Group Roles",
					"description": "List Institution Account Group Roles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/roles/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Private Institution Account Group Roles Create",
					"value": "Private Institution Account Group Roles Create",
					"action": "Add Institution Account Group Roles",
					"description": "Add Institution Account Group Roles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/institution/roles/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Private Institution Account Group Role Delete",
					"value": "Private Institution Account Group Role Delete",
					"action": "Delete Institution Account Group Role",
					"description": "Delete Institution Account Group Role",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/institution/roles/{{$parameter[\"account_id\"]}}/{{$parameter[\"group_id\"]}}/{{$parameter[\"role_id\"]}}"
						}
					}
				},
				{
					"name": "Private Account Institution User",
					"value": "Private Account Institution User",
					"action": "Private Account Institution User",
					"description": "Retrieve institution user information using the account_id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/institution/users/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Institution Hrfeed Upload",
					"value": "Institution Hrfeed Upload",
					"action": "Private Institution HRfeed Upload",
					"description": "More info in the <a href=\"#hr_feed\">HR Feed section</a>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/institution/hrfeed/upload"
						}
					}
				},
				{
					"name": "Institution Articles",
					"value": "Institution Articles",
					"action": "Public Licenses",
					"description": "Returns a list of articles belonging to the institution",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/institutions/{{$parameter[\"institution_string_id\"]}}/articles/filter-by"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Categories List"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Details"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"description": "Filter by active status",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_active",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
					]
				}
			}
		},
		{
			"displayName": "Institution User ID",
			"name": "institution_user_id",
			"description": "Filter by institution_user_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "institution_user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Filter by email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
					]
				}
			}
		},
		{
			"displayName": "ID Lte",
			"name": "id_lte",
			"description": "Retrieve accounts with an ID lower or equal to the specified value",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "id_lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
					]
				}
			}
		},
		{
			"displayName": "ID Gte",
			"name": "id_gte",
			"description": "Retrieve accounts with an ID greater or equal to the specified value",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "id_gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/institution/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "johndoe@example.com",
			"description": "Email of account",
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "John",
			"description": "First Name",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"displayName": "Institution User ID",
			"name": "institution_user_id",
			"type": "string",
			"default": "johndoe",
			"description": "Institution user id",
			"routing": {
				"send": {
					"property": "institution_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Is account active",
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Doe",
			"description": "Last Name",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"displayName": "Quota",
			"name": "quota",
			"type": "number",
			"default": 1000,
			"description": "Account quota",
			"routing": {
				"send": {
					"property": "quota",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"displayName": "Symplectic User ID",
			"name": "symplectic_user_id",
			"type": "string",
			"default": "johndoe",
			"description": "Symplectic user id",
			"routing": {
				"send": {
					"property": "symplectic_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Create"
					]
				}
			}
		},
		{
			"displayName": "POST /account/institution/accounts/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "alan@institution.com",
			"description": "filter by email",
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
					]
				}
			}
		},
		{
			"displayName": "Institution User ID",
			"name": "institution_user_id",
			"type": "string",
			"default": "alan",
			"description": "filter by institution_user_id",
			"routing": {
				"send": {
					"property": "institution_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "number",
			"default": 0,
			"description": "Filter by active status",
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Search"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/institution/accounts/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Update"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "Account identifier the user is associated to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Update"
					]
				}
			}
		},
		{
			"required": true,
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Is account active",
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
						"Institutions"
					],
					"operation": [
						"Private Institution Accounts Update"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
					]
				}
			}
		},
		{
			"displayName": "Modified Since",
			"name": "modified_since",
			"description": "Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD",
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "only return collections with this status",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
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
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
					]
				}
			}
		},
		{
			"displayName": "Item Type",
			"name": "item_type",
			"description": "Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Articles"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/custom_fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"description": "Group_id",
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
						"Institutions"
					],
					"operation": [
						"Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/institution/custom_fields/{custom_field_id}/items/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Custom Fields Upload"
					]
				}
			}
		},
		{
			"displayName": "Custom Field ID",
			"name": "custom_field_id",
			"required": true,
			"description": "Custom field identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Custom Fields Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /account/institution/custom_fields/{custom_field_id}/items/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Custom Fields Upload"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/embargo_options",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Embargo Options Details"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Groups List"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/groups/{group_id}/embargo_options",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Group Embargo Options Details"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"required": true,
			"description": "Group identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Group Embargo Options Details"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/review/{curation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Account Institution Curation"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/review/{curation_id}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Account Institution Curation Comments"
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
						"Institutions"
					],
					"operation": [
						"Account Institution Curation Comments"
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
						"Institutions"
					],
					"operation": [
						"Account Institution Curation Comments"
					]
				}
			}
		},
		{
			"displayName": "POST /account/institution/review/{curation_id}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"POST Account Institution Review Comments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "The contents/value of the comment",
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
						"Institutions"
					],
					"operation": [
						"POST Account Institution Review Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/reviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Account Institution Curations"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"description": "Filter by the group ID",
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
						"Institutions"
					],
					"operation": [
						"Account Institution Curations"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"description": "Retrieve the reviews for this article",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "article_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Account Institution Curations"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter by the status of the review",
			"default": "pending",
			"type": "options",
			"options": [
				{
					"name": "Pending",
					"value": "pending"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "Rejected",
					"value": "rejected"
				},
				{
					"name": "Closed",
					"value": "closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Account Institution Curations"
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
						"Institutions"
					],
					"operation": [
						"Account Institution Curations"
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
						"Institutions"
					],
					"operation": [
						"Account Institution Curations"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Roles List"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/roles/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Account Group Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /account/institution/roles/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Account Group Roles Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/institution/roles/{account_id}/{group_id}/{role_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Account Group Role Delete"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "Account identifier for which to remove the role",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Account Group Role Delete"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"required": true,
			"description": "Group identifier for which to remove the role",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Account Group Role Delete"
					]
				}
			}
		},
		{
			"displayName": "Role ID",
			"name": "role_id",
			"required": true,
			"description": "Role identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Institution Account Group Role Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/institution/users/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Account Institution User"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "Account identifier the user is associated to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Private Account Institution User"
					]
				}
			}
		},
		{
			"displayName": "POST /institution/hrfeed/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Institution Hrfeed Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /institution/hrfeed/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Institution Hrfeed Upload"
					]
				}
			}
		},
		{
			"displayName": "GET /institutions/{institution_string_id}/articles/filter-by",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Institution Articles"
					]
				}
			}
		},
		{
			"displayName": "Institution String ID",
			"name": "institution_string_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Institution Articles"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resource_id",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resource_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Institution Articles"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filename",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Institutions"
					],
					"operation": [
						"Institution Articles"
					]
				}
			}
		},
];
