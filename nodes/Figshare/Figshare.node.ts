import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { otherDescription } from './resources/other';
import { articlesDescription } from './resources/articles';
import { authorsDescription } from './resources/authors';
import { institutionsDescription } from './resources/institutions';
import { collectionsDescription } from './resources/collections';
import { projectsDescription } from './resources/projects';

export class Figshare implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Figshare',
                name: 'N8nDevFigshare',
                icon: { light: 'file:./figshare.png', dark: 'file:./figshare.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Figshare apiv2. Using Swagger 2.0',
                defaults: { name: 'Figshare' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFigshareApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Other",
					"value": "Other",
					"description": ""
				},
				{
					"name": "Articles",
					"value": "Articles",
					"description": ""
				},
				{
					"name": "Authors",
					"value": "Authors",
					"description": ""
				},
				{
					"name": "Institutions",
					"value": "Institutions",
					"description": ""
				},
				{
					"name": "Collections",
					"value": "Collections",
					"description": ""
				},
				{
					"name": "Projects",
					"value": "Projects",
					"description": ""
				}
			],
			"default": ""
		},
		...otherDescription,
		...articlesDescription,
		...authorsDescription,
		...institutionsDescription,
		...collectionsDescription,
		...projectsDescription
                ],
        };
}
