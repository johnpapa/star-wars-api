# star-wars-api

Star Wars API




## Azure CLI

[Install the Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=starwarsapi-github-jopapa)

Login

```bash
az login
```

Create a place to logicalluy store everything (resource group)

```bash
az group create -n PapaStarWarsApiGroup -l eastus
```

Create the storage resource for the Function App

```bash
az storage account create -n papastarwarsapistorage -g PapaStarWarsApiGroup --sku Standard_LRS -l eastus
```

Create the Function App

```bash
az functionapp create -n -g PapaStarWarsApiGroup -s papastarwarsapistorage -c eastus
```
