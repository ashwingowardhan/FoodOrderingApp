# Description of project

 This food ordering application can be used in small restaurants by customers to order food
 
 The application has Three main modules
   1. appetizers
   2. entrees
   3. desserts

All the LWC(Lightning Web Components) modules are in ```force-app/main/default/lwc``` folder and the above three components(modules) contain particular food items and their brief information
These three modules are child components of ```menu``` component and menu component is child component of ```itemSelector``` component.
So all the components(modules) loading in ```itemSelector``` parent component.
When the user clicks on a particular food item it loads in ```itemDetails``` component. This component shows detail information of selected item i.e. id, photo, name, price


##### Programming Languages used
  - Javascript
  - Salesforce Apex
  - SOQL (Salesforce Structured Query Language)
  - css
  - HTML and lightning web components

##### Tools And Technologies used
 - VS code editor
 - Salesforce CRM


# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
