# star-wars-api
Star Wars API




### Azure CLI

[Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

Login
```
as login
```

Create a place to logicalluy store everything (resource group)
```
az group create -n PapaStarWarsApiGroup -l eastus
```

Create the storage resource for the Function App
```
az storage account create -n papastarwarsapistorage -g PapaStarWarsApiGroup --sku Standard_LRS -l eastus
```

Create the Function App
```
az functionapp create -n -g PapaStarWarsApiGroup -s papastarwarsapistorage -c eastus
```
