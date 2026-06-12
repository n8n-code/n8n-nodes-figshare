import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FigshareApi implements ICredentialType {
        name = 'N8nDevFigshareApi';

        displayName = 'Figshare API';

        icon: Icon = { light: 'file:../nodes/Figshare/figshare.png', dark: 'file:../nodes/Figshare/figshare.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.figshare.com/v2',
                        required: true,
                        placeholder: 'https://api.figshare.com/v2',
                        description: 'The base URL of your Figshare API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
