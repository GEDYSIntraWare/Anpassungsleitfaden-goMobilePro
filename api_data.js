define({ "api": [
  {
    "type": "get",
    "url": "/hideListEntry",
    "title": "hideListEntry",
    "name": "hideListEntry",
    "group": "Actions_Callback",
    "version": "3.0.0",
    "description": "<p>Hide list item.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>{pointer: string}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/openDoc",
    "title": "openDoc",
    "name": "openDoc",
    "group": "Actions_Callback",
    "version": "3.0.0",
    "description": "<p>Callback to open page after create.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>pointer</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/reloadDocument",
    "title": "reloadDocument",
    "name": "reloadDocument",
    "group": "Actions_Callback",
    "version": "3.0.0",
    "description": "<p>Reloads currently open document.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>{pointer: string}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/showToast",
    "title": "showToast",
    "name": "showToast",
    "group": "Actions_Callback",
    "version": "3.0.0",
    "description": "<p>Shows toast with message.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>{message: string}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/stdErrorCallback",
    "title": "stdErrorCallback",
    "name": "stdErrorCallback",
    "group": "Actions_Callback",
    "version": "3.0.0",
    "description": "<p>Shows dialog with text.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/callPhone",
    "title": "callPhone",
    "name": "callPhone",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>Open number as tel: link with system browser.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{phoneNumber: string}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/create",
    "title": "create",
    "name": "create",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>Open create modal.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{pointer: string, createParams: CreateParams}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/editDocument",
    "title": "editDocument",
    "name": "editDocument",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>Open document in edit mode and refresh.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{pointer: string}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/openCreate",
    "title": "openCreate",
    "name": "openCreate",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>Open create modal for standalone docs as action.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{pointer?: string}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/openDialog",
    "title": "openDialog",
    "name": "openDialog",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>Open app page in modal. params.page sets pagename. Params Object gets passed into modal.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{page: string, ...}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/openPageOnline",
    "title": "openPageOnline",
    "name": "openPageOnline",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>Open page in InAppBrowser.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{url: string, crmUrl: string} url: Loads arbitrary URL. crmUrl: Loads page via crm.xsp in framework</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/quickaction",
    "title": "quickaction",
    "name": "quickaction",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>This actions calls the action REST-Service via &quot;/rest.xsp/action?&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>Keys are used as url params and values are used as param values</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/radiusSearch",
    "title": "radiusSearch",
    "name": "radiusSearch",
    "group": "Actions",
    "version": "3.0.0",
    "description": "<p>Open radius search modal.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{pointer?: string}</p>"
          }
        ]
      }
    },
    "filename": "src/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/Colors",
    "title": "Colors",
    "name": "Colors",
    "group": "Colors",
    "version": "3.0.0",
    "description": "<p>Color names can be used in &quot;color&quot; inputs on components.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "primary",
            "description": "<p>#2368BC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secondary",
            "description": "<p>#A0A0A0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "danger",
            "description": "<p>#f53d3d</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "light",
            "description": "<p>#f4f4f4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dark",
            "description": "<p>#222</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>#32db64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warning",
            "description": "<p>#FDA</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediumescalation",
            "description": "<p>#FF8B14</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "giorange",
            "description": "<p>#FF8B14</p>"
          }
        ]
      }
    },
    "filename": "src/theme/theme-doc.ts",
    "groupTitle": "Colors"
  },
  {
    "type": "get",
    "url": "/Conflict",
    "title": "Conflict",
    "name": "Conflict",
    "group": "Field",
    "version": "3.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text to display</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/conflict/conflict.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/ConnectionList",
    "title": "ConnectionList",
    "name": "ConnectionList",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fdMe",
            "description": "<p>Fieldname of field with fdMe pointer</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/connection-list/connection-list.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Divider",
    "title": "Divider",
    "name": "Divider",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Name of color</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "hideWhenEmpty",
            "description": "<p>List of fieldnames to check, if all are empty divider is hidden</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/divider/divider.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/DocumentList",
    "title": "DocumentList",
    "name": "DocumentList",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displayList",
            "description": "<p>Fieldname of displaylist</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idList",
            "description": "<p>Fieldname of attachment list of ids</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/document-list/document-list.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderAddress",
    "title": "HeaderAddress",
    "name": "HeaderAddress",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Fieldname of title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Fieldname of subtitle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Fieldname of logo url or parameter as fallback</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/header-address/header-address.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderService",
    "title": "HeaderService",
    "name": "HeaderService",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Fieldname of title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Fieldname of subtitle</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "link",
            "description": "<p>System link</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "create",
            "description": "<p>Create document link</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "link Example:",
          "content": " {\n   \"link\":\n           {\n\t\t\t\t\t    \"text\": \"LC01753\",\n\t\t\t\t\t    \"url\": \"LC01753\",\n\t\t\t\t\t    \"protocol\": \"tel:\"\n\t\t\t\t     }\n  }",
          "type": "json"
        },
        {
          "title": "create Example:",
          "content": " {\n   \"create\":\n           {\n\t\t\t\t\t    \"text\": \"EMailAddress\",\n\t\t\t\t\t    \"createAction\": \"EMail\"\n\t\t\t\t     }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/fields/header-service/header-service.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderStandard",
    "title": "HeaderStandard",
    "name": "HeaderStandard",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Fieldname of title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Fieldname of subtitle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Fieldname of logo url or parameter as fallback</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/header-standard/header-standard.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledAddress",
    "title": "LabeledAddress",
    "name": "LabeledAddress",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "maps",
            "defaultValue": "false",
            "description": "<p>Display map</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mapsHeight",
            "defaultValue": "200",
            "description": "<p>Height of map in pixel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fieldname of value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adrType",
            "defaultValue": "gemain",
            "description": "<p>GI Adresstype</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/labeled-address/labeled-address.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledCreate",
    "title": "LabeledCreate",
    "name": "LabeledCreate",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fieldname of value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createAction",
            "description": "<p>Name of action from create actions of this document</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/labeled-create/labeled-create.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledDate",
    "title": "LabeledDate",
    "name": "LabeledDate",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fieldname of value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formatter",
            "description": "<p>Dateformatter see: https://angular.io/api/common/DatePipe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value2",
            "description": "<p>Fieldname of value next to first value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formatter2",
            "description": "<p>Dateformatter for value2 see: https://angular.io/api/common/DatePipe</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example formatter:",
          "content": "\"dd.MM.yyyy\"",
          "type": "String"
        }
      ]
    },
    "filename": "src/components/fields/labeled-date/labeled-date.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledLink",
    "title": "LabeledLink",
    "name": "LabeledLink",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fieldname of value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "defaultValue": "http",
            "description": "<p>Prefix value with protocol</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/labeled-link/labeled-link.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledMultiline",
    "title": "LabeledMultiline",
    "name": "LabeledMultiline",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of value</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/labeled-multiline/labeled-multivalue.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledText",
    "title": "LabeledText",
    "name": "LabeledText",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fielname of value</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/labeled-text/labeled-text.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledTextarea",
    "title": "LabeledTextarea",
    "name": "LabeledTextarea",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number/String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "openRTAvailable",
            "description": "<p>Enable open richtext mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "expandAvailable",
            "description": "<p>Enable &quot;Show more&quot; button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemMaxHeight",
            "defaultValue": "9rem",
            "description": "<p>Height in collapsed mode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachmentValue",
            "description": "<p>Fieldname of attachment list</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/labeled-textarea/labeled-textarea.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Relations",
    "title": "Relations",
    "name": "Relations",
    "description": "<p>No parameters required. Works in all documents through giRelations properties</p>",
    "group": "Field",
    "version": "3.0.0",
    "filename": "src/components/fields/relations/relations.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/SocialMedia",
    "title": "SocialMedia",
    "name": "SocialMedia",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword for display values</p>"
          }
        ]
      }
    },
    "filename": "src/components/fields/social-media/social-media.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Status",
    "title": "Status",
    "name": "Status",
    "group": "Field",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Name or number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text to display</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "defaultValue": "danger",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/components/fields/status/status.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Icons",
    "title": "Icons",
    "name": "Icons",
    "group": "Icons",
    "version": "3.0.0",
    "description": "<p>Icon names can be used in &quot;icons&quot; inputs on components. As icons custom icons listed below and Ionicons https://ionicframework.com/docs/ionicons/ are available. Icons are mostly display in the apps primary color (blue). Sometimes the secondary color is used (black).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activities",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appointments",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correspondence",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gifunnel",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gifunnelfilled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iraCEViewIconExcel",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iraCEViewIconOOSpreadSheet",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iraCEViewIconOOText",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "knowledge",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iraCEViewIconWord",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iraCEViewIconsExcel",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailreply",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "missing",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "office",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opportunity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otheractivities",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phonecall",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projects",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quickentry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reminder",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routing",
            "description": "<p>,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tasks",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ViewIconTaskActive",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ViewIconTaskComplete",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ViewIconTaskOpen",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ViewIconTaskOverdue",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailforward",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn001",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn002",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn003",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn004",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn005",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn006",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn007",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn008",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn009",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn010",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn011",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn012",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn013",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn014",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn015",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn016",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn017",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn018",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn019",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn020",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn021",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn022",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn023",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn024",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn025",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn026",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn027",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn028",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn029",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn030",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn031",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn032",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn033",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn034",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn035",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn036",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn037",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn038",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn039",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn040",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn041",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn042",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn043",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn044",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn045",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn046",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn047",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn048",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn049",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn050",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn051",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn052",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn053",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn054",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn055",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn056",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn057",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn058",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn059",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn060",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn061",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn062",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn063",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn064",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn065",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn066",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn067",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn068",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn069",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn070",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn071",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn072",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn073",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn074",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn075",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn076",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn077",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn078",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn079",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn080",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn081",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn082",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn083",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn084",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn085",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn086",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn087",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn088",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn089",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn090",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn091",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn092",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn093",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn094",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn095",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn096",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn097",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn098",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn099",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn100",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn101",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn102",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn103",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn104",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn105",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn106",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn107",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn108",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn109",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn110",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn111",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn112",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn113",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn114",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn115",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn116",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn117",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn118",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn119",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn120",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn121",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn122",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn123",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn124",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn125",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn126",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn127",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn128",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn129",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn130",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn131",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn132",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn133",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn134",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn135",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn136",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn137",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn138",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn139",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn140",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn141",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn142",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn143",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn144",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn145",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn146",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn147",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn148",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn149",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn150",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn151",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn152",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn153",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn154",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn155",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn156",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn157",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn158",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn159",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn160",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn161",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn162",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn163",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn164",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn165",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn166",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn167",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn168",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn169",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn170",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn171",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn172",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn173",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn174",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn175",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn176",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn177",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn178",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn179",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn180",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn181",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn182",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn183",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn184",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn185",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn186",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn187",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn188",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn189",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn190",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn191",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn192",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn193",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn194",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn195",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn196",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn197",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn198",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn199",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn200",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn201",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn202",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn203",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn204",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn205",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn206",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn207",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn208",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn209",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn210",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn211",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vwicn212",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/theme/theme-doc.ts",
    "groupTitle": "Icons"
  },
  {
    "type": "get",
    "url": "/multiline",
    "title": "multiline",
    "name": "multiline",
    "group": "ItemStyle",
    "version": "3.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Icon on the left</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconColor",
            "description": "<p>Color of icon on the left</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Smaller text below</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "divider",
            "description": "<p>Column for divider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aside",
            "description": "<p>Small text on the right</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asideColor",
            "description": "<p>Color of aside text</p>"
          }
        ]
      }
    },
    "filename": "src/components/list/apidoc-list.ts",
    "groupTitle": "ItemStyle"
  },
  {
    "type": "get",
    "url": "/multiline",
    "title": "multiline",
    "name": "multiline",
    "group": "ItemStyle",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Icon on the left</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Smaller text below</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "divider",
            "description": "<p>Column for divider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aside",
            "description": "<p>Small text on the right</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asideColor",
            "description": "<p>Color of aside text</p>"
          }
        ]
      }
    },
    "filename": "src/components/list/apidoc-list.ts",
    "groupTitle": "ItemStyle"
  },
  {
    "type": "get",
    "url": "/social",
    "title": "social",
    "name": "social",
    "group": "ItemStyle",
    "version": "3.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Icon on the left</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iconColor",
            "description": "<p>Color of icon on the left</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Smaller text below</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Text above main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label2",
            "description": "<p>Optional second text above</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "labelSeperator",
            "description": "<p>Seperator for second text</p>"
          }
        ]
      }
    },
    "filename": "src/components/list/apidoc-list.ts",
    "groupTitle": "ItemStyle"
  },
  {
    "type": "get",
    "url": "/social",
    "title": "social",
    "name": "social",
    "group": "ItemStyle",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Icon on the left</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Smaller text below</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Text above main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label2",
            "description": "<p>Optional second text above</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "labelSeperator",
            "description": "<p>Seperator for second text</p>"
          }
        ]
      }
    },
    "filename": "src/components/list/apidoc-list.ts",
    "groupTitle": "ItemStyle"
  },
  {
    "type": "get",
    "url": "/stacked",
    "title": "stacked",
    "name": "stacked",
    "group": "ItemStyle",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Smaller text below</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Text above main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label2",
            "description": "<p>Optional second text above</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "labelSeperator",
            "description": "<p>Seperator for second text</p>"
          }
        ]
      }
    },
    "filename": "src/components/list/apidoc-list.ts",
    "groupTitle": "ItemStyle"
  },
  {
    "type": "get",
    "url": "/CalendarWidget",
    "title": "CalendarWidget",
    "name": "CalendarWidget",
    "group": "Widget",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "database",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enableMaps",
            "defaultValue": "true",
            "description": "<p>Display map</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique-Id for component in widget card</p>"
          }
        ]
      }
    },
    "filename": "src/components/widgets/calendar-widget/calendar-widget.component.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  },
  {
    "type": "get",
    "url": "/WidgetCard",
    "title": "WidgetCard",
    "name": "WidgetCard",
    "group": "WidgetCard",
    "version": "3.0.0",
    "description": "<p>A widget card can hold one or multiple widgets. Widget cards can be configured by the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be an unique identifier for this widget card</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_title",
            "description": "<p>Widget title for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_displayTitle",
            "description": "<p>Title which is displayed in the widget card on the dashboard</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "_default",
            "defaultValue": "false",
            "description": "<p>Show widget in default configuration</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "_multiple",
            "defaultValue": "true",
            "description": "<p>Allow more than one widgets of this card</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-Widget:",
          "content": " {\n\t  \"_id\": \"searchCard\",\n\t  \"_title\": CRMContext.getLC(\"LC00239\",\"Search\"),\n\t  \"_default\": true,\n\t  \"SearchWidget\": {\n\t      \"_id\": \"comp1\"\n\t  }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "WidgetCard"
  },
  {
    "type": "get",
    "url": "/ListWidget",
    "title": "ListWidget",
    "name": "ListWidget",
    "group": "Widget",
    "version": "3.0.0",
    "description": "<p>This widget loads a flexview or lists served via other REST services which return the list schema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "db",
            "description": "<p>Database name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listId",
            "description": "<p>FlexviewId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL to list compliant REST service (like recently used)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "urlParams",
            "description": "<p>List options see example</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hideSearch",
            "defaultValue": "true",
            "description": "<p>Display search field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storedListKey",
            "description": "<p>Key of saved list</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchObject",
            "description": "<p>Number of searchtype</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initialSearchValue",
            "description": "<p>Searchstring</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique-Id for component in widget card</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "urlParams Recently used list example:",
          "content": "\"ListWidget\": {\n                    \"_id\": \"comp1\",\n\t                      \"url\": \"/rest.xsp/following\",\n                     \"urlParams\": [\n                                   {\n                                   \t\"parameter\": \"count\",\n                                    \t\"value\": \"10\",\n\t                                    \t\"label\": CRMContext.getLC(\"LC53365\",\"Entry count\"),\n\t                                    \t\"options\": [\n\t\t\t\t                                    \t{\n\t\t\t\t                                    \t\t\"value\": \"5\",\n\t\t\t\t                                    \t\t\"label\": \"5\"\n\t\t\t\t                                    \t},\n\t\t\t\t                                    \t{\n\t\t\t\t                                    \t\t\"value\": \"10\",\n\t\t\t\t                                    \t\t\"label\": \"10\"\n\t\t\t\t                                    \t},\n\t\t\t\t                                    \t{\n\t\t\t\t                                    \t\t\"value\": \"15\",\n\t\t\t\t                                    \t\t\"label\": \"15\"\n\t\t\t\t                                    \t}\n\t\t\t                                    \t]\n\t                                    }\n\t                      \t\t\t]\n\t                  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/widgets/list-widget/list-widget.component.ts",
    "groupTitle": "Widget"
  },
  {
    "type": "get",
    "url": "/MyItemsWidget",
    "title": "MyItemsWidget",
    "name": "MyItemsWidget",
    "group": "Widget",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique-Id for component in widget card</p>"
          }
        ]
      }
    },
    "filename": "src/components/widgets/myitems-widget/myitems-widget.component.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  },
  {
    "type": "get",
    "url": "/SearchWidget",
    "title": "SearchWidget",
    "name": "SearchWidget",
    "group": "Widget",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displayStyle",
            "description": "<p>'list' or 'chip'</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "showZeroResults",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique-Id for component in widget card</p>"
          }
        ]
      }
    },
    "filename": "src/components/widgets/search-widget/search-widget.component.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  },
  {
    "type": "get",
    "url": "/TaskWidget",
    "title": "TaskWidget",
    "name": "TaskWidget",
    "group": "Widget",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Widget title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique-Id for component in widget card</p>"
          }
        ]
      }
    },
    "filename": "src/components/widgets/task-widget/task-widget.component.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  },
  {
    "type": "get",
    "url": "/WelcomeWidget",
    "title": "WelcomeWidget",
    "name": "WelcomeWidget",
    "group": "Widget",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headline",
            "description": "<p>Main text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageurl",
            "description": "<p>Image to load</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "quicklinks",
            "description": "<p>List of listIds to show count</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique-Id for component in widget card</p>"
          }
        ]
      }
    },
    "filename": "src/components/widgets/welcome-widget/welcome-widget.component.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  }
] });
