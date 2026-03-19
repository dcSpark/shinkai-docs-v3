const openapiIndex = {
  "post /v2/add_llm_provider": {
    "method": "POST",
    "path": "/v2/add_llm_provider",
    "operationId": "add_llm_provider_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "SerializedLLMProvider"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully added LLM provider",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/add_ollama_models": {
    "method": "POST",
    "path": "/v2/add_ollama_models",
    "operationId": "add_ollama_models_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIAddOllamaModels"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully added Ollama models",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/change_node_name": {
    "method": "POST",
    "path": "/v2/change_node_name",
    "operationId": "change_node_name_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "text/plain",
          "schema": {
            "kind": "string",
            "format": null,
            "enum": null
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully changed node name",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/default_embedding_model": {
    "method": "GET",
    "path": "/v2/default_embedding_model",
    "operationId": "get_default_embedding_model_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved default embedding model",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/default_embedding_model": {
    "method": "POST",
    "path": "/v2/default_embedding_model",
    "operationId": "update_default_embedding_model_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "text/plain",
          "schema": {
            "kind": "string",
            "format": null,
            "enum": null
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully updated default embedding model",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/download_file_from_inbox/{inbox_name}/{filename}": {
    "method": "GET",
    "path": "/v2/download_file_from_inbox/{inbox_name}/{filename}",
    "operationId": "download_file_from_inbox_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully downloaded file",
        "content": [
          {
            "contentType": "application/octet-stream",
            "schema": {
              "kind": "string",
              "format": "binary",
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/health_check": {
    "method": "GET",
    "path": "/v2/health_check",
    "operationId": "health_check",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Health check successful",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/initial_registration": {
    "method": "POST",
    "path": "/v2/initial_registration",
    "operationId": "initial_registration_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "ShinkaiMessage"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully used registration code",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIUseRegistrationCodeSuccessResponse"
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/is_pristine": {
    "method": "GET",
    "path": "/v2/is_pristine",
    "operationId": "is_pristine_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully checked pristine state",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "boolean",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/list_files_in_inbox/{inbox_name}": {
    "method": "GET",
    "path": "/v2/list_files_in_inbox/{inbox_name}",
    "operationId": "list_files_in_inbox_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully listed files in inbox",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "string",
                "format": null,
                "enum": null
              }
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/local_processing_preference": {
    "method": "GET",
    "path": "/v2/local_processing_preference",
    "operationId": "get_local_processing_preference_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved local processing preference",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "boolean",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/local_processing_preference": {
    "method": "POST",
    "path": "/v2/local_processing_preference",
    "operationId": "update_local_processing_preference_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "text/plain",
          "schema": {
            "kind": "boolean",
            "format": null,
            "enum": null
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully updated local processing preference",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/modify_llm_provider": {
    "method": "POST",
    "path": "/v2/modify_llm_provider",
    "operationId": "modify_llm_provider_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "SerializedLLMProvider"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully modified LLM provider",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/public_keys": {
    "method": "GET",
    "path": "/v2/public_keys",
    "operationId": "get_public_keys",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved public keys",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "GetPublicKeysResponse"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/remove_llm_provider": {
    "method": "POST",
    "path": "/v2/remove_llm_provider",
    "operationId": "remove_llm_provider_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "text/plain",
          "schema": {
            "kind": "string",
            "format": null,
            "enum": null
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully removed LLM provider",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/scan_ollama_models": {
    "method": "GET",
    "path": "/v2/scan_ollama_models",
    "operationId": "scan_ollama_models_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully scanned Ollama models",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "schema",
                "format": null,
                "enum": null
              }
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/stop_llm": {
    "method": "POST",
    "path": "/v2/stop_llm",
    "operationId": "stop_llm_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "StopLLMRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully stopped LLM",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/supported_embedding_models": {
    "method": "GET",
    "path": "/v2/supported_embedding_models",
    "operationId": "get_supported_embedding_models_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved supported embedding models",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "string",
                "format": null,
                "enum": null
              }
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/supported_embedding_models": {
    "method": "POST",
    "path": "/v2/supported_embedding_models",
    "operationId": "update_supported_embedding_models_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "array",
            "items": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully updated supported embedding models",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/add_file_to_inbox": {
    "method": "POST",
    "path": "/v2/add_file_to_inbox",
    "operationId": "add_file_to_inbox_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "AddFileToInboxRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully added file to inbox",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/all_inboxes": {
    "method": "GET",
    "path": "/v2/all_inboxes",
    "operationId": "get_all_smart_inboxes_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved all smart inboxes",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "ref",
                "ref": "V2SmartInbox"
              }
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/available_llm_providers": {
    "method": "GET",
    "path": "/v2/available_llm_providers",
    "operationId": "get_available_llm_providers_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved available LLM providers",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "ref",
                "ref": "SerializedLLMProvider"
              }
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/change_job_llm_provider": {
    "method": "POST",
    "path": "/v2/change_job_llm_provider",
    "operationId": "change_job_llm_provider_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIChangeJobAgentRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully changed job LLM provider",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/create_files_inbox": {
    "method": "POST",
    "path": "/v2/create_files_inbox",
    "operationId": "create_files_inbox_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully created files inbox",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/create_job": {
    "method": "POST",
    "path": "/v2/create_job",
    "operationId": "create_job_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "CreateJobRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully created job",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/get_job_config": {
    "method": "GET",
    "path": "/v2/get_job_config",
    "operationId": "get_job_config_handler",
    "requestBody": null,
    "parameters": [
      {
        "name": "job_id",
        "in": "query",
        "required": true,
        "schema": {
          "kind": "string",
          "format": null,
          "enum": null
        }
      }
    ],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved job configuration",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "JobConfig"
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/get_job_scope": {
    "method": "GET",
    "path": "/v2/get_job_scope",
    "operationId": "get_job_scope_handler",
    "requestBody": null,
    "parameters": [
      {
        "name": "job_id",
        "in": "query",
        "required": true,
        "schema": {
          "kind": "string",
          "format": null,
          "enum": null
        }
      }
    ],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved job scope",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "JobScope"
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/job_message": {
    "method": "POST",
    "path": "/v2/job_message",
    "operationId": "job_message_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "JobMessageRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully processed job message",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "SendResponseBody"
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/last_messages": {
    "method": "POST",
    "path": "/v2/last_messages",
    "operationId": "get_last_messages_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "GetLastMessagesRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved last messages",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "ref",
                "ref": "V2ChatMessage"
              }
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/last_messages_with_branches": {
    "method": "POST",
    "path": "/v2/last_messages_with_branches",
    "operationId": "get_last_messages_with_branches_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "GetLastMessagesWithBranchesRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved last messages with branches",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "array",
                "items": {
                  "kind": "ref",
                  "ref": "V2ChatMessage"
                }
              }
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/retry_message": {
    "method": "POST",
    "path": "/v2/retry_message",
    "operationId": "retry_message_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "RetryMessageRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retried message",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/update_job_config": {
    "method": "POST",
    "path": "/v2/update_job_config",
    "operationId": "update_job_config_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "UpdateJobConfigRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully updated job configuration",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/update_job_scope": {
    "method": "POST",
    "path": "/v2/update_job_scope",
    "operationId": "update_job_scope_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "UpdateJobScopeRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully updated job scope",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/update_smart_inbox_name": {
    "method": "POST",
    "path": "/v2/update_smart_inbox_name",
    "operationId": "update_smart_inbox_name_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "UpdateSmartInboxNameRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully updated smart inbox name",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/available_shared_items": {
    "method": "POST",
    "path": "/v2/available_shared_items",
    "operationId": "available_shared_items_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIAvailableSharedItems"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved available shared items",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/available_shared_items_open": {
    "method": "POST",
    "path": "/v2/available_shared_items_open",
    "operationId": "available_shared_items_open_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIAvailableSharedItems"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved available shared items open",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/create_shareable_folder": {
    "method": "POST",
    "path": "/v2/create_shareable_folder",
    "operationId": "create_shareable_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APICreateShareableFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully created shareable folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/http_free_subscription_links": {
    "method": "POST",
    "path": "/v2/http_free_subscription_links",
    "operationId": "get_http_free_subscription_links_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "text/plain",
          "schema": {
            "kind": "string",
            "format": null,
            "enum": null
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved HTTP free subscription links",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/last_notifications": {
    "method": "POST",
    "path": "/v2/last_notifications",
    "operationId": "get_last_notifications_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIGetLastNotifications"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved last notifications",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/my_subscribers": {
    "method": "POST",
    "path": "/v2/my_subscribers",
    "operationId": "get_my_subscribers_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIGetMySubscribers"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved my subscribers",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "object",
              "properties": [],
              "additionalProperties": {
                "kind": "array",
                "items": {
                  "kind": "ref",
                  "ref": "ShinkaiSubscription"
                }
              }
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/my_subscriptions": {
    "method": "POST",
    "path": "/v2/my_subscriptions",
    "operationId": "my_subscriptions_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved my subscriptions",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/notifications_before_timestamp": {
    "method": "POST",
    "path": "/v2/notifications_before_timestamp",
    "operationId": "get_notifications_before_timestamp_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIGetNotificationsBeforeTimestamp"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved notifications before timestamp",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/subscribe_to_shared_folder": {
    "method": "POST",
    "path": "/v2/subscribe_to_shared_folder",
    "operationId": "subscribe_to_shared_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APISubscribeToSharedFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully subscribed to shared folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/unshare_folder": {
    "method": "POST",
    "path": "/v2/unshare_folder",
    "operationId": "unshare_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIUnshareFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully unshared folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/unsubscribe": {
    "method": "POST",
    "path": "/v2/unsubscribe",
    "operationId": "unsubscribe_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIUnsubscribeToSharedFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully unsubscribed from shared folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/update_shareable_folder": {
    "method": "POST",
    "path": "/v2/update_shareable_folder",
    "operationId": "update_shareable_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIUpdateShareableFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully updated shareable folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/get_all_tool_offerings": {
    "method": "GET",
    "path": "/v2/get_all_tool_offerings",
    "operationId": "get_all_tool_offerings_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved all tool offerings",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "ref",
                "ref": "ShinkaiToolOffering"
              }
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/get_tool_offering": {
    "method": "POST",
    "path": "/v2/get_tool_offering",
    "operationId": "get_tool_offering_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "GetToolOfferingRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved tool offering",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "ShinkaiToolOffering"
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "404",
        "description": "Tool offering not found",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/remove_tool_offering": {
    "method": "POST",
    "path": "/v2/remove_tool_offering",
    "operationId": "remove_tool_offering_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "RemoveToolOfferingRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully removed tool offering",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "404",
        "description": "Tool offering not found",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/set_tool_offering": {
    "method": "POST",
    "path": "/v2/set_tool_offering",
    "operationId": "set_tool_offering_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "SetToolOfferingRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully set tool offering",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/convert_files_and_save": {
    "method": "POST",
    "path": "/v2/convert_files_and_save",
    "operationId": "convert_files_and_save_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIConvertFilesAndSaveToFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully converted files and saved to folder",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "schema",
                "format": null,
                "enum": null
              }
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/copy_folder": {
    "method": "POST",
    "path": "/v2/copy_folder",
    "operationId": "copy_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsCopyFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully copied folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/copy_item": {
    "method": "POST",
    "path": "/v2/copy_item",
    "operationId": "copy_item_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsCopyItem"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully copied item",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/create_folder": {
    "method": "POST",
    "path": "/v2/create_folder",
    "operationId": "create_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsCreateFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully created folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/delete_folder": {
    "method": "POST",
    "path": "/v2/delete_folder",
    "operationId": "delete_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsDeleteFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully deleted folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/delete_item": {
    "method": "POST",
    "path": "/v2/delete_item",
    "operationId": "delete_item_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsDeleteItem"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully deleted item",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/move_folder": {
    "method": "POST",
    "path": "/v2/move_folder",
    "operationId": "move_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsMoveFolder"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully moved folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/move_item": {
    "method": "POST",
    "path": "/v2/move_item",
    "operationId": "move_item_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsMoveItem"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully moved item",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/retrieve_path_simplified": {
    "method": "POST",
    "path": "/v2/retrieve_path_simplified",
    "operationId": "retrieve_path_simplified_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsRetrievePathSimplifiedJson"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved path",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/retrieve_vector_resource": {
    "method": "GET",
    "path": "/v2/retrieve_vector_resource",
    "operationId": "retrieve_vector_resource_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved vector resource",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/search_items": {
    "method": "POST",
    "path": "/v2/search_items",
    "operationId": "search_items_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIVecFsSearchItems"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully searched items",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "array",
              "items": {
                "kind": "string",
                "format": null,
                "enum": null
              }
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/upload_file_to_folder": {
    "method": "POST",
    "path": "/v2/upload_file_to_folder",
    "operationId": "upload_file_to_folder_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "AddFileToInboxRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully uploaded file to folder",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "string",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/create_local_wallet": {
    "method": "POST",
    "path": "/v2/create_local_wallet",
    "operationId": "create_local_wallet_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "CreateLocalWalletRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully created wallet",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "LocalEthersWallet"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/pay_invoice": {
    "method": "POST",
    "path": "/v2/pay_invoice",
    "operationId": "pay_invoice_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "PayInvoiceRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully paid invoice",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/restore_coinbase_mpc_wallet": {
    "method": "POST",
    "path": "/v2/restore_coinbase_mpc_wallet",
    "operationId": "restore_coinbase_mpc_wallet_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "RestoreCoinbaseMPCWalletRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully restored Coinbase MPC wallet",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/restore_local_wallet": {
    "method": "POST",
    "path": "/v2/restore_local_wallet",
    "operationId": "restore_local_wallet_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "RestoreLocalWalletRequest"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully restored wallet",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/add_shinkai_tool": {
    "method": "POST",
    "path": "/v2/add_shinkai_tool",
    "operationId": "add_shinkai_tool_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "ShinkaiTool"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully added Shinkai tool",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/get_shinkai_tool": {
    "method": "GET",
    "path": "/v2/get_shinkai_tool",
    "operationId": "get_shinkai_tool_handler",
    "requestBody": null,
    "parameters": [
      {
        "name": "tool_name",
        "in": "query",
        "required": true,
        "schema": {
          "kind": "string",
          "format": null,
          "enum": null
        }
      }
    ],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved Shinkai tool",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/get_workflow_info": {
    "method": "GET",
    "path": "/v2/get_workflow_info",
    "operationId": "get_workflow_info_handler",
    "requestBody": null,
    "parameters": [
      {
        "name": "keyname",
        "in": "query",
        "required": true,
        "schema": {
          "kind": "string",
          "format": null,
          "enum": null
        }
      }
    ],
    "responses": [
      {
        "status": "200",
        "description": "Successfully retrieved workflow info",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/list_all_shinkai_tools": {
    "method": "GET",
    "path": "/v2/list_all_shinkai_tools",
    "operationId": "list_all_shinkai_tools_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully listed all Shinkai tools",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/list_all_workflows": {
    "method": "GET",
    "path": "/v2/list_all_workflows",
    "operationId": "list_all_workflows_handler",
    "requestBody": null,
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully listed all workflows",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/remove_workflow": {
    "method": "POST",
    "path": "/v2/remove_workflow",
    "operationId": "remove_workflow_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APIWorkflowKeyname"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully removed workflow",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/search_shinkai_tool": {
    "method": "GET",
    "path": "/v2/search_shinkai_tool",
    "operationId": "search_shinkai_tool_handler",
    "requestBody": null,
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": true,
        "schema": {
          "kind": "string",
          "format": null,
          "enum": null
        }
      }
    ],
    "responses": [
      {
        "status": "200",
        "description": "Successfully searched Shinkai tools",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "get /v2/search_workflows": {
    "method": "GET",
    "path": "/v2/search_workflows",
    "operationId": "search_workflows_handler",
    "requestBody": null,
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": true,
        "schema": {
          "kind": "string",
          "format": null,
          "enum": null
        }
      }
    ],
    "responses": [
      {
        "status": "200",
        "description": "Successfully searched workflows",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/set_shinkai_tool": {
    "method": "POST",
    "path": "/v2/set_shinkai_tool",
    "operationId": "set_shinkai_tool_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "schema",
            "format": null,
            "enum": null
          }
        }
      ]
    },
    "parameters": [
      {
        "name": "tool_name",
        "in": "query",
        "required": true,
        "schema": {
          "kind": "string",
          "format": null,
          "enum": null
        }
      }
    ],
    "responses": [
      {
        "status": "200",
        "description": "Successfully set Shinkai tool",
        "content": [
          {
            "contentType": "text/plain",
            "schema": {
              "kind": "boolean",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  },
  "post /v2/set_workflow": {
    "method": "POST",
    "path": "/v2/set_workflow",
    "operationId": "set_workflow_handler",
    "requestBody": {
      "required": true,
      "content": [
        {
          "contentType": "application/json",
          "schema": {
            "kind": "ref",
            "ref": "APISetWorkflow"
          }
        }
      ]
    },
    "parameters": [],
    "responses": [
      {
        "status": "200",
        "description": "Successfully set workflow",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "schema",
              "format": null,
              "enum": null
            }
          }
        ]
      },
      {
        "status": "400",
        "description": "Bad request",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      },
      {
        "status": "500",
        "description": "Internal server error",
        "content": [
          {
            "contentType": "application/json",
            "schema": {
              "kind": "ref",
              "ref": "APIError"
            }
          }
        ]
      }
    ]
  }
};

export default openapiIndex;
