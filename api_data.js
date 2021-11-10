define({ "api": [
  {
    "type": "get",
    "url": "/fireEvent",
    "title": "fireEvent",
    "name": "fireEvent",
    "group": "Actions_Callback",
    "version": "4.2.0",
    "description": "<p>Fires internal app event</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Name of event</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
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
    "filename": "src/app/services/functions.service.ts",
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
    "filename": "src/app/services/functions.service.ts",
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
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/showError",
    "title": "showError",
    "name": "showError",
    "group": "Actions_Callback",
    "version": "4.2.0",
    "description": "<p>Shows dialog with error text from action</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params",
            "description": "<p>If params is passed as string it will be displayed as a error message. For use as callback in quickactions will be set by the request params and the error from the request will be used.</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
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
            "description": "<p>{message: string , showCloseButton?: boolean}</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/stdErrorCallback",
    "title": "stdErrorCallback",
    "name": "stdErrorCallback",
    "group": "Actions_Callback",
    "version": "3.0.0",
    "deprecated": {
      "content": "REMOVED! use now (#Actions_Callback:showError)."
    },
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions_Callback"
  },
  {
    "type": "get",
    "url": "/actionSheet",
    "title": "actionSheet",
    "name": "actionSheet",
    "group": "Actions",
    "version": "4.5.0",
    "description": "<p>Open an action sheet with buttons for more actions</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Actions",
            "description": "<p>sheet properties: header, subHeader, buttons with callbacks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example action",
          "content": "{\n\t\"label\": \"SHEET\",\n    \"icon\": \"color-wand\",\n    \"color\": \"primary\",\n    \"action\": {\n        \"name\": \"actionSheet\",\n        \"params\": {\n            \"header\": \"Header\",\n            \"subHeader\": \"Sub Header\",\n            \"buttons\": [\n            \t{\n            \t\t\"text\": \"Delete\",\n                    \"role\": \"destructive\",\n                    \"icon\": \"trash\",\n                    \"callback\": \"showToast\",\n                    \"callbackParams\": {\n                    \t\"message\": \"Delete\"\n                    }\n            \t},\n            \t{\n            \t\t\"text\": \"Normal\",\n                    \"callback\": \"showToast\",\n                    \"callbackParams\": {\n                    \t\"message\": \"Normal\"\n                    }\n            \t},\n            \t{\n            \t\t\"text\": \"Cancel\",\n                    \"role\": \"cancel\"\n            \t}\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/callPhone",
    "title": "callPhone",
    "name": "callPhone",
    "group": "Actions",
    "version": "4.2.0",
    "description": "<p>Open number as tel: link with system browser. otherPhone is a special column for &quot;other communication&quot;. phoneColumns is an array of objects: { &quot;label&quot;: CRMContext.getLC(&quot;LC01855&quot;,&quot;Phone&quot;),&quot;fieldName&quot;: &quot;phoneNumber&quot; } which are the params and their labels for more number fields.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{phoneNumber: string, otherPhone?: string, callAction?: string, phoneColumns: []}</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions"
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
    "filename": "src/app/services/functions.service.ts",
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
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/editDocument",
    "title": "editDocument",
    "name": "editDocument",
    "group": "Actions",
    "version": "4.2.0",
    "description": "<p>Open document in edit mode and refresh.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>{pointer: string, doc: string, editStyle: string}</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
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
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/openBrowser",
    "title": "openBrowser",
    "name": "openBrowser",
    "group": "Actions",
    "version": "4.5.0",
    "description": "<p>Open system browser with link</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Property",
            "description": "<p>&quot;url&quot; to open</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
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
    "filename": "src/app/services/functions.service.ts",
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
            "description": "<p>{page: RoutingPage|GlobalSearchPage, ...}</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/openPageOnline",
    "title": "openPageOnline",
    "name": "openPageOnline",
    "group": "Actions",
    "version": "4.1.0",
    "description": "<p>Open page in InAppBrowser.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>object with properties: {url: string, crmUrl: string, showToolbar: boolean} url: Loads arbitrary URL. crmUrl: Loads page via crm.xsp in framework. showToolbar: Show browser toolbar to close browser on iOS, default false, Prefer sessionStorage button described in guide.</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
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
            "field": "params:",
            "description": "<p>{url: string, crmUrl: string, showToolbar: boolean} url: Loads arbitrary URL. crmUrl: Loads page via crm.xsp in framework.</p>"
          }
        ]
      }
    },
    "filename": "src/app/services/functions.service.ts",
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
    "filename": "src/app/services/functions.service.ts",
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
    "filename": "src/app/services/functions.service.ts",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "giyellow",
            "description": "<p>#FFD900</p>"
          }
        ]
      }
    },
    "filename": "src/theme/theme-doc.ts",
    "groupTitle": "Colors"
  },
  {
    "type": "get",
    "url": "/EditAdress",
    "title": "EditAdress",
    "name": "EditAdress",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressType",
            "defaultValue": "gemain",
            "description": "<p>Addresstype to show like &quot;gemain&quot;, &quot;geprivate&quot; etc..</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-address/edit-address.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditAttachment",
    "title": "EditAttachment",
    "name": "EditAttachment",
    "version": "5.0.2",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initKey",
            "description": "<p>key to init data (for example: used for share)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quality",
            "defaultValue": "1",
            "description": "<p>Values lower 1 compress images with the types image/jpeg or image/webp. Suggested Value 0.6.</p>"
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
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Fieldname of label or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-attachment/edit-attachment.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditAttachment",
    "title": "EditAttachment",
    "name": "EditAttachment",
    "version": "4.5.1",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initKey",
            "description": "<p>key to init data (for example: used for share)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quality",
            "defaultValue": "1",
            "description": "<p>Values lower 1 compress images with the types image/jpeg or image/webp. Suggested Value 0.6.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditAttachment",
    "title": "EditAttachment",
    "name": "EditAttachment",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initKey",
            "description": "<p>key to init data (for example: used for share)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditCheckBox",
    "title": "EditCheckBox",
    "name": "EditCheckBox",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "checkedValue",
            "defaultValue": "1",
            "description": "<p>Value set if checkbox is checked</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example with refresh to trigger computations in backend:",
          "content": "{\n\t\t\t\"component\": \"EditCheckBox\",\n\t\t\t\"inputs\": {\n\t\t\t\t\"fieldName\": \"fdcuverifyorder\",\n\t\t\t\t\"label\": \"verify\",\n\t\t\t\t\"checkedValue\": \"1\",\n\t\t\t\t\"fixedLabel\": false,\n\t\t\t\t\"refreshOnChange\": true\n\t\t\t}\n\t\t},",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-checkbox/edit-checkbox.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditDate",
    "title": "EditDate",
    "name": "EditDate",
    "version": "4.4.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mode",
            "defaultValue": "native",
            "description": "<p>'native' or 'month' calendar mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "closeSelect",
            "defaultValue": "true",
            "description": "<p>Close date select in month mode after selection</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "defaultToday",
            "defaultValue": "true",
            "description": "<p>Select today as default in calendar</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "timeOnly",
            "defaultValue": "true",
            "description": "<p>Select and only hours and minutes</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "datetime",
            "defaultValue": "false",
            "description": "<p>Use format for date and time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customFormat",
            "description": "<p>Use custom format for displaying and picking</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disabled",
            "defaultValue": "false",
            "description": "<p>If &quot;true&quot; value will be readonly and grey. Does not work for calendar mode.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "customFormat-Example:",
          "content": "//https://ionicframework.com/docs/api/components/datetime/DateTime/#iso-8601-datetime-format-yyyy-mm-ddthh-mmz\nDD.MM.YYYY or HH:mm",
          "type": "String"
        },
        {
          "title": "Example-Component:",
          "content": "{\n\t\"component\": \"EditDate\",\n\t\"inputs\": {\n\t\t\"fieldName\": \"fdcuorderdelivereddate\",\n\t\t\"label\": \"Delivery date\",\n\t\t\"defaultToday\": false,\n\t\t\"datetime\": false,\n\t\t\"required\": false,\n\t\t\"fixedLabel\": false\n\t}\n},",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-date/edit-date.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditDate",
    "title": "EditDate",
    "name": "EditDate",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mode",
            "defaultValue": "native",
            "description": "<p>'native' or 'month' calendar mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "closeSelect",
            "defaultValue": "true",
            "description": "<p>Close date select in month mode after selection</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "defaultToday",
            "defaultValue": "true",
            "description": "<p>Select today as default in calendar</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "timeOnly",
            "defaultValue": "true",
            "description": "<p>Select and only hours and minutes</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "datetime",
            "defaultValue": "false",
            "description": "<p>Use format for date and time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customFormat",
            "description": "<p>Use custom format for displaying and picking</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "customFormat-Example:",
          "content": "//https://ionicframework.com/docs/api/components/datetime/DateTime/#iso-8601-datetime-format-yyyy-mm-ddthh-mmz\nDD.MM.YYYY or HH:mm",
          "type": "String"
        }
      ]
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditDivider",
    "title": "EditDivider",
    "name": "EditDivider",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Name of color</p>"
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
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example invalid color to show simple text:",
          "content": "    {\n\t\t\t\"component\": \"EditDivider\",\n\t\t\t\"inputs\": {\n\t\t\t\t\"color\": \"giorange\",\n\t\t\t\t\"label\": \"Distribution\"\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-divider/edit-divider.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditFilingstructurePicklist",
    "title": "EditFilingstructurePicklist",
    "name": "EditFilingstructurePicklist",
    "version": "4.2.0",
    "group": "EditField",
    "description": "<p>Specialized picklist for filing structure</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Objects",
            "optional": false,
            "field": "picklistRestServiceParams",
            "description": "<p>Preconfigured for filing structure picklist! Use just for overriding default.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyfieldName",
            "description": "<p>Name of field for seperate key value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "seperateKeyValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowValuesNotInList",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "multiValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multipleSeparator",
            "defaultValue": ",",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addEntryLabel",
            "defaultValue": "Add entry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "defaultValue": "LABEL",
            "description": "<p>Title of dialog, if not specified label will be used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "picklistRestServiceParams-Example:",
          "content": "{\n searchString: \"*\",\n viewToUse: \"vaJAPIServiceCatalogueEntries\",\n seperateKeyValue: false,\n allowValuesNotInList: false,\n searchParams: \"faServiceCatalogueEntry~ServiceCatalogueEntryToHTML\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-picklist/edit-filingstructure-picklist.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditImage",
    "title": "EditImage",
    "name": "EditImage",
    "version": "5.0.2",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Name of color</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label for add button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "labelRemove",
            "description": "<p>Label for remove button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageQuality",
            "description": "<p>Camera quality option</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageHeight",
            "description": "<p>Camera height option</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageWidth",
            "description": "<p>Camera width option</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multiValue",
            "description": "<p>determines if edit-image should allow one or multiple values</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-image/edit-image.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditList",
    "title": "EditList",
    "name": "EditList",
    "version": "4.5.1",
    "group": "EditField",
    "description": "<p>Allows the selection of values from a keyword for example</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Name of keyword to use for selection</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Name of key in the data object for the selection. Value should look like [{alias: string, label: string}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sort",
            "defaultValue": "true",
            "description": "<p>Enable sorting alphabetically by value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowValuesNotInList",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "multiValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "defaultValueNew",
            "description": "<p>Default value for new documents. Use &quot;#keyword#&quot;  to use the default of the keyword.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example with refresh on change to set source field for EditSelect component:",
          "content": "   {\n\t\t\t\t\"component\": \"EditList\",\n\t\t\t\t\"inputs\": {\n\t\t\t\t\t\"fieldName\": (\"fdcuproducts_\" + alias[i]),\n\t\t\t\t\t\"label\": \"Produtcs\",\n\t\t\t\t\t\"fixedLabel\": false,\n\t\t\t\t\t\"keyword\": (\"CUProducts_\" + alias[i]),\n\t\t\t\t\t\"allowValuesNotInList\": false,\n\t\t\t\t\t\"refreshOnChange\": true,\n\t\t\t\t\t\"multiValue\": true,\n\t\t\t\t\t\"rendered\": {\n\t\t\t\t\t\t\"field\": (\"fdcubrandavailable_\" + alias[i]),\n\t\t\t\t\t\t\"value\": \"1\",\n\t\t\t\t\t\t\"operator\": \"equals\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-list/edit-list.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditList",
    "title": "EditList",
    "name": "EditList",
    "version": "4.5.0",
    "group": "EditField",
    "description": "<p>Allows the selection of values from a keyword for example</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Name of keyword to use for selection</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Name of key in the data object for the selection. Value should look like [{alias: string, label: string}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sort",
            "defaultValue": "true",
            "description": "<p>Enable sorting alphabetically by value</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "picklistRestServiceParams",
            "description": "<p>URL params for picklist service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyfieldName",
            "description": "<p>Name of field for seperate key value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "seperateKeyValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowValuesNotInList",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "multiValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multipleSeparator",
            "defaultValue": ",",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addEntryLabel",
            "defaultValue": "Add entry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "defaultValue": "LABEL",
            "description": "<p>Title of dialog, if not specified label will be used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "picklistRestServiceParams-Example:",
          "content": "{\n searchString: \"*\",\n viewToUse: \"vaJAPIServiceCatalogueEntries\",\n seperateKeyValue: false,\n allowValuesNotInList: false,\n searchParams: \"faServiceCatalogueEntry~ServiceCatalogueEntryToHTML\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditList",
    "title": "EditList",
    "name": "EditList",
    "version": "4.4.1",
    "group": "EditField",
    "description": "<p>Allows the selection of values from a keyword for example</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Name of keyword to use for selection</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sort",
            "defaultValue": "true",
            "description": "<p>Enable sorting by value</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "picklistRestServiceParams",
            "description": "<p>URL params for picklist service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyfieldName",
            "description": "<p>Name of field for seperate key value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "seperateKeyValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowValuesNotInList",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "multiValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multipleSeparator",
            "defaultValue": ",",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addEntryLabel",
            "defaultValue": "Add entry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "defaultValue": "LABEL",
            "description": "<p>Title of dialog, if not specified label will be used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "picklistRestServiceParams-Example:",
          "content": "{\n searchString: \"*\",\n viewToUse: \"vaJAPIServiceCatalogueEntries\",\n seperateKeyValue: false,\n allowValuesNotInList: false,\n searchParams: \"faServiceCatalogueEntry~ServiceCatalogueEntryToHTML\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditList",
    "title": "EditList",
    "name": "EditList",
    "version": "4.2.0",
    "group": "EditField",
    "description": "<p>Allows the selection of values from a keyword for example</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Name of keyword to use for selection</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "picklistRestServiceParams",
            "description": "<p>URL params for picklist service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyfieldName",
            "description": "<p>Name of field for seperate key value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "seperateKeyValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowValuesNotInList",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "multiValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multipleSeparator",
            "defaultValue": ",",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addEntryLabel",
            "defaultValue": "Add entry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "defaultValue": "LABEL",
            "description": "<p>Title of dialog, if not specified label will be used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "picklistRestServiceParams-Example:",
          "content": "{\n searchString: \"*\",\n viewToUse: \"vaJAPIServiceCatalogueEntries\",\n seperateKeyValue: false,\n allowValuesNotInList: false,\n searchParams: \"faServiceCatalogueEntry~ServiceCatalogueEntryToHTML\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditLogo",
    "title": "EditLogo",
    "name": "EditLogo",
    "version": "5.0.2",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label for add button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "labelRemove",
            "description": "<p>Label for remove button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-logo/edit-logo.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditLogo",
    "title": "EditLogo",
    "name": "EditLogo",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label for add button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "labelRemove",
            "description": "<p>Label for remove button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditNumber",
    "title": "EditNumber",
    "name": "EditNumber",
    "version": "4.4.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "fractionCount",
            "defaultValue": "2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disabled",
            "defaultValue": "false",
            "description": "<p>If &quot;true&quot; value will be readonly and grey</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example with computed fieldnames:",
          "content": "{\n\t\t\t\t\"component\": \"EditNumber\",\n\t\t\t\t\"inputs\": {\n\t\t\t\t\t\"fieldName\": \"fdcuordersum1_\" + prodLineAliases[i],\n\t\t\t\t\t\"label\": \"Sum €\",\n\t\t\t\t\t\"fractionCount\": 2,\n\t\t\t\t\t\"fixedLabel\": true,\n\t\t\t\t\t\"disabled\": true,\n\t\t\t\t\t\"rendered\": {\n\t\t\t\t\t\t\"andConditions\": [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"field\": (\"fdcuorderprodlineavail_\" + prodLineAliases[i]),\n\t\t\t\t\t\t\t\t\"value\": \"1\",\n\t\t\t\t\t\t\t\t\"operator\": \"equals\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"field\": (\"fdcuorderproduct1_\" + prodLineAliases[i]),\n\t\t\t\t\t\t\t\t\"operator\": \"notempty\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-number/edit-number.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditNumber",
    "title": "EditNumber",
    "name": "EditNumber",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "fractionCount",
            "defaultValue": "2",
            "description": ""
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditPicklist",
    "title": "EditPicklist",
    "name": "EditPicklist",
    "version": "4.2.0",
    "group": "EditField",
    "filename": "src/app/components/edit-fields/edit-picklist/edit-picklist.component.ts",
    "groupTitle": "EditField",
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "picklistRestServiceParams",
            "description": "<p>URL params for picklist service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyfieldName",
            "description": "<p>Name of field for seperate key value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "seperateKeyValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowValuesNotInList",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "multiValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multipleSeparator",
            "defaultValue": ",",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addEntryLabel",
            "defaultValue": "Add entry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "defaultValue": "LABEL",
            "description": "<p>Title of dialog, if not specified label will be used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "picklistRestServiceParams-Example:",
          "content": "{\n searchString: \"*\",\n viewToUse: \"vaJAPIServiceCatalogueEntries\",\n seperateKeyValue: false,\n allowValuesNotInList: false,\n searchParams: \"faServiceCatalogueEntry~ServiceCatalogueEntryToHTML\"\n}",
          "type": "Object"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/EditProjectPicklist",
    "title": "EditProjectPicklist",
    "name": "EditProjectPicklist",
    "version": "4.2.0",
    "group": "EditField",
    "description": "<p>picklistRestServiceParams are preconfigured for project picklist and project selection wil open automatically if configured</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "true",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "multiValue",
            "defaultValue": "true",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Objects",
            "optional": false,
            "field": "picklistRestServiceParams",
            "description": "<p>Values for project picklist are already set! Use just for overriding default.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyfieldName",
            "description": "<p>Name of field for seperate key value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "seperateKeyValue",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "allowValuesNotInList",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "multipleSeparator",
            "defaultValue": ",",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addEntryLabel",
            "defaultValue": "Add entry",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "defaultValue": "LABEL",
            "description": "<p>Title of dialog, if not specified label will be used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "picklistRestServiceParams-Example:",
          "content": "{\n searchString: \"*\",\n viewToUse: \"vaJAPIServiceCatalogueEntries\",\n seperateKeyValue: false,\n allowValuesNotInList: false,\n searchParams: \"faServiceCatalogueEntry~ServiceCatalogueEntryToHTML\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-picklist/edit-project-picklist.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditSelect",
    "title": "EditSelect",
    "name": "EditSelect",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mode",
            "defaultValue": "auto",
            "description": "<p>Modes are 'auto', 'checkbox' or 'toggle'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addEmptyLine",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemSourceType",
            "description": "<p>Types are 'user', 'userDBDependent', 'dbConfig', 'keyword', 'field', 'data'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemSourceName",
            "description": "<p>Key for selection values in config, keywords etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemSourceDb",
            "description": "<p>Name of database for item source types.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allowValuesNotInList",
            "description": "<p>If undefined and itemSourceType is a keyword the keyword setting will be used, otherwise is default false</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "items",
            "description": "<p>List of selection items, alternative to itemSource</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasSeperator",
            "defaultValue": "|",
            "description": "<p>Seperator for alias and label in field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interface",
            "defaultValue": "alert",
            "description": "<p>Interface for mode &quot;select&quot;. Valid are 'popover', 'alert', 'action-sheet'</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Item Schema",
          "content": " {\n\t  \"alias\": \"string\",\n   \"label\": \"string\",\n   \"checked\": \"boolean\"\n\t}",
          "type": "json"
        },
        {
          "title": "Example with keyword:",
          "content": "\n    {\n\t\t\t\"component\": \"EditSelect\",\n\t\t\t\"inputs\": {\n\t\t\t\t\"fieldName\": \"fdcucontactfunction\",\n\t\t\t\t\"label\": \"Function\",\n\t\t\t\t\"mode\": \"select\",\n\t\t\t\t\"allowValuesNotInList\": false,\n\t\t\t\t\"itemSourceType\": \"keyword\",\n\t\t\t\t\"itemSourceName\": \"CUContactFunction\",\n\t\t\t\t\"addEmptyLine\": true,\n\t\t\t\t\"fixedLabel\": false\n\t\t\t}\n\t\t},",
          "type": "json"
        },
        {
          "title": "Example with select values computed from values in EditList component that refreshed the page:",
          "content": "{\n  \"component\": \"EditSelect\",\n  \"inputs\": {\n    \"fieldName\": (\"fdcuarticle\" + p + \"_\" + alias[i]),\n    \"label\": (\"Article \" + p),\n    \"mode\": \"select\",\n    \"itemSourceType\": \"field\",\n    \"itemSourceName\": (\"fdcuproducts_\" + alias[i]),\n    \"addEmptyLine\": true,\n    \"rendered\": {\n      \"andConditions\": [\n        {\n          \"field\": (\"fdcuorderarticle_\" + alias[i]),\n          \"value\": \"1\",\n          \"operator\": \"equals\"\n        },\n        {\n          \"field\": (\"fdcubrandavailable_\" + alias[i]),\n          \"value\": \"1\",\n          \"operator\": \"equals\"\n        },\n        {\n          \"field\": (\"fdcuarticle\" + (p-1) + \"_\" + alias[i]),\n          \"operator\": \"notempty\"\n        }\n        ]\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-select/edit-select.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditShowMessage",
    "title": "EditShowMessage",
    "name": "EditShowMessage",
    "version": "4.5.0",
    "group": "EditField",
    "description": "<p>Show text or warning</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Text to show</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Optionally define one of the colors as background color</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isWarning",
            "defaultValue": "false",
            "description": "<p>Show as warning box</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-showmessage/edit-showmessage.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditShowMore",
    "title": "EditShowMore",
    "name": "EditShowMore",
    "version": "4.2.0",
    "group": "EditField",
    "description": "<p>Sets flag which can be used to show hidden fields via 'rendered'</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "checkedValue",
            "defaultValue": "true",
            "description": "<p>Value set if showmore is clicked</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label for button</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide button.</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-showmore/edit-showmore.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditShowRichtext",
    "title": "EditShowRichtext",
    "name": "EditShowRichtext",
    "version": "4.2.0",
    "group": "EditField",
    "description": "<p>Allows to show a richtext field for reading in edit mode</p>",
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
            "field": "fieldName",
            "description": "<p>Name of field with value</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide button.</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-showrichtext/edit-showrichtext.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditSocialMedia",
    "title": "EditSocialMedia",
    "name": "EditSocialMedia",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "keyword",
            "description": "<p>Name of keyword for social media types</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-socialmedia/edit-socialmedia.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditSubform",
    "title": "EditSubform",
    "name": "EditSubform",
    "group": "EditField",
    "version": "4.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
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
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "fieldDefinitions",
            "description": "<p>Array with fieldDefinitions. If used with stylename, fields will be appended to fields in styleName</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "expanded",
            "defaultValue": "false",
            "description": "<p>If true section will be expandend when document is opened</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "expandable",
            "defaultValue": "false",
            "description": "<p>If true section can be expandend</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionLabel",
            "description": "<p>USE &quot;sectionLabel&quot; instead of &quot;label&quot; for section labels!</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Used for storing expand state. Expand state is stored globally. If the id is used in different styles the state will be applied as well.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restoreExpandState",
            "defaultValue": "true",
            "description": "<p>Use stored expand state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>Field to get editSubStyle name (case sensitive)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of editSubStyle</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/edit-fields/edit-subform/edit-subform.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditText",
    "title": "EditText",
    "name": "EditText",
    "version": "4.4.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "defaultValue": "text",
            "description": "<p>Type of input field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disabled",
            "defaultValue": "false",
            "description": "<p>If &quot;true&quot; value will be readonly and grey</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n\t\"component\": \"EditText\",\n\t\"inputs\": {\n\t\t\"fieldName\": \"fdcucontact\",\n\t\t\"label\": \"Contact Person\",\n\t\t\"fixedLabel\": false, //Label fixed at the start or floating above value\n\t\t\"disabled\": true, //editable true/false\n\t\t\"required\": true, //client side validation if field is empty\n\t\t\"refreshOnChange\": true, //Enable document post to server on value change\n\t\t\"rendered\": { //hide when\n\t\t\t\"field\": \"distributionlist\",\n\t\t\t\"operator\": \"notempty\"\n\t\t}\n\t}\n},",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-text/edit-text.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditText",
    "title": "EditText",
    "name": "EditText",
    "version": "4.2.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "defaultValue": "text",
            "description": "<p>Type of input field</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditTextMulti",
    "title": "EditTextMulti",
    "name": "EditTextMulti",
    "version": "4.4.0",
    "group": "EditField",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enableTimestamp",
            "description": "<p>Show timestamp button. Defaul is false for items with labels and true for items without a label</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disabled",
            "defaultValue": "false",
            "description": "<p>If &quot;true&quot; value will be readonly and grey</p>"
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n\t\"component\": \"EditText\",\n\t\"inputs\": {\n\t\t\"fieldName\": \"fdcucontact\",\n\t\t\"label\": \"Contact Person\",\n\t\t\"fixedLabel\": false, //Label fixed at the start or floating above value\n\t\t\"enableTimestamp\": false, // Show timestamp button\n\t\t\"disabled\": true, //editable true/false\n\t\t\"required\": true, //client side validation if field is empty\n\t\t\"refreshOnChange\": true, //Enable document post to server on value change\n\t\t\"rendered\": { //hide when\n\t\t\t\"field\": \"distributionlist\",\n\t\t\t\"operator\": \"notempty\"\n\t\t}\n\t}\n},",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/edit-fields/edit-text-multi/edit-text-multi.component.ts",
    "groupTitle": "EditField"
  },
  {
    "type": "get",
    "url": "/EditTextMulti",
    "title": "EditTextMulti",
    "name": "EditTextMulti",
    "version": "4.2.0",
    "group": "EditField",
    "filename": "src/apidoc.ts",
    "groupTitle": "EditField",
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
            "type": "Number",
            "optional": false,
            "field": "fieldName",
            "description": "<p>Name of field to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>Use clientside validation if field is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refreshOnChange",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fixedLabel",
            "defaultValue": "true",
            "description": "<p>Show label fixed instead of floating</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/Archive",
    "title": "Archive",
    "name": "Archive",
    "group": "Field",
    "version": "5.0.2",
    "filename": "src/app/components/fields/archive/archive.component.ts",
    "groupTitle": "Field",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/Archive",
    "title": "Archive",
    "name": "Archive",
    "group": "Field",
    "version": "4.2.0",
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Conflict",
    "title": "Conflict",
    "name": "Conflict",
    "group": "Field",
    "version": "5.0.2",
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
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/conflict/conflict.ts",
    "groupTitle": "Field"
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/ConnectionList",
    "title": "ConnectionList",
    "name": "ConnectionList",
    "group": "Field",
    "version": "5.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pointer",
            "description": "<p>Fieldname of field with pointer</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/connection-list/connection-list.component.ts",
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
            "field": "pointer",
            "description": "<p>Fieldname of field with pointer</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Divider",
    "title": "Divider",
    "name": "Divider",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/divider/divider.component.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/DocumentList",
    "title": "DocumentList",
    "name": "DocumentList",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/document-list/document-list.component.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderAddress",
    "title": "HeaderAddress",
    "name": "HeaderAddress",
    "group": "Field",
    "version": "5.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Name of color</p>"
          },
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
            "field": "pretitle",
            "description": "<p>Fieldname of text above title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Fieldname of logo url or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salutation",
            "description": "<p>Fieldname of salutation</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "callFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for call button</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "mailFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for mail button</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "mapsFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for maps button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherEMail",
            "description": "<p>Name of column with EMail addresss from Communications field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherPhone",
            "description": "<p>Name of column with phone numbers from Communications field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callCreateAction",
            "description": "<p>Name of create action for call button, &quot;DISABLED&quot; if no create should be opened</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailCreateAction",
            "description": "<p>Name of create action for mail button</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "lines",
            "description": "<p>Array of fieldnames for additional lines in header</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/header-address/header-address.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderAddress",
    "title": "HeaderAddress",
    "name": "HeaderAddress",
    "group": "Field",
    "version": "4.5.1",
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
            "field": "pretitle",
            "description": "<p>Fieldname of text above title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Fieldname of logo url or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salutation",
            "description": "<p>Fieldname of salutation</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "callFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for call button</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "mailFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for mail button</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "mapsFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for maps button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherEMail",
            "description": "<p>Name of column with EMail addresss from Communications field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherPhone",
            "description": "<p>Name of column with phone numbers from Communications field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callCreateAction",
            "description": "<p>Name of create action for call button, &quot;DISABLED&quot; if no create should be opened</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailCreateAction",
            "description": "<p>Name of create action for mail button</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "lines",
            "description": "<p>Array of fieldnames for additional lines in header</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderAddress",
    "title": "HeaderAddress",
    "name": "HeaderAddress",
    "group": "Field",
    "version": "4.2.0",
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
            "field": "pretitle",
            "description": "<p>Fieldname of text above title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Fieldname of logo url or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salutation",
            "description": "<p>Fieldname of salutation</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "callFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for call button</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "mailFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for mail button</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "mapsFields",
            "description": "<p>List with objects: {label: string, fieldName: string} for maps button</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherEMail",
            "description": "<p>Name of column with EMail addresss from Communications field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherPhone",
            "description": "<p>Name of column with phone numbers from Communications field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callCreateAction",
            "description": "<p>Name of create action for call button, &quot;DISABLED&quot; if no create should be opened</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailCreateAction",
            "description": "<p>Name of create action for mail button</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
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
            "field": "pretitle",
            "description": "<p>Fieldname of text above title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Fieldname of logo url or parameter as fallback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salutation",
            "description": "<p>Fieldname of salutation</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderService",
    "title": "HeaderService",
    "name": "HeaderService",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "lines",
            "description": "<p>Array of fieldnames for additional lines in header</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
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
    "filename": "src/app/components/fields/header-service/header-service.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderService",
    "title": "HeaderService",
    "name": "HeaderService",
    "group": "Field",
    "version": "4.5.1",
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
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "lines",
            "description": "<p>Array of fieldnames for additional lines in header</p>"
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
    "filename": "src/apidoc.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderStandard",
    "title": "HeaderStandard",
    "name": "HeaderStandard",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "lines",
            "description": "<p>Array of fieldnames for additional lines in header</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/header-standard/header-standard.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/HeaderStandard",
    "title": "HeaderStandard",
    "name": "HeaderStandard",
    "group": "Field",
    "version": "4.5.1",
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
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "lines",
            "description": "<p>Array of fieldnames for additional lines in header</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledAddress",
    "title": "LabeledAddress",
    "name": "LabeledAddress",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/labeled-address/labeled-address.component.ts",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledCreate",
    "title": "LabeledCreate",
    "name": "LabeledCreate",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/labeled-create/labeled-create.component.ts",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledDate",
    "title": "LabeledDate",
    "name": "LabeledDate",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
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
    "filename": "src/app/components/fields/labeled-date/labeled-date.component.ts",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledLink",
    "title": "LabeledLink",
    "name": "LabeledLink",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/labeled-link/labeled-link.component.ts",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledMultiline",
    "title": "LabeledMultiline",
    "name": "LabeledMultiline",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/labeled-multiline/labeled-multivalue.component.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledText",
    "title": "LabeledText",
    "name": "LabeledText",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/labeled-text/labeled-text.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledText",
    "title": "LabeledText",
    "name": "LabeledText",
    "group": "Field",
    "version": "4.2.0",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "stackedLabel",
            "defaultValue": "false",
            "description": "<p>Change label style, moves label on top of value if true</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/LabeledTextarea",
    "title": "LabeledTextarea",
    "name": "LabeledTextarea",
    "group": "Field",
    "version": "5.0.2",
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
            "field": "value",
            "description": "<p>Fieldname of value</p>"
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
            "field": "attachmentValue",
            "description": "<p>Fieldname of attachment list</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/labeled-textarea/labeled-textarea.component.ts",
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
            "field": "value",
            "description": "<p>Fieldname of value</p>"
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
            "field": "attachmentValue",
            "description": "<p>Fieldname of attachment list</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Relations",
    "title": "Relations",
    "name": "Relations",
    "description": "<p>No parameters required. Works in all documents through giRelations properties</p>",
    "group": "Field",
    "version": "5.0.2",
    "filename": "src/app/components/fields/relations/relations.component.ts",
    "groupTitle": "Field",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/Relations",
    "title": "Relations",
    "name": "Relations",
    "description": "<p>No parameters required. Works in all documents through giRelations properties</p>",
    "group": "Field",
    "version": "3.0.0",
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/SocialMedia",
    "title": "SocialMedia",
    "name": "SocialMedia",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/social-media/social-media.component.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Status",
    "title": "Status",
    "name": "Status",
    "group": "Field",
    "version": "5.0.2",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/status/status.ts",
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Subform",
    "title": "Subform",
    "name": "Subform",
    "group": "Field",
    "version": "5.0.2",
    "description": "<p>Groups fields in subforms and creates expandable sections</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionLabel",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subStyleName",
            "description": "<p>Name of documentStyle for section</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "fieldDefinitions",
            "description": "<p>Array with fieldDefinitions. If used with stylename, fields will be appended to fields in styleName</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "expanded",
            "defaultValue": "false",
            "description": "<p>If true section will be expandend when document is opened</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "expandable",
            "defaultValue": "true",
            "description": "<p>If true section can be expandend</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Used for storing expand state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restoreExpandState",
            "defaultValue": "true",
            "description": "<p>Use stored expand state.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rendered",
            "description": "<p>&quot;Rendered&quot; object to hide field if conditions do not apply</p>"
          }
        ]
      }
    },
    "filename": "src/app/components/fields/subform/subform.component.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Subform",
    "title": "Subform",
    "name": "Subform",
    "group": "Field",
    "version": "4.2.0",
    "description": "<p>Groups fields in subforms and creates expandable sections</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionLabel",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subStyleName",
            "description": "<p>Name of documentStyle for section</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "fieldDefinitions",
            "description": "<p>Array with fieldDefinitions. If used with stylename, fields will be appended to fields in styleName</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "expanded",
            "defaultValue": "false",
            "description": "<p>If true section will be expandend when document is opened</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "expandable",
            "defaultValue": "true",
            "description": "<p>If true section can be expandend</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Used for storing expand state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restoreExpandState",
            "defaultValue": "true",
            "description": "<p>Use stored expand state.</p>"
          }
        ]
      }
    },
    "filename": "src/apidoc.ts",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/Icons",
    "title": "Icons",
    "name": "Icons",
    "group": "Icons",
    "version": "5.0.2",
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
            "field": "businesspeople.svg",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clipboard_check_edit.svg",
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
            "field": "contacts",
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
            "field": "document_empty.svg",
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
            "field": "folder_open.svg",
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
            "field": "handshake.svg",
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
            "field": "iraCEViewIconsExcel",
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
            "field": "iraCEViewIconWord",
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
            "field": "letters_gi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail_ba.svg",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail_bug.svg",
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
            "field": "mail_forward",
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
            "field": "mail_reply",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail-solid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "massemail_gi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "massletter_gi",
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
            "field": "office_building.svg",
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
            "field": "paperclip.svg",
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
            "field": "phonecall-solid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "piece.svg",
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
            "field": "postalAddress-solid",
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
            "field": "quickNote",
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
            "description": ""
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
            "field": "spreadsheed_sum.svg",
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
            "field": "telephone2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_headset.svg",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users3.svg",
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
            "field": "phonecall-solid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalAddress-solid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail-solid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quickNote",
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
    "filename": "src/apidoc.ts",
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
    "filename": "src/app/components/list/apidoc-list.ts",
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
    "filename": "src/app/components/list/apidoc-list.ts",
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
    "filename": "src/app/components/list/apidoc-list.ts",
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
    "filename": "src/app/components/list/apidoc-list.ts",
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
    "filename": "src/app/components/list/apidoc-list.ts",
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
            "type": "Object",
            "optional": false,
            "field": "sources",
            "description": "<p>Definition of views and or schedule documents</p>"
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
          "title": "sources:",
          "content": " {\n\t\t\t    \"_id\": \"calendarCard\",\n\t\t\t    \"_title\": CRMContext.getLC(\"LC00313\",\"Calendar\"),\n\t\t\t    \"_default\": true,\n\t\t      \"_multiple\": false,\n\t\t\t    \"CalendarWidget\": {\n\t\t\t        \"_id\": \"comp1\",\n\t\t\t        \"sources\": [\n           \t\t\t{\n           \t\t\t\t\"label\": \"Appointments\",\n           \t\t\t\t\"connection\": \"fdCon$Schedule\",\n           \t\t\t\t\"type\": \"schedule\"\n           \t\t\t},\n           \t\t\t{\n           \t\t\t\t\"label\": \"Tickets\",\n           \t\t\t\t\"connection\": \"fdCon$Service\",\n           \t\t\t\t\"type\": \"view\",\n           \t\t\t\t\"view\": \"vaJAPIResServiceDocumentList\"\n           \t\t\t}\n           \t\t]\n\t\t\t    }\n\t\t\t},",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/widgets/calendar-widget/calendar-widget.component.ts",
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
    "filename": "src/app/components/widgets/list-widget/list-widget.component.ts",
    "groupTitle": "Widget"
  },
  {
    "type": "get",
    "url": "/MyItemsWidget",
    "title": "MyItemsWidget",
    "name": "MyItemsWidget",
    "group": "Widget",
    "version": "3.0.0",
    "description": "<p>This widgets allows the user to show the count of selected lists with &quot;myentries&quot; enabled</p>",
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
    "filename": "src/app/components/widgets/myitems-widget/myitems-widget.component.ts",
    "groupTitle": "Widget"
  },
  {
    "type": "get",
    "url": "/MyListsWidget",
    "title": "MyListsWidget",
    "name": "MyListsWidget",
    "group": "Widget",
    "version": "4.5.0",
    "description": "<p>This widgets allows the user to show the count of selected saved lists</p>",
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
            "type": "Boolean",
            "optional": false,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Set to true to enable a button to copy this widgets definition to the clipboard. Usefull for creating custom widgets with lists selected in the app.</p>"
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
    "filename": "src/app/components/widgets/mylists-widget/mylists-widget.component.ts",
    "groupTitle": "Widget"
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
    "filename": "src/app/components/widgets/search-widget/search-widget.component.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  },
  {
    "type": "get",
    "url": "/TaskWidget",
    "title": "TaskWidget",
    "name": "TaskWidget",
    "group": "Widget",
    "version": "4.2.0",
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
            "type": "Object",
            "optional": false,
            "field": "configList",
            "description": "<p>Selected configurations, Can be customized by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "selectionValues",
            "description": "<p>Options for configuration</p>"
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
          "title": "selectionValues Default",
          "content": "//DueStates: 0 = overdue, 1 = in progress,2 = not started, 9= finished\n{ id: 0, label: \"INPROGRESS\", taskState: \"1\" },\n{ id: 1, label: \"NOTSTARTED\", taskState: \"2\" },\n{ id: 2, label: \"OVERDUE\", taskState: \"0\" },\n{ id: 3, label: \"CURRENT\", taskState: \"0,1\"},\n//category matches if task contains at least one of the categories seperated by comma, showAll shows all past tasks aswell\n{ id: 4, label: \"MOBILE\", taskState: \"0,1\", category: \"Unterwegs\", showAll: true},\n{ id: 99, label: \"DISABLED\", taskState: \"99\", disabled: true }",
          "type": "json"
        },
        {
          "title": "configList Default",
          "content": "{ id: 3, label: \"CURRENT\", taskState: \"0,1\"},\n{ id: 1, label: \"NOTSTARTED\", taskState: \"2\" },\n{ id: 2, label: \"OVERDUE\", taskState: \"0\" },",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/widgets/task-widget/task-widget.component.ts",
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
            "type": "Object",
            "optional": false,
            "field": "configList",
            "description": "<p>Selected configurations, Can be customized by the user</p>"
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
    "filename": "src/apidoc.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  },
  {
    "type": "get",
    "url": "/WebWidget",
    "title": "WebWidget",
    "name": "WebWidget",
    "group": "Widget",
    "version": "5.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inputURL",
            "description": "<p>Contains the url manually entered by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "urlInputAllowed",
            "description": "<p>Determines if the option to manually enter urls is allowed to be turned on. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "urlInputEnabled",
            "description": "<p>Determines if the manual input of urls for the user is enabled and should be used or not. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "any[]",
            "optional": false,
            "field": "urlList",
            "description": "<p>Contains a list of url objects. If an empty list or no list is provided urlInput is enabled by default.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "height",
            "description": "<p>Sets the height of the iframe. Default is 200.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "resizable",
            "description": "<p>Determines if the iframe should be resizable. Default is true.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "minHeight",
            "description": "<p>Is the minimum height of the iframe if resizable. Default is 100.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "maxHeight",
            "description": "<p>Is the maximum height of the iframe if resizable. Default is 500.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "allowScripts",
            "description": "<p>If it is provided this value is used for enableScripts and the user can't change it</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "enableScripts",
            "description": "<p>Determines, if scripts are allowed or not. If allowScripts is not provided the user can change this value with a toggle in the configuration. Default is false.</p>"
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
          "title": "Recently used iframe example:",
          "content": "{\n     \"_id\": \"webCard\",\n     \"_title\": CRMContext.getLC(\"LC00000\",\"Webcard\"),\n     \"_default\": true,\n     \"_multiple\": true,\n     \"IframeWidget\": {\n          \"_id\": \"comp1\",\n          \"urlList\": [\n\t                      {\"label\": \"Gedys\",\n\t                    \t \"url\": \"https://www.gedys-intraware.de/\"\n\t                      },\n\t                    \t{\"label\": \"Google\",\n\t                    \t \"url\": \"https://www.google.de/\"\n\t                    \t}\n                     ],\n           \"height\": 200,\n           \"resizable\": true,\n           \"minHeight\": 100,\n           \"maxHeight\": 500,\n           \"urlInputAllowed\": true\n           \"allowScripts\": true, \n           \"enableScripts\": true\n      }\n},",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/components/widgets/iframe-widget/iframe-widget.component.ts",
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
    "filename": "src/app/components/widgets/welcome-widget/welcome-widget.component.ts",
    "groupTitle": "Widget",
    "description": "<p>A wiget is part of a widget card. Some params can be changed by the user through the card configuration.</p>"
  }
] });
