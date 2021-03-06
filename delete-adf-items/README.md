# Azure Data Factory Delete Items **PREVIEW**

This release task can be added to a release pipeline to delete Azure Data Factory V2 items, like Datasets, Pipelines, Linked Services or Triggers.
![](../images/screenshot-5.png)

## Parameters

Generic:

- **Display name** - Description name of the task
- **Azure Subscription** - Which Azure Subscription (Service Endpoint) should be used to connect to the datafactory

Azure Details:
- **Resource Group** - To which Resource Group is the Azure Data Factory deployed
- **Azure Data Factory** - The name of the Azure Data Factory.

Data Factory Details:
- **Linked Service Filter** - Filter to determine which linked service to delete.
- **Pipeline Filter** - Filter to determine which pipeline to delete.
- **Dataset Filter** - Filter to determine which datasets to delete.
- **Trigger Filter** - Filter to determine which triggers to delete.

For all filters:

- Empty string: *none* items will be deleted.
- `*`: *all* found items will be deleted.

Advanced:
- **Continue on Error** - When turned on continue after an error occurs and finish the task with the status 'Partially succeeded'
- **Number of parallel actions** - Maximum amount of parallel tasks are initiated.

## Release notes

**2.0** **PREVIEW**

- Rewrite to platform independent version by using NodeJS and REST APIs
- This version only support Azure Data Factory v2
- Initial public release
