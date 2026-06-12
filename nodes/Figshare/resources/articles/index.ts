import type { INodeProperties } from 'n8n-workflow';

export const articlesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					]
				}
			},
			"options": [
				{
					"name": "Private Articles List",
					"value": "Private Articles List",
					"action": "Private Articles",
					"description": "Get Own Articles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles"
						}
					}
				},
				{
					"name": "Private Article Create",
					"value": "Private Article Create",
					"action": "Create new Article",
					"description": "Create a new Article by sending article information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles"
						}
					}
				},
				{
					"name": "Account Article Report",
					"value": "Account Article Report",
					"action": "Account Article Report",
					"description": "Return status on all reports generated for the account from the oauth credentials",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/export"
						}
					}
				},
				{
					"name": "Account Article Report Generate",
					"value": "Account Article Report Generate",
					"action": "Initiate a new Report",
					"description": "Initiate a new Article Report for this Account. There is a limit of 1 report per day.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/export"
						}
					}
				},
				{
					"name": "Private Articles Search",
					"value": "Private Articles Search",
					"action": "Private Articles search",
					"description": "Returns a list of private articles filtered by the search parameters",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/search"
						}
					}
				},
				{
					"name": "Private Article Delete",
					"value": "Private Article Delete",
					"action": "Delete article",
					"description": "Delete an article",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Details",
					"value": "Private Article Details",
					"action": "Article details",
					"description": "View a private article",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Update",
					"value": "Private Article Update",
					"action": "Update article",
					"description": "Updating an article by passing body parameters; request can also be made with the PATCH method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Authors List",
					"value": "Private Article Authors List",
					"action": "List article authors",
					"description": "List article authors",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/authors"
						}
					}
				},
				{
					"name": "Private Article Authors Add",
					"value": "Private Article Authors Add",
					"action": "Add article authors",
					"description": "Associate new authors with the article. This will add new authors to the list of already associated authors",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/authors"
						}
					}
				},
				{
					"name": "Private Article Authors Replace",
					"value": "Private Article Authors Replace",
					"action": "Replace article authors",
					"description": "Associate new authors with the article. This will remove all already associated authors and add these new ones",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/authors"
						}
					}
				},
				{
					"name": "Private Article Author Delete",
					"value": "Private Article Author Delete",
					"action": "Delete article author",
					"description": "De-associate author from article",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/authors/{{$parameter[\"author_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Categories List",
					"value": "Private Article Categories List",
					"action": "List article categories",
					"description": "List article categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/categories"
						}
					}
				},
				{
					"name": "Private Article Categories Add",
					"value": "Private Article Categories Add",
					"action": "Add article categories",
					"description": "Associate new categories with the article. This will add new categories to the list of already associated categories",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/categories"
						}
					}
				},
				{
					"name": "Private Article Categories Replace",
					"value": "Private Article Categories Replace",
					"action": "Replace article categories",
					"description": "Associate new categories with the article. This will remove all already associated categories and add these new ones",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/categories"
						}
					}
				},
				{
					"name": "Private Article Category Delete",
					"value": "Private Article Category Delete",
					"action": "Delete article category",
					"description": "De-associate category from article",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/categories/{{$parameter[\"category_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Confidentiality Delete",
					"value": "Private Article Confidentiality Delete",
					"action": "Delete article confidentiality",
					"description": "Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/confidentiality"
						}
					}
				},
				{
					"name": "Private Article Confidentiality Details",
					"value": "Private Article Confidentiality Details",
					"action": "Article confidentiality details",
					"description": "View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/confidentiality"
						}
					}
				},
				{
					"name": "Private Article Confidentiality Update",
					"value": "Private Article Confidentiality Update",
					"action": "Update article confidentiality",
					"description": "Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/confidentiality"
						}
					}
				},
				{
					"name": "Private Article Embargo Delete",
					"value": "Private Article Embargo Delete",
					"action": "Delete Article Embargo",
					"description": "Will lift the embargo for the specified article",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/embargo"
						}
					}
				},
				{
					"name": "Private Article Embargo Details",
					"value": "Private Article Embargo Details",
					"action": "Article Embargo Details",
					"description": "View a private article embargo details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/embargo"
						}
					}
				},
				{
					"name": "Private Article Embargo Update",
					"value": "Private Article Embargo Update",
					"action": "Update Article Embargo",
					"description": "Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/embargo"
						}
					}
				},
				{
					"name": "Private Article Files List",
					"value": "Private Article Files List",
					"action": "List article files",
					"description": "List private files",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/files"
						}
					}
				},
				{
					"name": "Private Article Upload Initiate",
					"value": "Private Article Upload Initiate",
					"action": "Initiate Upload",
					"description": "Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/files"
						}
					}
				},
				{
					"name": "Private Article File Delete",
					"value": "Private Article File Delete",
					"action": "File Delete",
					"description": "Complete file upload",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/files/{{$parameter[\"file_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article File",
					"value": "Private Article File",
					"action": "Single File",
					"description": "View details of file for specified article",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/files/{{$parameter[\"file_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Upload Complete",
					"value": "Private Article Upload Complete",
					"action": "Complete Upload",
					"description": "Complete file upload",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/files/{{$parameter[\"file_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Private Link",
					"value": "Private Article Private Link",
					"action": "List private links",
					"description": "List private links",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/private_links"
						}
					}
				},
				{
					"name": "Private Article Private Link Create",
					"value": "Private Article Private Link Create",
					"action": "Create private link",
					"description": "Create new private link for this article",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/private_links"
						}
					}
				},
				{
					"name": "Private Article Private Link Delete",
					"value": "Private Article Private Link Delete",
					"action": "Disable private link",
					"description": "Disable/delete private link for this article",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/private_links/{{$parameter[\"link_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Private Link Update",
					"value": "Private Article Private Link Update",
					"action": "Update private link",
					"description": "Update existing private link for this article",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/private_links/{{$parameter[\"link_id\"]}}"
						}
					}
				},
				{
					"name": "Private Article Publish",
					"value": "Private Article Publish",
					"action": "Private Article Publish",
					"description": "- If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.\n- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/publish"
						}
					}
				},
				{
					"name": "Private Article Reserve Doi",
					"value": "Private Article Reserve Doi",
					"action": "Private Article Reserve DOI",
					"description": "Reserve DOI for article",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/reserve_doi"
						}
					}
				},
				{
					"name": "Private Article Reserve Handle",
					"value": "Private Article Reserve Handle",
					"action": "Private Article Reserve Handle",
					"description": "Reserve Handle for article",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/reserve_handle"
						}
					}
				},
				{
					"name": "Private Article Resource",
					"value": "Private Article Resource",
					"action": "Private Article Resource",
					"description": "Edit article resource data.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/resource"
						}
					}
				},
				{
					"name": "Article Version Update",
					"value": "Article Version Update",
					"action": "Update article version",
					"description": "Updating an article version by passing body parameters; request can also be made with the PATCH method.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/versions/{{$parameter[\"version_id\"]}}/"
						}
					}
				},
				{
					"name": "Article Version Update Thumb",
					"value": "Article Version Update Thumb",
					"action": "Update article version thumbnail",
					"description": "For a given public article version update the article thumbnail by choosing one of the associated files",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/articles/{{$parameter[\"article_id\"]}}/versions/{{$parameter[\"version_id\"]}}/update_thumb"
						}
					}
				},
				{
					"name": "Articles List",
					"value": "Articles List",
					"action": "Public Articles",
					"description": "Returns a list of public articles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles"
						}
					}
				},
				{
					"name": "Articles Search",
					"value": "Articles Search",
					"action": "Public Articles Search",
					"description": "Returns a list of public articles, filtered by the search parameters",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/articles/search"
						}
					}
				},
				{
					"name": "Article Details",
					"value": "Article Details",
					"action": "View article details",
					"description": "View an article",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "Article Files",
					"value": "Article Files",
					"action": "List article files",
					"description": "Files list for article",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/{{$parameter[\"article_id\"]}}/files"
						}
					}
				},
				{
					"name": "Article File Details",
					"value": "Article File Details",
					"action": "Article file details",
					"description": "File by id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/{{$parameter[\"article_id\"]}}/files/{{$parameter[\"file_id\"]}}"
						}
					}
				},
				{
					"name": "Article Versions",
					"value": "Article Versions",
					"action": "List article versions",
					"description": "List public article versions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/{{$parameter[\"article_id\"]}}/versions"
						}
					}
				},
				{
					"name": "Article Version Details",
					"value": "Article Version Details",
					"action": "Article details for version",
					"description": "Article with specified version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/{{$parameter[\"article_id\"]}}/versions/{{$parameter[\"v_number\"]}}"
						}
					}
				},
				{
					"name": "Article Version Confidentiality",
					"value": "Article Version Confidentiality",
					"action": "Public Article Confidentiality for article version",
					"description": "Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/{{$parameter[\"article_id\"]}}/versions/{{$parameter[\"v_number\"]}}/confidentiality"
						}
					}
				},
				{
					"name": "Article Version Embargo",
					"value": "Article Version Embargo",
					"action": "Public Article Embargo for article version",
					"description": "Embargo for article version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/{{$parameter[\"article_id\"]}}/versions/{{$parameter[\"v_number\"]}}/embargo"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Articles List"
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
						"Articles"
					],
					"operation": [
						"Private Articles List"
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
						"Articles"
					],
					"operation": [
						"Private Articles List"
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
						"Articles"
					],
					"operation": [
						"Private Articles List"
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
						"Articles"
					],
					"operation": [
						"Private Articles List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
					]
				}
			}
		},
		{
			"displayName": "Is Metadata Record",
			"name": "is_metadata_record",
			"type": "boolean",
			"default": true,
			"description": "True if article has no files",
			"routing": {
				"send": {
					"property": "is_metadata_record",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
					]
				}
			}
		},
		{
			"displayName": "Metadata Reason",
			"name": "metadata_reason",
			"type": "string",
			"default": "hosted somewhere else",
			"description": "Article metadata reason",
			"routing": {
				"send": {
					"property": "metadata_reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Create"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Account Article Report"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "group_id",
			"description": "A group ID to filter by",
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
						"Articles"
					],
					"operation": [
						"Account Article Report"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Account Article Report Generate"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Articles Search"
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
						"Articles"
					],
					"operation": [
						"Private Articles Search"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/articles/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
					]
				}
			}
		},
		{
			"displayName": "Is Metadata Record",
			"name": "is_metadata_record",
			"type": "boolean",
			"default": true,
			"description": "True if article has no files",
			"routing": {
				"send": {
					"property": "is_metadata_record",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
					]
				}
			}
		},
		{
			"displayName": "Metadata Reason",
			"name": "metadata_reason",
			"type": "string",
			"default": "hosted somewhere else",
			"description": "Article metadata reason",
			"routing": {
				"send": {
					"property": "metadata_reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
					]
				}
			}
		},
		{
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
						"Articles"
					],
					"operation": [
						"Private Article Update"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}/authors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Authors List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/authors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Authors Add"
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
						"Articles"
					],
					"operation": [
						"Private Article Authors Add"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}/authors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Authors Replace"
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
						"Articles"
					],
					"operation": [
						"Private Article Authors Replace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/articles/{article_id}/authors/{author_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Author Delete"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Author Delete"
					]
				}
			}
		},
		{
			"displayName": "Author ID",
			"name": "author_id",
			"required": true,
			"description": "Article Author unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Author Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Categories List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Categories Add"
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
						"Articles"
					],
					"operation": [
						"Private Article Categories Add"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Categories Replace"
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
						"Articles"
					],
					"operation": [
						"Private Article Categories Replace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/articles/{article_id}/categories/{category_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Category Delete"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Category Delete"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "category_id",
			"required": true,
			"description": "Category unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Category Delete"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/articles/{article_id}/confidentiality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Confidentiality Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}/confidentiality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Confidentiality Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}/confidentiality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Confidentiality Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"description": "Reason for confidentiality",
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Confidentiality Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/articles/{article_id}/embargo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}/embargo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Details"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}/embargo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Embargo Date",
			"name": "embargo_date",
			"type": "string",
			"default": "2018-05-22T04:04:04",
			"description": "Date when the embargo expires and the article gets published, '0' value will set up permanent embargo",
			"routing": {
				"send": {
					"property": "embargo_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Update"
					]
				}
			}
		},
		{
			"displayName": "Embargo Options",
			"name": "embargo_options",
			"type": "json",
			"default": "[\n  {\n    \"id\": 1321\n  },\n  {\n    \"id\": 3345\n  },\n  {\n    \"group_ids\": [\n      4332,\n      5433,\n      678\n    ],\n    \"id\": 54621\n  }\n]",
			"description": "List of embargo permissions to be associated with the article. The list must contain `id` and can also contain `group_ids`(a field that only applies to 'logged_in' permissions). The new list replaces old options in the database, and an empty list removes all permissions for this article. Administration permission has to be set up alone but logged in and IP range permissions can be set up together.",
			"routing": {
				"send": {
					"property": "embargo_options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Update"
					]
				}
			}
		},
		{
			"displayName": "Embargo Reason",
			"name": "embargo_reason",
			"type": "string",
			"default": "",
			"description": "Reason for setting embargo",
			"routing": {
				"send": {
					"property": "embargo_reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Update"
					]
				}
			}
		},
		{
			"displayName": "Embargo Title",
			"name": "embargo_title",
			"type": "string",
			"default": "File(s) under embargo",
			"description": "Title for embargo",
			"routing": {
				"send": {
					"property": "embargo_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Embargo Type",
			"name": "embargo_type",
			"type": "options",
			"default": "file",
			"description": "Embargo can be enabled at the article or the file level. Possible values: article, file",
			"options": [
				{
					"name": "Article",
					"value": "article"
				},
				{
					"name": "File",
					"value": "file"
				}
			],
			"routing": {
				"send": {
					"property": "embargo_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Embargoed",
			"name": "is_embargoed",
			"type": "boolean",
			"default": true,
			"description": "Embargo status",
			"routing": {
				"send": {
					"property": "is_embargoed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Embargo Update"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Files List"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Upload Initiate"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "http://figshare.com/file.txt",
			"description": "Url for an existing file that will not be uploaded to Figshare",
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
						"Articles"
					],
					"operation": [
						"Private Article Upload Initiate"
					]
				}
			}
		},
		{
			"displayName": "Md 5",
			"name": "md5",
			"type": "string",
			"default": "6c16e6e7d7587bd078e5117dda01d565",
			"description": "MD5 sum pre-computed on client side.",
			"routing": {
				"send": {
					"property": "md5",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Upload Initiate"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "test.py",
			"description": "File name including the extension; can be omitted only for linked files.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Upload Initiate"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 70,
			"description": "File size in bytes; can be omitted only for linked files.",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Upload Initiate"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/articles/{article_id}/files/{file_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article File Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}/files/{file_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article File"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/files/{file_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Upload Complete"
					]
				}
			}
		},
		{
			"displayName": "GET /account/articles/{article_id}/private_links",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Private Link"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/private_links",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Private Link Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Private Link Create"
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
						"Articles"
					],
					"operation": [
						"Private Article Private Link Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/articles/{article_id}/private_links/{link_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Private Link Delete"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}/private_links/{link_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Private Link Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Private Link Update"
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
						"Articles"
					],
					"operation": [
						"Private Article Private Link Update"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Publish"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/reserve_doi",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Reserve Doi"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Reserve Doi"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/reserve_handle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Reserve Handle"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Reserve Handle"
					]
				}
			}
		},
		{
			"displayName": "POST /account/articles/{article_id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Resource"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Private Article Resource"
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
						"Articles"
					],
					"operation": [
						"Private Article Resource"
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
						"Articles"
					],
					"operation": [
						"Private Article Resource"
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
						"Articles"
					],
					"operation": [
						"Private Article Resource"
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
						"Articles"
					],
					"operation": [
						"Private Article Resource"
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
						"Articles"
					],
					"operation": [
						"Private Article Resource"
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
						"Articles"
					],
					"operation": [
						"Private Article Resource"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}/versions/{version_id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update"
					]
				}
			}
		},
		{
			"displayName": "Version ID",
			"name": "version_id",
			"required": true,
			"description": "Article version identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
					]
				}
			}
		},
		{
			"displayName": "Is Metadata Record",
			"name": "is_metadata_record",
			"type": "boolean",
			"default": true,
			"description": "True if article has no files",
			"routing": {
				"send": {
					"property": "is_metadata_record",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
					]
				}
			}
		},
		{
			"displayName": "Metadata Reason",
			"name": "metadata_reason",
			"type": "string",
			"default": "hosted somewhere else",
			"description": "Article metadata reason",
			"routing": {
				"send": {
					"property": "metadata_reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
					]
				}
			}
		},
		{
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
						"Articles"
					],
					"operation": [
						"Article Version Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/articles/{article_id}/versions/{version_id}/update_thumb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update Thumb"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update Thumb"
					]
				}
			}
		},
		{
			"displayName": "Version ID",
			"name": "version_id",
			"required": true,
			"description": "Article version identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update Thumb"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "file_id",
			"type": "number",
			"default": 123,
			"description": "File ID",
			"routing": {
				"send": {
					"property": "file_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Update Thumb"
					]
				}
			}
		},
		{
			"displayName": "GET /articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
					]
				}
			}
		},
		{
			"displayName": "Institution",
			"name": "institution",
			"description": "only return articles from this institution",
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"description": "only return articles from this group",
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
						"Articles"
					],
					"operation": [
						"Articles List"
					]
				}
			}
		},
		{
			"displayName": "Resource Doi",
			"name": "resource_doi",
			"description": "only return articles with this resource_doi",
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
						"Articles"
					],
					"operation": [
						"Articles List"
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
						"Articles"
					],
					"operation": [
						"Articles List"
					]
				}
			}
		},
		{
			"displayName": "Doi",
			"name": "doi",
			"description": "only return articles with this doi",
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
						"Articles"
					],
					"operation": [
						"Articles List"
					]
				}
			}
		},
		{
			"displayName": "Handle",
			"name": "handle",
			"description": "only return articles with this handle",
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
						"Articles"
					],
					"operation": [
						"Articles List"
					]
				}
			}
		},
		{
			"displayName": "POST /articles/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Articles Search"
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
						"Articles"
					],
					"operation": [
						"Articles Search"
					]
				}
			}
		},
		{
			"displayName": "Doi",
			"name": "doi",
			"type": "string",
			"default": "10.6084/m9.figshare.1407024",
			"description": "Only return articles with this doi",
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
						"Articles"
					],
					"operation": [
						"Articles Search"
					]
				}
			}
		},
		{
			"displayName": "Handle",
			"name": "handle",
			"type": "string",
			"default": "111084/m9.figshare.14074",
			"description": "Only return articles with this handle",
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
						"Articles"
					],
					"operation": [
						"Articles Search"
					]
				}
			}
		},
		{
			"displayName": "Item Type",
			"name": "item_type",
			"type": "number",
			"default": 1,
			"description": "Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model",
			"routing": {
				"send": {
					"property": "item_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Articles Search"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"type": "options",
			"default": "published_date",
			"description": "The field by which to order",
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
						"Articles"
					],
					"operation": [
						"Articles Search"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "project_id",
			"type": "number",
			"default": 1,
			"description": "Only return articles in this project",
			"routing": {
				"send": {
					"property": "project_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Articles Search"
					]
				}
			}
		},
		{
			"displayName": "Resource Doi",
			"name": "resource_doi",
			"type": "string",
			"default": "10.6084/m9.figshare.1407024",
			"description": "Only return articles with this resource_doi",
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
						"Articles"
					],
					"operation": [
						"Articles Search"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Details"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Details"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/{article_id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Files"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Files"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/{article_id}/files/{file_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article File Details"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article File Details"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "file_id",
			"required": true,
			"description": "File Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article File Details"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/{article_id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Versions"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/{article_id}/versions/{v_number}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Details"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Details"
					]
				}
			}
		},
		{
			"displayName": "V Number",
			"name": "v_number",
			"required": true,
			"description": "Article Version Number",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Details"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/{article_id}/versions/{v_number}/confidentiality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Confidentiality"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Confidentiality"
					]
				}
			}
		},
		{
			"displayName": "V Number",
			"name": "v_number",
			"required": true,
			"description": "Version Number",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Confidentiality"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/{article_id}/versions/{v_number}/embargo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Embargo"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "Article Unique identifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Embargo"
					]
				}
			}
		},
		{
			"displayName": "V Number",
			"name": "v_number",
			"required": true,
			"description": "Version Number",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"Article Version Embargo"
					]
				}
			}
		},
];
